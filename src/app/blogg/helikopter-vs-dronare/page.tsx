import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "Helikopter vs Drönare — Kostnadsanalys Kraftledningsinspektion",
  description:
    "Jämförelse av helikopter och drönare för kraftledningsinspektion. Kostnad, effektivitet, datakvalitet och säkerhet.",
  path: "/blogg/helikopter-vs-dronare",
  keywords: [
    "helikopter vs drönare kraftledning kostnad",
    "helikopter drönare jämförelse inspektion",
    "kostnad kraftledningsinspektion",
  ],
});

export default function HelikopterVsDronarePage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Blogg", href: "/blogg" },
          { name: "Helikopter vs Drönare" },
        ]}
      />

      <section className="gradient-hero py-16 sm:py-20">
        <div className="container-section text-center">
          <p className="eyebrow text-brand-200">Blogg</p>
          <h1 className="heading-1 mt-3 text-white">
            Helikopter vs drönare — kostnadsanalys för kraftledningsinspektion
          </h1>
          <p className="body-text mx-auto mt-4 max-w-2xl text-blue-100">
            En jämförelse av helikopter och drönare som inspektionsmetod för
            kraftledningar. Vi tittar på kostnad, effektivitet, datakvalitet
            och säkerhet.
          </p>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { name: "Blogg", href: "/blogg" },
          { name: "Helikopter vs Drönare" },
        ]}
      />

      <article className="section-padding bg-white">
        <div className="content-article">
          <h2 className="heading-2">Två metoder — olika styrkor</h2>
          <p className="body-text mt-4">
            Kraftledningsinspektion har traditionellt utförts med helikopter
            eller markbaserade team. Under de senaste åren har drönare
            etablerats som ett tredje alternativ med egna fördelar och
            begränsningar.
          </p>
          <p className="body-text mt-4">
            Båda metoderna har sin plats — valet beror på ledningssträckans
            längd, terräng, krav på detaljnivå och tillgänglig budget. Här
            jämför vi de viktigaste faktorerna.
          </p>

          <h2 className="heading-2 mt-12">Kostnad per kilometer</h2>
          <p className="body-text mt-4">
            Helikopterinspektion kräver flygtid, certifierad pilot, underhåll
            och bränsle — kostnader som gör metoden förhållandevis dyr per
            inspekterad kilometer. Drönarinspektioner har lägre driftkostnad
            per kilometer, särskilt vid kortare till medellånga sträckor.
          </p>
          <p className="body-text mt-4">
            Den faktiska kostnaden varierar beroende på uppdragets
            förutsättningar. Använd vår{" "}
            <Link href="/roi-kalkylator" className="text-brand-600 hover:text-brand-700 underline">
              kostnadskalkylator
            </Link>{" "}
            för en uppskattning baserad på era parametrar.
          </p>

          <h2 className="heading-2 mt-12">Datakvalitet och upplösning</h2>
          <p className="body-text mt-4">
            Drönare kan flyga närmare ledningen och stolparna, vilket ger
            bilder med högre upplösning och mer detaljerad dokumentation.
            Helikoptrar håller typiskt större avstånd, vilket kan missa
            mindre defekter men ger snabb överblick över längre sträckor.
          </p>

          <h2 className="heading-2 mt-12">Säkerhet</h2>
          <p className="body-text mt-4">
            Drönare eliminerar risken för personal i luften nära
            spänningssatta ledningar. Vid incidenter är konsekvenserna
            mindre allvarliga jämfört med bemannade helikoptrar.
          </p>

          <h2 className="heading-2 mt-12">Effektivitet och räckvidd</h2>
          <p className="body-text mt-4">
            Helikoptrar har längre räckvidd och kan täcka mycket långa
            sträckor per dag. Drönare med BVLOS-kapacitet minskar detta
            gap men kan fortfarande vara begränsade vid extremt långa
            sammanhängande sträckor.
          </p>
          <p className="body-text mt-4">
            Drönare har dock fördelen av att kunna starta och landa nästan
            var som helst, utan krav på landningsplats eller flygbas.
          </p>

          <h2 className="heading-2 mt-12">Sammanfattning</h2>
          <p className="body-text mt-4">
            Valet mellan helikopter och drönare beror på uppdragets specifika
            krav. Drönare erbjuder typiskt lägre kostnad per kilometer, högre
            bildupplösning och bättre säkerhet — medan helikoptrar kan vara
            mer effektiva vid mycket långa sammanhängande sträckor.
          </p>
          <p className="body-text mt-4">
            Många organisationer väljer att kombinera metoderna — drönare
            för detaljinspektion och kortare sträckor, helikopter för
            översiktliga inspektioner av mycket långa sträckor.
          </p>

          <div className="mt-12 rounded-xl border border-brand-200 bg-brand-50 p-6">
            <h3 className="text-base font-semibold text-brand-800">Beräkna er besparing</h3>
            <p className="mt-2 text-sm text-brand-700">
              Använd vår kostnadskalkylator för att beräkna den uppskattade
              kostnadsbesparingen för ert specifika scenario.
            </p>
            <Link href="/roi-kalkylator" className="mt-4 inline-block text-sm font-medium text-brand-600 hover:text-brand-700">
              Öppna kostnadskalkylator →
            </Link>
          </div>
        </div>
      </article>

      <CTABand primaryHref="/kontakt" secondaryHref="/roi-kalkylator" />
    </>
  );
}
