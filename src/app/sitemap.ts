import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  // Use a fixed date for stable lastModified values (update when content changes)
  const siteLastModified = new Date("2026-04-05");

  const pages = [
    // Homepage
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },

    // Service overview
    { path: "/tjanster", priority: 0.9, changeFrequency: "weekly" as const },

    // Service pages — Core infrastructure
    { path: "/tjanster/kraftledningsinspektion", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/tjanster/termografering-kraftledning", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/tjanster/transformatorstation-inspektion", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/tjanster/vegetationskontroll", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/tjanster/bvlos-inspektion", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/tjanster/stormskadeinspektion", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/tjanster/vindkraftinspektion", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/tjanster/jarnvagsinspektion", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/tjanster/underhallsabonnemang", priority: 0.8, changeFrequency: "monthly" as const },

    // Kraftledningsinspektion sub-pages
    { path: "/tjanster/kraftledningsinspektion/luftledningar", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/tjanster/kraftledningsinspektion/inspektionsprogram", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/tjanster/kraftledningsinspektion/dataleveranser", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/tjanster/kraftledningsinspektion/metodik-kvalitet", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/tjanster/kraftledningsinspektion/datasakerhet", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/tjanster/kraftledningsinspektion/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/tjanster/kraftledningsinspektion/case", priority: 0.6, changeFrequency: "monthly" as const },

    // Branch/Industry pages
    { path: "/branscher/energibolag", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/branscher/trafikverket", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/branscher/vindkraft", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/branscher/kommuner", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/branscher/forsakring", priority: 0.7, changeFrequency: "monthly" as const },

    // Location pages
    { path: "/platser/kraftledningsinspektion-stockholm", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/platser/kraftledningsinspektion-goteborg", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/platser/kraftledningsinspektion-malmo", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/platser/kraftledningsinspektion-norrland", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/platser/kraftledningsinspektion-dalarna", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/platser/vindkraftinspektion-skane", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/platser/jarnvagsinspektion-stockholm", priority: 0.6, changeFrequency: "monthly" as const },

    // Conversion & differentiation pages
    { path: "/roi-kalkylator", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/exempelrapport", priority: 0.8, changeFrequency: "monthly" as const },

    // Blog articles
    { path: "/blogg", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/blogg/helikopter-vs-dronare", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blogg/bvlos-tillstand-sverige", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blogg/termografering-elnat", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blogg/vegetationskontroll-kraftledning", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blogg/stormskador-elnat-dronare", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blogg/jarnvagsinspektion-guide", priority: 0.7, changeFrequency: "monthly" as const },

    // Company pages
    { path: "/kontakt", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/om-oss", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/certifieringar", priority: 0.7, changeFrequency: "monthly" as const },

    // Guides
    { path: "/guider/dronareinspektion-elnat", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/guider/termografering-kraftledningar", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/guider/dataleverans-gis-elnat", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/guider/bvlos-inspektion-elnat", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/guider/upphandling-dronareinspektion", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/guider/feltyper-kraftledningar", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/guider/komponenter-elnat", priority: 0.8, changeFrequency: "monthly" as const },

    // Comparisons
    { path: "/jamforelser/helikopter-vs-dronare-inspektion", priority: 0.8, changeFrequency: "monthly" as const },

    // Legal
    { path: "/integritetspolicy", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return pages.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: siteLastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
