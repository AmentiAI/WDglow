import Link from "next/link";
import type { Faq } from "@/lib/types";

export function Breadcrumbs({ items }: { items: { name: string; href: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-mist">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            {index === items.length - 1 ? (
              <span className="text-ink">{item.name}</span>
            ) : (
              <Link href={item.href} className="hover:text-ink">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.q} className="group py-4">
          <summary className="cursor-pointer list-none font-medium text-ink [&::-webkit-details-marker]:hidden">
            <span className="flex items-start justify-between gap-6">
              {item.q}
              <span aria-hidden="true" className="text-gold group-open:rotate-45">
                +
              </span>
            </span>
          </summary>
          <p className="mt-3 max-w-3xl leading-7 text-mist">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="max-w-3xl">
      <p className="eyebrow text-gold">{eyebrow}</p>
      <h1 className="mt-3 font-serif text-4xl leading-[1.02] tracking-tight text-ink md:text-6xl">{title}</h1>
      {lede ? <p className="mt-5 text-lg leading-8 text-mist">{lede}</p> : null}
    </header>
  );
}
