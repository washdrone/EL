import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "Vad är BVLOS och vilka tillstånd krävs i Sverige?",
  description:
    "Guide till BVLOS-flygning med drönare i Sverige. Vad innebär Beyond Visual Line of Sight, vilka tillstånd krävs och hur ansöker man hos Transportstyrelsen?",
  path: "/blogg/bvlos-tillstand-sverige",
  ogType: "article",
  keywords: [
    "BVLOS drönare tillstånd",
    "vad är BVLOS",
    "BVLOS Sverige regler",
    "Transportstyrelsen BVLOS tillstånd",
  ],
});

export default function BVLOSTillstandPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Blogg", href: "/blogg" },
          { name: "BVLOS-tillstånd Sverige" },
        ]}
      />
      <JsonLd
        type="Article"
        articleHeadline={"Vad är BVLOS och vilka tillstånd krävs i Sverige?"}
        articleDescription={
          "Guide till BVLOS-flygning med drönare i Sverige. Vad innebär Beyond Visual Line of Sight, vilka tillstånd krävs och hur ansöker man hos Transportstyrelsen?"
        }
        articlePath="/blogg/bvlos-tillstand-sverige"
        datePublished="2026-03-05"
        dateModified="2026-03-05"
      />

      <section className="gradient-hero py-16 sm:py-20">
        <div className="container-section text-center">
          <p className="eyebrow text-brand-200">Blogg</p>
          <h1 className="heading-1 mt-3 text-white">
            Vad är BVLOS och vilka tillstånd krävs i Sverige?
          </h1>
          <p className="body-text mx-auto mt-4 max-w-2xl text-blue-100">
            En guide till BVLOS-flygning (Beyond Visual Line of Sight) med
            drönare i Sverige — regelverk, tillståndskrav och vad det innebär
            för inspektionsuppdrag.
          </p>
          <p className="mt-4 text-sm text-blue-200">Uppdaterad: 5 mars 2026</p>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { name: "Blogg", href: "/blogg" },
          { name: "BVLOS-tillstånd Sverige" },
        ]}
      />

      <article className="section-padding bg-white">
        <div className="content-article">
          <h2 className="heading-2">Vad innebär BVLOS?</h2>
          <p className="body-text mt-4">
            BVLOS står för <strong>Beyond Visual Line of Sight</strong> —
            flygning bortom synhåll. Det innebär att drönarpiloten inte
            behöver ha visuell kontakt med drönaren under hela flygningen,
            till skillnad från standardflygning (VLOS) där drönaren måste
            vara synlig.
          </p>
          <p className="body-text mt-4">
            För inspektionsuppdrag innebär BVLOS-kapacitet att längre
            ledningssträckor kan inspekteras utan att piloter behöver
            ompositionera sig — en avgörande fördel vid inspektion av
            kraftledningar i svårtillgänglig terräng.
          </p>

          <h2 className="heading-2 mt-12">Regelverk i Sverige</h2>
          <p className="body-text mt-4">
            BVLOS-flygning regleras av EASA (European Union Aviation Safety
            Agency) och Transportstyrelsen i Sverige. Det kräver specifika
            tillstånd utöver standardbehörigheten för drönarpilot.
          </p>
          <p className="body-text mt-4">
            Relevanta begrepp inkluderar:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "PDRA (Pre-Defined Risk Assessment) — standardiserade riskbedömningar för specifika operationstyper",
              "SORA (Specific Operations Risk Assessment) — detaljerad riskbedömning för komplexa operationer",
              "STS (Standard Scenarios) — fördefinierade scenarier med kända risknivåer",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-surface-600">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="heading-2 mt-12">Krav för BVLOS-tillstånd</h2>
          <p className="body-text mt-4">
            Att erhålla BVLOS-tillstånd kräver bland annat:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Godkänd operativ manual och säkerhetsprocedurer",
              "Riskbedömning enligt PDRA eller SORA",
              "Redundanta kommunikationssystem på drönaren",
              "Utbildade piloter med relevant erfarenhet",
              "Teknisk dokumentation av drönarsystemet",
              "Eventuellt observatörssystem längs flygrutten",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-surface-600">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="heading-2 mt-12">Varför är BVLOS viktigt för elnätsinspektion?</h2>
          <p className="body-text mt-4">
            Kraftledningar sträcker sig ofta genom skog, fjäll och glesbygd
            där det är opraktiskt att ha piloten inom synhåll av drönaren.
            BVLOS-kapacitet gör det möjligt att inspektera hela
            ledningssträckor effektivt utan ompositionering.
          </p>
          <p className="body-text mt-4">
            BVLOS-certifiering är en differentierande faktor — få
            drönaroperatörer i Sverige har aktivt tillstånd för
            BVLOS-flygning i energiinfrastruktursammanhang.
          </p>

          <div className="mt-12 rounded-xl border border-brand-200 bg-brand-50 p-6">
            <h3 className="text-base font-semibold text-brand-800">GridDrone & BVLOS</h3>
            <p className="mt-2 text-sm text-brand-700">
              Läs mer om hur vi använder BVLOS-kapacitet för effektiv
              inspektion av kraftledningar och elnät.
            </p>
            <Link href="/tjanster/bvlos-inspektion" className="mt-4 inline-block text-sm font-medium text-brand-600 hover:text-brand-700">
              BVLOS-inspektion →
            </Link>
          </div>
        </div>
      </article>

      <CTABand primaryHref="/kontakt" secondaryHref="/tjanster/bvlos-inspektion" />
    </>
  );
}
