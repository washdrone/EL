import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Elnätsinspektion med drönare | SkyGrid",
    template: "%s | SkyGrid",
  },
  description:
    "Professionell drönareinspektion av elnät och luftledningar. Standardiserad datainsamling för elnätsbolag, DSO och underhållsorganisationer.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen bg-white font-sans text-surface-900 antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Hoppa till huvudinnehåll
        </a>
        {children}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
