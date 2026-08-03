import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "Platser — drönarinspektion i hela Sverige",
  description:
    "Drönarinspektion av kraftledningar och elnät i hela Sverige — Stockholm, Göteborg, Malmö, Norrland, Dalarna och Skåne. Rikstäckande kapacitet, lokala sidor per region.",
  path: "/platser",
  keywords: [
    "kraftledningsinspektion Sverige",
    "drönarinspektion Stockholm",
    "drönarinspektion Göteborg",
  ],
});

const locations = [
  {
    label: "Stockholm & Mälardalen",
    href: "/platser/kraftledningsinspektion-stockholm",
    description:
      "Drönarinspektion av kraftledningar och elnät i Stockholm och Mälardalen. Visuell inspektion, termografering och LiDAR-vegetationskontroll.",
  },
  {
    label: "Göteborg & Västra Götaland",
    href: "/platser/kraftledningsinspektion-goteborg",
    description:
      "Drönarinspektion av kraftledningar och elnät i Göteborg och Västra Götaland. Visuell inspektion, termografering och vegetationskontroll.",
  },
  {
    label: "Malmö & Skåne",
    href: "/platser/kraftledningsinspektion-malmo",
    description:
      "Drönarinspektion av kraftledningar och elnät i Malmö och Skåne. Visuell inspektion, termografering och vegetationskontroll.",
  },
  {
    label: "Norrland",
    href: "/platser/kraftledningsinspektion-norrland",
    description:
      "Drönarinspektion av kraftledningar i Norrland. BVLOS-kapacitet för långa sträckor i svårtillgänglig terräng.",
  },
  {
    label: "Dalarna",
    href: "/platser/kraftledningsinspektion-dalarna",
    description:
      "Drönarinspektion av kraftledningar och elnät i Dalarna. Visuell inspektion, termografering och LiDAR-vegetationskontroll.",
  },
  {
    label: "Vindkraftinspektion Skåne",
    href: "/platser/vindkraftinspektion-skane",
    description:
      "Drönarinspektion av vindkraftverk i Skåne — rotorblad, torn, nacelle och åskledare.",
  },
  {
    label: "Järnvägsinspektion Stockholm",
    href: "/platser/jarnvagsinspektion-stockholm",
    description:
      "Drönarinspektion av järnvägskontaktledningar i Stockholm och Mälardalen. Säker inspektion utan trafikstörning.",
  },
];

export default function PlatserPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[{ name: "Platser", href: "/platser" }]}
      />
      <JsonLd
        type="ItemList"
        itemListName="Platser — drönarinspektion per region"
        itemListItems={locations.map((location) => ({
          name: location.label,
          href: location.href,
        }))}
      />

      <Hero
        title="Drönarinspektion i hela Sverige"
        subtitle="Platser"
        description="Vi utför drönarinspektion av kraftledningar och elnät i hela Sverige — från Skåne till Norrland. Här hittar ni regionala sidor med information om inspektion i ert område."
        primaryCta={{ label: "Boka genomgång", href: "/kontakt" }}
        secondaryCta={{ label: "Våra tjänster", href: "/tjanster" }}
        compact
      />

      <Breadcrumbs items={[{ name: "Platser" }]} />

      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="section-intro">
            <h2 className="heading-2">Regioner</h2>
            <p className="body-text mt-4">
              Rikstäckande kapacitet med logistik anpassad efter ert näts
              geografiska placering.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <Link
                key={location.href}
                href={location.href}
                className="card group p-6 transition-shadow hover:shadow-md"
              >
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-600">
                  {location.label}
                </h3>
                <p className="mt-2 text-sm text-surface-500">
                  {location.description}
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

      <CTABand />
    </>
  );
}
