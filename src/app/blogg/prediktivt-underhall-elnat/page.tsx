import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "Prediktivt underhåll av elnät — från reaktivt till datadrivet",
  description:
    "Hur drönardata möjliggör prediktivt underhåll av kraftledningar och elnätskomponenter. Längre livslängd, färre avbrott och bättre resursutnyttjande.",
  path: "/blogg/prediktivt-underhall-elnat",
  keywords: [
    "prediktivt underhåll elnät",
    "datadrivet underhåll kraftledning",
    "drönardata underhållsplanering",
    "condition-based maintenance elnät",
  ],
});

export default function PrediktivtUnderhallPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Blogg", href: "/blogg" },
          { name: "Prediktivt underhåll av elnät" },
        ]}
      />

      <section className="relative overflow-hidden gradient-hero py-16 sm:py-20">
        <div className="absolute inset-0" aria-hidden="true">
          <svg className="absolute inset-0 h-full w-full opacity-[0.03]" viewBox="0 0 800 400" fill="none">
            <pattern id="blog-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="800" height="400" fill="url(#blog-grid)" />
          </svg>
        </div>
        <div className="container-section relative">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-brand-400" />
              <p className="eyebrow-cyan">Blogg</p>
              <div className="h-px w-8 bg-brand-400" />
            </div>
            <h1 className="heading-1 text-center text-white text-balance">
              Prediktivt underhåll av elnät — från reaktivt till datadrivet
            </h1>
            <p className="body-text mx-auto mt-5 max-w-2xl text-center text-slate-300">
              Hur drönardata möjliggör prediktivt underhåll av kraftledningar
              och elnätskomponenter — längre livslängd, färre avbrott och
              bättre resursutnyttjande.
            </p>
          </div>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { name: "Blogg", href: "/blogg" },
          { name: "Prediktivt underhåll av elnät" },
        ]}
      />

      <article className="section-padding bg-white">
        <div className="content-article">
          <h2 className="heading-2">Tre nivåer av underhåll</h2>
          <p className="body-text mt-4">
            Elnätsunderhåll kan delas in i tre nivåer med stigande mognad:
          </p>
          <ol className="mt-4 space-y-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            <li className="flex items-start gap-4">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center border border-brand-200 bg-brand-50 text-sm font-bold text-brand-700">1</span>
              <span><strong className="text-slate-900">Reaktivt underhåll</strong> — reparation sker efter att ett fel inträffat. Ledningen går sönder, sedan åtgärdas den. Kostsamt och med risk för långa avbrottstider.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center border border-brand-200 bg-brand-50 text-sm font-bold text-brand-700">2</span>
              <span><strong className="text-slate-900">Tidsbaserat underhåll</strong> — komponenter inspekteras och byts enligt schablonintervall, oavsett faktiskt skick. Innebär ofta att komponenter byts i förtid eller att dolda fel missas mellan inspektionerna.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center border border-brand-200 bg-brand-50 text-sm font-bold text-brand-700">3</span>
              <span><strong className="text-slate-900">Tillståndsbaserat (prediktivt) underhåll</strong> — åtgärder planeras utifrån faktisk anläggningsstatus. Data från inspektioner används för att förutsäga när underhåll behövs, innan fel uppstår.</span>
            </li>
          </ol>
          <p className="body-text mt-4">
            Majoriteten av svenska elnätsbolag befinner sig idag någonstans
            mellan nivå ett och två. Drönarinspektion skapar förutsättningarna
            att ta steget till nivå tre.
          </p>

          <h2 className="heading-2 mt-12">Drönardata som grund för prediktivt underhåll</h2>
          <p className="body-text mt-4">
            Prediktivt underhåll kräver data — detaljerad, georefererad och
            standardiserad data om varje komponents tillstånd. Det är precis
            vad drönarinspektion levererar.
          </p>
          <p className="body-text mt-4">
            Vid varje inspektionstillfälle dokumenteras varje stolpe,
            isolator, ledningssektion och fäste med högupplösta RGB-bilder
            och radiometriska termobilder. Varje bild är GPS-märkt och
            kopplad till rätt komponent i nätägarens förvaltningssystem.
          </p>
          <p className="body-text mt-4">
            Över tid byggs en digital tidsserie upp för varje komponent.
            Det gör det möjligt att identifiera trender — en isolator som
            gradvis försämras, en klämförbindning med stigande temperatur,
            eller en stolpe som långsamt lutar.
          </p>

          <h2 className="heading-2 mt-12">Från bilder till beslut</h2>
          <p className="body-text mt-4">
            Drönardata i sig är inte prediktivt underhåll. Det är
            kombinationen av konsekvent datainsamling, strukturerad
            klassificering och integration med underhållssystem som
            möjliggör datadriven planering:
          </p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 bg-brand-500" />
              <span><strong className="text-slate-900">Standardiserade flygprofiler</strong> — samma bildvinklar och avstånd vid varje inspektionstillfälle gör data jämförbar över tid.</span>
            </li>
            <li className="flex items-start gap-3 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 bg-brand-500" />
              <span><strong className="text-slate-900">Klassificering efter allvarlighetsgrad</strong> — fynd kategoriseras med tydliga prioritetsnivåer som styr underhållsplaneringen.</span>
            </li>
            <li className="flex items-start gap-3 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 bg-brand-500" />
              <span><strong className="text-slate-900">GIS-integration</strong> — data exporteras i format som kan importeras direkt i NIS/GIS-system, där det kopplas till befintlig anläggningsdata.</span>
            </li>
            <li className="flex items-start gap-3 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 bg-brand-500" />
              <span><strong className="text-slate-900">Termografisk trendanalys</strong> — radiometriska temperaturvärden från termobilder gör det möjligt att följa temperaturutvecklingen i klämförbindningar och kontaktpunkter.</span>
            </li>
          </ul>

          <h2 className="heading-2 mt-12">Ekonomiska och operativa fördelar</h2>
          <p className="body-text mt-4">
            Övergången från schablonbaserat till tillståndsbaserat underhåll
            påverkar både kostnader och driftsäkerhet:
          </p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 bg-brand-500" />
              <span><strong className="text-slate-900">Rätt åtgärd vid rätt tidpunkt</strong> — komponenter byts när data visar att det behövs, inte för tidigt och inte för sent.</span>
            </li>
            <li className="flex items-start gap-3 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 bg-brand-500" />
              <span><strong className="text-slate-900">Minskade oplanerade avbrott</strong> — genom att identifiera problem innan de leder till haveri reduceras antalet akuta utryckningar.</span>
            </li>
            <li className="flex items-start gap-3 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 bg-brand-500" />
              <span><strong className="text-slate-900">Bättre resursallokering</strong> — underhållsbudgeten riktas till de delar av nätet som faktiskt behöver åtgärdas, istället för att spridas jämnt.</span>
            </li>
            <li className="flex items-start gap-3 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 bg-brand-500" />
              <span><strong className="text-slate-900">Regulatorisk dokumentation</strong> — systematisk inspektionsdata underlättar rapportering till tillsynsmyndigheter och styrker att underhållsplanen är riskanpassad.</span>
            </li>
          </ul>

          <h2 className="heading-2 mt-12">Första steget</h2>
          <p className="body-text mt-4">
            Prediktivt underhåll behöver inte implementeras som ett stort
            förändringsprojekt. Första steget är att börja samla in
            standardiserad inspektionsdata — det vill säga att genomföra
            drönarinspektioner med konsekventa metoder och strukturerad
            leverans.
          </p>
          <p className="body-text mt-4">
            När den första datapunkten finns kan den jämföras med nästa
            inspektion. Redan efter två inspektionstillfällen börjar
            trender bli synliga. Varje efterföljande datapunkt ökar
            precisionen i underhållsplaneringen.
          </p>

          <div className="info-box">
            <h3 className="text-base font-semibold text-slate-900">GridDrone och prediktivt underhåll</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Vi levererar standardiserad, georefererad inspektionsdata i
              GIS-kompatibla format — grunden för tillståndsbaserat underhåll.
              Våra underhållsabonnemang ger regelbundna inspektioner för
              jämförbar data över tid.
            </p>
            <Link href="/tjanster/underhallsabonnemang" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700">
              Läs mer om underhållsabonnemang <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </article>

      <CTABand
        heading="Redo att bygga er datadrivna underhållsplan?"
        description="Kontakta oss för en genomgång av hur drönarinspektion kan integreras i ert underhållsarbete."
        primaryLabel="Boka genomgång"
        primaryHref="/kontakt"
        secondaryLabel="Se exempelrapport"
        secondaryHref="/exempelrapport"
      />
    </>
  );
}
