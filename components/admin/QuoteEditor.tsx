"use client";

import { useMemo, useState } from "react";
import { saveQuote } from "@/lib/actions/crm";
import { QUOTE_STATUSES, type LineItem } from "@/lib/constants";
import { SubmitButton } from "@/components/site/SubmitButton";
import { centsToInput, formatDateInput, money } from "@/lib/utils";

type Row = { description: string; quantity: string; unitPrice: string };

export function QuoteEditor({
  quote,
  customers,
  leads,
}: {
  quote?: {
    id: string;
    number: string;
    title: string;
    status: string;
    notes: string;
    tax: number;
    validUntil: Date | null;
    customerId: string | null;
    leadId: string | null;
    lineItems: LineItem[];
  };
  customers: { id: string; name: string; city: string }[];
  leads: { id: string; name: string; city: string }[];
}) {
  const [rows, setRows] = useState<Row[]>(
    quote?.lineItems.length
      ? quote.lineItems.map((item) => ({
          description: item.description,
          quantity: String(item.quantity),
          unitPrice: centsToInput(item.unitPrice),
        }))
      : [{ description: "Roofline lighting", quantity: "1", unitPrice: "" }],
  );
  const [tax, setTax] = useState(quote ? centsToInput(quote.tax) : "0.00");

  const payload = useMemo(
    () =>
      JSON.stringify(
        rows
          .filter((row) => row.description.trim())
          .map((row) => ({
            description: row.description.trim(),
            quantity: Number(row.quantity) || 1,
            unitPrice: Math.round((Number(row.unitPrice) || 0) * 100),
          })),
      ),
    [rows],
  );

  const subtotal = rows.reduce((sum, row) => sum + (Number(row.quantity) || 0) * Math.round((Number(row.unitPrice) || 0) * 100), 0);
  const total = subtotal + Math.round((Number(tax) || 0) * 100);

  function update(index: number, key: keyof Row, value: string) {
    setRows(rows.map((row, rowIndex) => (rowIndex === index ? { ...row, [key]: value } : row)));
  }

  return (
    <form action={saveQuote} className="grid gap-4">
      {quote?.id ? <input type="hidden" name="id" value={quote.id} /> : null}
      <input type="hidden" name="lineItems" value={payload} />
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-1 text-sm">
          Title
          <input className="field" name="title" defaultValue={quote?.title ?? "Holiday lighting"} required />
        </label>
        <label className="grid gap-1 text-sm">
          Status
          <select className="field" name="status" defaultValue={quote?.status ?? "draft"}>
            {QUOTE_STATUSES.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-1 text-sm">
          Customer
          <select className="field" name="customerId" defaultValue={quote?.customerId ?? ""}>
            <option value="">None</option>
            {customers.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.name} · {customer.city}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-1 text-sm">
          Lead
          <select className="field" name="leadId" defaultValue={quote?.leadId ?? ""}>
            <option value="">None</option>
            {leads.map((lead) => (
              <option key={lead.id} value={lead.id}>
                {lead.name} · {lead.city}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-1 text-sm">
          Valid until
          <input className="field" type="date" name="validUntil" defaultValue={formatDateInput(quote?.validUntil)} />
        </label>
        <label className="grid gap-1 text-sm">
          Tax
          <input className="field" name="tax" inputMode="decimal" value={tax} onChange={(event) => setTax(event.target.value)} />
        </label>
      </div>
      <div className="grid gap-3">
        {rows.map((row, index) => (
          <div key={index} className="grid gap-2 md:grid-cols-[1fr_90px_120px_auto]">
            <input
              className="field"
              aria-label="Description"
              value={row.description}
              onChange={(event) => update(index, "description", event.target.value)}
            />
            <input
              className="field"
              aria-label="Quantity"
              value={row.quantity}
              onChange={(event) => update(index, "quantity", event.target.value)}
            />
            <input
              className="field"
              aria-label="Unit price"
              value={row.unitPrice}
              onChange={(event) => update(index, "unitPrice", event.target.value)}
            />
            <button type="button" className="text-sm text-mist" onClick={() => setRows(rows.filter((_, rowIndex) => rowIndex !== index))}>
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          className="w-fit text-sm font-semibold text-pine"
          onClick={() => setRows([...rows, { description: "", quantity: "1", unitPrice: "" }])}
        >
          Add a line
        </button>
      </div>
      <p className="text-sm">
        Subtotal {money(subtotal)} · Total {money(total)}
      </p>
      <label className="grid gap-1 text-sm">
        Notes for the customer
        <textarea className="field min-h-24" name="notes" defaultValue={quote?.notes ?? ""} />
      </label>
      <SubmitButton>{quote?.id ? "Update quote" : "Create quote"}</SubmitButton>
    </form>
  );
}
