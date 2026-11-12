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
        <div className="mx-auto flex h-24 max-w-6xl items-center justify-between gap-4 px-5">
          <Link href="/" className="leading-none" aria-label="WD Glow home">
            <img src="/brand/logo.jpg" alt="WD Glow" className="h-[72px] w-auto" />
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
          <div className="flex items-center gap-3">
            {phone ? (
              <a className="hidden text-sm text-white/80 hover:text-white xl:inline" href={phoneHref(phone)}>
                {phone}
              </a>
            ) : null}
            <Link href="/contact" className="rounded-full bg-[#e4c36a] px-4 py-2 text-sm font-semibold text-[#1a1408]">
              Free quote
            </Link>
            <button
              type="button"
              className="rounded-full border border-white/25 px-3 py-1.5 text-sm lg:hidden"
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
        {open ? (
          <nav className="border-t border-white/10 bg-black px-5 py-4 lg:hidden" aria-label="Mobile">
            <div className="grid gap-3">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="text-lg">
                  {link.label}
                </Link>
              ))}
              <Link href="/faq" className="text-lg">
                FAQ
              </Link>
              <Link href="/guides" className="text-lg">
                Guides
              </Link>
              {phone ? (
                <a href={phoneHref(phone)} className="text-[#e4c36a]">
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
