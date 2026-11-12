import type { Metadata } from "next";
import { PageIntro } from "@/components/site/Blocks";
import { QuoteForm } from "@/components/site/QuoteForm";
import { getSettings } from "@/lib/site";
import { phoneHref } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Request a Christmas Light Installation Quote",
  description:
    "Request a WDGLOW quote for Christmas light installation in Westerly, Rhode Island, or Connecticut. We reply by phone or email.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  const settings = await getSettings();
  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <PageIntro
          eyebrow="Contact WD Glow"
          title="Let's Bring Your Holiday Vision to Life."
          lede="Ready to transform your home or business with professional Christmas lighting? Tell us a little about your property and the display you have in mind, and we'll provide a personalized, no-obligation quote."
        />
        <p className="mt-4 text-lg leading-8 text-mist">
          Our team will review your request, discuss your lighting options, and confirm available installation dates.
        </p>
        <p className="mt-6 text-sm font-semibold tracking-[0.12em] text-[#e4c36a] uppercase">
          Free Quotes • Transparent Pricing • Professional Installation
        </p>
        <dl className="mt-8 grid gap-4 text-sm">
          {settings.phone ? (
            <div>
              <dt className="text-mist">Phone</dt>
              <dd>
                <a className="text-lg" href={phoneHref(settings.phone)}>
                  {settings.phone}
                </a>
              </dd>
            </div>
          ) : (
            <div>
              <dt className="text-mist">Phone</dt>
              <dd>Add a public number in admin settings. Until then, the form and email are the way in.</dd>
            </div>
          )}
          <div>
            <dt className="text-mist">Email</dt>
            <dd>
              <a className="text-lg" href={`mailto:${settings.email}`}>
                {settings.email}
              </a>
            </dd>
          </div>
          {settings.facebook ? (
            <div>
              <dt className="text-mist">Facebook</dt>
              <dd>
                <a className="text-lg" href={settings.facebook} target="_blank" rel="nofollow noopener noreferrer">
                  WD Glow on Facebook
                </a>
              </dd>
            </div>
          ) : null}
          <div>
            <dt className="text-mist">Hours</dt>
            <dd>{settings.hours}</dd>
          </div>
          <div>
            <dt className="text-mist">Base</dt>
            <dd>RI &amp; CT</dd>
          </div>
        </dl>
      </div>
      <div className="border border-line bg-white p-5 md:p-7">
        <QuoteForm redirectTo="/contact" error={params.error} />
      </div>
    </div>
  );
}
