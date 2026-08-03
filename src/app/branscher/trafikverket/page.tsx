import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "Drönarinspektioner för järnväg & Trafikverket",
  description:
    "GridDrone utför drönarinspektion av järnvägskontaktledningar, banvallar och spåranläggningar. Säker inspektion utan trafikstörning.",
  path: "/branscher/trafikverket",
  keywords: [
    "Trafikverket drönarinspektion",
    "järnvägsinspektion drönare",
    "kontaktledning inspektion drönare",
    "drönarinspektion järnväg",
  ],
});

export default function TrafikverketPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Branscher", href: "/branscher" },
          { name: "Järnväg & Trafikverket", href: "/branscher/trafikverket" },
        ]}
      />
      <JsonLd
        type="Service"
        servicePath="/branscher/trafikverket"
        serviceName="Drönarinspektioner för järnväg"
        serviceDescription="Professionell drönarinspektion av järnvägskontaktledningar och spåranläggningar i Sverige."
      />

      <Hero
        title="Drönarinspektioner för järnväg & Trafikverket"
        subtitle="Järnväg & kontaktledning"
        description="Inspektion av kontaktledningssystem, banvallar och spåranläggningar med drönare. Säkrare, snabbare och utan påverkan på tågtrafiken."
        primaryCta={{ label: "Boka genomgång", href: "/kontakt" }}
        secondaryCta={{ label: "Se tjänster", href: "/tjanster/jarnvagsinspektion" }}
      />

      <Breadcrumbs
        items={[
          { name: "Branscher", href: "/branscher" },
          { name: "Järnväg & Trafikverket" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-section">
          <h2 className="heading-2">Anpassat för järnvägsinfrastruktur</h2>
          <p className="body-text mt-4 max-w-3xl">
            Järnvägssektorn ställer höga krav på säkerhet, dokumentation och
            samordning med trafikledningen. Vi anpassar våra inspektioner efter
            branschens specifika behov och regelverk.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Kontaktledningsinspektion",
                desc: "Inspektion av hängare, bärlina, kontakttråd, isolatorer och fästanordningar längs järnvägen.",
                href: "/tjanster/jarnvagsinspektion",
              },
              {
                title: "Termografering",
                desc: "Identifiera varmgångar och elektriska fel i kontaktledningssystemet med värmekamera.",
                href: "/tjanster/termografering-kraftledning",
              },
              {
                title: "BVLOS-inspektion",
                desc: "Inspektera långa järnvägssträckor effektivt med lång räckvidd.",
                href: "/tjanster/bvlos-inspektion",
              },
              {
                title: "Vegetationskontroll",
                desc: "Kartlägg vegetation som riskerar att påverka spår och kontaktledningar.",
                href: "/tjanster/vegetationskontroll",
              },
              {
                title: "Stormskadeinspektion",
                desc: "Snabb skadekartläggning av järnvägsinfrastruktur efter storm eller extremväder.",
                href: "/tjanster/stormskadeinspektion",
              },
              {
                title: "Underhållsabonnemang",
                desc: "Löpande inspektion med trendanalys och historisk jämförelsedata.",
                href: "/tjanster/underhallsabonnemang",
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
          <h2 className="heading-2">Fördelar för järnvägssektorn</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Minimerad trafikpåverkan",
                desc: "Inspektion utförs under trafikfria tidsfönster. Mindre behov av spåravstängning jämfört med manuell inspektion.",
              },
              {
                title: "Säkrare arbetsmetod",
                desc: "Personal behöver inte arbeta i spårmiljö nära spänningssatta kontaktledningar och tågtrafik.",
              },
              {
                title: "Strukturerad dokumentation",
                desc: "GPS-märkt bildmaterial och rapporter som kan integreras i underhållssystem.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-base font-semibold text-surface-900">{item.title}</h3>
                <p className="mt-2 text-sm text-surface-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
