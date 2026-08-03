import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "Exempelrapport — Kraftledningsinspektion med Drönare",
  description:
    "Se hur en GridDrone-inspektionsrapport ser ut. Anonymiserad exempelrapport med fyndkort, GPS-koordinater och klassificeringar.",
  path: "/exempelrapport",
  keywords: [
    "kraftledningsinspektion rapport",
    "drönarinspektion dokumentation",
    "inspektionsrapport elnät",
    "exempelrapport drönarinspektion",
  ],
});

const reportSections = [
  {
    number: "1",
    title: "Försättsblad",
    desc: "Uppdragsdata — beställare, datum, inspekterad sträcka, väderförhållanden, piloter och utrustning.",
  },
  {
    number: "2",
    title: "Sammanfattning",
    desc: "Övergripande resultat med antal fynd per klassificering (kritiskt, brådskande, planerat, observation).",
  },
  {
    number: "3",
    title: "GPS-karta med fyndmarkeringar",
    desc: "Kartvy med samtliga fynd markerade med GPS-koordinater och färgkodning efter allvarlighetsgrad.",
  },
  {
    number: "4",
    title: "Fyndkort",
    desc: "Detaljerade fyndkort med foto, GPS-koordinat, klassificering, beskrivning och åtgärdsrekommendation.",
  },
  {
    number: "5",
    title: "Teknisk bilaga",
    desc: "Utrustningsspecifikationer, flygparametrar, kvalitetssäkringsprotokoll och dataintegritetsinformation.",
  },
];

const exampleFindings = [
  {
    classification: "Kritiskt",
    color: "bg-red-500",
    title: "Skadad isolator — stolpe [ANON-042]",
    desc: "Synlig spricka i porslinssolator, nedre skiva. Risk för genomslag vid belastning. Åtgärd: Byte rekommenderas omgående.",
    coord: "N 59.XXXX°, E 17.XXXX°",
    image: "/images/skadad-isolator.jpg",
    imageAlt: "Närbild på sprucken porslinssolator på kraftledningsstolpe",
  },
  {
    classification: "Brådskande",
    color: "bg-amber-500",
    title: "Vegetationsintrång — sektion [ANON-18–22]",
    desc: "Träd inom kritiskt avstånd till faslednig. Röjning rekommenderas inom 30 dagar.",
    coord: "N 59.XXXX°, E 18.XXXX°",
    image: "/images/vegetationsintrang.jpg",
    imageAlt: "Träd med varningsskylt nära kraftledning som kräver röjning",
  },
  {
    classification: "Planerat",
    color: "bg-blue-500",
    title: "Korrosion traversfot — stolpe [ANON-067]",
    desc: "Ytkorrosion på traversfot. Ej akut men bör planeras för underhåll vid nästa underhållscykel.",
    coord: "N 58.XXXX°, E 16.XXXX°",
    image: "/images/korrosion-traversfot.jpg",
    imageAlt: "Rostig traversfot på betongstolpe med synlig ytkorrosion",
  },
  {
    classification: "Observation",
    color: "bg-surface-400",
    title: "Fågelbo på stolpe — stolpe [ANON-089]",
    desc: "Fågelbo identifierat på travers. Ingen åtgärd krävs om ej i konflikt med ledning.",
    coord: "N 59.XXXX°, E 17.XXXX°",
    image: "/images/fagelbo-stolpe.jpg",
    imageAlt: "Fågelbo byggt på kraftledningsmast",
  },
];

export default function ExempelrapportPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[{ name: "Exempelrapport", href: "/exempelrapport" }]}
      />
      {exampleFindings.map((finding) => (
        <JsonLd
          key={finding.image}
          type="ImageObject"
          imagePath={finding.image}
          imageCaption={finding.imageAlt}
        />
      ))}

      <section className="gradient-hero py-16 sm:py-20">
        <div className="container-section text-center">
          <p className="eyebrow text-brand-200">Dokumentation</p>
          <h1 className="heading-1 mt-3 text-white">
            Exempelrapport — drönarinspektion
          </h1>
          <p className="body-text mx-auto mt-4 max-w-2xl text-blue-100">
            Se hur en GridDrone-inspektionsrapport ser ut. Anonymiserad
            exempelrapport med fyndkort, GPS-koordinater, klassificeringar
            och åtgärdsrekommendationer.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ name: "Exempelrapport" }]} />

      {/* Rapportstruktur */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="section-intro">
            <h2 className="heading-2">Rapportens innehåll</h2>
            <p className="body-text mt-4">
              Varje inspektionsrapport följer en standardiserad struktur för
              enkel jämförelse mellan inspektionstillfällen.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {reportSections.map((section) => (
              <div key={section.number} className="flex gap-4 rounded-xl border border-surface-100 bg-surface-50 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-600">
                  {section.number}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-surface-900">{section.title}</h3>
                  <p className="mt-1 text-sm text-surface-500">{section.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exempelfynd */}
      <section className="section-padding bg-surface-50">
        <div className="container-section">
          <div className="section-intro">
            <h2 className="heading-2">Exempel på fyndkort</h2>
            <p className="body-text mt-4">
              Varje fynd dokumenteras med foto, GPS-koordinat, klassificering
              och åtgärdsrekommendation. Nedan visas anonymiserade exempel —
              fotona är tagna vid GridDrones egna inspektioner.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            {exampleFindings.map((finding) => (
              <div key={finding.title} className="card overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={finding.image}
                    alt={finding.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${finding.color}`} />
                    <span className="text-xs font-medium uppercase tracking-wide text-surface-500">
                      {finding.classification}
                    </span>
                  </div>
                  <h3 className="mt-2 text-sm font-semibold text-surface-900">{finding.title}</h3>
                  <p className="mt-1 text-sm text-surface-500">{finding.desc}</p>
                  <p className="mt-2 text-xs font-mono text-surface-500">{finding.coord}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-2">Vill ni se er egen rapport?</h2>
            <p className="body-text mt-4">
              Kontakta oss för att diskutera en inspektion av er infrastruktur.
              Ni får en rapport med samma detalj och kvalitet som exemplet ovan.
            </p>
            <div className="mt-8">
              <Link href="/kontakt" className="btn-primary">
                Begär offert
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABand primaryHref="/kontakt" secondaryHref="/kontakt" />
    </>
  );
}
