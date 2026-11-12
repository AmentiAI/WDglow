import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "How WDGLOW quotes, schedules, and completes Christmas light installation.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="prose-wd mx-auto max-w-3xl px-5 py-14">
      <h1 className="font-serif text-5xl">Terms</h1>
      <p>
        A request on this website is a request for a quote. It does not reserve an install date. Work is scheduled when you accept a written quote.
      </p>
      <p>
        The quote describes the lighting to be installed, the price, and the planned takedown. Changes after acceptance, including extra trees or a different color, are additional and will be written down before we do them.
      </p>
      <p>
        You are responsible for safe access, a working outdoor outlet, and telling us about association rules, historic-district limits, pets, and gates before install day. We do not nail through roofing. If a surface cannot hold a clip, we will change the plan rather than damage it.
      </p>
      <p>
        Takedown of lighting we installed is part of the job unless the quote says otherwise. Storage is included only when the quote says it is. Weather can move a date. We will tell you, and we will reschedule rather than hang lights in conditions that make the work unsafe.
      </p>
      <p>These terms are a plain description of how the work is sold. They are not a substitute for the quote you sign or accept.</p>
    </div>
  );
}
