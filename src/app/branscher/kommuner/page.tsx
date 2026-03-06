import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "Drönarinspektioner för kommuner & kommunala bolag",
  description:
    "GridDrone utför drönarinspektion av kommunal infrastruktur — elnät, belysningsstolpar, VA-anläggningar och samhällsfastigheter.",
  path: "/branscher/kommuner",
  keywords: [
    "drönarinspektion kommun",
    "kommunal infrastruktur drönare",
    "elnätsinspektion kommun",
    "drönare kommunalt bolag",
  ],
});

export default function KommunerPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Branscher", href: "/branscher/energibolag" },
          { name: "Kommuner" },
        ]}
      />
      <JsonLd
        type="Service"
        servicePath="/branscher/kommuner"
        serviceName="Drönarinspektioner för kommuner"
        serviceDescription="Professionell drönarinspektion av kommunal infrastruktur i Sverige."
      />

      <Hero
        title="Drönarinspektioner för kommuner & kommunala bolag"
        subtitle="Kommuner & offentlig sektor"
        description="Inspektion av kommunal infrastruktur med drönare — elnät, belysningsstolpar, VA-anläggningar och samhällsfastigheter. Anpassat för offentlig upphandling."
        primaryCta={{ label: "Boka genomgång", href: "/kontakt" }}
        secondaryCta={{ label: "Se tjänster", href: "/tjanster" }}
      />

      <Breadcrumbs
        items={[
          { name: "Branscher" },
          { name: "Kommuner" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-section">
          <h2 className="heading-2">Tjänster för kommuner</h2>
          <p className="body-text mt-4 max-w-3xl">
            Kommuner ansvarar för stora mängder infrastruktur — från elnät och
            gatubelysning till VA-anläggningar och fastigheter. Drönarinspektioner
            ger en effektiv och kostnadseffektiv tillsyn.
          </p>

          <div className="mt-10 sm:mt-12 grid gap-5 sm:gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Elnät & belysning",
                desc: "Inspektion av kommunala distributionsnät och belysningsstolpar.",
                href: "/tjanster/kraftledningsinspektion",
              },
              {
                title: "Termografering",
                desc: "Identifiera fel i elnät och elanläggningar med värmekamera.",
                href: "/tjanster/termografering-kraftledning",
              },
              {
                title: "Stormskadeinspektion",
                desc: "Snabb skadekartläggning efter storm för prioriterad åtgärdsplanering.",
                href: "/tjanster/stormskadeinspektion",
              },
              {
                title: "Underhållsabonnemang",
                desc: "Löpande inspektion med planerad frekvens och trendrapportering.",
                href: "/tjanster/underhallsabonnemang",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="card group transition-all hover:border-brand-200 hover:shadow-md"
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
          <h2 className="heading-2">Offentlig upphandling</h2>
          <p className="body-text mt-4 max-w-3xl">
            Vi har erfarenhet av att arbeta med offentlig sektor och kan delta
            i upphandlingsprocesser. GridDrone levererar strukturerade rapporter
            och dokumentation som uppfyller offentliga krav på transparens och
            spårbarhet.
          </p>
        </div>
      </section>

      <CTABand />
    </>
  );
}
