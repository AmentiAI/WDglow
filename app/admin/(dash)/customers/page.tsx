import Link from "next/link";
import { AdminHeader } from "@/components/admin/Shell";
import { prisma } from "@/lib/prisma";

export default async function CustomersPage() {
  const customers = await prisma.customer.findMany({
    orderBy: { createdAt: "desc" },
    include: { _count: { select: { jobs: true } } },
  });
  return (
    <div>
      <AdminHeader
        title="Customers"
        action={
          <Link href="/admin/customers/new" className="rounded-full bg-ink px-4 py-2 text-sm text-cream">
            New customer
          </Link>
        }
      />
      <div className="admin-card overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="text-mist">
            <tr>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Town</th>
              <th className="px-4 py-3 font-medium">Phone</th>
              <th className="px-4 py-3 font-medium">Jobs</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-t border-line">
                <td className="px-4 py-3">
                  <Link className="font-medium" href={`/admin/customers/${customer.id}`}>
                    {customer.name}
                  </Link>
                </td>
                <td className="px-4 py-3">
                  {customer.city}, {customer.state}
                </td>
                <td className="px-4 py-3">{customer.phone}</td>
                <td className="px-4 py-3">{customer._count.jobs}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {!customers.length ? <p className="px-4 py-6 text-sm text-mist">No customers yet. Convert a lead when a job is real.</p> : null}
      </div>
    </div>
  );
}
