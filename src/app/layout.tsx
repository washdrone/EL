import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";
import JsonLd from "@/components/JsonLd";
import CookieConsent from "@/components/CookieConsent";
import {
  SITE_NAME,
  SITE_URL,
  SITE_LOCALE,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  DEFAULT_TWITTER_IMAGE,
} from "@/lib/metadata";
import "./globals.css";

// Self-hosted via next/font — no render-blocking request, no layout shift (CLS).
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: `Drönarinspektion av Elnät & Kraftledningar | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
    languages: {
      "sv-SE": SITE_URL,
    },
  },
  openGraph: {
    title: `Drönarinspektion av Elnät & Kraftledningar | ${SITE_NAME}`,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: SITE_LOCALE,
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} – Drönarinspektion av elnät och kraftledningar`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Drönarinspektion av Elnät & Kraftledningar | ${SITE_NAME}`,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_TWITTER_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={inter.variable} suppressHydrationWarning>
      <body
        className="min-h-screen bg-white font-sans text-surface-900 antialiased"
      >
        <a href="#main-content" className="skip-link">
          Hoppa till huvudinnehåll
        </a>
        <JsonLd type="Organization" />
        <JsonLd type="WebSite" />
        {children}
        {GA_MEASUREMENT_ID && (
          <>
            <link rel="preconnect" href="https://www.googletagmanager.com" />
            {/* Google Consent Mode v2 – must run before gtag.js loads */}
            <Script id="consent-default" strategy="beforeInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('consent', 'default', {
                  ad_storage: 'denied',
                  ad_user_data: 'denied',
                  ad_personalization: 'denied',
                  analytics_storage: localStorage.getItem('griddrone_cookie_consent') === 'accepted' ? 'granted' : 'denied',
                  wait_for_update: 500
                });
              `}
            </Script>

            {/* Google tag (gtag.js) – GA4 */}
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  send_page_view: true
                });
              `}
            </Script>
          </>
        )}
        <CookieConsent />
      </body>
    </html>
  );
}
