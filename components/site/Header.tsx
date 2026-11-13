"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CalendarIcon, ChevronDownIcon, ChevronRightIcon } from "@/components/site/Icons";
import { phoneHref } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/#reviews") return false;
  return href === "/" ? pathname === "/" : pathname.startsWith(href) || (href === "/services" && pathname === "/process");
}

export function Header({ phone, services }: { phone: string; services: { slug: string; name: string }[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black text-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:h-[5.5rem] sm:gap-4 sm:px-6">
        <Link href="/" className="min-w-0 shrink leading-none" aria-label="WD Glow home">
          <img src="/brand/logo.jpg" alt="WD Glow" className="h-12 w-auto max-w-full sm:h-[68px]" />
        </Link>
        <nav className="hidden items-center gap-7 xl:gap-9 lg:flex" aria-label="Primary">
          {links.map((link) =>
            link.href === "/services" ? (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 py-2 text-sm font-medium tracking-wide ${
                    isActive(pathname, link.href) ? "text-[#ff3b3b]" : "text-white/85 hover:text-[#ff3b3b]"
                  }`}
                >
                  {link.label}
                  <ChevronDownIcon className="h-3.5 w-3.5" />
                </Link>
                {isActive(pathname, link.href) ? <span className="glow-rule absolute inset-x-0 -bottom-0.5" /> : null}
                <div className="invisible absolute top-full left-1/2 w-72 -translate-x-1/2 pt-3 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <div className="rounded-xl border border-white/15 bg-black p-2 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block rounded-lg px-3 py-2 text-sm text-white/85 hover:bg-white/[0.06] hover:text-[#ff3b3b]"
                      >
                        {service.name}
                      </Link>
                    ))}
                    <div className="my-1 border-t border-white/10" />
                    <Link href="/process" className="block rounded-lg px-3 py-2 text-sm text-white/85 hover:bg-white/[0.06] hover:text-[#ff3b3b]">
                      Our process
                    </Link>
                    <Link href="/services" className="block rounded-lg px-3 py-2 text-sm font-semibold text-[#ff3b3b] hover:bg-white/[0.06]">
                      All services
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <span key={link.href} className="relative">
                <Link
                  href={link.href}
                  className={`block py-2 text-sm font-medium tracking-wide ${isActive(pathname, link.href) ? "text-[#ff3b3b]" : "text-white/85 hover:text-[#ff3b3b]"}`}
                >
                  {link.label}
                </Link>
                {isActive(pathname, link.href) ? <span className="glow-rule absolute inset-x-0 -bottom-0.5" /> : null}
              </span>
            ),
          )}
        </nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link href="/contact" className="btn-glow px-3.5 py-2.5 text-xs sm:px-4 sm:text-sm">
            <CalendarIcon className="hidden h-4 w-4 sm:block" />
            <span className="sm:hidden">Free quote</span>
            <span className="hidden sm:inline">Get a Free Quote</span>
            <ChevronRightIcon className="hidden h-4 w-4 sm:block" />
          </Link>
          <button
            type="button"
            className="rounded-lg border border-white/25 px-3.5 py-2.5 text-sm whitespace-nowrap lg:hidden"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open ? (
        <nav className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-white/10 bg-black px-5 py-4 lg:hidden" aria-label="Mobile">
          <div className="grid">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-2.5 font-display text-lg font-bold uppercase italic ${isActive(pathname, link.href) ? "text-[#ff4a4a]" : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/service-areas" className="py-2.5 font-display text-lg font-bold uppercase italic">
              Service areas
            </Link>
            <Link href="/process" className="py-2.5 font-display text-lg font-bold uppercase italic">
              Process
            </Link>
            <Link href="/faq" className="py-2.5 font-display text-lg font-bold uppercase italic">
              FAQ
            </Link>
            {phone ? (
              <a href={phoneHref(phone)} className="mt-2 btn-glow px-5 py-3 text-sm">
                Call {phone}
              </a>
            ) : null}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
