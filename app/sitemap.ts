/**
 * Sitemap à une entrée pour le site vitrine (page d’accueil unique).
 */

import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
