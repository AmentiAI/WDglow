import { createLead } from "@/lib/actions/public";
import { PROPERTY_TYPES, TIMELINES } from "@/lib/constants";
import { places } from "@/lib/places";
import { services } from "@/lib/services";
import { SubmitButton } from "@/components/site/SubmitButton";

export function QuoteForm({
  redirectTo = "/contact",
  defaultCity = "",
  defaultState = "",
  error,
  tone = "paper",
}: {
  redirectTo?: string;
  defaultCity?: string;
  defaultState?: string;
  error?: string;
  tone?: "paper" | "plain";
}) {
  const rhodeIsland = places.filter((place) => place.stateCode === "RI");
  const connecticut = places.filter((place) => place.stateCode === "CT");
  const selected = defaultCity && defaultState ? `${defaultCity}|${defaultState}` : "";
  const errors: Record<string, string> = {
    missing: "Add your name, a real email, a phone number, and the town.",
    limit: "We already have a few requests from this email in the last hour. Call or wait, and we will get to them.",
    save: "That request did not save. Email us and we will take it down directly.",
  };

  return (
    <form id="quote" action={createLead} className={`relative grid gap-4 ${tone === "paper" ? "" : ""}`}>
      {error && errors[error] ? (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">{errors[error]}</p>
      ) : null}
      <input type="hidden" name="redirectTo" value={redirectTo} />
      <div className="hp" aria-hidden="true">
        <label>
          Company website
          <input name="companyWebsite" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm">
          Name
          <input className="field" name="name" required autoComplete="name" />
        </label>
        <label className="grid gap-1.5 text-sm">
          Email
          <input className="field" type="email" name="email" required autoComplete="email" />
        </label>
        <label className="grid gap-1.5 text-sm">
          Phone
          <input className="field" name="phone" required autoComplete="tel" />
        </label>
        <label className="grid gap-1.5 text-sm">
          Property
          <select className="field" name="propertyType" defaultValue="Home">
            {PROPERTY_TYPES.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-1.5 text-sm sm:col-span-2">
          Street address
          <input className="field" name="street" autoComplete="street-address" placeholder="Optional, but it helps the quote" />
        </label>
        <label className="grid gap-1.5 text-sm">
          Town
          <select className="field" name="city" required defaultValue={selected}>
            <option value="">Select a town</option>
            <optgroup label="Rhode Island">
              {rhodeIsland.map((place) => (
                <option key={place.slug} value={`${place.name}|RI`}>
                  {place.name}
                </option>
              ))}
              <option value="Other Rhode Island|RI">Other Rhode Island town</option>
            </optgroup>
            <optgroup label="Connecticut">
              {connecticut.map((place) => (
                <option key={place.slug} value={`${place.name}|CT`}>
                  {place.name}
                </option>
              ))}
              <option value="Other Connecticut|CT">Other Connecticut town</option>
            </optgroup>
          </select>
        </label>
        <label className="grid gap-1.5 text-sm">
          If other, town name
          <input className="field" name="cityOther" />
        </label>
        <label className="grid gap-1.5 text-sm">
          ZIP
          <input className="field" name="zip" autoComplete="postal-code" />
        </label>
        <label className="grid gap-1.5 text-sm">
          Timing
          <select className="field" name="timeline" defaultValue={TIMELINES[0]}>
            {TIMELINES.map((timeline) => (
              <option key={timeline}>{timeline}</option>
            ))}
          </select>
        </label>
      </div>
      <fieldset>
        <legend className="text-sm">What should we light?</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {services.map((service) => (
            <label key={service.slug} className="flex items-start gap-2 text-sm">
              <input className="mt-1" type="checkbox" name="services" value={service.name} />
              {service.name}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="grid gap-1.5 text-sm">
        Notes
        <textarea className="field min-h-28" name="message" placeholder="Roof height, trees, colors, association rules, photos you can text after we reply." />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <SubmitButton>Get a free quote</SubmitButton>
        <p className="max-w-sm text-xs leading-5 text-mist">
          Sending this does not reserve a date. We confirm the schedule when you accept the quote.
        </p>
      </div>
    </form>
  );
}
