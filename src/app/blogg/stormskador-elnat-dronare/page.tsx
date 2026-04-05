import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "Stormskador på elnät — så kartlägger drönare skador",
  description:
    "Hur drönare används för att kartlägga stormskador på elnät och kraftledningar. Process, fördelar och vad energibolag bör tänka på.",
  path: "/blogg/stormskador-elnat-dronare",
  keywords: [
    "stormskada elnät inspektion",
    "drönare skadekartläggning storm",
    "elnätsinspektion efter storm",
    "stormskador kraftledning",
  ],
});

export default function StormskadorBloggPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Blogg", href: "/blogg" },
          { name: "Stormskador & drönare" },
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
              Stormskador på elnät — så kartlägger drönare skador
            </h1>
            <p className="body-text mx-auto mt-5 max-w-2xl text-center text-slate-300">
              Hur drönare används för att snabbt och systematiskt kartlägga
              stormskador på elnät och kraftledningar.
            </p>
          </div>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { name: "Blogg", href: "/blogg" },
          { name: "Stormskador & drönare" },
        ]}
      />

      <article className="section-padding bg-white">
        <div className="content-article">
          <h2 className="heading-2">Stormar och elnätet</h2>
          <p className="body-text mt-4">
            Sverige drabbas regelbundet av stormar som skadar elnätet.
            Fallande träd, extrema vindar och isbildning kan riva ned
            kraftledningar, skada stolpar och orsaka omfattande
            strömavbrott.
          </p>
          <p className="body-text mt-4">
            Efter en storm är den första prioriteten att snabbt kartlägga
            skadeomfattningen och prioritera reparationsinsatser.
            Traditionellt har detta krävt att personal tar sig ut i
            terrängen — ofta under svåra förhållanden.
          </p>

          <h2 className="heading-2 mt-12">Drönare som kartläggningsverktyg</h2>
          <p className="body-text mt-4">
            Drönare erbjuder en snabb och säker metod för
            stormskadekartläggning. De kan inspektera mil av ledning på
            timmar istället för dagar, och personal behöver inte ta sig
            ut i farlig terräng med nedfallna ledningar och instabila
            träd.
          </p>

          <h2 className="heading-2 mt-12">Process vid stormskadeinspektion</h2>
          <p className="body-text mt-4">
            En typisk stormskadeinspektion med drönare följer dessa steg:
          </p>
          <ol className="mt-4 space-y-3">
            {[
              "Larm och mobilisering — elnätsbolaget kontaktar inspektionsföretaget",
              "Väderbevakning — flygning startar så snart förhållandena tillåter",
              "Systematisk flyginspektion — drönare flyger drabbade sträckor",
              "GPS-märkning av skador — alla fynd dokumenteras med koordinater",
              "Skadeklassificering — fynd prioriteras efter allvarlighetsgrad",
              "Rapport som beslutsunderlag — levereras till reparationsteam",
            ].map((item, i) => (
              <li key={item} className="flex items-start gap-3 text-sm text-surface-600">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-600">
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>

          <h2 className="heading-2 mt-12">Fördelar med drönare vid stormskador</h2>
          <p className="body-text mt-4">
            De viktigaste fördelarna med drönarbaserad stormskadekartläggning:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Snabbare överblick — stora områden kartläggs på timmar",
              "Säkrare — ingen personal i farlig terräng",
              "Systematisk — alla skador GPS-märks och dokumenteras",
              "Prioriteringsbar — skador klassificeras efter allvarlighetsgrad",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-surface-600">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 border-l-[3px] border-brand-500 bg-surface-50 p-6 sm:p-8">
            <h3 className="text-base font-semibold text-slate-900">GridDrone stormrespons</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Kontakta oss för att diskutera beredskapsavtal eller akuta
              stormskadeinspektioner.
            </p>
            <Link href="/tjanster/stormskadeinspektion" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700">
              Stormrespons →
            </Link>
          </div>
        </div>
      </article>

      <CTABand primaryHref="/kontakt" secondaryHref="/tjanster/stormskadeinspektion" />
    </>
  );
}
