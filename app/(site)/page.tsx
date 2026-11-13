import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaqList } from "@/components/site/Blocks";
import { JsonLd } from "@/components/site/JsonLd";
import { QuoteForm } from "@/components/site/QuoteForm";
import { faqs } from "@/lib/faq";
import { places } from "@/lib/places";
import { getPublishedPosts, getPublishedTestimonials } from "@/lib/queries";
import { breadcrumbSchema, faqSchema, localBusinessSchema } from "@/lib/schema";
import { services } from "@/lib/services";
import { getSettings } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Christmas Light Installation in Westerly, RI | WDGLOW" },
  description:
    "WDGLOW installs, maintains, and removes Christmas lights for homes and businesses in Westerly, Rhode Island, and Connecticut.",
  alternates: { canonical: "/" },
};

const strip = [
  "westerly-ri",
  "watch-hill-ri",
  "misquamicut-ri",
  "weekapaug-ri",
  "pawcatuck-ct",
  "mystic-ct",
  "stonington-ct",
  "narragansett-ri",
  "newport-ri",
  "providence-ri",
  "east-greenwich-ri",
  "charlestown-ri",
];

const steps = [
  ["Consult", "Photos or a walk of the house. We choose the lines, the color, and what stays dark."],
  ["Quote", "A written number. Nothing goes on the calendar until you accept it."],
  ["Install", "Clips, lamps, and a timer. You know the on and off times before we leave."],
  ["Removal", "January, on the date we booked with the install. Off the house, labeled, coiled."],
];

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  const [settings, testimonials, posts] = await Promise.all([
    getSettings(),
    getPublishedTestimonials(),
    getPublishedPosts(),
  ]);
  const featuredTowns = strip
    .map((slug) => places.find((place) => place.slug === slug))
    .filter((place) => place !== undefined);

  return (
    <>
      <JsonLd data={localBusinessSchema(settings)} />
      <JsonLd data={faqSchema(faqs.slice(0, 6))} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }])} />

      <section className="relative min-h-[78vh] overflow-hidden">
        <Image
          src="/photos/hero-mansion.jpg"
          alt="A grand house traced in warm holiday lights at night, reflected in still water."
          fill
          priority
          className="object-cover object-[center_30%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60 md:bg-transparent md:bg-gradient-to-r md:from-black/80 md:via-black/45 md:to-black/15" />
        <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-5 py-10 md:py-16">
          <p className="max-w-3xl text-[11px] font-semibold tracking-[0.16em] text-[#ffe7a3] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] sm:text-xs sm:tracking-[0.18em]">
            Professional Christmas Light Installation | Rhode Island & Connecticut
          </p>
          <h1 className="mt-4 max-w-4xl font-serif text-[2.35rem] leading-[1.04] font-medium text-white drop-shadow-[0_3px_16px_rgba(0,0,0,0.85)] sm:text-5xl md:mt-5 md:text-6xl">
            Transform Your Property Into a Holiday Masterpiece.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] md:mt-6 md:text-lg md:leading-8">
            Bring the magic of Christmas to your home or business with WD Glow&apos;s professional holiday lighting services. From custom design and expert installation to seasonal maintenance and removal, we handle every detail so you can enjoy a beautiful, stress-free holiday season.
          </p>
          <p className="mt-4 font-serif text-xl text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] md:mt-6 md:text-3xl">
            Make Your Holidays Shine with WD Glow.
          </p>
          <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap md:mt-8">
            <Link href="/contact" className="rounded-full bg-[#e4c36a] px-6 py-3.5 text-center text-sm font-semibold text-[#1a1408]">
              Get a free quote
            </Link>
            <Link href="/service-areas" className="rounded-full border border-white/40 bg-black/20 px-6 py-3.5 text-center text-sm font-semibold text-white backdrop-blur-sm">
              See service areas
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-6xl gap-px bg-white/10 sm:grid-cols-3">
          {[
            ["Based in", "Westerly, Rhode Island"],
            ["Working across", "Rhode Island and Connecticut"],
            ["Taken down", "January, booked with the install"],
          ].map(([label, value]) => (
            <div key={label} className="bg-black px-5 py-8">
              <p className="text-xs font-semibold tracking-[0.22em] text-[#e4c36a] uppercase">{label}</p>
              <p className="mt-2 font-serif text-2xl text-white md:text-3xl">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow text-[#e4c36a]">Services</p>
            <h2 className="mt-3 font-serif text-4xl leading-[1.02] text-white md:text-6xl">The whole season, one crew.</h2>
          </div>
          <Link href="/services" className="text-sm font-semibold text-[#e4c36a]">
            All services
          </Link>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex min-h-56 flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#e4c36a]/70 hover:bg-white/[0.06]"
            >
              <span className="text-xs font-semibold tracking-[0.2em] text-[#e4c36a]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="mt-5 font-serif text-3xl leading-tight text-white">{service.name}</span>
              <span className="mt-3 text-sm leading-6 text-white/60">{service.result}</span>
              <span className="mt-auto pt-6 text-sm font-semibold text-white/80 group-hover:text-[#e4c36a]">View</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-black">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <p className="eyebrow text-[#e4c36a]">Our Home Market</p>
          <h2 className="mt-3 max-w-3xl font-serif text-4xl leading-[1.02] text-white md:text-6xl">
            Proudly Serving Westerly, Rhode Island & Beyond
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-lg leading-8 text-white/70">
            <p>
              Based in Westerly, WD Glow proudly serves Watch Hill, Misquamicut, Weekapaug, Pawcatuck, and surrounding communities, with service extending throughout Rhode Island and Connecticut.
            </p>
            <p>
              From coastal cottages and historic homes to large residential properties and commercial buildings, we create customized holiday lighting displays designed to complement each property&apos;s unique character.
            </p>
            <p>
              Wherever you&apos;re located, our goal is the same: exceptional service, professional installation, and stunning holiday lighting.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {featuredTowns.map((place) => (
              <Link
                key={place.slug}
                href={`/service-areas/${place.slug}`}
                className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/85 hover:border-[#e4c36a] hover:text-[#e4c36a]"
              >
                {place.name}
              </Link>
            ))}
            <Link href="/service-areas" className="rounded-full bg-[#e4c36a] px-4 py-2 text-sm font-semibold text-[#1a1408]">
              All areas
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <p className="eyebrow text-[#e4c36a]">How a job runs</p>
        <h2 className="mt-3 max-w-3xl font-serif text-4xl leading-[1.02] text-white md:text-6xl">
          Takedown is booked before the first clip goes up.
        </h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-4">
          {steps.map(([title, body], index) => (
            <li key={title}>
              <p className="font-serif text-5xl text-[#e4c36a]">0{index + 1}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/60">{body}</p>
            </li>
          ))}
        </ol>
        <Link href="/process" className="mt-10 inline-block text-sm font-semibold text-[#e4c36a]">
          Read the full process
        </Link>
      </section>

      <section className="border-y border-white/10">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Clips, not nails", "We fasten to the surface that can hold a clip. We do not nail through roofing."],
            ["One color", "Warm white or color, chosen before we order the run."],
            ["A timer", "On when you want them. Off when you do not. Set before we leave."],
            ["January", "Removal is on the calendar with the install. Clips come off with the wire."],
          ].map(([title, body]) => (
            <article key={title}>
              <h3 className="font-serif text-3xl text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/60">{body}</p>
            </article>
          ))}
        </div>
      </section>

      {testimonials.length ? (
        <section className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="font-serif text-4xl text-white md:text-5xl">From clients who said we could quote them.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {testimonials.slice(0, 3).map((item) => (
              <blockquote key={item.id} className="rounded-3xl border border-white/10 p-6">
                <p className="leading-7 text-white/85">&ldquo;{item.quote}&rdquo;</p>
                <footer className="mt-4 text-sm text-white/50">
                  {item.name} · {item.city}, {item.state}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      ) : null}

      {posts.length ? (
        <section className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-serif text-4xl text-white md:text-5xl">Guides</h2>
            <Link href="/guides" className="text-sm font-semibold text-[#e4c36a]">
              All guides
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <Link key={post.id} href={`/guides/${post.slug}`} className="rounded-3xl border border-white/10 p-6 hover:border-[#e4c36a]/70">
                <h3 className="font-serif text-2xl leading-tight text-white">{post.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="font-serif text-4xl text-white md:text-5xl">Before you ask for a quote.</h2>
        <div className="mt-8">
          <FaqList items={faqs.slice(0, 5)} />
        </div>
        <Link href="/faq" className="mt-6 inline-block text-sm font-semibold text-[#e4c36a]">
          Full FAQ
        </Link>
      </section>

      <section className="border-t border-white/10 bg-black">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="eyebrow text-[#e4c36a]">Free Personalized Quote</p>
            <h2 className="mt-3 font-serif text-4xl leading-[1.02] text-white md:text-6xl">
              Let&apos;s Bring Your Holiday Vision to Life.
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-8 text-white/70">
              <p>
                Getting started is easy! Tell us where your property is located and which areas you&apos;d like illuminated. A few exterior photos will help us provide a faster, more accurate estimate.
              </p>
              <p>
                Contact WD Glow today for your free, no-obligation quote. We strive to respond promptly so you can start planning your perfect holiday display.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black p-5 md:p-7">
            <QuoteForm redirectTo="/" error={params.error} />
          </div>
        </div>
      </section>
    </>
  );
}
