import type { MetadataRoute } from "next";
import { eventTypes, site, venues } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-10");

  const staticRoutes: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/lokaler", priority: 0.9 },
    { path: "/arrangement", priority: 0.9 },
    { path: "/priser", priority: 0.8 },
    { path: "/kontakt", priority: 0.8 },
    { path: "/overnatting", priority: 0.7 },
    { path: "/galleri", priority: 0.6 },
    { path: "/historie", priority: 0.6 },
    { path: "/familiebedriften", priority: 0.6 },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route.path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route.priority,
    })),
    ...venues.map((venue) => ({
      url: `${site.url}/lokaler/${venue.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...eventTypes.map((event) => ({
      url: `${site.url}/arrangement/${event.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
