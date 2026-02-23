import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseSection = "/elnatsinspektion-med-dronare";
  const lastModified = new Date();

  const pages = [
    { path: "/", priority: 0.5, changeFrequency: "monthly" as const },
    { path: baseSection, priority: 1.0, changeFrequency: "weekly" as const },
    {
      path: `${baseSection}/luftledningar`,
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: `${baseSection}/inspektionsprogram`,
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: `${baseSection}/dataleveranser`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: `${baseSection}/metodik-kvalitet`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: `${baseSection}/datasakerhet`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      path: `${baseSection}/faq`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      path: `${baseSection}/case`,
      priority: 0.6,
      changeFrequency: "monthly" as const,
    },
    {
      path: `${baseSection}/kontakt`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/integritetspolicy",
      priority: 0.3,
      changeFrequency: "yearly" as const,
    },
  ];

  return pages.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
