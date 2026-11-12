import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/site/JsonLd";
import { PageIntro } from "@/components/site/Blocks";
import { breadcrumbSchema } from "@/lib/schema";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Christmas Light Installation Services",
  description:
    "Residential, commercial, roofline, tree wrapping, maintenance, and takedown. WDGLOW holiday lighting in Rhode Island and Connecticut.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <PageIntro
        eyebrow="Services"
        title="Christmas lighting, from the first clip to the January takedown."
        lede="Every service below is something we schedule, quote in writing, and remove. If a request is smaller than a crew should take, we will say so."
      />
      <div className="mt-12 grid gap-6">
        {services.map((service, index) => (
          <article key={service.slug} className="grid gap-4 border-t border-ink py-8 md:grid-cols-12">
            <p className="text-sm text-gold md:col-span-1">{String(index + 1).padStart(2, "0")}</p>
            <div className="md:col-span-7">
              <h2 className="font-serif text-3xl">
                <Link href={`/services/${service.slug}`}>{service.name}</Link>
              </h2>
              <p className="mt-3 max-w-xl leading-7 text-mist">{service.summary}</p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Link href={`/services/${service.slug}`} className="text-sm font-semibold text-pine">
                Read the service
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
