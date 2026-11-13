import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BuildingIcon,
  BulbIcon,
  CalendarIcon,
  CheckIcon,
  ChevronRightIcon,
  CycleIcon,
  DiamondIcon,
  HomeIcon,
  PlayIcon,
  ShieldIcon,
  StarIcon,
  UsersIcon,
} from "@/components/site/Icons";
import { JsonLd } from "@/components/site/JsonLd";
import { places } from "@/lib/places";
import { getPublishedTestimonials } from "@/lib/queries";
import { breadcrumbSchema, faqSchema, localBusinessSchema } from "@/lib/schema";
import { faqs } from "@/lib/faq";
import { getSettings } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Christmas Light Installation in Westerly, RI | WDGLOW" },
  description:
    "WD Glow installs, maintains, and removes Christmas lights for homes and businesses in Westerly, Rhode Island, and Connecticut.",
  alternates: { canonical: "/" },
};

const checklist = [
  "Custom Lighting Designs",
  "Professional Installation",
  "Seasonal Maintenance",
  "Light Removal & Storage",
];

const iconBar = [
  { label: "Residential Lighting", Icon: HomeIcon, href: "/services/residential-installation" },
  { label: "Commercial Lighting", Icon: BuildingIcon, href: "/services/commercial-holiday-lighting" },
  { label: "Custom Designs", Icon: BulbIcon, href: "/services/custom-displays" },
  { label: "Seasonal Maintenance", Icon: CalendarIcon, href: "/services/seasonal-maintenance" },
  { label: "Professional Removal", Icon: CycleIcon, href: "/services/takedown-and-storage" },
];

const whyPoints = [
  { title: "Reliable Service", body: "Clear quotes and scheduled install dates.", Icon: ShieldIcon },
  { title: "High-Quality Materials", body: "Commercial-grade LEDs and surface-safe clips.", Icon: StarIcon },
  { title: "Local Team RI & CT", body: "Based in Westerly, serving both states.", Icon: UsersIcon },
  { title: "Stunning Results", body: "Designs that fit the house, not a catalog.", Icon: DiamondIcon },
];

const serviceCards = [
  {
    title: "Residential Lighting",
    href: "/services/residential-installation",
    image: "/photos/brick-house.jpg",
    alt: "Brick house with warm white holiday lights along the roofline and entry at night",
    Icon: HomeIcon,
  },
  {
    title: "Commercial Lighting",
    href: "/services/commercial-holiday-lighting",
    image: "/gallery/placeholder-storefront.jpg",
    alt: "Example storefront holiday lighting style. Not a completed WD Glow installation.",
    Icon: BuildingIcon,
  },
  {
    title: "Custom Designs",
    href: "/services/custom-displays",
    image: "/gallery/placeholder-tree.jpg",
    alt: "Example tree lighting style. Not a completed WD Glow installation.",
    Icon: BulbIcon,
  },
  {
    title: "Installation & Removal",
    href: "/services/takedown-and-storage",
    image: "/gallery/placeholder-roofline.jpg",
    alt: "Example roofline lighting style. Not a completed WD Glow installation.",
    Icon: CycleIcon,
  },
];

const townStrip = [
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
];

export default async function HomePage() {
  const [settings, testimonials] = await Promise.all([getSettings(), getPublishedTestimonials()]);
  const featuredTowns = townStrip
    .map((slug) => places.find((place) => place.slug === slug))
    .filter((place) => place !== undefined);

  return (
    <>
      <JsonLd data={localBusinessSchema(settings)} />
      <JsonLd data={faqSchema(faqs.slice(0, 6))} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }])} />

      <section className="relative min-h-[min(72vh,640px)] overflow-hidden">
        <Image
          src="/photos/hero-snow-house.jpg"
          alt="A two-story home outlined in warm holiday lights at night, with snow on the lawn and a wreath on the door."
          fill
          priority
          className="object-cover object-[center_35%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        <div className="relative z-10 mx-auto flex min-h-[min(72vh,640px)] max-w-7xl flex-col justify-center px-5 py-12 sm:px-6 md:py-16">
          <p className="font-display text-sm font-bold tracking-[0.28em] text-white uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] sm:text-base">
            Professional
          </p>
          <h1 className="mt-2 max-w-4xl font-display text-[2.35rem] leading-[0.95] font-black tracking-tight text-white uppercase italic drop-shadow-[0_4px_18px_rgba(0,0,0,0.85)] sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Christmas Light{" "}
            <span className="red-glow-text">Installation</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] md:text-lg md:leading-8">
            Bringing Holiday Magic to Homes &amp; Businesses Across RI &amp; CT
          </p>
          <ul className="mt-7 grid max-w-md gap-2.5">
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-medium text-white sm:text-base">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#ff2b2b] text-white shadow-[0_0_14px_rgba(255,40,40,0.55)]">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/contact" className="btn-glow px-6 py-3.5 text-sm">
              <CalendarIcon className="h-4 w-4" />
              Get a Free Quote
              <ChevronRightIcon className="h-4 w-4" />
            </Link>
            <Link href="/gallery" className="btn-outline px-6 py-3.5 text-sm">
              <PlayIcon className="h-4 w-4" />
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black">
        <div className="glow-rule" />
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-8 sm:grid-cols-3 sm:px-6 md:grid-cols-5 md:gap-4 md:py-10">
          {iconBar.map(({ label, Icon, href }) => (
            <Link key={label} href={href} className="group grid justify-items-center gap-3 text-center">
              <span className="grid h-12 w-12 place-items-center text-[#ff3434] transition group-hover:scale-105 group-hover:text-[#ff5a5a]">
                <Icon className="h-9 w-9 drop-shadow-[0_0_12px_rgba(255,40,40,0.55)]" />
              </span>
              <span className="text-xs font-semibold tracking-wide text-white/90 sm:text-sm">{label}</span>
            </Link>
          ))}
        </div>
        <div className="glow-rule" />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Link href="/gallery" className="group relative block overflow-hidden rounded-2xl border border-white/15">
            <div className="relative aspect-[4/3]">
              <Image
                src="/photos/night.jpg"
                alt="Home entry and porch lit with warm holiday lights at night"
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-black/25" />
              <span className="absolute inset-0 grid place-items-center">
                <span className="grid h-16 w-16 place-items-center rounded-full border border-white/40 bg-black/50 text-white shadow-[0_0_30px_rgba(255,40,40,0.35)] backdrop-blur-sm">
                  <PlayIcon className="h-7 w-7" />
                </span>
              </span>
            </div>
          </Link>
          <div>
            <h2 className="font-display text-3xl font-black tracking-tight text-white uppercase italic sm:text-4xl md:text-5xl">
              Why Choose <span className="red-glow-text">WD Glow?</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/75 md:text-lg md:leading-8">
              At WD Glow, we make holiday lighting simple and stress-free. From custom design and professional installation to seasonal maintenance and January removal, every detail is planned so your property looks its best all season long.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {whyPoints.map(({ title, body, Icon }) => (
                <div key={title} className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <Icon className="mt-0.5 h-6 w-6 shrink-0 text-[#ff3434]" />
                  <div>
                    <p className="text-sm font-bold text-white">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-white/60">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#07080c]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-24">
          <div className="text-center">
            <h2 className="font-display text-3xl font-black tracking-tight text-white uppercase italic sm:text-4xl md:text-5xl">
              Our Services
            </h2>
            <div className="mx-auto mt-4 w-40">
              <div className="glow-rule" />
            </div>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCards.map(({ title, href, image, alt, Icon }) => (
              <Link key={title} href={href} className="group overflow-hidden rounded-2xl border border-white/12 bg-black">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-center gap-2.5 p-4">
                    <Icon className="h-5 w-5 text-[#ff3434]" />
                    <span className="font-display text-sm font-bold tracking-wide text-white uppercase">{title}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/services" className="text-sm font-semibold text-[#ff5a5a] hover:text-[#ff7a7a]">
              View all services
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-20">
          <p className="eyebrow text-[#ff5a5a]">Our Home Market</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-black tracking-tight text-white uppercase italic md:text-5xl">
            Proudly Serving Westerly, Rhode Island &amp; Beyond
          </h2>
          <div className="mt-5 max-w-3xl space-y-4 text-base leading-7 text-white/70 md:text-lg md:leading-8">
            <p>
              Based in Westerly, WD Glow proudly serves Watch Hill, Misquamicut, Weekapaug, Pawcatuck, and surrounding communities, with service extending throughout Rhode Island and Connecticut.
            </p>
            <p>
              From coastal cottages and historic homes to large residential properties and commercial buildings, we create customized holiday lighting displays designed to complement each property&apos;s unique character.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {featuredTowns.map((place) => (
              <Link
                key={place.slug}
                href={`/service-areas/${place.slug}`}
                className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/85 hover:border-[#ff3b3b] hover:text-white"
              >
                {place.name}
              </Link>
            ))}
            <Link href="/service-areas" className="btn-glow px-4 py-2 text-xs">
              All areas
            </Link>
          </div>
        </div>
      </section>

      {testimonials.length ? (
        <section id="reviews" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-16 sm:px-6 md:py-20">
          <h2 className="font-display text-3xl font-black tracking-tight text-white uppercase italic md:text-5xl">
            Reviews
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {testimonials.slice(0, 3).map((item) => (
              <blockquote key={item.id} className="glass-card p-6">
                <p className="leading-7 text-white/85">&ldquo;{item.quote}&rdquo;</p>
                <footer className="mt-4 text-sm text-white/50">
                  {item.name} · {item.city}, {item.state}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      ) : (
        <section id="reviews" className="scroll-mt-28 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6">
            <h2 className="font-display text-2xl font-black tracking-tight text-white uppercase italic md:text-3xl">
              Reviews
            </h2>
            <p className="mt-3 max-w-2xl text-white/65">
              Client reviews will appear here as they come in. In the meantime, request a quote and we&apos;ll walk through your property together.
            </p>
          </div>
        </section>
      )}

      <section className="relative overflow-hidden border-y border-[#ff2b2b]/40 bg-[#120405]">
        <div className="pointer-events-none absolute inset-x-0 top-0">
          <div className="glow-rule" />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0">
          <div className="glow-rule" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-5 py-12 sm:px-6 md:flex-row md:items-center md:justify-between md:py-14">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-black tracking-tight text-white uppercase italic sm:text-3xl md:text-4xl">
              Ready to Light Up Your Holidays?
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/75 sm:text-base">
              Get a free, no-obligation quote today and reserve your install date!
            </p>
          </div>
          <Link href="/contact" className="btn-glow shrink-0 px-6 py-3.5 text-sm">
            <CalendarIcon className="h-4 w-4" />
            Get a Free Quote
            <ChevronRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
