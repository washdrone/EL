import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "BVLOS Drönare Kraftledning",
  description:
    "BVLOS-certifierad drönarinspektion av kraftledningar. Inspektera 15+ km per flygdag. Transportstyrelsen-godkänt. För avlägsna och svårtillgängliga ledningsnät.",
  path: "/tjanster/bvlos-inspektion",
  keywords: [
    "BVLOS drönare Sverige",
    "BVLOS kraftledning inspektion",
    "beyond visual line of sight drönare",
    "BVLOS certifiering",
  ],
});

const advantages = [
  {
    title: "15+ km per flygdag",
    desc: "Inspektera långa ledningssträckor på en enda dag — betydligt snabbare än konventionell drönarinspektion.",
  },
  {
    title: "Avlägsna och svårtillgängliga nät",
    desc: "Nå ledningar i skog, fjäll och områden utan vägaccess. Ingen markåtkomst krävs.",
  },
  {
    title: "Transportstyrelsen-godkänt",
    desc: "Vi innehar nödvändiga tillstånd och certifieringar för BVLOS-flygning enligt gällande regelverk.",
  },
  {
    title: "Kostnadseffektivt",
    desc: "Färre mobiliseringar och mindre personalbehov ger lägre kostnad per inspekterad kilometer.",
  },
];

export default function BvlosInspektionPage() {
  return (
    <>
      <JsonLd type="Service" servicePath="/tjanster/bvlos-inspektion" />
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Tjänster", href: "/tjanster" },
          { name: "BVLOS-inspektion" },
        ]}
      />

      <Hero
        title="BVLOS drönarinspektion — inspektera mil av ledning per dag"
        subtitle="BVLOS-inspektion"
        description="Med BVLOS-certifiering (Beyond Visual Line of Sight) kan vi inspektera kraftledningar utom synhåll, vilket gör det möjligt att täcka 15+ km per flygdag. Perfekt för avlägsna och svårtillgängliga ledningsnät."
        primaryCta={{ label: "Boka genomgång", href: "/kontakt" }}
        secondaryCta={{ label: "Begär offert", href: "/kontakt" }}
      />

      <Breadcrumbs
        items={[
          { name: "Tjänster", href: "/tjanster" },
          { name: "BVLOS-inspektion" },
        ]}
      />

      {/* Vad är BVLOS? */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="heading-2">Vad är BVLOS?</h2>
              <p className="body-text mt-6">
                BVLOS står för <em>Beyond Visual Line of Sight</em> och innebär
                att drönaren flyger utanför pilotens synfält. Detta kräver
                särskilda tillstånd från Transportstyrelsen, avancerad
                utrustning med redundanta system samt noggrann riskanalys och
                flygplanering.
              </p>
              <p className="body-text mt-4">
                För elnätsbolag innebär BVLOS en möjlighet att inspektera långa
                ledningssträckor i ett svep — oavsett terräng och
                tillgänglighet. Det minskar antalet mobiliseringar och ger en
                betydligt lägre kostnad per inspekterad kilometer.
              </p>
            </div>
            <div className="rounded-2xl border border-surface-200 bg-surface-50 p-8">
              <p className="eyebrow">Certifiering</p>
              <h3 className="mt-3 text-lg font-semibold text-surface-900">
                Transportstyrelsen-godkänd BVLOS-operatör
              </h3>
              <p className="mt-3 text-sm text-surface-500">
                Vi har genomgått den fullständiga certifieringsprocessen för
                BVLOS-flygning i Sverige. Våra tillstånd omfattar inspektion av
                linjär infrastruktur inklusive kraftledningar och
                distributionsnät.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-surface-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  Specifik kategori (STS) eller LUC-godkännande
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  Riskbedömning enligt SORA-metodik
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  Redundanta kommunikations- och navigeringssystem
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fördelar */}
      <section className="section-padding bg-surface-50">
        <div className="container-section">
          <div className="section-intro">
            <h2 className="heading-2">Fördelar med BVLOS-inspektion</h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2">
            {advantages.map((item) => (
              <div key={item.title} className="card p-6">
                <h3 className="text-base font-semibold text-surface-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-surface-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        primaryHref="/kontakt"
        secondaryHref="/kontakt"
      />
    </>
  );
}
