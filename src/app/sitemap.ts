import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://myraunet.no";
  const lastModified = "2026-06-24";

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/familiebedriften`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
