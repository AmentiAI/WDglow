import { QuoteEditor } from "@/components/admin/QuoteEditor";
import { AdminHeader } from "@/components/admin/Shell";
import { parseLineItems } from "@/lib/constants";
import { prisma } from "@/lib/prisma";

export default async function NewQuotePage({
  searchParams,
}: {
  searchParams: Promise<{ leadId?: string; customerId?: string; error?: string }>;
}) {
  const params = await searchParams;
  const [customers, leads, lead] = await Promise.all([
    prisma.customer.findMany({ orderBy: { name: "asc" }, select: { id: true, name: true, city: true } }),
    prisma.lead.findMany({ orderBy: { createdAt: "desc" }, take: 100, select: { id: true, name: true, city: true } }),
    params.leadId ? prisma.lead.findUnique({ where: { id: params.leadId } }) : Promise.resolve(null),
  ]);
  const linked = lead ? await prisma.customer.findUnique({ where: { leadId: lead.id } }) : null;
  return (
    <div className="max-w-4xl">
      <AdminHeader title="New quote" />
      {params.error ? <p className="mb-4 text-sm text-red-800">The quote number collided. Try again.</p> : null}
      <div className="admin-card p-5">
        <QuoteEditor
          customers={customers}
          leads={leads}
          quote={{
            id: "",
            number: "",
            title: lead ? `Holiday lighting — ${lead.city}` : "Holiday lighting",
            status: "draft",
            notes: "",
            tax: 0,
            validUntil: null,
            customerId: params.customerId || linked?.id || null,
            leadId: lead?.id || null,
            lineItems: parseLineItems([{ description: "Roofline lighting", quantity: 1, unitPrice: 0 }]),
          }}
        />
      </div>
    </div>
  );
}
