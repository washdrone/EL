import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages = [
    // Homepage
    { path: "/", priority: 0.5, changeFrequency: "monthly" as const },

    // Service overview
    { path: "/tjanster", priority: 0.7, changeFrequency: "monthly" as const },

    // Service pages (Tier 1)
    { path: "/tjanster/kraftledningsinspektion", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/tjanster/termografering-kraftledning", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/tjanster/vindkraftinspektion", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/tjanster/bvlos-inspektion", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/tjanster/transformatorstation-inspektion", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/tjanster/solcellspark-inspektion", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/tjanster/vegetationskontroll", priority: 0.8, changeFrequency: "monthly" as const },

    // Kraftledningsinspektion sub-pages
    { path: "/tjanster/kraftledningsinspektion/luftledningar", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/tjanster/kraftledningsinspektion/inspektionsprogram", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/tjanster/kraftledningsinspektion/dataleveranser", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/tjanster/kraftledningsinspektion/metodik-kvalitet", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/tjanster/kraftledningsinspektion/datasakerhet", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/tjanster/kraftledningsinspektion/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/tjanster/kraftledningsinspektion/case", priority: 0.6, changeFrequency: "monthly" as const },

    // Company pages
    { path: "/kontakt", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/om-oss", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/certifieringar", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blogg", priority: 0.6, changeFrequency: "weekly" as const },

    // Legal
    { path: "/integritetspolicy", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return pages.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
