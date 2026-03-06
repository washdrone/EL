import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "Drönarinspektioner för industri & processindustri",
  description:
    "GridDrone utför drönarinspektion av industrianläggningar — rörledningar, elanläggningar, skorstenar och tak. Säker inspektion utan driftstopp.",
  path: "/branscher/industri",
  keywords: [
    "drönarinspektion industri",
    "industriinspektion drönare",
    "processindustri drönarinspektion",
    "rörledningsinspektion industri",
  ],
});

export default function IndustriPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Branscher", href: "/branscher/energibolag" },
          { name: "Industri" },
        ]}
      />
      <JsonLd
        type="Service"
        servicePath="/branscher/industri"
        serviceName="Drönarinspektioner för industri"
        serviceDescription="Professionell drönarinspektion av industrianläggningar, processindustri och elnät."
      />

      <Hero
        title="Drönarinspektioner för industri & processindustri"
        subtitle="Industri"
        description="Inspektion av industrianläggningar med drönare — rörledningar, elanläggningar, skorstenar, cisterner och tak. Säkert, effektivt och utan driftstopp."
        primaryCta={{ label: "Boka genomgång", href: "/kontakt" }}
        secondaryCta={{ label: "Se tjänster", href: "/tjanster" }}
      />

      <Breadcrumbs
        items={[
          { name: "Branscher" },
          { name: "Industri" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-section">
          <h2 className="heading-2">Inspektionstjänster för industrin</h2>
          <p className="body-text mt-4 max-w-3xl">
            Industrianläggningar har komplexa strukturer som kräver regelbunden
            inspektion. Drönare ger tillgång till svåråtkomliga platser utan
            ställningsbygge eller driftstopp.
          </p>

          <div className="mt-10 sm:mt-12 grid gap-5 sm:gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Rörledningsinspektion",
                desc: "Visuell och termisk kontroll av processledningar, ventilstationer och anslutningar.",
                href: "/tjanster/rorinspektioner",
              },
              {
                title: "Termografering",
                desc: "Identifiera överhettade komponenter, isoleringsfel och elektriska anomalier.",
                href: "/tjanster/termografering-kraftledning",
              },
              {
                title: "Transformatorstation",
                desc: "Inspektion av industriella transformatorstationer och elanläggningar.",
                href: "/tjanster/transformatorstation-inspektion",
              },
              {
                title: "Underhållsabonnemang",
                desc: "Schemalagd inspektion med trendanalys för planerat underhåll.",
                href: "/tjanster/underhallsabonnemang",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="card group transition-all hover:border-brand-200 hover:shadow-md"
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
          <h2 className="heading-2">Branscher vi arbetar med</h2>
          <div className="mx-auto mt-8 grid max-w-3xl gap-4 md:grid-cols-2">
            {[
              "Raffinaderier",
              "Kemisk industri",
              "Stålverk & metallindustri",
              "Pappersbruk & skogsindustri",
              "Livsmedelsproduktion",
              "Energiproduktion",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-surface-100 bg-white px-5 py-3">
                <div className="h-2 w-2 rounded-full bg-brand-500" />
                <span className="text-sm font-medium text-surface-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
