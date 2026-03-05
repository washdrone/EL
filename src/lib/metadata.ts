import type { Metadata } from "next";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://example.com").replace(
  /\/+$/,
  ""
);
const SITE_NAME = "GridDrone";
const SITE_LOCALE = "sv_SE";
const DEFAULT_DESCRIPTION =
  "GridDrone utför professionell drönarinspektion av kraftledningar, elnät och energiinfrastruktur. EASA-utbildade piloter med BVLOS-behörighet. Termografi och LiDAR. Begär offert.";
const DEFAULT_OG_IMAGE = `${SITE_URL}/opengraph-image`;
const DEFAULT_TWITTER_IMAGE = `${SITE_URL}/twitter-image`;

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${SITE_URL}${canonicalPath}`;
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: {
      canonical: url,
      languages: {
        "sv-SE": url,
      },
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
    category: "technology",
    applicationName: SITE_NAME,
    creator: SITE_NAME,
    publisher: SITE_NAME,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      type: "website",
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} – ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [DEFAULT_TWITTER_IMAGE],
    },
  };
}

export {
  SITE_URL,
  SITE_NAME,
  SITE_LOCALE,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  DEFAULT_TWITTER_IMAGE,
};
