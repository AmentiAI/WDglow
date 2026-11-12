import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Request received",
  robots: { index: false, follow: false },
};

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ area?: string }>;
}) {
  const { area } = await searchParams;
  const place = area ? decodeURIComponent(area) : "";
  return (
    <div className="mx-auto max-w-3xl px-5 py-20">
      <p className="eyebrow text-gold">Request received</p>
      <h1 className="mt-3 font-serif text-5xl leading-tight">We have it{place ? ` for ${place}` : ""}.</h1>
      <p className="mt-5 text-lg leading-8 text-mist">
        Expect a call or an email. In November that is usually the same day. If the date you asked for is gone, we will say so and offer the next real opening instead of a vague promise.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/services" className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-cream">
          Review services
        </Link>
        <Link href="/guides" className="rounded-full border border-ink/20 px-5 py-3 text-sm font-semibold">
          Read the guides
        </Link>
      </div>
    </div>
  );
}
