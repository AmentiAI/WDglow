import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/site/Blocks";
import { getPublishedPosts } from "@/lib/queries";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Christmas Light Installation Guides",
  description:
    "Practical guides on booking, color, coastal weather, install day, and cost for Christmas light installation in Rhode Island and Connecticut.",
  alternates: { canonical: "/guides" },
};

export default async function GuidesPage() {
  const posts = await getPublishedPosts();
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <PageIntro
        eyebrow="Guides"
        title="Notes on booking, color, weather, and what a quote is actually pricing."
        lede="Written for homeowners and property managers in Rhode Island and Connecticut. No package prices we would not defend."
      />
      <div className="mt-10 grid gap-6">
        {posts.length ? (
          posts.map((post) => (
            <article key={post.id} className="border-t border-ink py-6">
              <p className="text-sm text-mist">{post.publishedAt ? formatDate(post.publishedAt) : ""}</p>
              <h2 className="mt-2 font-serif text-3xl">
                <Link href={`/guides/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-mist">{post.excerpt}</p>
            </article>
          ))
        ) : (
          <p className="text-mist">Guides publish here once they are marked live in the admin.</p>
        )}
      </div>
    </div>
  );
}
