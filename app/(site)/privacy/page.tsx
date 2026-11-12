import type { Metadata } from "next";
import { getSettings } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How WDGLOW handles quote requests and customer information.",
  alternates: { canonical: "/privacy" },
};

export default async function PrivacyPage() {
  const settings = await getSettings();
  return (
    <div className="prose-wd mx-auto max-w-3xl px-5 py-14">
      <h1 className="font-serif text-5xl">Privacy</h1>
      <p>
        When you request a quote, we store the details you submit: name, contact information, property location, and the notes you write. We use that information to reply, prepare a quote, schedule work, and keep a record of the job.
      </p>
      <p>We do not sell that information. We do not use it for a newsletter unless you ask to hear from us again.</p>
      <p>
        Quote requests are visible to the people who run WDGLOW. If you want a request deleted and we have not started a paid job, email {settings.email} and we will remove it.
      </p>
      <p>The site may store a login cookie for the private admin area. That cookie is only for staff.</p>
    </div>
  );
}
