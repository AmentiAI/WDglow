import { JobFields } from "@/components/admin/Records";
import { AdminHeader } from "@/components/admin/Shell";
import { SubmitButton } from "@/components/site/SubmitButton";
import { saveJob } from "@/lib/actions/crm";
import { prisma } from "@/lib/prisma";

export default async function NewJobPage({
  searchParams,
}: {
  searchParams: Promise<{ leadId?: string; customerId?: string; error?: string }>;
}) {
  const params = await searchParams;
  const [customers, lead, customer] = await Promise.all([
    prisma.customer.findMany({ orderBy: { name: "asc" }, select: { id: true, name: true, city: true } }),
    params.leadId ? prisma.lead.findUnique({ where: { id: params.leadId } }) : Promise.resolve(null),
    params.customerId ? prisma.customer.findUnique({ where: { id: params.customerId } }) : Promise.resolve(null),
  ]);
  const preset = {
    leadId: lead?.id ?? "",
    customerId: customer?.id ?? "",
    city: customer?.city ?? lead?.city ?? "",
    state: customer?.state ?? lead?.state ?? "RI",
    street: customer?.street ?? lead?.street ?? "",
    title: lead ? `Holiday lighting — ${lead.city}` : customer ? `Holiday lighting — ${customer.city}` : "Holiday lighting",
  };
  if (lead) {
    const linked = await prisma.customer.findUnique({ where: { leadId: lead.id } });
    if (linked) preset.customerId = linked.id;
  }
  if (customer) preset.customerId = customer.id;

  return (
    <div className="max-w-3xl">
      <AdminHeader title="New job" />
      {params.error ? <p className="mb-4 text-sm text-red-800">A city is required.</p> : null}
      <form action={saveJob} className="admin-card grid gap-4 p-5">
        <JobFields customers={customers} preset={preset} />
        <SubmitButton>Create job</SubmitButton>
      </form>
    </div>
  );
}
