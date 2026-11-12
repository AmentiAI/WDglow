import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/queries";
import { places } from "@/lib/places";
import { services } from "@/lib/services";
import { siteUrl } from "@/lib/utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = siteUrl();
  const now = new Date();
  const staticPaths = [
    "",
    "/services",
    "/service-areas",
    "/service-areas/rhode-island",
    "/service-areas/connecticut",
    "/process",
    "/gallery",
    "/about",
    "/guides",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const posts = await getPublishedPosts();

  return [
    ...staticPaths.map((path, index) => ({
      url: `${url}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: index === 0 ? 1 : 0.7,
    })),
    ...services.map((service) => ({
      url: `${url}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...places.map((place) => ({
      url: `${url}/service-areas/${place.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: place.tier === "home" ? 0.9 : 0.6,
    })),
    ...posts.map((post) => ({
      url: `${url}/guides/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
