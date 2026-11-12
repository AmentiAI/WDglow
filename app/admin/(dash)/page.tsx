import Link from "next/link";
import { Badge } from "@/components/admin/Shell";
import { prisma } from "@/lib/prisma";
import { getSettings } from "@/lib/site";
import { formatDate, money } from "@/lib/utils";

export default async function DashboardPage() {
  const now = new Date();
  const in21 = new Date(now.getTime() + 21 * 24 * 60 * 60 * 1000);
  const [settings, newLeads, openQuotes, upcomingInstalls, upcomingTakedowns, recentLeads, revenue] = await Promise.all([
    getSettings(),
    prisma.lead.count({ where: { status: "new" } }),
    prisma.quote.count({ where: { status: { in: ["draft", "sent"] } } }),
    prisma.job.findMany({
      where: { status: { notIn: ["cancelled", "complete"] }, installDate: { gte: now, lte: in21 } },
      orderBy: { installDate: "asc" },
      take: 8,
    }),
    prisma.job.findMany({
      where: { status: { not: "cancelled" }, takedownDate: { gte: now, lte: in21 } },
      orderBy: { takedownDate: "asc" },
      take: 8,
    }),
    prisma.lead.findMany({ orderBy: { createdAt: "desc" }, take: 6 }),
    prisma.job.aggregate({ where: { status: { not: "cancelled" } }, _sum: { price: true, deposit: true } }),
  ]);
  const checklist = [
    !settings.phone ? "Add a public phone number" : null,
    !settings.street ? "Add the street address for the footer and local listing" : null,
  ].filter(Boolean);

  return (
    <div>
      <h1 className="font-serif text-4xl">Season desk</h1>
      <p className="mt-2 max-w-2xl text-mist">New requests, open quotes, and the next three weeks of installs and takedowns.</p>
      {checklist.length ? (
        <ul className="mt-4 grid gap-2 text-sm">
          {checklist.map((item) => (
            <li key={item}>
              <Link href="/admin/settings" className="text-pine">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          ["New leads", String(newLeads), "/admin/leads?status=new"],
          ["Open quotes", String(openQuotes), "/admin/quotes"],
          ["Booked", money(revenue._sum.price ?? 0), "/admin/jobs"],
          ["Deposits", money(revenue._sum.deposit ?? 0), "/admin/jobs"],
        ].map(([label, value, href]) => (
          <Link key={label} href={href} className="admin-card p-5">
            <p className="text-sm text-mist">{label}</p>
            <p className="mt-2 font-serif text-3xl">{value}</p>
          </Link>
        ))}
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <section className="admin-card p-5">
          <h2 className="font-serif text-2xl">Installs, next 21 days</h2>
          <ul className="mt-4 divide-y divide-line">
            {upcomingInstalls.length ? (
              upcomingInstalls.map((job) => (
                <li key={job.id} className="flex items-center justify-between gap-3 py-3">
                  <Link href={`/admin/jobs/${job.id}`}>
                    <span className="font-medium">{job.title}</span>
                    <span className="block text-sm text-mist">
                      {job.city}, {job.state} · {formatDate(job.installDate)}
                    </span>
                  </Link>
                  <Badge status={job.status} />
                </li>
              ))
            ) : (
              <li className="py-3 text-sm text-mist">No installs on the calendar yet.</li>
            )}
          </ul>
        </section>
        <section className="admin-card p-5">
          <h2 className="font-serif text-2xl">Takedowns, next 21 days</h2>
          <ul className="mt-4 divide-y divide-line">
            {upcomingTakedowns.length ? (
              upcomingTakedowns.map((job) => (
                <li key={job.id} className="py-3">
                  <Link href={`/admin/jobs/${job.id}`}>
                    <span className="font-medium">{job.title}</span>
                    <span className="block text-sm text-mist">
                      {job.city} · {formatDate(job.takedownDate)}
                    </span>
                  </Link>
                </li>
              ))
            ) : (
              <li className="py-3 text-sm text-mist">No takedowns dated in this window.</li>
            )}
          </ul>
        </section>
      </div>
      <section className="admin-card mt-6 p-5">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-2xl">Latest leads</h2>
          <Link href="/admin/leads" className="text-sm font-semibold text-pine">
            All leads
          </Link>
        </div>
        <ul className="mt-4 divide-y divide-line">
          {recentLeads.length ? (
            recentLeads.map((lead) => (
              <li key={lead.id} className="flex flex-wrap items-center justify-between gap-3 py-3">
                <Link href={`/admin/leads/${lead.id}`}>
                  <span className="font-medium">{lead.name}</span>
                  <span className="block text-sm text-mist">
                    {lead.city}, {lead.state} · {formatDate(lead.createdAt)}
                  </span>
                </Link>
                <Badge status={lead.status} />
              </li>
            ))
          ) : (
            <li className="py-3 text-sm text-mist">No website requests yet.</li>
          )}
        </ul>
      </section>
    </div>
  );
}
