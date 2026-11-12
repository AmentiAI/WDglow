import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge, Saved } from "@/components/admin/Shell";
import { SubmitButton } from "@/components/site/SubmitButton";
import { convertLead, deleteLead, updateLead } from "@/lib/actions/crm";
import { LEAD_STATUSES, PROPERTY_TYPES } from "@/lib/constants";
import { prisma } from "@/lib/prisma";
import { formatDate, money } from "@/lib/utils";

export default async function LeadDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ saved?: string }>;
}) {
  const { id } = await params;
  const query = await searchParams;
  const lead = await prisma.lead.findUnique({
    where: { id },
    include: {
      notes: { orderBy: { createdAt: "desc" } },
      quotes: { orderBy: { createdAt: "desc" } },
      jobs: { orderBy: { createdAt: "desc" } },
      customer: true,
    },
  });
  if (!lead) notFound();

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div>
        <Saved show={query.saved === "1"} />
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <h1 className="font-serif text-4xl">{lead.name}</h1>
          <Badge status={lead.status} />
        </div>
        <p className="text-sm text-mist">
          {lead.source} · {formatDate(lead.createdAt)}
        </p>
        <form action={updateLead} className="admin-card mt-6 grid gap-4 p-5">
          <input type="hidden" name="id" value={lead.id} />
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-1 text-sm">
              Name
              <input className="field" name="name" defaultValue={lead.name} required />
            </label>
            <label className="grid gap-1 text-sm">
              Status
              <select className="field" name="status" defaultValue={lead.status}>
                {LEAD_STATUSES.map((status) => (
                  <option key={status}>{status}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-1 text-sm">
              Email
              <input className="field" name="email" defaultValue={lead.email} />
            </label>
            <label className="grid gap-1 text-sm">
              Phone
              <input className="field" name="phone" defaultValue={lead.phone} />
            </label>
            <label className="grid gap-1 text-sm md:col-span-2">
              Street
              <input className="field" name="street" defaultValue={lead.street} />
            </label>
            <label className="grid gap-1 text-sm">
              City
              <input className="field" name="city" defaultValue={lead.city} />
            </label>
            <label className="grid gap-1 text-sm">
              State
              <input className="field" name="state" defaultValue={lead.state} />
            </label>
            <label className="grid gap-1 text-sm">
              ZIP
              <input className="field" name="zip" defaultValue={lead.zip} />
            </label>
            <label className="grid gap-1 text-sm">
              Property
              <select className="field" name="propertyType" defaultValue={lead.propertyType}>
                {PROPERTY_TYPES.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-1 text-sm md:col-span-2">
              Services
              <input className="field" name="services" defaultValue={lead.services} />
            </label>
            <label className="grid gap-1 text-sm md:col-span-2">
              Timing
              <input className="field" name="timeline" defaultValue={lead.timeline} />
            </label>
            <label className="grid gap-1 text-sm md:col-span-2">
              Request
              <textarea className="field min-h-28" name="message" defaultValue={lead.message} />
            </label>
            <label className="grid gap-1 text-sm md:col-span-2">
              Add an internal note
              <textarea className="field min-h-20" name="note" placeholder="Called, left voicemail, needs a site visit..." />
            </label>
          </div>
          <SubmitButton>Save lead</SubmitButton>
        </form>
      </div>
      <aside className="grid h-fit gap-4">
        <div className="admin-card grid gap-3 p-5">
          {lead.customer ? (
            <Link href={`/admin/customers/${lead.customer.id}`} className="font-semibold text-pine">
              Open customer record
            </Link>
          ) : (
            <form action={convertLead}>
              <input type="hidden" name="id" value={lead.id} />
              <SubmitButton>Convert to customer</SubmitButton>
            </form>
          )}
          <Link href={`/admin/quotes/new?leadId=${lead.id}`} className="text-sm font-semibold">
            New quote
          </Link>
          <Link href={`/admin/jobs/new?leadId=${lead.id}`} className="text-sm font-semibold">
            New job
          </Link>
          <form action={deleteLead}>
            <input type="hidden" name="id" value={lead.id} />
            <button className="text-sm text-red-800" type="submit">
              Delete lead
            </button>
          </form>
        </div>
        <section className="admin-card p-5">
          <h2 className="font-serif text-2xl">Notes</h2>
          <ul className="mt-3 grid gap-3">
            {lead.notes.map((note) => (
              <li key={note.id} className="text-sm">
                <p>{note.body}</p>
                <p className="mt-1 text-mist">
                  {note.author} · {formatDate(note.createdAt)}
                </p>
              </li>
            ))}
            {!lead.notes.length ? <li className="text-sm text-mist">No notes yet.</li> : null}
          </ul>
        </section>
        <section className="admin-card p-5 text-sm">
          <h2 className="font-serif text-2xl">Quotes and jobs</h2>
          <ul className="mt-3 grid gap-2">
            {lead.quotes.map((quote) => (
              <li key={quote.id}>
                <Link href={`/admin/quotes/${quote.id}`}>
                  {quote.number} · {money(quote.total)} · {quote.status}
                </Link>
              </li>
            ))}
            {lead.jobs.map((job) => (
              <li key={job.id}>
                <Link href={`/admin/jobs/${job.id}`}>
                  {job.title} · {job.status}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </aside>
    </div>
  );
}
