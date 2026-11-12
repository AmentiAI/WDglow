import { JOB_STATUSES, PAYMENT_STATUSES } from "@/lib/constants";
import { centsToInput, formatDateInput } from "@/lib/utils";

export function CustomerFields({
  customer,
}: {
  customer?: {
    id: string;
    name: string;
    email: string;
    phone: string;
    street: string;
    city: string;
    state: string;
    zip: string;
  };
}) {
  return (
    <>
      {customer ? <input type="hidden" name="id" value={customer.id} /> : null}
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-1 text-sm">
          Name
          <input className="field" name="name" defaultValue={customer?.name} required />
        </label>
        <label className="grid gap-1 text-sm">
          Email
          <input className="field" name="email" defaultValue={customer?.email} required />
        </label>
        <label className="grid gap-1 text-sm">
          Phone
          <input className="field" name="phone" defaultValue={customer?.phone} />
        </label>
        <label className="grid gap-1 text-sm">
          ZIP
          <input className="field" name="zip" defaultValue={customer?.zip} />
        </label>
        <label className="grid gap-1 text-sm md:col-span-2">
          Street
          <input className="field" name="street" defaultValue={customer?.street} />
        </label>
        <label className="grid gap-1 text-sm">
          City
          <input className="field" name="city" defaultValue={customer?.city} required />
        </label>
        <label className="grid gap-1 text-sm">
          State
          <input className="field" name="state" defaultValue={customer?.state ?? "RI"} />
        </label>
      </div>
    </>
  );
}

export function JobFields({
  job,
  customers,
  preset,
}: {
  job?: {
    id: string;
    title: string;
    service: string;
    status: string;
    paymentStatus: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    installDate: Date | null;
    takedownDate: Date | null;
    price: number;
    deposit: number;
    notes: string;
    customerId: string | null;
    leadId: string | null;
    quoteId: string | null;
  };
  customers: { id: string; name: string; city: string }[];
  preset?: { leadId?: string; customerId?: string; city?: string; state?: string; street?: string; title?: string };
}) {
  return (
    <>
      {job ? <input type="hidden" name="id" value={job.id} /> : null}
      <input type="hidden" name="leadId" value={job?.leadId ?? preset?.leadId ?? ""} />
      <input type="hidden" name="quoteId" value={job?.quoteId ?? ""} />
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-1 text-sm">
          Title
          <input className="field" name="title" defaultValue={job?.title ?? preset?.title ?? "Holiday lighting"} required />
        </label>
        <label className="grid gap-1 text-sm">
          Service
          <input className="field" name="service" defaultValue={job?.service ?? "Residential installation"} />
        </label>
        <label className="grid gap-1 text-sm">
          Job status
          <select className="field" name="status" defaultValue={job?.status ?? "scheduled"}>
            {JOB_STATUSES.map((status) => (
              <option key={status} value={status}>
                {status.replaceAll("_", " ")}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-1 text-sm">
          Payment
          <select className="field" name="paymentStatus" defaultValue={job?.paymentStatus ?? "unpaid"}>
            {PAYMENT_STATUSES.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-1 text-sm md:col-span-2">
          Customer
          <select className="field" name="customerId" defaultValue={job?.customerId ?? preset?.customerId ?? ""}>
            <option value="">None</option>
            {customers.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.name} · {customer.city}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-1 text-sm md:col-span-2">
          Street
          <input className="field" name="street" defaultValue={job?.street ?? preset?.street ?? ""} />
        </label>
        <label className="grid gap-1 text-sm">
          City
          <input className="field" name="city" defaultValue={job?.city ?? preset?.city ?? ""} required />
        </label>
        <label className="grid gap-1 text-sm">
          State
          <input className="field" name="state" defaultValue={job?.state ?? preset?.state ?? "RI"} />
        </label>
        <label className="grid gap-1 text-sm">
          ZIP
          <input className="field" name="zip" defaultValue={job?.zip ?? ""} />
        </label>
        <label className="grid gap-1 text-sm">
          Install date
          <input className="field" type="date" name="installDate" defaultValue={formatDateInput(job?.installDate)} />
        </label>
        <label className="grid gap-1 text-sm">
          Takedown date
          <input className="field" type="date" name="takedownDate" defaultValue={formatDateInput(job?.takedownDate)} />
        </label>
        <label className="grid gap-1 text-sm">
          Price
          <input className="field" name="price" defaultValue={job ? centsToInput(job.price) : ""} />
        </label>
        <label className="grid gap-1 text-sm">
          Deposit collected
          <input className="field" name="deposit" defaultValue={job ? centsToInput(job.deposit) : ""} />
        </label>
        <label className="grid gap-1 text-sm md:col-span-2">
          Crew notes
          <textarea className="field min-h-28" name="notes" defaultValue={job?.notes ?? ""} />
        </label>
      </div>
    </>
  );
}
