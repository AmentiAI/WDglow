import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageIntro } from "@/components/site/Blocks";
import { JsonLd } from "@/components/site/JsonLd";
import { placesByState, regionLabel } from "@/lib/places";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Christmas Light Installation in Connecticut",
  description:
    "Christmas light installation from Pawcatuck, Stonington, and Mystic across shoreline Connecticut, with scheduled days for the rest of the state.",
  alternates: { canonical: "/service-areas/connecticut" },
};

export default function ConnecticutPage() {
  const places = placesByState("CT");
  const regions = [...new Set(places.map((place) => place.region))];

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Service areas", path: "/service-areas" },
          { name: "Connecticut", path: "/service-areas/connecticut" },
        ])}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Service areas", href: "/service-areas" },
          { name: "Connecticut", href: "/service-areas/connecticut" },
        ]}
      />
      <div className="mt-8">
        <PageIntro
          eyebrow="Connecticut"
          title="From Pawcatuck across the state, on a map we will actually defend."
          lede="Pawcatuck is the other half of Westerly. The shoreline and New London County are regular work. The rest of Connecticut is served on days we plan, with travel included in the written quote."
        />
      </div>
      <div className="mt-8 max-w-3xl space-y-4 text-lg leading-8 text-ink/80">
        <p>
          We will not call a Stamford or Hartford job a local stop. Those pages exist because we take the work, and because you should know the difference before you request a date. A defined project, or several houses that can share a day, is what makes a long drive worth it.
        </p>
        <p>
          If your town is not named and you are in Connecticut, use “Other Connecticut” on the quote form and write the town. We would rather see the address than pretend we published 169 identical pages.
        </p>
      </div>
      <div className="mt-12 grid gap-10">
        {regions.map((region) => (
          <section key={region}>
            <h2 className="font-serif text-3xl">{regionLabel(region)}</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {places
                .filter((place) => place.region === region)
                .map((place) => (
                  <li key={place.slug}>
                    <Link href={`/service-areas/${place.slug}`} className="font-medium hover:text-pine">
                      Christmas lights in {place.name}
                    </Link>
                    <p className="text-sm leading-6 text-mist">{place.lede}</p>
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
