import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageIntro } from "@/components/site/Blocks";
import { JsonLd } from "@/components/site/JsonLd";
import { placesByState, regionLabel } from "@/lib/places";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Christmas Light Installation in Rhode Island",
  description:
    "WDGLOW installs and removes Christmas lights statewide in Rhode Island, based in Westerly, with dedicated pages for every municipality.",
  alternates: { canonical: "/service-areas/rhode-island" },
};

export default function RhodeIslandPage() {
  const places = placesByState("RI");
  const regions = [...new Set(places.map((place) => place.region))];

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Service areas", path: "/service-areas" },
          { name: "Rhode Island", path: "/service-areas/rhode-island" },
        ])}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Service areas", href: "/service-areas" },
          { name: "Rhode Island", href: "/service-areas/rhode-island" },
        ]}
      />
      <div className="mt-8">
        <PageIntro
          eyebrow="Rhode Island"
          title="Christmas light installation across Rhode Island."
          lede="Rhode Island is small enough to serve properly and varied enough that a Westerly cottage and a College Hill colonial should never share a template. Every municipality has its own page. Block Island is the exception."
        />
      </div>
      <div className="mt-8 max-w-3xl space-y-4 text-lg leading-8 text-ink/80">
        <p>
          South County is home. Newport County, the East Bay, Providence, Kent County, and the northern and western towns are on regular route days. Travel time changes the calendar. It does not change the standard: clips instead of nails, a written quote, and a January takedown.
        </p>
        <p>
          New Shoreham, on Block Island, is a ferry trip. We do not list it as a standard route. If you have a property there and a flexible window, ask. We will tell you whether the season can hold it.
        </p>
      </div>
      <div className="mt-12 grid gap-10">
        {regions.map((region) => (
          <section key={region}>
            <h2 className="font-serif text-3xl">{regionLabel(region)}</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {places
                .filter((place) => place.region === region)
                .map((place) => (
                  <li key={place.slug}>
                    <Link href={`/service-areas/${place.slug}`} className="font-medium hover:text-pine">
                      Christmas lights in {place.name}
                    </Link>
                    <p className="text-sm text-mist">{place.county}</p>
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
