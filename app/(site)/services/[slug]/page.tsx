import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, FaqList } from "@/components/site/Blocks";
import { JsonLd } from "@/components/site/JsonLd";
import { QuoteForm } from "@/components/site/QuoteForm";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { getService, services } from "@/lib/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: service.name, description: service.description, url: `/services/${service.slug}` },
  };
}

export default async function ServicePage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  const { slug } = await params;
  const query = await searchParams;
  const service = getService(slug);
  if (!service) notFound();
  const others = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <article>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqSchema(service.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
        ])}
      />
      <header className="border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
              { name: service.name, href: `/services/${service.slug}` },
            ]}
          />
          <p className="eyebrow mt-8 text-gold">Service</p>
          <h1 className="mt-3 max-w-4xl font-serif text-4xl leading-[1.02] md:text-6xl">{service.headline}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-mist">{service.lede}</p>
        </div>
      </header>
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="prose-wd">
          {service.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {service.slug === "tree-and-landscape-wrapping" ? (
            <figure className="not-prose my-8">
              <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                <Image
                  src="/photos/brick-house.jpg"
                  alt="Reference photo of a brick house with a tree trunk wrapped in warm lights and garland at the door"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 55vw, 100vw"
                />
              </div>
              <figcaption className="mt-2 text-sm text-mist">
                Reference photograph of a trunk wrap and an entry garland. Not a WDGLOW project. This season&apos;s installs are added to the gallery as they are completed.
              </figcaption>
            </figure>
          ) : null}
          <h2>What is included</h2>
          <ul>
            {service.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h2>A good fit when</h2>
          <ul>
            {service.suitedTo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h2>Questions</h2>
          <div className="not-prose">
            <FaqList items={service.faqs} />
          </div>
        </div>
        <aside className="h-fit border border-line bg-white p-5 lg:sticky lg:top-24">
          <h2 className="font-serif text-3xl">Request this service</h2>
          <p className="mt-2 text-sm leading-6 text-mist">Tell us the town. We will answer with a real quote, not a package tier.</p>
          <div className="mt-5">
            <QuoteForm redirectTo={`/services/${service.slug}`} error={query.error} />
          </div>
        </aside>
      </div>
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-12 md:grid-cols-3">
          {others.map((item) => (
            <Link key={item.slug} href={`/services/${item.slug}`} className="border-t border-ink pt-4">
              <h3 className="font-serif text-2xl">{item.name}</h3>
              <p className="mt-2 text-sm leading-6 text-mist">{item.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
