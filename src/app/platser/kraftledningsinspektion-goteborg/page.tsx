import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "Kraftledningsinspektion med drönare i Göteborg",
  description:
    "GridDrone utför kraftledningsinspektion med drönare i Göteborg och Västra Götaland. Visuell inspektion, termografering och LiDAR. Begär offert.",
  path: "/platser/kraftledningsinspektion-goteborg",
  keywords: [
    "kraftledningsinspektion Göteborg",
    "drönarinspektion elnät Göteborg",
    "termografering elnät Göteborg",
    "drönare kraftledning Västra Götaland",
  ],
});

export default function GoteborgPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Platser", href: "/platser/kraftledningsinspektion-goteborg" },
          { name: "Göteborg & Västra Götaland" },
        ]}
      />
      <JsonLd
        type="Service"
        servicePath="/platser/kraftledningsinspektion-goteborg"
        serviceName="Kraftledningsinspektion Göteborg"
        serviceDescription="Professionell drönarinspektion av kraftledningar och elnät i Göteborg och Västra Götaland."
      />

      <Hero
        title="Kraftledningsinspektion med drönare i Göteborg"
        subtitle="Göteborg & Västra Götaland"
        description="Professionell drönarinspektion av kraftledningar och elnätsinfrastruktur i Göteborgsregionen och Västra Götaland."
        primaryCta={{ label: "Begär offert", href: "/kontakt" }}
        secondaryCta={{ label: "Våra tjänster", href: "/tjanster" }}
      />

      <Breadcrumbs
        items={[
          { name: "Platser" },
          { name: "Göteborg & Västra Götaland" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-section">
          <h2 className="heading-2">Drönarinspektion i Göteborgsregionen</h2>
          <p className="body-text mt-4 max-w-3xl">
            Västsveriges elnät sträcker sig genom varierad terräng — från
            kustlandskap till inland. Vi inspekterar kraftledningar,
            transformatorstationer och annan infrastruktur i hela regionen.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Kraftledningsinspektion",
                href: "/tjanster/kraftledningsinspektion",
              },
              {
                title: "Termografering",
                href: "/tjanster/termografering-kraftledning",
              },
              {
                title: "Vegetationskontroll",
                href: "/tjanster/vegetationskontroll",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="card group p-6 text-center transition-all hover:border-brand-200 hover:shadow-md"
              >
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-700">
                  {item.title}
                </h3>
                <span className="mt-2 inline-block text-sm font-medium text-brand-600">
                  Läs mer →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
