import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";
import { CONTACT_EMAIL } from "@/lib/constants";
import type { FAQItem } from "@/data/faq";

export const metadata: Metadata = createPageMetadata({
  title: "Stormrespons — Akut Drönarinspektion av Elnät",
  description:
    "Akut stormskadeinspektion av elnät och kraftledningar. Snabb mobilisering efter storm. Kontakta GridDrone för akutinspektion.",
  path: "/stormrespons",
  keywords: [
    "stormskada elnät",
    "akut elnätsinspektion",
    "strömavbrott drönare skadekartläggning",
    "stormrespons elnät drönare",
  ],
});

const faqItems: FAQItem[] = [
  {
    question: "Hur snabbt kan ni vara på plats efter en storm?",
    answer:
      "Mobiliseringstiden beror på stormens omfattning, er geografiska placering och rådande väderförhållanden. Kontakta oss direkt för att diskutera aktuellt beredskapsläge.",
  },
  {
    question: "Kan drönare flyga direkt efter en storm?",
    answer:
      "Flygning kräver att vindförhållandena är inom säkra gränsvärden. Vi bevakar väderdata löpande och startar inspektion så snart det är säkert.",
  },
  {
    question: "Vad får vi levererat?",
    answer:
      "En prioriterad skadeöversikt med GPS-märkta skadelägen, klassificerade efter allvarlighetsgrad. Rapporten fungerar som beslutsunderlag för era reparationsteam.",
  },
];

export default function StormresponsPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[{ name: "Stormrespons" }]}
      />
      <JsonLd type="Service" servicePath="/stormrespons" />

      {/* Hero with prominent contact */}
      <section className="gradient-hero py-12 sm:py-16 md:py-24">
        <div className="container-section text-center">
          <p className="eyebrow text-brand-200">Akuttjänst</p>
          <h1 className="heading-1 mt-3 text-white">
            Stormrespons — akut drönarinspektion
          </h1>
          <p className="body-text mx-auto mt-4 max-w-2xl text-blue-100">
            Snabb skadekartläggning av elnät och kraftledningar efter storm.
            Prioriterad skadeöversikt som beslutsunderlag för reparationsinsatser.
          </p>

          <div className="mt-8 sm:mt-10">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2.5 rounded-2xl bg-white px-6 py-3 text-base font-bold text-brand-700 shadow-elevated transition-transform hover:scale-105 sm:gap-3 sm:px-8 sm:py-4 sm:text-lg"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/kontakt" className="btn-primary bg-white/10 text-white hover:bg-white/20">
              Kontaktformulär
            </Link>
            <Link href="/tjanster/stormskadeinspektion" className="text-sm font-medium text-blue-200 hover:text-white">
              Om stormskadeinspektion →
            </Link>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[{ name: "Stormrespons" }]} />

      {/* Vad vi levererar */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="section-intro">
            <h2 className="heading-2">Vad GridDrone levererar vid storm</h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 md:gap-6">
            {[
              {
                title: "Snabb mobilisering",
                desc: "Vi har beredskap för att mobilisera snabbt efter stormlarm, så snart vädret tillåter säker flygning.",
              },
              {
                title: "Systematisk flyginspektion",
                desc: "Drönare inspekterar drabbade ledningssträckor metodiskt. Alla skadelägen GPS-märks.",
              },
              {
                title: "Skadeklassificering",
                desc: "Skador klassificeras efter allvarlighetsgrad — kritiskt, brådskande eller planerat.",
              },
              {
                title: "Prioriterad rapport",
                desc: "Skadeöversikt som beslutsunderlag för era reparationsteam, levererad så snart inspektionen är klar.",
              },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="text-base font-semibold text-surface-900">{item.title}</h3>
                <p className="mt-2 text-sm text-surface-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beredskapsavtal */}
      <section className="section-padding bg-surface-50">
        <div className="container-section">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-2">Beredskapsavtal</h2>
            <p className="body-text mt-4">
              Vill ni säkerställa prioriterad tillgång vid stormskador? Kontakta
              oss för att diskutera ett beredskapsavtal eller underhållsabonnemang
              som inkluderar prioriterad stormrespons.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:justify-center sm:gap-4">
              <Link href="/kontakt" className="btn-primary">
                Kontakta oss
              </Link>
              <Link href="/tjanster/underhallsabonnemang" className="btn-secondary">
                Underhållsabonnemang
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} heading="Vanliga frågor om stormrespons" />

      <CTABand primaryHref="/kontakt" secondaryHref="/kontakt" />
    </>
  );
}
