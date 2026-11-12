"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Prisma } from "@prisma/client";
import { parseLineItems, type LineItem } from "@/lib/constants";
import { field } from "@/lib/form";
import { prisma } from "@/lib/prisma";
import { requireSession } from "@/lib/session";
import { dollarsToCents, parseDateInput } from "@/lib/utils";

function touch() {
  revalidatePath("/admin");
  revalidatePath("/admin/leads");
  revalidatePath("/admin/customers");
  revalidatePath("/admin/jobs");
  revalidatePath("/admin/quotes");
  revalidatePath("/admin/schedule");
}

export async function updateLead(formData: FormData) {
  const session = await requireSession();
  const id = field(formData, "id");
  await prisma.lead.update({
    where: { id },
    data: {
      name: field(formData, "name"),
      email: field(formData, "email").toLowerCase(),
      phone: field(formData, "phone"),
      street: field(formData, "street"),
      city: field(formData, "city"),
      state: field(formData, "state"),
      zip: field(formData, "zip"),
      propertyType: field(formData, "propertyType"),
      services: field(formData, "services"),
      timeline: field(formData, "timeline"),
      status: field(formData, "status") || "new",
      message: field(formData, "message"),
    },
  });
  const note = field(formData, "note");
  if (note) {
    await prisma.note.create({ data: { body: note, author: session.name, leadId: id } });
  }
  touch();
  redirect(`/admin/leads/${id}?saved=1`);
}

export async function deleteLead(formData: FormData) {
  await requireSession();
  const id = field(formData, "id");
  if (id) await prisma.lead.delete({ where: { id } });
  touch();
  redirect("/admin/leads?saved=1");
}

export async function addNote(formData: FormData) {
  const session = await requireSession();
  const body = field(formData, "body");
  const leadId = field(formData, "leadId") || null;
  const customerId = field(formData, "customerId") || null;
  const jobId = field(formData, "jobId") || null;
  if (!body) redirect(field(formData, "returnTo") || "/admin");
  await prisma.note.create({
    data: { body, author: session.name, leadId, customerId, jobId },
  });
  touch();
  redirect(field(formData, "returnTo") || "/admin");
}

export async function convertLead(formData: FormData) {
  await requireSession();
  const id = field(formData, "id");
  const lead = await prisma.lead.findUnique({ where: { id } });
  if (!lead) redirect("/admin/leads");
  const customer = await prisma.customer.upsert({
    where: { leadId: lead.id },
    update: {
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      street: lead.street,
      city: lead.city,
      state: lead.state,
      zip: lead.zip,
    },
    create: {
      leadId: lead.id,
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      street: lead.street,
      city: lead.city,
      state: lead.state,
      zip: lead.zip,
    },
  });
  if (lead.status !== "lost") {
    await prisma.lead.update({ where: { id }, data: { status: "won" } });
  }
  touch();
  redirect(`/admin/customers/${customer.id}?saved=1`);
}

export async function saveCustomer(formData: FormData) {
  await requireSession();
  const id = field(formData, "id");
  const data = {
    name: field(formData, "name"),
    email: field(formData, "email").toLowerCase(),
    phone: field(formData, "phone"),
    street: field(formData, "street"),
    city: field(formData, "city"),
    state: field(formData, "state") || "RI",
    zip: field(formData, "zip"),
  };
  if (!data.name || !data.email) redirect(id ? `/admin/customers/${id}?error=1` : "/admin/customers/new?error=1");
  const customer = id
    ? await prisma.customer.update({ where: { id }, data })
    : await prisma.customer.create({ data });
  touch();
  redirect(`/admin/customers/${customer.id}?saved=1`);
}

function jobData(formData: FormData) {
  return {
    title: field(formData, "title") || "Holiday lighting",
    service: field(formData, "service") || "Residential installation",
    status: field(formData, "status") || "scheduled",
    paymentStatus: field(formData, "paymentStatus") || "unpaid",
    street: field(formData, "street"),
    city: field(formData, "city"),
    state: field(formData, "state") || "RI",
    zip: field(formData, "zip"),
    installDate: parseDateInput(field(formData, "installDate")),
    takedownDate: parseDateInput(field(formData, "takedownDate")),
    price: dollarsToCents(formData.get("price")),
    deposit: dollarsToCents(formData.get("deposit")),
    notes: field(formData, "notes"),
    customerId: field(formData, "customerId") || null,
    leadId: field(formData, "leadId") || null,
    quoteId: field(formData, "quoteId") || null,
  };
}

export async function saveJob(formData: FormData) {
  await requireSession();
  const id = field(formData, "id");
  const data = jobData(formData);
  if (!data.city) redirect(id ? `/admin/jobs/${id}?error=1` : "/admin/jobs/new?error=1");
  const job = id
    ? await prisma.job.update({ where: { id }, data })
    : await prisma.job.create({ data });
  touch();
  redirect(`/admin/jobs/${job.id}?saved=1`);
}

export async function deleteJob(formData: FormData) {
  await requireSession();
  const id = field(formData, "id");
  if (id) await prisma.job.delete({ where: { id } });
  touch();
  redirect("/admin/jobs?saved=1");
}

async function nextQuoteNumber() {
  const year = new Date().getFullYear();
  const prefix = `WD-${year}-`;
  const latest = await prisma.quote.findFirst({
    where: { number: { startsWith: prefix } },
    orderBy: { number: "desc" },
  });
  const current = latest ? Number(latest.number.slice(prefix.length)) : 0;
  return `${prefix}${String((Number.isFinite(current) ? current : 0) + 1).padStart(4, "0")}`;
}

function quoteTotals(items: LineItem[], tax: number) {
  const subtotal = items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  return { subtotal, tax, total: subtotal + tax };
}

export async function saveQuote(formData: FormData) {
  await requireSession();
  const id = field(formData, "id");
  let items: LineItem[] = [];
  try {
    items = parseLineItems(JSON.parse(field(formData, "lineItems") || "[]"));
  } catch {
    items = [];
  }
  if (!items.length) items = [{ description: "Holiday lighting", quantity: 1, unitPrice: 0 }];
  const tax = dollarsToCents(formData.get("tax"));
  const totals = quoteTotals(items, tax);
  const validRaw = field(formData, "validUntil");
  const data = {
    title: field(formData, "title") || "Holiday lighting",
    lineItems: items as unknown as Prisma.InputJsonValue,
    ...totals,
    status: field(formData, "status") || "draft",
    validUntil: parseDateInput(validRaw),
    notes: field(formData, "notes"),
    customerId: field(formData, "customerId") || null,
    leadId: field(formData, "leadId") || null,
  };

  if (id) {
    await prisma.quote.update({ where: { id }, data });
    touch();
    redirect(`/admin/quotes/${id}?saved=1`);
  }

  for (let attempt = 0; attempt < 4; attempt += 1) {
    try {
      const quote = await prisma.quote.create({ data: { ...data, number: await nextQuoteNumber() } });
      touch();
      redirect(`/admin/quotes/${quote.id}?saved=1`);
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") continue;
      throw error;
    }
  }
  redirect("/admin/quotes/new?error=1");
}

export async function deleteQuote(formData: FormData) {
  await requireSession();
  const id = field(formData, "id");
  if (id) await prisma.quote.delete({ where: { id } });
  touch();
  redirect("/admin/quotes?saved=1");
}
