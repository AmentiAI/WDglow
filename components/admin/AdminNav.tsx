"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const groups: { label: string; links: [string, string][] }[] = [
  {
    label: "Work",
    links: [
      ["Dashboard", "/admin"],
      ["Leads", "/admin/leads"],
      ["Customers", "/admin/customers"],
      ["Quotes", "/admin/quotes"],
      ["Jobs", "/admin/jobs"],
      ["Schedule", "/admin/schedule"],
    ],
  },
  {
    label: "Website",
    links: [
      ["Gallery", "/admin/gallery"],
      ["Testimonials", "/admin/testimonials"],
      ["Guides", "/admin/guides"],
      ["Settings", "/admin/settings"],
    ],
  },
];

function isActive(pathname: string, href: string) {
  return href === "/admin" ? pathname === "/admin" : pathname.startsWith(href);
}

export function AdminNav() {
  const pathname = usePathname();
  const mobileNav = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = mobileNav.current;
    const active = nav?.querySelector<HTMLElement>("[aria-current=page]");
    if (nav && active) nav.scrollLeft = active.offsetLeft - nav.clientWidth / 2 + active.clientWidth / 2;
  }, [pathname]);

  return (
    <>
      <nav className="hidden px-3 md:block" aria-label="Admin">
        {groups.map((group) => (
          <div key={group.label} className="mb-6">
            <p className="px-3 pb-2 text-[11px] font-semibold tracking-[0.18em] text-white/35 uppercase">{group.label}</p>
            <div className="grid gap-0.5">
              {group.links.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  aria-current={isActive(pathname, href) ? "page" : undefined}
                  className={`rounded-lg px-3 py-2 text-sm transition ${
                    isActive(pathname, href)
                      ? "bg-[#e4c36a] font-semibold text-[#1a1408]"
                      : "text-white/75 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>
      <nav ref={mobileNav} className="relative flex gap-1.5 overflow-x-auto px-4 pb-3 md:hidden" aria-label="Admin">
        {groups.flatMap((group) => group.links).map(([label, href]) => (
          <Link
            key={href}
            href={href}
            aria-current={isActive(pathname, href) ? "page" : undefined}
            className={`shrink-0 rounded-full px-3.5 py-2 text-sm whitespace-nowrap ${
              isActive(pathname, href) ? "bg-[#e4c36a] font-semibold text-[#1a1408]" : "bg-white/[0.08] text-white/80"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </>
  );
}
