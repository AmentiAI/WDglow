import { faqs } from "@/lib/faq";
import { places } from "@/lib/places";
import { services } from "@/lib/services";
import type { PublicSettings } from "@/lib/site";
import type { Faq } from "@/lib/types";
import { siteUrl } from "@/lib/utils";

export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function localBusinessSchema(settings: PublicSettings) {
  const url = siteUrl();
  const sameAs = [settings.instagram, settings.facebook].filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${url}/#business`,
    name: "WDGLOW",
    url,
    image: `${url}/opengraph-image`,
    description:
      "Christmas light installation, maintenance, and removal for homes and businesses in Westerly, Rhode Island, and Connecticut.",
    telephone: settings.phone || undefined,
    email: settings.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: settings.street || undefined,
      addressLocality: settings.city || "Westerly",
      addressRegion: settings.state || "RI",
      postalCode: settings.zip || undefined,
      addressCountry: "US",
    },
    areaServed: places.map((place) => ({
      "@type": "City",
      name: `${place.name}, ${place.stateCode}`,
    })),
    knowsAbout: services.map((service) => service.name),
    sameAs: sameAs.length ? sameAs : undefined,
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.summary,
        areaServed: "Rhode Island and Connecticut",
        url: `${url}/services/${service.slug}`,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  const url = siteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${url}${item.path}`,
    })),
  };
}

export function faqSchema(items: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function serviceSchema(service: (typeof services)[number]) {
  const url = siteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: "Christmas light installation",
    description: service.description,
    url: `${url}/services/${service.slug}`,
    provider: { "@id": `${url}/#business` },
    areaServed: ["Rhode Island", "Connecticut", "Westerly"],
  };
}

export const homepageFaqs = faqs.slice(0, 6);
