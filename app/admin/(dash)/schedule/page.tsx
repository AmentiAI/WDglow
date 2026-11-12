import Link from "next/link";
import { AdminHeader, Badge } from "@/components/admin/Shell";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";

export default async function SchedulePage() {
  const jobs = await prisma.job.findMany({
    where: { status: { not: "cancelled" } },
    orderBy: { installDate: "asc" },
  });
  const installs = [...jobs].sort((a, b) => (a.installDate?.getTime() ?? Infinity) - (b.installDate?.getTime() ?? Infinity));
  const takedowns = [...jobs].sort((a, b) => (a.takedownDate?.getTime() ?? Infinity) - (b.takedownDate?.getTime() ?? Infinity));

  return (
    <div>
      <AdminHeader title="Schedule" />
      <div className="grid gap-6 lg:grid-cols-2">
        <section className="admin-card p-5">
          <h2 className="font-serif text-2xl">Installs</h2>
          <ul className="mt-4 divide-y divide-line">
            {installs.map((job) => (
              <li key={job.id} className="flex items-center justify-between gap-3 py-3 text-sm">
                <Link href={`/admin/jobs/${job.id}`}>
                  <span className="font-medium">{formatDate(job.installDate)}</span>
                  <span className="block text-mist">
                    {job.title} · {job.city}
                  </span>
                </Link>
                <Badge status={job.status} />
              </li>
            ))}
            {!installs.length ? <li className="py-3 text-sm text-mist">Nothing scheduled.</li> : null}
          </ul>
        </section>
        <section className="admin-card p-5">
          <h2 className="font-serif text-2xl">Takedowns</h2>
          <ul className="mt-4 divide-y divide-line">
            {takedowns.map((job) => (
              <li key={job.id} className="py-3 text-sm">
                <Link href={`/admin/jobs/${job.id}`}>
                  <span className="font-medium">{formatDate(job.takedownDate)}</span>
                  <span className="block text-mist">
                    {job.title} · {job.city}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
