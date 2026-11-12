import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/site/Blocks";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { getSettings } from "@/lib/site";

export const metadata: Metadata = {
  title: "About WD Glow",
  description:
    "WD Glow is a Westerly, Rhode Island company installing, maintaining, and removing residential and commercial Christmas lights across Rhode Island and Connecticut.",
  alternates: { canonical: "/about" },
};

const services = [
  "Custom Holiday Lighting Design",
  "Residential & Commercial Installation",
  "Seasonal Lighting Maintenance",
  "Professional Removal & Organization",
];

export default async function AboutPage() {
  const settings = await getSettings();
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <PageIntro
            eyebrow="About WD Glow"
            title="Bringing the Magic of Christmas to Life, One Property at a Time."
            lede="Based in Westerly, Rhode Island, WD Glow specializes in professional residential and commercial Christmas light installation, proudly serving communities throughout Rhode Island and Connecticut."
          />
          <div className="mt-8 space-y-4 text-lg leading-8 text-mist">
            <p>
              We believe exceptional holiday lighting is about more than simply hanging lights. It&apos;s about creating a beautiful, thoughtfully designed display that enhances your property&apos;s unique character and brings the spirit of the season to life.
            </p>
            <p>
              From elegant roofline lighting and beautifully illuminated landscapes to custom commercial displays, every project is approached with attention to detail, quality workmanship, and a commitment to customer satisfaction.
            </p>
            <p>
              We understand the unique characteristics of New England properties, from coastal homes exposed to harsh winter conditions to historic architecture and wooded landscapes. Our lighting designs are tailored to complement each property&apos;s features while prioritizing secure installation and a polished, professional appearance.
            </p>
            {settings.aboutNote ? <p>{settings.aboutNote}</p> : null}
          </div>
        </div>
        <figure>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-forest">
            <Image
              src="/photos/about-street.jpg"
              alt="Village street at night with trees wrapped in warm white lights and a decorated Christmas tree"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
          <figcaption className="mt-3 text-sm text-mist">
            Based in {settings.city}, {settings.state}. Serving Rhode Island and Connecticut.
          </figcaption>
        </figure>
      </div>

      <section className="mt-16 max-w-3xl">
        <h2 className="font-serif text-3xl text-ink">Our Services Include:</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {services.map((service) => (
            <li key={service} className="border-t border-white/15 pt-3 text-lg text-white">
              {service}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-lg leading-8 text-mist">
          At WD Glow, we provide a complete, hassle-free holiday lighting experience. From your initial consultation and personalized quote to installation, seasonal support, and scheduled removal, we handle the details so you can focus on enjoying the holidays.
        </p>
      </section>

      <section className="mt-16 max-w-3xl border-t border-white/15 pt-8">
        <h2 className="font-serif text-3xl text-ink">Our Mission</h2>
        <p className="mt-4 text-lg leading-8 text-mist">
          To transform homes and businesses into stunning holiday displays through exceptional service, thoughtful design, and reliable craftsmanship.
        </p>
        <p className="mt-8 font-serif text-2xl text-white">WD Glow — Making Your Holidays Shine.</p>
      </section>
    </div>
  );
}
