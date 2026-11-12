import Link from "next/link";
import { AdminHeader, Badge } from "@/components/admin/Shell";
import { prisma } from "@/lib/prisma";
import { formatDate, money } from "@/lib/utils";

export default async function QuotesPage() {
  const quotes = await prisma.quote.findMany({ orderBy: { createdAt: "desc" }, take: 200 });
  return (
    <div>
      <AdminHeader
        title="Quotes"
        action={
          <Link href="/admin/quotes/new" className="rounded-full bg-ink px-4 py-2 text-sm text-cream">
            New quote
          </Link>
        }
      />
      <div className="admin-card overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="text-mist">
            <tr>
              <th className="px-4 py-3 font-medium">Number</th>
              <th className="px-4 py-3 font-medium">Title</th>
              <th className="px-4 py-3 font-medium">Total</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Valid</th>
            </tr>
          </thead>
          <tbody>
            {quotes.map((quote) => (
              <tr key={quote.id} className="border-t border-line">
                <td className="px-4 py-3">
                  <Link className="font-medium" href={`/admin/quotes/${quote.id}`}>
                    {quote.number}
                  </Link>
                </td>
                <td className="px-4 py-3">{quote.title}</td>
                <td className="px-4 py-3">{money(quote.total)}</td>
                <td className="px-4 py-3">
                  <Badge status={quote.status} />
                </td>
                <td className="px-4 py-3">{formatDate(quote.validUntil)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {!quotes.length ? <p className="px-4 py-6 text-sm text-mist">No quotes yet.</p> : null}
      </div>
    </div>
  );
}
