import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";
import { SERVICE_ITEMS } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata({
  title: "Drönarinspektioner för elnät & energiinfrastruktur",
  description:
    "GridDrone erbjuder professionell drönarinspektion av kraftledningar, elnät, vindkraftverk och solcellsparker. BVLOS-behöriga piloter. Termografi och LiDAR.",
  path: "/tjanster",
  keywords: [
    "drönarinspektion elnät",
    "drönartjänster energibolag",
    "inspektion kraftledning drönare",
  ],
});

export default function TjansterPage() {
  return (
    <>
      <JsonLd type="Service" servicePath="/tjanster" />
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[{ name: "Tjänster" }]}
      />

      <Hero
        title="Drönarinspektioner för elnät & energiinfrastruktur"
        subtitle="Våra tjänster"
        description="GridDrone erbjuder professionell drönarinspektion av kraftledningar, elnät, vindkraftverk och solcellsparker. BVLOS-behöriga piloter. Termografi och LiDAR."
        primaryCta={{ label: "Boka genomgång", href: "/kontakt" }}
        secondaryCta={{ label: "Begär offert", href: "/kontakt" }}
      />

      <Breadcrumbs items={[{ name: "Tjänster" }]} />

      {/* Service grid */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="section-intro">
            <h2 className="heading-2">Våra inspektionstjänster</h2>
            <p className="body-text mt-4">
              Vi erbjuder ett komplett utbud av drönarbaserade
              inspektionstjänster för energiinfrastruktur. Varje tjänst anpassas
              efter era behov och levereras med strukturerade rapporter.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {SERVICE_ITEMS.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="card group transition-shadow hover:shadow-md"
              >
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-600">
                  {service.label}
                </h3>
                <p className="mt-2 text-sm text-surface-500">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 group-hover:text-brand-700">
                  Läs mer
                  <svg
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand primaryHref="/kontakt" secondaryHref="/kontakt" />
    </>
  );
}
