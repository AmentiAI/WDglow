import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/site/Blocks";
import { JsonLd } from "@/components/site/JsonLd";
import { renderMarkdown } from "@/lib/markdown";
import { getPostBySlug, getPublishedPosts } from "@/lib/queries";
import { breadcrumbSchema } from "@/lib/schema";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  const title = post.metaTitle || post.title;
  const description = post.metaDescription || post.excerpt;
  return {
    title,
    description,
    alternates: { canonical: `/guides/${post.slug}` },
    openGraph: { title, description, type: "article", url: `/guides/${post.slug}` },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-5 py-14">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: post.title, path: `/guides/${post.slug}` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.publishedAt?.toISOString(),
          dateModified: post.updatedAt.toISOString(),
          author: { "@type": "Organization", name: "WDGLOW" },
        }}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
          { name: post.title, href: `/guides/${post.slug}` },
        ]}
      />
      <header className="mt-8">
        <p className="text-sm text-mist">{post.publishedAt ? formatDate(post.publishedAt) : ""}</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">{post.title}</h1>
        <p className="mt-4 text-lg leading-8 text-mist">{post.excerpt}</p>
      </header>
      <div className="prose-wd mt-8" dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }} />
      <p className="mt-10">
        <Link href="/contact" className="font-semibold text-pine">
          Request a quote for your property
        </Link>
      </p>
    </article>
  );
}
