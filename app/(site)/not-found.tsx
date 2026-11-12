import Link from "next/link";

export default function SiteNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24">
      <p className="eyebrow text-gold">404</p>
      <h1 className="mt-3 font-serif text-5xl">That page is not on the route.</h1>
      <p className="mt-4 text-lg text-mist">The town you want may still be served. Check the service area list, or send the address.</p>
      <div className="mt-6 flex gap-3">
        <Link href="/service-areas" className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-cream">
          Service areas
        </Link>
        <Link href="/contact" className="rounded-full border border-ink/20 px-4 py-2 text-sm font-semibold">
          Contact
        </Link>
      </div>
    </div>
  );
}
