import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/site/JsonLd";
import { PageIntro } from "@/components/site/Blocks";
import { places, regionLabel } from "@/lib/places";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Christmas Light Installation Service Areas",
  description:
    "Based in Westerly, Rhode Island, WD Glow installs residential and commercial Christmas lights throughout Rhode Island and Connecticut.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  const groups = [
    { title: "Home market", text: "Scheduled out of Westerly every week of the season.", tier: "home" },
    { title: "Regular routes", text: "Rhode Island and shoreline Connecticut, grouped by town.", tier: "primary" },
    { title: "Scheduled farther days", text: "The rest of Connecticut, with travel written into the quote.", tier: "extended" },
  ] as const;

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Service areas", path: "/service-areas" },
        ])}
      />
      <PageIntro
        eyebrow="Our Service Areas"
        title="Proudly Serving Rhode Island & Connecticut"
        lede="Based in Westerly, Rhode Island, WD Glow provides professional residential and commercial Christmas light installation throughout Rhode Island and Connecticut."
      />
      <div className="mt-6 max-w-3xl space-y-4 text-lg leading-8 text-mist">
        <p>
          From local neighborhoods to surrounding communities, we bring beautiful, customized holiday lighting to homes and businesses.
        </p>
        <p>
          <Link href="/contact" className="font-semibold text-[#ff3b3b]">
            Contact us today
          </Link>{" "}
          for a free quote and to confirm availability in your area!
        </p>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/service-areas/rhode-island" className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-cream">
          Rhode Island
        </Link>
        <Link href="/service-areas/connecticut" className="rounded-full border border-ink/20 px-4 py-2 text-sm font-semibold">
          Connecticut
        </Link>
      </div>
      <div className="mt-12 grid gap-12">
        {groups.map((group) => (
          <section key={group.tier}>
            <h2 className="font-serif text-3xl">{group.title}</h2>
            <p className="mt-2 max-w-2xl text-mist">{group.text}</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {places
                .filter((place) => place.tier === group.tier)
                .map((place) => (
                  <li key={place.slug}>
                    <Link href={`/service-areas/${place.slug}`} className="block border border-line bg-white px-4 py-3 hover:border-ink">
                      <span className="font-medium">
                        {place.name}, {place.stateCode}
                      </span>
                      <span className="mt-1 block text-sm text-mist">{regionLabel(place.region)}</span>
                    </Link>
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
