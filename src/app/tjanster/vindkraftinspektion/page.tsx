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
  title: "Vindkraftinspektion med drönare",
  description:
    "Professionell inspektion av vindkraftverk med drönare. Rotorblad, torn, nacelle och åskledare. Snabbare och säkrare än manuell klättring.",
  path: "/tjanster/vindkraftinspektion",
  keywords: [
    "vindkraftinspektion drönare",
    "vindkraftverk inspektion",
    "rotorbladsinspektion",
    "inspektion vindkraftpark drönare",
  ],
});

const inspectionItems = [
  {
    title: "Rotorblad",
    desc: "Erosion på framkant, sprickor, blixtnedslag och delaminering. Högupplösta bilder av hela bladytan.",
  },
  {
    title: "Torn",
    desc: "Korrosion, ytskador, sprickor i svetsar och bultförband. Dokumentation från bas till topp.",
  },
  {
    title: "Nacelle",
    desc: "Tätningar, kablar, kylsystem och utvändig skada. Visuell kontroll utan klättring.",
  },
  {
    title: "Åskledare",
    desc: "Kontroll av åskledarreceptorer på bladspetsar och ledarsystem längs bladen.",
  },
];

const steps = [
  {
    step: "1",
    title: "Planering & riskbedömning",
    desc: "Vi analyserar vindkraftparken, planerar flygvägar och koordinerar med driftansvarig. Väderförhållanden bedöms för optimal bildkvalitet.",
  },
  {
    step: "2",
    title: "Drönarinspektion",
    desc: "Varje turbin inspekteras systematiskt — rotorblad, torn, nacelle och åskledare. Tidsåtgången beror på turbinstorlek och inspektionsomfattning.",
  },
  {
    step: "3",
    title: "Analys & rapport",
    desc: "Bildmaterialet granskas och klassificeras. Ni får en strukturerad inspektionsrapport med skadebedömning och åtgärdsrekommendationer.",
  },
];

const vindkraftFaqItems: FAQItem[] = [
  {
    question: "Vad inspekteras vid en vindkraftinspektion med drönare?",
    answer:
      "Rotorblad (framkantserosion, sprickor, blixtskador och delaminering), torn (korrosion, ytskador, sprickor i svetsar och bultförband), nacelle (tätningar, kablar, kylsystem och utvändiga skador) samt åskledarreceptorer på bladspetsar och ledarsystem längs bladen.",
  },
  {
    question: "Varför drönarinspektion i stället för manuell klättring?",
    answer:
      "Drönarinspektion är snabbare och säkrare än manuell klättring — ingen personal behöver arbeta på hög höjd. Hela bladytan dokumenteras med högupplösta bilder, och varje turbin inspekteras systematiskt enligt samma rutin.",
  },
  {
    question: "Hur lång tid tar inspektionen per vindkraftverk?",
    answer:
      "Tidsåtgången beror på turbinstorlek och inspektionsomfattning. Flygningen kräver acceptabla väderförhållanden — vind, nederbörd och sikt påverkar planeringen. Vid en genomgång uppskattar GridDrone tidsåtgången för er specifika park.",
  },
  {
    question: "Vad ingår i inspektionsrapporten?",
    answer:
      "Bildmaterialet granskas och klassificeras, och ni får en strukturerad inspektionsrapport med skadebedömning och åtgärdsrekommendationer. Dokumentationen kan användas som underlag för underhållsplanering och försäkringsärenden.",
  },
  {
    question: "Var i Sverige utförs vindkraftinspektioner?",
    answer:
      "GridDrone utför drönarinspektioner i hela Sverige och kan anpassa logistiken efter vindkraftparkens geografiska placering. Kontakta oss med antal turbiner och placering för en offert.",
  },
];

export default function VindkraftinspektionPage() {
  return (
    <>
      <JsonLd type="Service" servicePath="/tjanster/vindkraftinspektion" />
      <JsonLd type="FAQPage" faqItems={vindkraftFaqItems} />
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Tjänster", href: "/tjanster" },
          { name: "Vindkraftinspektion", href: "/tjanster/vindkraftinspektion" },
        ]}
      />

      <Hero
        image={{ src: "/images/services/rotorblad.webp", alt: "Rotorbladets yta och framkant med synligt ytslitage" }}
        title="Vindkraftinspektion med drönare"
        subtitle="Vindkraftinspektion"
        description="Professionell inspektion av vindkraftverk med drönare. Vi dokumenterar rotorblad, torn, nacelle och åskledare — snabbare och säkrare än manuell klättring."
        primaryCta={{ label: "Begär offert", href: "/kontakt?tjanst=vindkraft" }}
        secondaryCta={{ label: "Se exempelrapport", href: "/exempelrapport" }}
      />

      <Breadcrumbs
        items={[
          { name: "Tjänster", href: "/tjanster" },
          { name: "Vindkraftinspektion" },
        ]}
      />

      {/* Vad inspekteras */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="section-intro">
            <h2 className="heading-2">Vad inspekteras</h2>
            <p className="body-text mt-4">
              Varje vindkraftverk inspekteras systematiskt med fokus på de
              komponenter som är mest utsatta för slitage och skador.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2">
            {inspectionItems.map((item) => (
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

      {/* Så fungerar det */}
      <section className="section-padding bg-surface-50">
        <div className="container-section">
          <div className="section-intro">
            <h2 className="heading-2">Så fungerar det</h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-3">
            {steps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-lg font-bold text-brand-600">
                  {item.step}
                </div>
                <h3 className="mt-4 text-base font-semibold text-surface-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-surface-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ
        items={vindkraftFaqItems}
        heading="Vanliga frågor om vindkraftinspektion"
      />

      {/* Relaterat innehåll */}
      <section className="border-t border-surface-100 bg-surface-50 py-10">
        <div className="container-section text-center">
          <p className="text-sm text-surface-600">
            Se även <Link href="/platser/vindkraftinspektion-skane" className="text-brand-600 underline hover:text-brand-700">vindkraftinspektion i Skåne</Link> och vår sida för <Link href="/branscher/vindkraft" className="text-brand-600 underline hover:text-brand-700">vindkraftoperatörer</Link>.
          </p>
        </div>
      </section>

      <CTABand
        primaryHref="/kontakt?tjanst=vindkraft"
        secondaryHref="/exempelrapport" secondaryLabel="Se exempelrapport"
      />
    </>
  );
}
