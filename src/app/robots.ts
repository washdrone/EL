import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    // Samma åtkomst för alla robotar. En gemensam regelgrupp undviker
    // att separata regler för Google och AI-tjänster glider isär.
    // Bilder, video, /opengraph-image, /twitter-image och /_next/ måste
    // vara åtkomliga så att söktjänster kan läsa och rendera sidorna.
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
