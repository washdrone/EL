import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "Guider — drönarinspektion av elnät & kraftledningar",
  description:
    "Guider om drönarinspektion av elnät: hur inspektionen fungerar, termografering, BVLOS, feltyper, komponenter, dataleverans i GIS-format och upphandling.",
  path: "/guider",
  keywords: [
    "guide drönarinspektion elnät",
    "guide termografering kraftledning",
    "upphandling drönarinspektion",
  ],
});

const guides = [
  {
    label: "Vad är drönarinspektion av elnät?",
    href: "/guider/dronareinspektion-elnat",
    description:
      "Komplett guide om hur drönarinspektion fungerar, vilka fel som upptäcks och hur data levereras.",
  },
  {
    label: "Termografering av kraftledningar",
    href: "/guider/termografering-kraftledningar",
    description:
      "Hur radiometrisk värmekamera identifierar varmgångar, kontaktmotstånd och dolda fel.",
  },
  {
    label: "BVLOS-inspektion av elnät",
    href: "/guider/bvlos-inspektion-elnat",
    description:
      "Inspektion bortom synhåll — tillstånd, teknik, riskbedömning (SORA/PDRA) och tillämpningar.",
  },
  {
    label: "Dataleverans och GIS",
    href: "/guider/dataleverans-gis-elnat",
    description:
      "Leveransformat: GeoTIFF, shapefiler, SWEREF99 TM och integration med nätförvaltningssystem.",
  },
  {
    label: "Feltyper i kraftledningar",
    href: "/guider/feltyper-kraftledningar",
    description:
      "Vilka fel och skador som upptäcks — varmgångar, isolatorfel, korrosion, trådbrott och vegetation.",
  },
  {
    label: "Komponenter i elnät",
    href: "/guider/komponenter-elnat",
    description:
      "Vad som inspekteras — stolpar, isolatorer, ledningslinor, traverser, fästen och ledningsgata.",
  },
  {
    label: "Upphandla drönarinspektion",
    href: "/guider/upphandling-dronareinspektion",
    description:
      "Kravspec, utvärderingskriterier, leveransformat och avtalsupplägg för nätägare.",
  },
  {
    label: "Ordlista",
    href: "/guider/ordlista",
    description:
      "Tekniska termer förklarade — BVLOS, LiDAR, punktmoln, ställverk, tillståndsbaserat underhåll med mera.",
  },
];

export default function GuiderPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pb-24 lg:pb-0">
        <JsonLd
          type="BreadcrumbList"
          breadcrumbs={[{ name: "Guider", href: "/guider" }]}
        />
        <JsonLd
          type="ItemList"
          itemListName="Guider om drönarinspektion av elnät"
          itemListItems={guides.map((guide) => ({
            name: guide.label,
            href: guide.href,
          }))}
        />

        <Hero
          title="Guider om drönarinspektion av elnät"
          subtitle="Guider"
          description="Fördjupa er i drönarinspektion av elnät och kraftledningar — teknik, process, feltyper, dataleveranser och upphandling. Skrivna för nätägare, energibolag och beställare."
          primaryCta={{ label: "Begär offert", href: "/kontakt" }}
          secondaryCta={{ label: "Våra tjänster", href: "/tjanster" }}
          compact
        />

        <Breadcrumbs items={[{ name: "Guider" }]} />

        <section className="section-padding bg-white">
          <div className="container-section">
            <div className="section-intro">
              <h2 className="heading-2">Alla guider</h2>
              <p className="body-text mt-4">
                Guider och ordlista som täcker hela kedjan — från teknik och
                regelverk till dataleverans och upphandling.
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {guides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="card group p-6 transition-shadow hover:shadow-md"
                >
                  <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-600">
                    {guide.label}
                  </h3>
                  <p className="mt-2 text-sm text-surface-500">
                    {guide.description}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 group-hover:text-brand-700">
                    Läs guiden
                    <svg
                      className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTABand />
      </main>
      <Footer />
    </>
  );
}
