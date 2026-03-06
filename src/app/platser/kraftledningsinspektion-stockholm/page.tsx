import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "Kraftledningsinspektion med drönare i Stockholm",
  description:
    "GridDrone utför kraftledningsinspektion med drönare i Stockholm och Mälardalen. Visuell inspektion, termografering och LiDAR. Begär offert.",
  path: "/platser/kraftledningsinspektion-stockholm",
  keywords: [
    "kraftledningsinspektion Stockholm",
    "drönarinspektion elnät Stockholm",
    "elnätsinspektion Stockholm Mälardalen",
    "drönare kraftledning Stockholm",
  ],
});

export default function StockholmPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Platser", href: "/platser/kraftledningsinspektion-stockholm" },
          { name: "Stockholm & Mälardalen" },
        ]}
      />
      <JsonLd
        type="Service"
        servicePath="/platser/kraftledningsinspektion-stockholm"
        serviceName="Kraftledningsinspektion Stockholm"
        serviceDescription="Professionell drönarinspektion av kraftledningar och elnät i Stockholm och Mälardalen."
      />

      <Hero
        title="Kraftledningsinspektion med drönare i Stockholm"
        subtitle="Stockholm & Mälardalen"
        description="Vi utför professionell drönarinspektion av kraftledningar, elnät och energiinfrastruktur i Stockholmsregionen och Mälardalen."
        primaryCta={{ label: "Begär offert", href: "/kontakt" }}
        secondaryCta={{ label: "Våra tjänster", href: "/tjanster" }}
      />

      <Breadcrumbs
        items={[
          { name: "Platser" },
          { name: "Stockholm & Mälardalen" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-section">
          <h2 className="heading-2">Drönarinspektion i Stockholmsregionen</h2>
          <p className="body-text mt-4 max-w-3xl">
            Stockholm och Mälardalen har ett omfattande elnät med både distributions-
            och regionnät. Vi inspekterar luftledningar, transformatorstationer
            och annan infrastruktur i hela regionen.
          </p>

          <div className="mt-10 sm:mt-12 grid gap-5 sm:gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Kraftledningsinspektion",
                desc: "Visuell inspektion av stolpar, isolatorer och ledningsgata i distributions- och regionnät.",
                href: "/tjanster/kraftledningsinspektion",
              },
              {
                title: "Termografering",
                desc: "Värmekamera för att hitta varmgångar och kontaktfel i elnätskomponenter.",
                href: "/tjanster/termografering-kraftledning",
              },
              {
                title: "Vegetationskontroll",
                desc: "LiDAR-kartläggning av vegetation längs ledningsgator i skogs- och tätortsmiljö.",
                href: "/tjanster/vegetationskontroll",
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
          <h2 className="heading-2">Täckningsområde</h2>
          <p className="body-text mt-4 max-w-3xl">
            Vi utför uppdrag i Stockholmsregionen och Mälardalen, inklusive
            Södertälje, Norrtälje, Uppsala, Västerås och Eskilstuna.
            Med BVLOS-kapacitet kan längre sträckor inspekteras
            utan ompositionering.
          </p>
        </div>
      </section>

      <CTABand />
    </>
  );
}
