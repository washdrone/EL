import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";
import ROICalculator from "./ROICalculator";

export const metadata: Metadata = createPageMetadata({
  title: "Kostnadskalkylator — drönarinspektion vs helikopter",
  description:
    "Jämför den uppskattade kostnaden för kraftledningsinspektion med drönare, helikopter eller manuell metod. Interaktiv kalkylator med transparenta antaganden.",
  path: "/roi-kalkylator",
  keywords: [
    "kostnad kraftledningsinspektion",
    "helikopter vs drönare kostnad",
    "drönarinspektion kostnad per km",
    "kostnadskalkylator elnätsinspektion",
    "besparing drönarinspektion kraftledning",
    "jämförelse helikopter drönare inspektion",
    "pris inspektion kraftledning",
  ],
});

export default function KostnadskalkylatorPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[{ name: "Kostnadskalkylator", href: "/roi-kalkylator" }]}
      />

      {/* ── HERO ── */}
      <section className="gradient-hero py-16 sm:py-20">
        <div className="container-section text-center">
          <p className="eyebrow text-brand-200">Kostnadskalkylator</p>
          <h1 className="heading-1 mt-3 text-white text-balance">
            Jämför kostnaden — drönarinspektion vs traditionella metoder
          </h1>
          <p className="body-text mx-auto mt-4 max-w-2xl text-blue-100">
            Uppskatta hur kostnaden för kraftledningsinspektion med drönare
            förhåller sig till helikopter eller manuell inspektion. Alla
            beräkningar sker lokalt i din webbläsare — ingen data skickas.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ name: "Kostnadskalkylator" }]} />

      {/* ── INTRO ── */}
      <section className="section-padding bg-white pb-0 sm:pb-0 lg:pb-0">
        <div className="container-section">
          <div className="mx-auto max-w-3xl">
            <h2 className="sr-only">Om kalkylatorn</h2>
            <p className="body-text">
              Kalkylatorn nedan ger en uppskattad jämförelse av årskostnaden
              för kraftledningsinspektion med traditionella metoder jämfört med
              drönare. Värdena bygger på generella branschuppskattningar — inte
              leverantörsspecifika priser. Använd resultatet som en indikation
              och{" "}
              <Link
                href="/kontakt"
                className="font-medium text-brand-600 underline underline-offset-2 hover:text-brand-700"
              >
                kontakta oss
              </Link>{" "}
              för en projektspecifik offert.
            </p>
          </div>
        </div>
      </section>

      {/* ── CALCULATOR ── */}
      <ROICalculator />

      {/* ── SEO / AEO CONTENT ── */}
      <section className="section-padding bg-surface-50">
        <div className="container-section">
          <div className="mx-auto max-w-3xl space-y-14">
            {/* --- Direct-answer: Vad kostar inspektion? --- */}
            <div>
              <h2 className="heading-2">
                Vad kostar inspektion av kraftledning?
              </h2>
              <p className="body-text mt-4">
                Kostnaden för att inspektera kraftledningar varierar beroende
                på metod, sträcka, terräng, ledningstyp och vilken typ av data
                som ska samlas in. Generella branschuppskattningar för
                planerad visuell inspektion i Sverige ligger i
                storleksordningen:
              </p>
              <ul className="mt-4 space-y-2 text-base leading-7 text-surface-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-surface-400" aria-hidden="true" />
                  <span>
                    <strong className="text-surface-800">Helikopter:</strong>{" "}
                    Uppskattningsvis 2 500–5 000 kr per km, beroende på
                    uppdragets omfattning.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-surface-400" aria-hidden="true" />
                  <span>
                    <strong className="text-surface-800">
                      Manuell / markbaserad:
                    </strong>{" "}
                    Uppskattningsvis 3 500–7 000 kr per km, ofta dyrare
                    per km i svårtillgänglig terräng.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-surface-400" aria-hidden="true" />
                  <span>
                    <strong className="text-surface-800">
                      Drönarinspektion:
                    </strong>{" "}
                    Uppskattningsvis 800–2 000 kr per km, beroende på
                    datakrav och ledningstyp.
                  </span>
                </li>
              </ul>
              <p className="body-text mt-4">
                Dessa siffror är generella schabloner. Den faktiska kostnaden
                för ett specifikt projekt beror på flera faktorer, inklusive
                mobilisering, antal stolpar per km, dokumentationskrav och
                geografiskt läge.
              </p>
            </div>

            {/* --- Direct-answer: När är drönare kostnadseffektivt? --- */}
            <div>
              <h2 className="heading-2">
                När är drönarinspektion mer kostnadseffektiv än helikopter?
              </h2>
              <p className="body-text mt-4">
                Drönarinspektion kan vara ett kostnadseffektivt alternativ
                till helikopter i flera vanliga scenarier:
              </p>
              <ul className="mt-4 space-y-2 text-base leading-7 text-surface-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                  <span>
                    Vid regelbundna inspektioner av region- och lokalnät där
                    kortare ledningssträckor gör helikoptermobilisering
                    relativt dyr.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                  <span>
                    När detaljerade närbilder och termisk data behövs — en
                    drönare kan flyga nära komponenter utan att kräva
                    frånkoppling.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                  <span>
                    I svårtillgänglig terräng där manuell inspektion kräver
                    tunga fordon eller klättring.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                  <span>
                    Vid hög inspektionsfrekvens — upprepade drönarinspektion-
                    er har lägre marginalkostnad jämfört med helikopter.
                  </span>
                </li>
              </ul>
              <p className="body-text mt-4">
                Vilken metod som är mest kostnadseffektiv beror på uppdragets
                specifika förutsättningar. I vissa fall kan en kombination av
                metoder vara optimal.
              </p>
            </div>

            {/* --- Example scenario --- */}
            <div>
              <h2 className="heading-2">Exempelscenario</h2>
              <p className="body-text mt-4">
                En regional nätägare med 100 km luftledning som inspekteras
                en gång per år med helikopter har, enligt generella
                uppskattningar, en årskostnad i storleksordningen 250 000–
                500 000 kr. Samma sträcka inspekterad med drönare uppskattas
                till 80 000–200 000 kr per år, beroende på datakrav och
                ledningstyp. Den potentiella besparingen varierar alltså
                kraftigt beroende på förutsättningarna.
              </p>
              <p className="body-text mt-3 text-sm italic text-surface-500">
                Exemplet är en illustration baserad på generella
                branschuppskattningar och representerar inte ett specifikt
                kundprojekt.
              </p>
            </div>

            {/* --- Varför exakt offert skiljer sig --- */}
            <div>
              <h2 className="heading-2">
                Varför skiljer sig en offert från generella uppskattningar?
              </h2>
              <p className="body-text mt-4">
                Generella kostnadsuppskattningar baseras på breda
                branschgenomsnitt och tar inte hänsyn till de faktorer som
                styr den faktiska kostnaden i ett specifikt projekt. Vanliga
                faktorer som påverkar priset inkluderar:
              </p>
              <ul className="mt-4 space-y-2 text-base leading-7 text-surface-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-surface-400" aria-hidden="true" />
                  <span>
                    <strong className="text-surface-800">Ledningstyp:</strong>{" "}
                    Stamnät, regionnät och lokalnät har olika
                    inspektionskrav och tillgänglighet.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-surface-400" aria-hidden="true" />
                  <span>
                    <strong className="text-surface-800">Terräng:</strong>{" "}
                    Skog, fjäll och kustnära sträckor kräver olika
                    flygplanering och tid.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-surface-400" aria-hidden="true" />
                  <span>
                    <strong className="text-surface-800">Datakrav:</strong>{" "}
                    Visuell inspektion, termografering och LiDAR innebär
                    olika utrustning och bearbetningstid.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-surface-400" aria-hidden="true" />
                  <span>
                    <strong className="text-surface-800">
                      Mobilisering:
                    </strong>{" "}
                    Avstånd till ledningen och antal arbetsdagar påverkar
                    totalkostnaden.
                  </span>
                </li>
              </ul>
            </div>

            {/* --- FAQ-style section (visible HTML) --- */}
            <div>
              <h2 className="heading-2">Vanliga frågor om kalkylatorn</h2>

              <div className="mt-6 space-y-8">
                <div>
                  <h3 className="text-base font-semibold text-surface-900">
                    Hur beräknas besparingen i kalkylatorn?
                  </h3>
                  <p className="mt-2 text-base leading-7 text-surface-600">
                    Kalkylatorn multiplicerar ett uppskattat km-pris med
                    angiven sträcka och inspektionsfrekvens, för både den
                    valda traditionella metoden och drönarinspektion.
                    Skillnaden presenteras som en uppskattad årlig besparing.
                    Alla värden är generella schabloner — inte faktiska
                    leverantörspriser.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-surface-900">
                    Är siffrorna i kalkylatorn exakta?
                  </h3>
                  <p className="mt-2 text-base leading-7 text-surface-600">
                    Nej. Kalkylatorn ger en grov uppskattning baserad på
                    generella branschdata. Den faktiska kostnaden för ett
                    inspektionsprojekt beror på ledningstyp, terräng,
                    datakrav, mobilisering och andra projektspecifika
                    faktorer. Använd resultatet som en indikation —
                    inte som underlag för beslut utan kompletterande offert.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-surface-900">
                    Kan jag använda kalkylatorn för att jämföra leverantörer?
                  </h3>
                  <p className="mt-2 text-base leading-7 text-surface-600">
                    Kalkylatorn jämför inspektionsmetoder — inte
                    leverantörer. Km-priserna är branschgenomsnitt och
                    speglar inte en specifik leverantörs prissättning. För
                    att jämföra leverantörer krävs projektspecifika offerter.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-surface-900">
                    Hur får jag en exakt offert?
                  </h3>
                  <p className="mt-2 text-base leading-7 text-surface-600">
                    <Link
                      href="/kontakt"
                      className="font-medium text-brand-600 underline underline-offset-2 hover:text-brand-700"
                    >
                      Kontakta oss
                    </Link>{" "}
                    med uppgifter om ledningens längd, typ, geografiskt läge
                    och önskad data så återkommer vi med en projektspecifik
                    offert.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        heading="Vill ni veta den faktiska kostnaden för ert nät?"
        description="Kalkylatorn ger en uppskattning — vi ger er en exakt offert baserad på era förutsättningar."
        primaryLabel="Begär projektspecifik offert"
        primaryHref="/kontakt"
        secondaryLabel="Läs om våra tjänster"
        secondaryHref="/tjanster"
      />
    </>
  );
}
