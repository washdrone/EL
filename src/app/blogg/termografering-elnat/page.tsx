import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "Vad är termografering av elnät — guide för elnätsägare",
  description:
    "Komplett guide om termografering av elnät. Hur fungerar det, vad hittar det och varför är det viktigt för elnätsägare? Allt du behöver veta.",
  path: "/blogg/termografering-elnat",
  keywords: [
    "vad är termografering av elnät",
    "termografering elnät guide",
    "värmekamera kraftledning",
    "termografering elnätsägare",
  ],
});

export default function TermograferingElnatPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Blogg", href: "/blogg" },
          { name: "Termografering av elnät" },
        ]}
      />

      <section className="gradient-hero relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0" aria-hidden="true">
          <svg className="absolute inset-0 h-full w-full opacity-[0.03]" viewBox="0 0 800 400" fill="none">
            <pattern id="blog-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="800" height="400" fill="url(#blog-grid)" />
          </svg>
        </div>
        <div className="container-section relative">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-brand-400" />
              <p className="eyebrow-cyan">Blogg</p>
              <div className="h-px w-8 bg-brand-400" />
            </div>
            <h1 className="heading-1 text-center text-white text-balance">
              Vad är termografering av elnät?
            </h1>
            <p className="body-text mx-auto mt-5 max-w-2xl text-center text-slate-300">
              En guide om termografering av elnät — hur det fungerar, vad det
              kan hitta och varför det är en viktig del av elnätsunderhåll.
            </p>
          </div>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { name: "Blogg", href: "/blogg" },
          { name: "Termografering av elnät" },
        ]}
      />

      <article className="section-padding bg-white">
        <div className="content-article">
          <h2 className="heading-2">Grunderna i termografering</h2>
          <p className="body-text mt-4">
            Termografering innebär att använda en radiometrisk värmekamera
            för att mäta och visualisera temperaturskillnader på ytor.
            I elnätssammanhang monteras värmekameran på en drönare som
            flyger längs ledningar och vid stationer.
          </p>
          <p className="body-text mt-4">
            Varje pixel i bilden innehåller ett temperaturvärde, vilket
            möjliggör detaljerad analys av komponenter som isolatorer,
            skarvar, klämmor och transformatorer.
          </p>

          <h2 className="heading-2 mt-12">Vad kan termografering hitta?</h2>
          <p className="body-text mt-4">
            Temperaturavvikelser i elnätskomponenter kan indikera:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Varmgångar i skarvar och klämmor — tecken på kontaktfel eller korrosion",
              "Överbelastade transformatorer — för hög belastning relativt kapacitet",
              "Defekta isolatorer — interna fel som inte syns visuellt",
              "Kontaktmotstånd — försämrade kontaktytor i kopplingsanordningar",
              "Isoleringsfel i kablar — skadad eller åldrad isolering",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-surface-600">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="heading-2 mt-12">Drönare vs markbaserad termografi</h2>
          <p className="body-text mt-4">
            Traditionell termografi utförs från marken med handhållen
            värmekamera. Med drönare kan inspektionen utföras snabbare,
            nå komponenter som är svåra att se från marken och täcka
            större områden per session.
          </p>

          <h2 className="heading-2 mt-12">Hur ofta bör termografering utföras?</h2>
          <p className="body-text mt-4">
            Rekommendationen varierar beroende på nätets ålder, belastning
            och kritikalitet. Många elnätsbolag väljer att kombinera
            termografering med den årliga visuella inspektionen.
          </p>

          <div className="mt-10 border-l-[3px] border-brand-500 bg-surface-50 p-6 sm:p-8">
            <h3 className="text-base font-semibold text-slate-900">Termografering med GridDrone</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Läs mer om vår termograferingstjänst för kraftledningar och elnät.
            </p>
            <Link href="/tjanster/termografering-kraftledning" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700">
              Termografering →
            </Link>
          </div>
        </div>
      </article>

      <CTABand primaryHref="/kontakt" secondaryHref="/tjanster/termografering-kraftledning" />
    </>
  );
}
