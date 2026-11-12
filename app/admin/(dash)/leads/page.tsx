import Link from "next/link";
import { AdminHeader, Badge, Saved } from "@/components/admin/Shell";
import { LEAD_STATUSES } from "@/lib/constants";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";

export default async function LeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; q?: string; saved?: string }>;
}) {
  const params = await searchParams;
  const q = params.q?.trim();
  const leads = await prisma.lead.findMany({
    where: {
      ...(params.status ? { status: params.status } : {}),
      ...(q
        ? {
            OR: [
              { name: { contains: q, mode: "insensitive" } },
              { email: { contains: q, mode: "insensitive" } },
              { city: { contains: q, mode: "insensitive" } },
              { phone: { contains: q } },
            ],
          }
        : {}),
    },
    orderBy: { createdAt: "desc" },
    take: 200,
  });

  return (
    <div>
      <AdminHeader
        title="Leads"
        action={
          <a href="/admin/leads/export" className="rounded-full border border-ink/15 px-4 py-2 text-sm">
            Export CSV
          </a>
        }
      />
      <Saved show={params.saved === "1"} />
      <form className="mb-4 flex flex-wrap gap-2" action="/admin/leads">
        <input className="field max-w-xs" name="q" defaultValue={q} placeholder="Search name, email, town" />
        <select className="field max-w-[180px]" name="status" defaultValue={params.status || ""}>
          <option value="">All statuses</option>
          {LEAD_STATUSES.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
        <button className="rounded-full bg-ink px-4 py-2 text-sm text-cream">Filter</button>
      </form>
      <div className="admin-card overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="text-mist">
            <tr>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Town</th>
              <th className="px-4 py-3 font-medium">Interest</th>
              <th className="px-4 py-3 font-medium">Source</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Received</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-t border-line">
                <td className="px-4 py-3">
                  <Link href={`/admin/leads/${lead.id}`} className="font-medium">
                    {lead.name}
                  </Link>
                  <span className="block text-mist">{lead.phone}</span>
                </td>
                <td className="px-4 py-3">
                  {lead.city}, {lead.state}
                </td>
                <td className="px-4 py-3">{lead.services}</td>
                <td className="px-4 py-3">{lead.source}</td>
                <td className="px-4 py-3">
                  <Badge status={lead.status} />
                </td>
                <td className="px-4 py-3">{formatDate(lead.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {!leads.length ? <p className="px-4 py-6 text-sm text-mist">No leads match.</p> : null}
      </div>
    </div>
  );
}
