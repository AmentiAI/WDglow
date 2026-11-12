"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { field, isEmail } from "@/lib/form";
import { safeInternalPath } from "@/lib/utils";

export async function createLead(formData: FormData) {
  const redirectTo = safeInternalPath(field(formData, "redirectTo"), "/contact");
  if (field(formData, "companyWebsite")) redirect("/thank-you");

  const name = field(formData, "name");
  const email = field(formData, "email").toLowerCase();
  const phone = field(formData, "phone");
  const cityOther = field(formData, "cityOther");
  let city = field(formData, "city");
  let state = field(formData, "state");

  if (city.includes("|")) {
    const [cityName, stateCode] = city.split("|");
    city = cityName;
    state = stateCode || state;
  }
  if (city.startsWith("Other")) city = cityOther;

  const fail = (code: string) => redirect(`${redirectTo}?error=${code}#quote`);

  if (name.length < 2 || !isEmail(email) || phone.replace(/\D/g, "").length < 7 || city.length < 2 || !state) {
    fail("missing");
  }

  const services = formData.getAll("services").map(String).filter(Boolean);
  try {
    const recent = await prisma.lead.count({
      where: { email, createdAt: { gte: new Date(Date.now() - 60 * 60 * 1000) } },
    });
    if (recent >= 3) fail("limit");

    await prisma.lead.create({
      data: {
        name,
        email,
        phone,
        street: field(formData, "street"),
        city,
        state,
        zip: field(formData, "zip"),
        propertyType: field(formData, "propertyType") || "Home",
        services: services.join(", ") || "Not specified",
        timeline: field(formData, "timeline"),
        message: field(formData, "message").slice(0, 4000),
        source: `website:${redirectTo}`.slice(0, 160),
      },
    });
  } catch {
    fail("save");
  }

  redirect(`/thank-you?area=${encodeURIComponent(city)}`);
}
