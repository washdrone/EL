import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "Vindkraftinspektion Skåne – drönare & rotorbladskontroll",
  description:
    "Drönarinspektion av vindkraftverk i Skåne — rotorblad, torn, nacelle och åskledare. Strukturerad rapport med skadebedömning och åtgärdsförslag. Begär offert.",
  path: "/platser/vindkraftinspektion-skane",
  keywords: [
    "vindkraftinspektion Skåne drönare",
    "drönarinspektion vindkraft Skåne",
    "rotorbladinspektion Skåne",
    "vindkraft underhåll drönare Skåne",
  ],
});

export default function VindkraftSkanePage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Platser", href: "/platser" },
          { name: "Vindkraftinspektion Skåne", href: "/platser/vindkraftinspektion-skane" },
        ]}
      />
      <JsonLd
        type="Service"
        servicePath="/platser/vindkraftinspektion-skane"
        serviceName="Vindkraftinspektion Skåne"
        serviceDescription="Professionell drönarinspektion av vindkraftverk i Skåne."
      />

      <Hero
        title="Vindkraftinspektion med drönare i Skåne"
        subtitle="Skåne"
        description="Skåne är en av Sveriges mest vindkraftintensiva regioner. Vi inspekterar vindkraftverk med drönare — rotorblad, torn, nacelle och åskledarsystem — med minimal påverkan på drift."
        primaryCta={{ label: "Begär offert", href: "/kontakt" }}
        secondaryCta={{ label: "Vindkraftinspektion", href: "/tjanster/vindkraftinspektion" }}
      />

      <Breadcrumbs
        items={[
          { name: "Platser", href: "/platser" },
          { name: "Vindkraftinspektion Skåne" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-section">
          <h2 className="heading-2">Vindkraftinspektion i Skåne</h2>
          <p className="body-text mt-4 max-w-3xl">
            Skåne har ett stort antal vindkraftverk, både på land och i
            kustnära miljö. Regionens vindexponerade läge innebär att
            turbinkomponenter utsätts för påfrestningar som kräver
            regelbunden tillsyn. Drönarinspektion ger en effektiv metod
            för att granska rotorblad, torn och nacelle med minimal
            driftstopp jämfört med manuell repinspektion.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Vindkraftinspektion",
                desc: "Komplett inspektion av rotorblad, torn, nacelle och åskledarsystem.",
                href: "/tjanster/vindkraftinspektion",
              },
              {
                title: "Termografering",
                desc: "Värmekamera för att identifiera överhettade komponenter i nacelle och elsystem.",
                href: "/tjanster/termografering-kraftledning",
              },
              {
                title: "Underhållsabonnemang",
                desc: "Planerade årsinspektioner med trenduppföljning för hela vindkraftparken.",
                href: "/tjanster/underhallsabonnemang",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="card group p-6 transition-all hover:border-brand-200 hover:shadow-md"
              >
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-surface-500">{item.desc}</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-600">
                  Läs mer →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-50">
        <div className="container-section">
          <h2 className="heading-2">Täckningsområde</h2>
          <p className="body-text mt-4 max-w-3xl">
            Vi utför vindkraftinspektioner i hela Skåne — från Malmö och
            Helsingborg till Ystad, Kristianstad och Ängelholm. Vi
            inspekterar enskilda turbiner såväl som hela vindkraftparker.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-section">
          <h2 className="heading-2">Relaterade tjänster och branscher</h2>
          <ul className="mt-4 space-y-2 body-text max-w-3xl">
            <li>
              <Link href="/tjanster" className="text-brand-600 hover:underline">
                Alla tjänster
              </Link>{" "}
              — översikt över GridDrones inspektionstjänster
            </li>
            <li>
              <Link href="/tjanster/vindkraftinspektion" className="text-brand-600 hover:underline">
                Vindkraftinspektion
              </Link>{" "}
              — detaljerad beskrivning av metodik och leverabler
            </li>
            <li>
              <Link href="/tjanster/kraftledningsinspektion" className="text-brand-600 hover:underline">
                Kraftledningsinspektion
              </Link>{" "}
              — inspektion av kraftledningar och elnät
            </li>
            <li>
              <Link href="/branscher/vindkraft" className="text-brand-600 hover:underline">
                Vindkraftbranschen
              </Link>{" "}
              — hur vi stödjer vindkraftägare och operatörer
            </li>
          </ul>
        </div>
      </section>

      <CTABand />
    </>
  );
}
