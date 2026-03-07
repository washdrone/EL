import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";
import type { FAQItem } from "@/data/faq";

export const metadata: Metadata = createPageMetadata({
  title: "Termografering av kraftledningar & elnät",
  description:
    "Drönarbaserad termografering av elnät, transformatorstationer och kraftledningar. Radiometrisk värmekamera med hög termisk upplösning. Förhindra driftstopp.",
  path: "/tjanster/termografering-kraftledning",
  keywords: [
    "termografering kraftledning",
    "termografering elnät drönare",
    "värmekamera kraftledning",
    "varmgång elnät",
  ],
});

const faqItems: FAQItem[] = [
  {
    question: "Vad är termografering av elnät?",
    answer:
      "Termografering innebär att använda en värmekamera (radiometrisk IR-kamera) monterad på en drönare för att identifiera temperaturavvikelser i elnätskomponenter. Varmgångar kan tyda på kontaktfel, överbelastning eller materialutmattning.",
  },
  {
    question: "Hur ofta bör termografering utföras?",
    answer:
      "Rekommendationen är minst en gång per år för kritiska nätdelar. Många elnätsbolag väljer att kombinera termografering med den årliga visuella inspektionen.",
  },
  {
    question: "Vad kan värmekameran upptäcka?",
    answer:
      "Varmgångar i skarvar och klämmor, överbelastade transformatorer, defekta isolatorer med interna fel, kontaktfel i kopplingsanordningar och temperaturskillnader som indikerar materialutmattning.",
  },
  {
    question:
      "Vad är skillnaden mellan visuell inspektion och termografi?",
    answer:
      "Visuell inspektion hittar synliga skador som korrosion, sprickor och mekaniskt slitage. Termografi upptäcker dolda elektriska och termiska fel som inte syns med blotta ögat, exempelvis interna isolatorfel och kontaktmotstånd.",
  },
];

const findings = [
  {
    title: "Varmgångar i skarvar",
    desc: "Identifiera överhettade skarvar och klämmor innan de leder till avbrott.",
  },
  {
    title: "Överbelastade komponenter",
    desc: "Upptäck transformatorer och komponenter som arbetar över sin kapacitet.",
  },
  {
    title: "Defekta isolatorer",
    desc: "Hitta interna isolatorfel som inte syns vid visuell inspektion.",
  },
  {
    title: "Kontaktfel",
    desc: "Lokalisera kontaktmotstånd i kopplingsanordningar och anslutningar.",
  },
];

const benefits = [
  {
    title: "Snabbare än markbaserad",
    desc: "Drönaren täcker stora områden på kort tid jämfört med manuell termografering från marken.",
  },
  {
    title: "Ingen frånkoppling krävs",
    desc: "Inspektionen utförs under drift — inga kostsamma driftstopp eller frånkopplingar.",
  },
  {
    title: "Radiometrisk data för analys",
    desc: "Varje pixel innehåller temperaturvärden som kan analyseras i efterhand med professionell mjukvara.",
  },
];

export default function TermograferingKraftledningPage() {
  return (
    <>
      <JsonLd type="Service" servicePath="/tjanster/termografering-kraftledning" />
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Tjänster", href: "/tjanster" },
          { name: "Termografering" },
        ]}
      />
      <JsonLd type="FAQPage" faqItems={faqItems} />

      <Hero
        title="Termografering av kraftledningar & elnät"
        subtitle="Termografering med drönare"
        description="Upptäck hotspots och varmgångar innan de leder till driftstopp. Med radiometrisk värmekamera monterad på drönare inspekterar vi elnät, transformatorstationer och kraftledningar snabbt och säkert."
        primaryCta={{ label: "Boka genomgång", href: "/kontakt" }}
        secondaryCta={{ label: "Begär offert", href: "/kontakt" }}
      />

      <Breadcrumbs
        items={[
          { name: "Tjänster", href: "/tjanster" },
          { name: "Termografering" },
        ]}
      />

      {/* Vad hittar termografering? */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="section-intro">
            <h2 className="heading-2">Vad hittar termografering?</h2>
            <p className="body-text mt-4">
              Värmekameran avslöjar dolda fel som inte syns vid visuell
              inspektion. Här är de vanligaste fynden.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2">
            {findings.map((item) => (
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

      {/* Fördelar med drönarbaserad termografi */}
      <section className="section-padding bg-surface-50">
        <div className="container-section">
          <div className="section-intro">
            <h2 className="heading-2">
              Fördelar med drönarbaserad termografi
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-3">
            {benefits.map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-base font-semibold text-surface-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-surface-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={faqItems} heading="Vanliga frågor om termografering" />

      <CTABand
        primaryHref="/kontakt"
        secondaryHref="/kontakt"
      />
    </>
  );
}
