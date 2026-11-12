import Link from "next/link";
import { AdminHeader, Badge } from "@/components/admin/Shell";
import { prisma } from "@/lib/prisma";
import { formatDate, money } from "@/lib/utils";

export default async function JobsPage() {
  const jobs = await prisma.job.findMany({ orderBy: [{ installDate: "asc" }, { createdAt: "desc" }], take: 200 });
  return (
    <div>
      <AdminHeader
        title="Jobs"
        action={
          <Link href="/admin/jobs/new" className="rounded-full bg-ink px-4 py-2 text-sm text-cream">
            New job
          </Link>
        }
      />
      <div className="admin-card overflow-x-auto">
        <table className="w-full min-w-[820px] text-left text-sm">
          <thead className="text-mist">
            <tr>
              <th className="px-4 py-3 font-medium">Job</th>
              <th className="px-4 py-3 font-medium">Town</th>
              <th className="px-4 py-3 font-medium">Install</th>
              <th className="px-4 py-3 font-medium">Takedown</th>
              <th className="px-4 py-3 font-medium">Price</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Payment</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id} className="border-t border-line">
                <td className="px-4 py-3">
                  <Link className="font-medium" href={`/admin/jobs/${job.id}`}>
                    {job.title}
                  </Link>
                </td>
                <td className="px-4 py-3">
                  {job.city}, {job.state}
                </td>
                <td className="px-4 py-3">{formatDate(job.installDate)}</td>
                <td className="px-4 py-3">{formatDate(job.takedownDate)}</td>
                <td className="px-4 py-3">{money(job.price)}</td>
                <td className="px-4 py-3">
                  <Badge status={job.status} />
                </td>
                <td className="px-4 py-3">
                  <Badge status={job.paymentStatus} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!jobs.length ? <p className="px-4 py-6 text-sm text-mist">No jobs yet.</p> : null}
      </div>
    </div>
  );
}
