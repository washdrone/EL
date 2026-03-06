import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "Järnvägsinspektion med drönare — möjligheter och krav",
  description:
    "Guide om drönarinspektion av järnvägskontaktledningar. Möjligheter, krav, säkerhet och fördelar jämfört med manuell inspektion.",
  path: "/blogg/jarnvagsinspektion-guide",
  keywords: [
    "järnvägsinspektion drönare",
    "vad kostar järnvägsinspektion med drönare",
    "kontaktledning inspektion guide",
    "drönare järnväg möjligheter",
  ],
});

export default function JarnvagsinspektionGuidePage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Blogg", href: "/blogg" },
          { name: "Järnvägsinspektion guide" },
        ]}
      />

      <section className="gradient-hero py-12 sm:py-16 md:py-20">
        <div className="container-section text-center">
          <p className="eyebrow text-brand-200">Blogg</p>
          <h1 className="heading-1 mt-3 text-white">
            Järnvägsinspektion med drönare — möjligheter och krav
          </h1>
          <p className="body-text mx-auto mt-4 max-w-2xl text-blue-100">
            En guide om hur drönare används för inspektion av
            järnvägskontaktledningar — vad som inspekteras, säkerhetskrav
            och fördelar jämfört med traditionella metoder.
          </p>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { name: "Blogg", href: "/blogg" },
          { name: "Järnvägsinspektion guide" },
        ]}
      />

      <article className="section-padding bg-white">
        <div className="content-article">
          <h2 className="heading-2">Kontaktledningssystemet</h2>
          <p className="body-text mt-4">
            Järnvägens kontaktledningssystem består av en rad komponenter
            som alla kräver regelbunden tillsyn: kontakttråd, bärlina,
            hängare, isolatorer, stolpar och fästanordningar.
          </p>
          <p className="body-text mt-4">
            Traditionellt inspekteras dessa av personal som arbetar i
            spårmiljö — ett arbete som kräver spåravstängning och
            innebär risker kopplade till tågtrafik och spänningssatta
            kontaktledningar.
          </p>

          <h2 className="heading-2 mt-10 sm:mt-12">Drönare som inspektionsverktyg</h2>
          <p className="body-text mt-4">
            Drönare flyger längs spåret och dokumenterar
            kontaktledningssystemets komponenter med högupplöst kamera.
            Inspektionen kan utföras under trafikfria tidsfönster,
            typiskt nattetid eller under planerade underhållsfönster.
          </p>

          <h2 className="heading-2 mt-10 sm:mt-12">Vad kan inspekteras?</h2>
          <ul className="mt-4 space-y-2">
            {[
              "Kontakttråd — slitage, höjdavvikelser och mekaniska skador",
              "Hängare och fästanordningar — lösa, saknade eller korroderade delar",
              "Isolatorer — sprickor, kontaminering och åldringsskador",
              "Stolpar och fundament — strukturellt skick och stabilitet",
              "Vegetation — träd och grenar som riskerar att påverka ledningen",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-surface-600">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="heading-2 mt-10 sm:mt-12">Säkerhet och samordning</h2>
          <p className="body-text mt-4">
            Drönarinspektion av järnväg kräver noggrann samordning med
            trafikledningen. Flygning sker under trafikfria tidsfönster
            och med säkerhetsavstånd till spänningssatta komponenter.
          </p>

          <h2 className="heading-2 mt-10 sm:mt-12">Fördelar</h2>
          <p className="body-text mt-4">
            De viktigaste fördelarna med drönarbaserad järnvägsinspektion:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Minskad personal i spårmiljö — färre personer exponerade för risk",
              "Mindre behov av spåravstängning — kortare underhållsfönster",
              "Georefererad dokumentation — bilder med GPS-data för systematisk uppföljning",
              "Trendanalys — jämför tillstånd mellan inspektionstillfällen",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-surface-600">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 sm:mt-12 rounded-xl border border-brand-200 bg-brand-50 p-5 sm:p-6">
            <h3 className="text-base font-semibold text-brand-800">Järnvägsinspektion med GridDrone</h3>
            <p className="mt-2 text-sm text-brand-700">
              Läs mer om vår tjänst för inspektion av järnvägskontaktledningar.
            </p>
            <Link href="/tjanster/jarnvagsinspektion" className="mt-4 inline-block text-sm font-medium text-brand-600 hover:text-brand-700">
              Järnvägsinspektion →
            </Link>
          </div>
        </div>
      </article>

      <CTABand primaryHref="/kontakt" secondaryHref="/tjanster/jarnvagsinspektion" />
    </>
  );
}
