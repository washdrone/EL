import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";
import FAQ from "@/components/FAQ";
import type { FAQItem } from "@/data/faq";

export const metadata: Metadata = createPageMetadata({
  title: "BVLOS-inspektion av kraftledningar med drönare",
  description:
    "BVLOS drönarinspektion av kraftledningar. Inspektera långa ledningssträckor per flygdag. För avlägsna och svårtillgängliga ledningsnät.",
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
    title: "Långa sträckor per flygdag",
    desc: "Inspektera långa ledningssträckor på en enda dag — betydligt snabbare än konventionell drönarinspektion. Räckvidd beror på utrustning och förhållanden.",
  },
  {
    title: "Avlägsna och svårtillgängliga nät",
    desc: "Nå ledningar i skog, fjäll och områden utan vägaccess. Ingen markåtkomst krävs.",
  },
  {
    title: "Behöriga piloter",
    desc: "Våra piloter har BVLOS-behörighet enligt EASA-regelverket och flyger enligt gällande tillstånd.",
  },
  {
    title: "Kostnadseffektivt",
    desc: "Färre mobiliseringar och mindre personalbehov ger lägre kostnad per inspekterad kilometer.",
  },
];

const bvlosFaqItems: FAQItem[] = [
  {
    question: "Vad är BVLOS-inspektion av kraftledningar?",
    answer:
      "BVLOS (Beyond Visual Line of Sight) innebär att drönaren flyger bortom pilotens synhåll. Det gör det möjligt att inspektera långa ledningssträckor i ett svep utan ompositionering — särskilt värdefullt för avlägsna och svårtillgängliga ledningsnät i skog och fjäll.",
  },
  {
    question: "Vilka tillstånd krävs för BVLOS-flygning i Sverige?",
    answer:
      "BVLOS-flygning kräver särskilt tillstånd från Transportstyrelsen: godkännande i specifik kategori (STS/PDRA) eller LUC, riskbedömning enligt SORA-metodik samt redundanta kommunikations- och navigeringssystem. GridDrones piloter är utbildade och behöriga för BVLOS-flygning enligt EASA-regelverket.",
  },
  {
    question: "När är BVLOS-inspektion rätt metod?",
    answer:
      "BVLOS passar när långa sammanhängande ledningssträckor ska inspekteras, eller när nätet går genom skog, fjäll eller områden utan vägaccess. Färre mobiliseringar och mindre personalbehov ger lägre kostnad per inspekterad kilometer jämfört med konventionell drönarinspektion inom synhåll.",
  },
  {
    question: "Vad kostar en BVLOS-inspektion?",
    answer:
      "De viktigaste prisdrivarna är ledningens längd, terrängens tillgänglighet, inspektionstyp, krav på leveranser och analys samt mobiliseringsavstånd. Kontakta GridDrone med ungefärlig sträcka, nättyp och spänningsnivå för en offert baserad på era förutsättningar.",
  },
  {
    question: "Vilka data levereras vid en BVLOS-inspektion?",
    answer:
      "Standardleveransen omfattar georefererade högupplösta bilder, strukturerad rapport per stolpe/sektion och kartlager kompatibla med vanliga GIS-system. Exakt format och detaljnivå anpassas efter er specifikation.",
  },
];

export default function BvlosInspektionPage() {
  return (
    <>
      <JsonLd type="Service" servicePath="/tjanster/bvlos-inspektion" />
      <JsonLd type="FAQPage" faqItems={bvlosFaqItems} />
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Tjänster", href: "/tjanster" },
          { name: "BVLOS-inspektion", href: "/tjanster/bvlos-inspektion" },
        ]}
      />

      <Hero
        title="BVLOS drönarinspektion — inspektera långa ledningssträckor"
        subtitle="BVLOS-inspektion"
        description="Med BVLOS (Beyond Visual Line of Sight) kan vi inspektera kraftledningar utom synhåll, vilket gör det möjligt att täcka långa sträckor per flygdag. Perfekt för avlägsna och svårtillgängliga ledningsnät."
        primaryCta={{ label: "Begär offert", href: "/kontakt?tjanst=bvlos" }}
        secondaryCta={{ label: "Se exempelrapport", href: "/exempelrapport" }}
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
              <p className="eyebrow">Vår behörighet</p>
              <h3 className="mt-3 text-lg font-semibold text-surface-900">
                BVLOS-behöriga piloter
              </h3>
              <p className="mt-3 text-sm text-surface-500">
                Våra piloter är utbildade och behöriga för BVLOS-flygning
                enligt EASA-regelverket. Vi uppfyller de krav som ställs
                för inspektion av linjär infrastruktur.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-surface-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  Godkännande i specifik kategori (STS/PDRA) eller LUC
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

      <FAQ
        items={bvlosFaqItems}
        heading="Vanliga frågor om BVLOS-inspektion"
      />

      {/* Relaterat innehåll */}
      <section className="border-t border-surface-100 bg-surface-50 py-10">
        <div className="container-section text-center">
          <p className="text-sm text-surface-600">
            Fördjupning: läs vår guide om <Link href="/guider/bvlos-inspektion-elnat" className="text-brand-600 underline hover:text-brand-700">BVLOS-inspektion av elnät — regler, tillstånd och teknik</Link>.
          </p>
        </div>
      </section>

      <CTABand
        primaryHref="/kontakt?tjanst=bvlos"
        secondaryHref="/exempelrapport" secondaryLabel="Se exempelrapport"
      />
    </>
  );
}
