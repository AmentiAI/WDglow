import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/site/Blocks";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "How Christmas Light Installation Works",
  description:
    "From the consult to the January takedown: how a WDGLOW Christmas light installation is quoted, hung, and removed in Rhode Island and Connecticut.",
  alternates: { canonical: "/process" },
};

const steps: { title: string; body: string | string[] }[] = [
  {
    title: "Tell Us About Your Property",
    body: [
      "Getting started is simple. Share your location, property type, and the areas you'd like illuminated. For most homes, a few photos of the front and exterior corners are all we need to prepare an initial estimate.",
      "For larger properties, complex rooflines, or commercial installations, we may recommend an on-site consultation to ensure an accurate quote and a customized lighting design.",
    ],
  },
  {
    title: "Review Your Detailed Quote",
    body: [
      "You'll receive a clear, written quote outlining your lighting design, color selections, total pricing, and removal services. Any applicable travel fees will be included upfront, so there are no surprises.",
      "Once you review and approve your quote, we'll schedule your installation at a convenient time. No hidden fees, no pressure—just transparent pricing and professional service.",
    ],
  },
  {
    title: "Install day",
    body: [
      "Our team arrives ready to bring your holiday lighting vision to life. All we need is access to a working outlet and a safe area for ladder placement.",
      "We use professional, surface-safe clips to securely install your lights without damaging your roof. Before leaving, we test the entire display, set your timer, and ensure everything looks perfect.",
      "You'll receive a final walkthrough or photos if you're away, ensuring a beautiful, hassle-free experience.",
    ],
  },
  {
    title: "Throughout the Holiday Season",
    body: [
      "We're committed to keeping your holiday display shining bright all season long. If you experience an issue with lighting we've installed, simply contact us for assistance.",
      "For coastal properties and commercial displays, we offer additional maintenance options to help ensure reliable performance throughout the season.",
      "Our maintenance services are limited to lighting systems installed by WD Glow.",
    ],
  },
  {
    title: "January Light Removal",
    body: [
      "Once the holiday season comes to an end, our team returns on your scheduled removal date to carefully take down your lighting display.",
      "We safely remove all lights, clips, and accessories, then organize and label each lighting section for easy reinstallation next season.",
      "Storage services are available when included in your service agreement, ensuring a smooth, hassle-free experience from installation to removal.",
    ],
  },
];

export default function ProcessPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Process", path: "/process" },
        ])}
      />
      <PageIntro
        eyebrow="Our Process"
        title="A Seamless Holiday Experience, From Start to Finish."
        lede="At WD Glow, we make holiday lighting simple and stress-free. From professional installation to timely removal, every detail is planned in advance. We schedule your takedown when you book your installation, ensuring your property looks its best throughout the season and is ready for the new year."
      />
      <ol className="mt-12 grid gap-8">
        {steps.map((step, index) => (
          <li key={step.title} className="grid gap-3 border-t border-ink pt-6 md:grid-cols-12">
            <p className="text-sm text-gold md:col-span-2">0{index + 1}</p>
            <div className="md:col-span-10">
              <h2 className="font-serif text-3xl">{step.title}</h2>
              {(Array.isArray(step.body) ? step.body : [step.body]).map((paragraph) => (
                <p key={paragraph} className="mt-3 max-w-3xl text-lg leading-8 text-mist">
                  {paragraph}
                </p>
              ))}
            </div>
          </li>
        ))}
      </ol>
      <Link href="/contact" className="mt-12 inline-block rounded-full bg-ink px-5 py-3 text-sm font-semibold text-cream">
        Start with the property
      </Link>
    </div>
  );
}
