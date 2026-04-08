import type { MetadataRoute } from "next";

const LAST_UPDATED = "2026-04-07";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://heyagentic.ai";
  return [
    {
      url: baseUrl,
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/signal-feed`,
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
