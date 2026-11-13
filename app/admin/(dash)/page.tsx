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
  const checklist = [!settings.phone ? "Add a public phone number" : null].filter(Boolean);

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-[#a8862f] uppercase">
            {new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric", timeZone: "America/New_York" }).format(now)}
          </p>
          <h1 className="mt-1 font-serif text-3xl tracking-tight md:text-4xl">Season desk</h1>
          <p className="mt-2 max-w-2xl text-mist">New requests, open quotes, and the next three weeks of installs and takedowns.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href="/admin/quotes/new" className="rounded-full bg-black px-4 py-2.5 text-sm font-semibold text-white">
            New quote
          </Link>
          <Link href="/admin/jobs/new" className="rounded-full border border-black/15 bg-white px-4 py-2.5 text-sm font-semibold">
            New job
          </Link>
        </div>
      </div>
      {checklist.length ? (
        <ul className="mt-4 grid gap-2 text-sm">
          {checklist.map((item) => (
            <li key={item}>
              <Link href="/admin/settings" className="font-medium text-[#a8862f] underline underline-offset-4">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
      <div className="mt-8 grid grid-cols-2 gap-3 md:gap-4 xl:grid-cols-4">
        {[
          ["New leads", String(newLeads), "/admin/leads?status=new"],
          ["Open quotes", String(openQuotes), "/admin/quotes"],
          ["Booked", money(revenue._sum.price ?? 0), "/admin/jobs"],
          ["Deposits", money(revenue._sum.deposit ?? 0), "/admin/jobs"],
        ].map(([label, value, href]) => (
          <Link key={label} href={href} className="admin-card relative overflow-hidden p-4 md:p-5">
            <span className="absolute inset-x-0 top-0 h-1 bg-[#e4c36a]" aria-hidden="true" />
            <p className="text-xs font-semibold tracking-[0.14em] text-mist uppercase">{label}</p>
            <p className="mt-3 font-serif text-2xl md:text-4xl">{value}</p>
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
