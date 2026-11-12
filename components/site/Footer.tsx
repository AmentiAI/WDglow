import Link from "next/link";
import { places } from "@/lib/places";
import { services } from "@/lib/services";
import type { PublicSettings } from "@/lib/site";
import { phoneHref } from "@/lib/utils";

const featured = [
  "westerly-ri",
  "watch-hill-ri",
  "narragansett-ri",
  "newport-ri",
  "south-kingstown-ri",
  "providence-ri",
  "mystic-ct",
  "stonington-ct",
  "pawcatuck-ct",
  "east-greenwich-ri",
];

export function Footer({ settings }: { settings: PublicSettings }) {
  const towns = featured
    .map((slug) => places.find((place) => place.slug === slug))
    .filter((place) => place !== undefined);

  return (
    <footer className="bg-forest text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <img src="/brand/logo.jpg" alt="WD Glow" className="h-16 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/75">
            Christmas light installation, maintenance, and removal. Based in Westerly. Working across Rhode Island and Connecticut.
          </p>
        </div>
        <div>
          <p className="eyebrow text-gold-soft">Services</p>
          <ul className="mt-4 grid gap-2 text-sm text-white/80">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="hover:text-white">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-gold-soft">Areas</p>
          <ul className="mt-4 grid gap-2 text-sm text-white/80">
            {towns.map((place) => (
              <li key={place.slug}>
                <Link href={`/service-areas/${place.slug}`} className="hover:text-white">
                  {place.name}, {place.stateCode}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/service-areas" className="text-gold-soft hover:text-white">
                All service areas
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-gold-soft">Contact</p>
          <ul className="mt-4 grid gap-2 text-sm text-white/80">
            {settings.phone ? (
              <li>
                <a href={phoneHref(settings.phone)} className="hover:text-white">
                  {settings.phone}
                </a>
              </li>
            ) : null}
            <li>
              <a href={`mailto:${settings.email}`} className="hover:text-white">
                {settings.email}
              </a>
            </li>
            <li>
              {settings.street ? `${settings.street}, ` : ""}
              {settings.city}, {settings.state} {settings.zip}
            </li>
            <li>{settings.hours}</li>
            {settings.facebook ? (
              <li>
                <a href={settings.facebook} target="_blank" rel="nofollow noopener noreferrer" className="hover:text-white">
                  Facebook
                </a>
              </li>
            ) : null}
            <li>
              <Link href="/contact" className="hover:text-white">
                Request a quote
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy
              </Link>
              <span aria-hidden="true"> · </span>
              <Link href="/terms" className="hover:text-white">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs tracking-[0.14em] text-white/50 uppercase">
        WDGLOW · Westerly, Rhode Island
      </div>
    </footer>
  );
}
