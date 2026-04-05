import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "Vegetationskontroll längs kraftledningar — vad säger lagen?",
  description:
    "Guide om vegetationskontroll längs kraftledningsgator. Regler, krav och hur drönare med LiDAR effektiviserar kartläggning av riskträd.",
  path: "/blogg/vegetationskontroll-kraftledning",
  keywords: [
    "vegetationskontroll kraftledning",
    "vad är vegetationskontroll kraftledning",
    "ledningsgata vegetation regler",
    "LiDAR vegetationskartläggning",
  ],
});

export default function VegetationskontrollBloggPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Blogg", href: "/blogg" },
          { name: "Vegetationskontroll kraftledning" },
        ]}
      />

      <section className="gradient-hero relative overflow-hidden py-16 sm:py-20">
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
              Vegetationskontroll längs kraftledningar — vad säger lagen?
            </h1>
            <p className="body-text mx-auto mt-5 max-w-2xl text-center text-slate-300">
              Guide om vegetationskontroll och ledningsgator — regelverk,
              ansvar och hur drönare med LiDAR effektiviserar kartläggningen.
            </p>
          </div>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { name: "Blogg", href: "/blogg" },
          { name: "Vegetationskontroll" },
        ]}
      />

      <article className="section-padding bg-white">
        <div className="content-article">
          <h2 className="heading-2">Varför vegetationskontroll?</h2>
          <p className="body-text mt-4">
            Träd och grenar som växer in i eller nära kraftledningar är en
            av de vanligaste orsakerna till strömavbrott i Sverige. Stormar
            förvärrar problemet — fallande träd kan riva ned ledningar och
            orsaka omfattande skador.
          </p>
          <p className="body-text mt-4">
            Elnätsägare har ansvar för att hålla ledningsgatan fri från
            vegetation som riskerar att påverka ledningen. Regelbunden
            vegetationskontroll är en central del av detta arbete.
          </p>

          <h2 className="heading-2 mt-12">Vad innebär ledningsgata?</h2>
          <p className="body-text mt-4">
            Ledningsgatan är det markområde där kraftledningen löper och
            där vegetation ska hållas på säkert avstånd. Bredden beror på
            spänningsnivå och ledningstyp.
          </p>

          <h2 className="heading-2 mt-12">Drönare och LiDAR för vegetationskontroll</h2>
          <p className="body-text mt-4">
            LiDAR (Light Detection and Ranging) monterat på drönare mäter
            avståndet från vegetation till ledning med centimeternoggrannhet.
            Detta ger en exakt kartbild av vilka träd som är inom kritiskt
            avstånd och behöver åtgärdas.
          </p>
          <p className="body-text mt-4">
            Fördelen jämfört med visuell bedömning från marken är precision
            och effektivitet — stora områden kan kartläggas snabbt och
            resultatet levereras som GIS-data direkt till nätägarens
            förvaltningssystem.
          </p>

          <h2 className="heading-2 mt-12">Prioritering och planering</h2>
          <p className="body-text mt-4">
            Med data från LiDAR-kartläggningen kan elnätsägare prioritera
            röjningsinsatser baserat på faktisk risk snarare än generella
            tidsintervall — de mest kritiska områdena åtgärdas först.
          </p>

          <div className="mt-10 border-l-[3px] border-brand-500 bg-surface-50 p-6 sm:p-8">
            <h3 className="text-base font-semibold text-slate-900">Vegetationskontroll med GridDrone</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Läs mer om vår LiDAR-baserade vegetationskontroll för kraftledningsgator.
            </p>
            <Link href="/tjanster/vegetationskontroll" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700">
              Vegetationskontroll →
            </Link>
          </div>
        </div>
      </article>

      <CTABand primaryHref="/kontakt" secondaryHref="/tjanster/vegetationskontroll" />
    </>
  );
}
