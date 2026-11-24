import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    {
      url: `${siteUrl}/Neha_Resume.pdf`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
