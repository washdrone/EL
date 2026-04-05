import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "AI-bildanalys vid drönarinspektion av elnät",
  description:
    "Hur maskininlärning och datorseende automatiserar feldetektering i drönarbilder av kraftledningar — och vad det innebär för nätägare.",
  path: "/blogg/ai-bildanalys-dronare-elnat",
  keywords: [
    "AI drönarinspektion elnät",
    "maskininlärning kraftledning",
    "automatisk feldetektering elnät",
    "datorseende elnätsinspektion",
  ],
});

export default function AiBildanalysPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Blogg", href: "/blogg" },
          { name: "AI-bildanalys vid drönarinspektion" },
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
              AI-bildanalys vid drönarinspektion av elnät
            </h1>
            <p className="body-text mx-auto mt-5 max-w-2xl text-center text-slate-300">
              Hur maskininlärning och datorseende automatiserar feldetektering
              i drönarbilder av kraftledningar — och vad det innebär för
              nätägare.
            </p>
          </div>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { name: "Blogg", href: "/blogg" },
          { name: "AI-bildanalys vid drönarinspektion" },
        ]}
      />

      <article className="section-padding bg-white">
        <div className="content-article">
          <h2 className="heading-2">Från manuell granskning till automatiserad analys</h2>
          <p className="body-text mt-4">
            Vid en typisk drönarinspektion av ett regionnät genereras tusentals
            högupplösta bilder — RGB och termiska. Att manuellt granska varje
            bild för att identifiera skadade isolatorer, korrosion, fågelbon
            eller termiska avvikelser är tidskrävande och beroende av
            inspektörens erfarenhet och dagsform.
          </p>
          <p className="body-text mt-4">
            Maskininlärning (ML) och datorseende (computer vision) erbjuder ett
            komplement till manuell granskning. Genom att träna algoritmer på
            stora mängder annoterad inspektionsdata kan systemet lära sig att
            känna igen och klassificera avvikelser automatiskt.
          </p>

          <h2 className="heading-2 mt-12">Vad kan AI detektera i drönarbilder?</h2>
          <p className="body-text mt-4">
            Moderna datorseendemodeller som tränats på elnätsinspektionsdata
            kan identifiera ett brett spektrum av avvikelser:
          </p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 bg-brand-500" />
              <span><strong className="text-slate-900">Isolatorskador</strong> — sprickor, avbrutna skärmar, ljusbågsöverspår och föroreningar som påverkar isolationsförmågan.</span>
            </li>
            <li className="flex items-start gap-3 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 bg-brand-500" />
              <span><strong className="text-slate-900">Korrosion och materialslitage</strong> — rostangrepp på traverser, fästen och stag som indikerar behov av byte.</span>
            </li>
            <li className="flex items-start gap-3 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 bg-brand-500" />
              <span><strong className="text-slate-900">Vegetation och fågelbon</strong> — objekt i närheten av ledare som utgör risk för kortslutning eller brand.</span>
            </li>
            <li className="flex items-start gap-3 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 bg-brand-500" />
              <span><strong className="text-slate-900">Termiska anomalier</strong> — varmgångar i klämförbindningar, kontaktpunkter och ledarskarvar som tyder på högt övergångsmotstånd.</span>
            </li>
            <li className="flex items-start gap-3 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 bg-brand-500" />
              <span><strong className="text-slate-900">Strukturella avvikelser</strong> — lutande stolpar, deformerade traverser och ledningsnedhäng utanför toleranser.</span>
            </li>
          </ul>

          <h2 className="heading-2 mt-12">Hur fungerar det i praktiken?</h2>
          <p className="body-text mt-4">
            Processflödet vid AI-stödd inspektion följer typiskt dessa steg:
          </p>
          <ol className="mt-4 space-y-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            <li className="flex items-start gap-4">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center border border-brand-200 bg-brand-50 text-sm font-bold text-brand-700">1</span>
              <span><strong className="text-slate-900">Datainsamling</strong> — drönaren samlar in bilder med standardiserade flygprofiler och bildvinklar. Konsekvent data är en förutsättning för tillförlitlig AI-analys.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center border border-brand-200 bg-brand-50 text-sm font-bold text-brand-700">2</span>
              <span><strong className="text-slate-900">Förbehandling</strong> — bilder georefereras, kvalitetskontrolleras och prepareras för analys. Suddiga eller felaktigt exponerade bilder filtreras bort.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center border border-brand-200 bg-brand-50 text-sm font-bold text-brand-700">3</span>
              <span><strong className="text-slate-900">AI-analys</strong> — tränade modeller analyserar varje bild och markerar misstänkta avvikelser med position och konfidensnivå.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center border border-brand-200 bg-brand-50 text-sm font-bold text-brand-700">4</span>
              <span><strong className="text-slate-900">Manuell verifiering</strong> — en erfaren inspektör granskar AI:ns flaggade fynd, bekräftar eller avfärdar dem, och klassificerar allvarlighetsgrad.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center border border-brand-200 bg-brand-50 text-sm font-bold text-brand-700">5</span>
              <span><strong className="text-slate-900">Leverans</strong> — verifierade fynd exporteras med åtgärdsrekommendationer till nätägarens förvaltningssystem.</span>
            </li>
          </ol>

          <h2 className="heading-2 mt-12">Fördelar för nätägare</h2>
          <p className="body-text mt-4">
            AI-stödd analys ersätter inte den mänskliga inspektören, men den
            förändrar arbetsflödet. Istället för att granska alla bilder
            sekventiellt kan inspektören fokusera på de bilder som AI:n flaggat
            som avvikande. Det ger flera fördelar:
          </p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 bg-brand-500" />
              <span><strong className="text-slate-900">Kortare handläggningstid</strong> — analysen av tusentals bilder kan reduceras avsevärt, vilket gör att åtgärdsunderlag kan levereras snabbare.</span>
            </li>
            <li className="flex items-start gap-3 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 bg-brand-500" />
              <span><strong className="text-slate-900">Konsekvent bedömning</strong> — en algoritm gör samma bedömning oavsett tid på dagen eller bildnummer. Det minskar risken att avvikelser missas på grund av trötthet.</span>
            </li>
            <li className="flex items-start gap-3 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 bg-brand-500" />
              <span><strong className="text-slate-900">Trendjämförelser</strong> — genom att analysera bilder från flera inspektionstillfällen kan AI identifiera gradvisa försämringar som är svåra att se i enskilda bilder.</span>
            </li>
          </ul>

          <h2 className="heading-2 mt-12">Begränsningar och förutsättningar</h2>
          <p className="body-text mt-4">
            AI-bildanalys är inte felfri. Modellens tillförlitlighet är direkt
            beroende av kvaliteten och representativiteten i träningsdatan.
            Feltyper som är sällsynta i träningsdata detekteras sämre. Ljus-
            och väderförhållanden påverkar bildkvaliteten och därmed analysens
            precision.
          </p>
          <p className="body-text mt-4">
            Därför är manuell verifiering fortfarande ett nödvändigt steg.
            AI:n fungerar bäst som ett filtreringsverktyg som låter inspektören
            fokusera sin tid där den gör mest nytta — inte som en ersättning
            för expertbedömning.
          </p>

          <div className="info-box">
            <h3 className="text-base font-semibold text-slate-900">GridDrone och AI-stödd analys</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Vi använder standardiserade flygprofiler och bildvinklar som
              säkerställer konsekvent data — en förutsättning för tillförlitlig
              AI-analys. Alla fynd verifieras manuellt innan leverans.
            </p>
            <Link href="/tjanster/kraftledningsinspektion" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700">
              Läs mer om kraftledningsinspektion <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </article>

      <CTABand
        heading="Vill ni veta mer om AI-stödd inspektion?"
        description="Kontakta oss för en genomgång av hur drönarinspektion kan effektivisera ert elnätsunderhåll."
        primaryLabel="Diskutera ert behov"
        primaryHref="/kontakt"
        secondaryLabel="Se exempelrapport"
        secondaryHref="/exempelrapport"
      />
    </>
  );
}
