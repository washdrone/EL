import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/twitter-image*", "/opengraph-image*"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/twitter-image*", "/opengraph-image*"],
      },
    ],
    host: SITE_URL,
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
