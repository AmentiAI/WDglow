import Link from "next/link";
import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
} from "@/components/site/Icons";
import type { PublicSettings } from "@/lib/site";

export function Footer({ settings }: { settings: PublicSettings }) {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between md:gap-6 md:px-6 md:py-14">
        <Link href="/" aria-label="WD Glow home" className="shrink-0">
          <img src="/brand/logo.jpg" alt="WD Glow" className="h-16 w-auto sm:h-[72px]" />
        </Link>

        <div className="flex flex-1 flex-col gap-4 text-sm text-white/80 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-8 sm:gap-y-3">
          <p className="inline-flex items-start gap-2 sm:items-center">
            <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#ff3b3b] sm:mt-0" />
            <span>Serving Rhode Island &amp; Connecticut</span>
          </p>
          <a href={`mailto:${settings.email}`} className="inline-flex items-center gap-2 hover:text-white">
            <MailIcon className="h-4 w-4 shrink-0 text-[#ff3b3b]" />
            <span>{settings.email}</span>
          </a>
          <p className="inline-flex items-start gap-2 sm:items-center">
            <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#ff3b3b] sm:mt-0" />
            <span>{settings.hours}</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          {settings.facebook ? (
            <a
              href={settings.facebook}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/80 hover:border-[#ff3b3b] hover:text-white"
              aria-label="WD Glow on Facebook"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
          ) : null}
          {settings.instagram ? (
            <a
              href={settings.instagram}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/80 hover:border-[#ff3b3b] hover:text-white"
              aria-label="WD Glow on Instagram"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          ) : null}
          <Link href="/privacy" className="ml-1 text-xs text-white/45 hover:text-white/80">
            Privacy
          </Link>
          <Link href="/terms" className="text-xs text-white/45 hover:text-white/80">
            Terms
          </Link>
        </div>
      </div>
      <div className="relative border-t border-white/10 bg-black px-5 py-4 text-center text-[11px] tracking-[0.16em] text-white/40 uppercase">
        WD Glow · Westerly, Rhode Island
      </div>
    </footer>
  );
}
