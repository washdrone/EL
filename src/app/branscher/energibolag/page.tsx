import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "Drönartjänster för energibolag & elnätsleverantörer",
  description:
    "GridDrone utför drönarinspektioner för energibolag och elnätsleverantörer. Kraftledningsinspektion, termografering och vegetationskontroll.",
  path: "/branscher/energibolag",
  keywords: [
    "drönartjänster energibolag",
    "drönarinspektion elnätsbolag",
    "kraftledningsinspektion energibolag",
  ],
});

export default function EnergibolagPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Branscher", href: "/branscher/energibolag" },
          { name: "Energibolag" },
        ]}
      />
      <JsonLd
        type="Service"
        servicePath="/branscher/energibolag"
        serviceName="Drönarinspektioner för energibolag"
        serviceDescription="Professionell drönarinspektion av kraftledningar och elnät för energibolag och elnätsleverantörer i Sverige."
      />

      <Hero
        title="Drönarinspektioner för energibolag"
        subtitle="Energibolag & elnätsleverantörer"
        description="Vi hjälper elnätsbolag och energiföretag att inspektera sina kraftledningar, transformatorstationer och infrastruktur snabbare, säkrare och mer kostnadseffektivt med drönare."
        primaryCta={{ label: "Boka genomgång", href: "/kontakt" }}
        secondaryCta={{ label: "Se tjänster", href: "/tjanster" }}
      />

      <Breadcrumbs
        items={[
          { name: "Branscher" },
          { name: "Energibolag" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-section">
          <h2 className="heading-2">Anpassat för elnätsbolagens behov</h2>
          <p className="body-text mt-4 max-w-3xl">
            Energibolag har specifika krav på inspektion, dokumentation och
            rapportering. Vi levererar standardiserade data som passar direkt
            in i era nätförvaltningssystem.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Kraftledningsinspektion",
                desc: "Visuell inspektion av stolpar, isolatorer, traverser och ledningsgata. Georefererade bilder med EXIF-data.",
                href: "/tjanster/kraftledningsinspektion",
              },
              {
                title: "Termografering",
                desc: "Drönarbaserad värmekamera för att identifiera varmgångar, kontaktfel och överbelastade komponenter.",
                href: "/tjanster/termografering-kraftledning",
              },
              {
                title: "Vegetationskontroll",
                desc: "LiDAR-baserad kartläggning av vegetation längs kraftledningsgator. Identifiera riskträd.",
                href: "/tjanster/vegetationskontroll",
              },
              {
                title: "Transformatorstationer",
                desc: "Säker inspektion av transformatorstationer utan att personal behöver arbeta i farlig miljö.",
                href: "/tjanster/transformatorstation-inspektion",
              },
              {
                title: "BVLOS — lång räckvidd",
                desc: "Inspektera långa ledningssträckor utan ompositionering. Kräver BVLOS-tillstånd.",
                href: "/tjanster/bvlos-inspektion",
              },
              {
                title: "Akutinspektion",
                desc: "Snabb mobilisering vid storm, åskväder eller andra händelser som påverkar ert nät.",
                href: "/tjanster/kraftledningsinspektion/inspektionsprogram",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md"
              >
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-surface-500">{item.desc}</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-600">
                  Läs mer →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-50">
        <div className="container-section">
          <h2 className="heading-2">Kostnadseffektiv inspektion</h2>
          <p className="body-text mt-4 max-w-3xl">
            Drönare kan ge betydande kostnadsbesparingar per inspekterad
            kilometer jämfört med traditionell helikopterinspektion. Samtidigt
            får ni bättre data, högre upplösning och standardiserad dokumentation.
            Kontakta oss för en offert baserad på ert specifika behov.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="text-center">
              <p className="text-3xl font-bold text-brand-600">Lägre kostnad</p>
              <p className="mt-1 text-sm text-surface-500">Jämfört med helikopterinspektion</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-brand-600">GIS-redo</p>
              <p className="mt-1 text-sm text-surface-500">Data direkt i ert system</p>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
