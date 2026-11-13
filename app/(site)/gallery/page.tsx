import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/site/Blocks";
import { getPublishedGallery } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Christmas Light Installation Gallery",
  description:
    "Placeholder views of holiday lighting styles. WD Glow project photos from Rhode Island and Connecticut are added as installs are photographed.",
  alternates: { canonical: "/gallery" },
};

const placeholders = [
  {
    src: "/gallery/placeholder-roofline.jpg",
    title: "Roofline lighting",
    alt: "Placeholder photo of warm white lights along a colonial roofline. Not a WD Glow installation.",
  },
  {
    src: "/gallery/placeholder-tree.jpg",
    title: "Tree lighting",
    alt: "Placeholder photo of a tree wrapped in warm white lights. Not a WD Glow installation.",
  },
  {
    src: "/gallery/placeholder-cottage.jpg",
    title: "Coastal cottage",
    alt: "Placeholder photo of a shingle cottage with warm white eaves and a wreath. Not a WD Glow installation.",
  },
  {
    src: "/gallery/placeholder-entry.jpg",
    title: "Entry and walkway",
    alt: "Placeholder photo of a lit entry, garland, and walkway. Not a WD Glow installation.",
  },
  {
    src: "/gallery/placeholder-landscape.jpg",
    title: "Landscape lighting",
    alt: "Placeholder photo of a shingle house with roofline lights and wrapped shrubs. Not a WD Glow installation.",
  },
  {
    src: "/gallery/placeholder-storefront.jpg",
    title: "Storefront lighting",
    alt: "Placeholder photo of a brick storefront outlined in warm lights. Not a WD Glow installation.",
  },
];

export default async function GalleryPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const items = await getPublishedGallery();
  const categories = [...new Set(items.map((item) => item.category))];
  const visible = category ? items.filter((item) => item.category === category) : items;

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <PageIntro
        eyebrow="Our Gallery"
        title="Bringing Holiday Magic to Life"
        lede={
          items.length
            ? "Explore our collection of Christmas lighting installations and see how WD Glow transforms homes and businesses into stunning holiday displays."
            : "Explore Christmas lighting styles and see how WD Glow can transform homes and businesses into stunning holiday displays."
        }
      />
      <div className="mt-6 max-w-3xl space-y-4 text-lg leading-8 text-mist">
        <p>
          {items.length
            ? "From elegant roofline lighting to beautifully illuminated landscapes, every project reflects our commitment to quality, craftsmanship, and attention to detail."
            : "From elegant roofline lighting to beautifully illuminated landscapes, every WD Glow project is built on quality, craftsmanship, and attention to detail."}
        </p>
        <p>Get inspired for your own holiday transformation!</p>
      </div>
      {categories.length ? (
        <div className="mt-8 flex flex-wrap gap-2">
          <Link href="/gallery" className={`rounded-full border px-3 py-1.5 text-sm ${!category ? "border-[#ff3b3b] text-[#ff3b3b]" : "border-white/15 text-white"}`}>
            All
          </Link>
          {categories.map((item) => (
            <Link
              key={item}
              href={`/gallery?category=${encodeURIComponent(item)}`}
              className={`rounded-full border px-3 py-1.5 text-sm ${category === item ? "border-[#ff3b3b] text-[#ff3b3b]" : "border-white/15 text-white"}`}
            >
              {item}
            </Link>
          ))}
        </div>
      ) : null}
      {visible.length ? (
        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {visible.map((item) => (
            <figure key={item.id} className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.imageUrl} alt={item.alt} className="w-full" />
              <figcaption className="p-4 text-sm">
                <span className="font-medium text-white">{item.title}</span>
                <span className="mt-1 block text-mist">
                  {item.location} · {item.category}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <>
          <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {placeholders.map((item) => (
              <figure key={item.src} className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-[#111]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.src} alt={item.alt} className="w-full" />
                <figcaption className="p-4">
                  <span className="block font-medium text-white">{item.title}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <Link href="/contact" className="btn-glow mt-6 px-5 py-3 text-sm">
            Request a consult
          </Link>
        </>
      )}
    </div>
  );
}
