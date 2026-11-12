import { notFound } from "next/navigation";
import { PrintButton } from "@/components/admin/PrintButton";
import { QuoteEditor } from "@/components/admin/QuoteEditor";
import { Saved } from "@/components/admin/Shell";
import { deleteQuote } from "@/lib/actions/crm";
import { parseLineItems } from "@/lib/constants";
import { prisma } from "@/lib/prisma";
import { formatDate, money } from "@/lib/utils";

export default async function QuotePage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ saved?: string }>;
}) {
  const { id } = await params;
  const query = await searchParams;
  const [quote, customers, leads] = await Promise.all([
    prisma.quote.findUnique({ where: { id }, include: { customer: true, lead: true } }),
    prisma.customer.findMany({ orderBy: { name: "asc" }, select: { id: true, name: true, city: true } }),
    prisma.lead.findMany({ orderBy: { createdAt: "desc" }, take: 100, select: { id: true, name: true, city: true } }),
  ]);
  if (!quote) notFound();
  const items = parseLineItems(quote.lineItems);
  return (
    <div>
      <Saved show={query.saved === "1"} />
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-sm text-mist">{quote.number}</p>
          <h1 className="font-serif text-4xl">{quote.title}</h1>
        </div>
        <PrintButton />
      </div>
      <section className="admin-card mb-6 p-5 print:border-0 print:shadow-none">
        <p className="font-serif text-2xl tracking-[0.14em]">WDGLOW</p>
        <p className="mt-4 text-sm">
          {quote.customer?.name || quote.lead?.name || "Customer"} · {quote.customer?.city || quote.lead?.city}
        </p>
        <p className="text-sm text-mist">Valid through {formatDate(quote.validUntil)}</p>
        <table className="mt-4 w-full text-sm">
          <tbody>
            {items.map((item) => (
              <tr key={item.description} className="border-t border-line">
                <td className="py-2">{item.description}</td>
                <td className="py-2">{item.quantity}</td>
                <td className="py-2 text-right">{money(item.quantity * item.unitPrice)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-3 text-right font-medium">Total {money(quote.total)}</p>
        {quote.notes ? <p className="mt-4 text-sm leading-6">{quote.notes}</p> : null}
      </section>
      <div className="no-print admin-card p-5">
        <QuoteEditor
          customers={customers}
          leads={leads}
          quote={{ ...quote, lineItems: items }}
        />
        <form action={deleteQuote} className="mt-4">
          <input type="hidden" name="id" value={quote.id} />
          <button className="text-sm text-red-800" type="submit">
            Delete quote
          </button>
        </form>
      </div>
    </div>
  );
}
