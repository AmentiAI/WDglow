"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { phoneHref } from "@/lib/utils";

const links = [
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Areas" },
  { href: "/process", label: "Process" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
];

export function Header({ phone }: { phone: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black text-white">
      <div>
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-3 px-4 sm:h-24 sm:gap-4 sm:px-5">
          <Link href="/" className="min-w-0 shrink leading-none" aria-label="WD Glow home">
            <img src="/brand/logo.jpg" alt="WD Glow" className="h-12 w-auto max-w-full sm:h-[72px]" />
          </Link>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm ${pathname.startsWith(link.href) ? "text-[#f0d48a]" : "text-white hover:text-[#f0d48a]"}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            {phone ? (
              <a className="hidden text-sm whitespace-nowrap text-white/80 hover:text-white xl:inline" href={phoneHref(phone)}>
                {phone}
              </a>
            ) : null}
            <Link
              href="/contact"
              className="rounded-full bg-[#e4c36a] px-4 py-2.5 text-sm font-semibold whitespace-nowrap text-[#1a1408]"
            >
              Free quote
            </Link>
            <button
              type="button"
              className="rounded-full border border-white/25 px-4 py-2.5 text-sm whitespace-nowrap lg:hidden"
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
        {open ? (
          <nav className="border-t border-white/10 bg-black px-5 py-4 lg:hidden" aria-label="Mobile">
            <div className="grid">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="py-2.5 text-lg">
                  {link.label}
                </Link>
              ))}
              <Link href="/faq" className="py-2.5 text-lg">
                FAQ
              </Link>
              <Link href="/guides" className="py-2.5 text-lg">
                Guides
              </Link>
              {phone ? (
                <a href={phoneHref(phone)} className="py-2.5 text-lg text-[#e4c36a]">
                  Call {phone}
                </a>
              ) : null}
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
