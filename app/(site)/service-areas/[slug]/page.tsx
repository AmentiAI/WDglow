import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, FaqList } from "@/components/site/Blocks";
import { JsonLd } from "@/components/site/JsonLd";
import { QuoteForm } from "@/components/site/QuoteForm";
import { getPlace, nearbyPlaces, places, regionLabel } from "@/lib/places";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { getService, services } from "@/lib/services";

export function generateStaticParams() {
  return places.map((place) => ({ slug: place.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const place = getPlace(slug);
  if (!place) return {};
  const title = `Christmas Light Installation in ${place.name}, ${place.stateCode}`;
  return {
    title,
    description: place.description,
    alternates: { canonical: `/service-areas/${place.slug}` },
    openGraph: { title, description: place.description, url: `/service-areas/${place.slug}` },
  };
}

const tierCopy = {
  home: "This is home territory. November and early December installs are built from Westerly, and these addresses are on the first routes of the week.",
  primary: "This town is on our regular Rhode Island and Connecticut calendar. Jobs are grouped by area so the crew shows up with the day already planned.",
  extended: "WDGLOW is based in Westerly. This area is served on scheduled days, and travel is included in the written quote. If a date only works as its own trip, we will say so before you book.",
};

export default async function PlacePage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  const { slug } = await params;
  const query = await searchParams;
  const place = getPlace(slug);
  if (!place) notFound();
  const nearby = nearbyPlaces(place);
  const featured = (place.featuredServices ?? services.slice(0, 4).map((service) => service.slug))
    .map((serviceSlug) => getService(serviceSlug))
    .filter((service) => service !== undefined);
  const statePath = place.stateCode === "RI" ? "/service-areas/rhode-island" : "/service-areas/connecticut";

  return (
    <article>
      <JsonLd data={faqSchema(place.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Service areas", path: "/service-areas" },
          { name: place.state, path: statePath },
          { name: place.name, path: `/service-areas/${place.slug}` },
        ])}
      />
      <header className="border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Service areas", href: "/service-areas" },
              { name: place.state, href: statePath },
              { name: place.name, href: `/service-areas/${place.slug}` },
            ]}
          />
          <p className="eyebrow mt-8 text-gold">
            {place.name}, {place.stateCode} · {regionLabel(place.region)}
          </p>
          <h1 className="mt-3 max-w-4xl font-serif text-4xl leading-[1.02] md:text-6xl">
            Christmas light installation in {place.name}, {place.stateCode}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-mist">{place.lede}</p>
        </div>
      </header>
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 lg:grid-cols-[1.35fr_0.8fr]">
        <div>
          <div className="space-y-4 text-lg leading-8">
            {place.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>{tierCopy[place.tier]}</p>
          </div>
          {place.neighborhoods?.length ? (
            <p className="mt-6 text-sm leading-6 text-mist">
              <span className="font-semibold text-ink">Also covers: </span>
              {place.neighborhoods.join(", ")}.
            </p>
          ) : null}
          <h2 className="mt-10 font-serif text-3xl">What changes the install here</h2>
          <ul className="mt-4 grid gap-3">
            {place.considerations.map((item) => (
              <li key={item} className="border-t border-line pt-3">
                {item}
              </li>
            ))}
          </ul>
          <h2 className="mt-10 font-serif text-3xl">Services in {place.name}</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {featured.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="block border border-line bg-white p-4 hover:border-ink">
                  <span className="font-medium">{service.name}</span>
                  <span className="mt-1 block text-sm text-mist">{service.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="mt-10 font-serif text-3xl">Local questions</h2>
          <div className="mt-4">
            <FaqList items={place.faqs} />
          </div>
          {nearby.length ? (
            <>
              <h2 className="mt-10 font-serif text-3xl">Nearby</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {nearby.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/service-areas/${item.slug}`} className="inline-block border border-line px-3 py-1.5 text-sm hover:border-ink">
                      {item.name}, {item.stateCode}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
        <aside className="h-fit border border-line bg-white p-5 lg:sticky lg:top-24">
          <h2 className="font-serif text-3xl">Quote a {place.name} property</h2>
          <p className="mt-2 text-sm leading-6 text-mist">The town is filled in. Add the house, the timing, and what you want lit.</p>
          <div className="mt-5">
            <QuoteForm
              redirectTo={`/service-areas/${place.slug}`}
              defaultCity={place.name}
              defaultState={place.stateCode}
              error={query.error}
            />
          </div>
        </aside>
      </div>
    </article>
  );
}
