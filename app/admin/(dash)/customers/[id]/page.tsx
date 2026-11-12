import Link from "next/link";
import { notFound } from "next/navigation";
import { CustomerFields } from "@/components/admin/Records";
import { Saved } from "@/components/admin/Shell";
import { SubmitButton } from "@/components/site/SubmitButton";
import { addNote, saveCustomer } from "@/lib/actions/crm";
import { prisma } from "@/lib/prisma";
import { formatDate, money } from "@/lib/utils";

export default async function CustomerPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ saved?: string; error?: string }>;
}) {
  const { id } = await params;
  const query = await searchParams;
  const customer = await prisma.customer.findUnique({
    where: { id },
    include: {
      jobs: { orderBy: { installDate: "asc" } },
      quotes: { orderBy: { createdAt: "desc" } },
      notes: { orderBy: { createdAt: "desc" } },
    },
  });
  if (!customer) notFound();
  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <Saved show={query.saved === "1"} />
        {query.error ? <p className="mb-4 text-sm text-red-800">Name and email are required.</p> : null}
        <h1 className="mb-4 font-serif text-4xl">{customer.name}</h1>
        <form action={saveCustomer} className="admin-card grid gap-4 p-5">
          <CustomerFields customer={customer} />
          <SubmitButton>Save customer</SubmitButton>
        </form>
      </div>
      <div className="grid gap-4">
        <section className="admin-card p-5 text-sm">
          <h2 className="font-serif text-2xl">Jobs</h2>
          <ul className="mt-3 grid gap-2">
            {customer.jobs.map((job) => (
              <li key={job.id}>
                <Link href={`/admin/jobs/${job.id}`}>
                  {job.title} · {formatDate(job.installDate)} · {money(job.price)}
                </Link>
              </li>
            ))}
          </ul>
          <Link href={`/admin/jobs/new?customerId=${customer.id}`} className="mt-3 inline-block font-semibold text-pine">
            New job
          </Link>
        </section>
        <section className="admin-card p-5 text-sm">
          <h2 className="font-serif text-2xl">Quotes</h2>
          <ul className="mt-3 grid gap-2">
            {customer.quotes.map((quote) => (
              <li key={quote.id}>
                <Link href={`/admin/quotes/${quote.id}`}>
                  {quote.number} · {money(quote.total)}
                </Link>
              </li>
            ))}
          </ul>
          <Link href={`/admin/quotes/new?customerId=${customer.id}`} className="mt-3 inline-block font-semibold text-pine">
            New quote
          </Link>
        </section>
        <section className="admin-card p-5">
          <h2 className="font-serif text-2xl">Notes</h2>
          <form action={addNote} className="mt-3 grid gap-2">
            <input type="hidden" name="customerId" value={customer.id} />
            <input type="hidden" name="returnTo" value={`/admin/customers/${customer.id}?saved=1`} />
            <textarea className="field min-h-20" name="body" required />
            <SubmitButton>Add note</SubmitButton>
          </form>
          <ul className="mt-4 grid gap-3 text-sm">
            {customer.notes.map((note) => (
              <li key={note.id}>
                <p>{note.body}</p>
                <p className="text-mist">
                  {note.author} · {formatDate(note.createdAt)}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
