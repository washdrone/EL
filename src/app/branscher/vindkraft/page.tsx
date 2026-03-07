import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "Drönarinspektioner för vindkraftoperatörer",
  description:
    "Drönarinspektion av vindkraftverk — rotorblad, torn, nacelle och åskledare. Strukturerad dokumentation för underhåll och försäkringsärenden.",
  path: "/branscher/vindkraft",
  keywords: [
    "vindkraftinspektion drönare",
    "drönarinspektion vindkraftverk",
    "rotorbladinspektion drönare",
    "vindkraft underhåll drönare",
  ],
});

export default function VindkraftPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Branscher", href: "/branscher/energibolag" },
          { name: "Vindkraft" },
        ]}
      />
      <JsonLd
        type="Service"
        servicePath="/branscher/vindkraft"
        serviceName="Drönarinspektioner för vindkraftoperatörer"
        serviceDescription="Professionell drönarinspektion av vindkraftverk — rotorblad, torn, nacelle och åskledare."
      />

      <Hero
        title="Drönarinspektioner för vindkraftoperatörer"
        subtitle="Vindkraft"
        description="Inspektion av vindkraftverk med drönare — rotorblad, torn, nacelle och åskledarsystem. Strukturerad dokumentation som kan användas som underlag vid underhållsplanering och försäkringsärenden."
        primaryCta={{ label: "Boka genomgång", href: "/kontakt" }}
        secondaryCta={{ label: "Vindkraftinspektion", href: "/tjanster/vindkraftinspektion" }}
      />

      <Breadcrumbs
        items={[
          { name: "Branscher" },
          { name: "Vindkraft" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-section">
          <h2 className="heading-2">Tjänster för vindkraftoperatörer</h2>
          <p className="body-text mt-4 max-w-3xl">
            Vindkraftverk utsätts för extrema påfrestningar — vind, is, blixtnedslag
            och UV-strålning. Regelbunden inspektion med drönare identifierar
            skador tidigt och minskar risken för kostsamma haverier.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Rotorbladinspektion",
                desc: "Högupplöst fotografering av alla rotorblad. Identifiera sprickor, laminatskador, erosion och åskskador.",
                href: "/tjanster/vindkraftinspektion",
              },
              {
                title: "Torn & nacelle",
                desc: "Visuell inspektion av tornkonstruktion och nacelle exteriör, inklusive åskledarsystem.",
                href: "/tjanster/vindkraftinspektion",
              },
              {
                title: "Termografering",
                desc: "Värmekamera för att identifiera överhettade komponenter i nacelle och elsystem.",
                href: "/tjanster/termografering-kraftledning",
              },
              {
                title: "Underhållsabonnemang",
                desc: "Planerade årsinspektioner med trenduppföljning och möjlighet till prioriterad stormrespons.",
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
          <h2 className="heading-2">Fördelar för vindkraftoperatörer</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Minimal driftstopp",
                desc: "Turbinen behöver stå still kortare tid jämfört med manuell inspektion med rep- eller plattformsaccess.",
              },
              {
                title: "Dokumentation för försäkring",
                desc: "Strukturerad fotodokumentation som kan användas som underlag vid försäkringsärenden och tillståndsbedömning.",
              },
              {
                title: "Hela parker effektivt",
                desc: "Drönare kan inspektera flera turbiner per dag, vilket gör metoden väl lämpad för större vindkraftparker.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-base font-semibold text-surface-900">{item.title}</h3>
                <p className="mt-2 text-sm text-surface-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
