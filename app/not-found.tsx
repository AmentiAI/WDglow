import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center bg-forest px-6 text-cream">
      <div className="max-w-lg">
        <p className="font-serif text-3xl tracking-[0.16em]">
          WD<span className="text-gold-soft">GLOW</span>
        </p>
        <h1 className="mt-6 font-serif text-5xl">That page is not on the route.</h1>
        <p className="mt-4 text-cream/75">Try the service areas, or send the town you actually need lit.</p>
        <div className="mt-6 flex gap-3">
          <Link href="/" className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink">
            Home
          </Link>
          <Link href="/service-areas" className="rounded-full border border-white/20 px-4 py-2 text-sm">
            Service areas
          </Link>
        </div>
      </div>
    </div>
  );
}
