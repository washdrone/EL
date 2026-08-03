import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";
import { BRANCH_ITEMS } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata({
  title: "Branscher — drönarinspektion per bransch",
  description:
    "Drönarinspektion anpassad per bransch: nätägare och energibolag, järnväg och Trafikverket, vindkraft, kommuner och försäkringsbolag. Se hur vi arbetar med er bransch.",
  path: "/branscher",
  keywords: [
    "drönarinspektion energibolag",
    "drönarinspektion nätägare",
    "drönarinspektion branscher",
  ],
});

export default function BranscherPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[{ name: "Branscher", href: "/branscher" }]}
      />
      <JsonLd
        type="ItemList"
        itemListName="Branscher — drönarinspektion av energiinfrastruktur"
        itemListItems={BRANCH_ITEMS.map((branch) => ({
          name: branch.label,
          href: branch.href,
        }))}
      />

      <Hero
        title="Drönarinspektion för er bransch"
        subtitle="Branscher"
        description="Inspektionsbehoven skiljer sig mellan nätägare, järnväg, vindkraft, kommuner och försäkring. Varje bransch har en egen sida som beskriver hur inspektionen anpassas efter era förutsättningar."
        primaryCta={{ label: "Boka genomgång", href: "/kontakt" }}
        secondaryCta={{ label: "Våra tjänster", href: "/tjanster" }}
        compact
      />

      <Breadcrumbs items={[{ name: "Branscher" }]} />

      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="section-intro">
            <h2 className="heading-2">Branscher vi arbetar med</h2>
            <p className="body-text mt-4">
              Välj er bransch för att se hur drönarinspektionen anpassas —
              från datainsamling till leveransformat.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BRANCH_ITEMS.map((branch) => (
              <Link
                key={branch.href}
                href={branch.href}
                className="card group p-6 transition-shadow hover:shadow-md"
              >
                <h3 className="text-base font-semibold text-surface-900 group-hover:text-brand-600">
                  {branch.label}
                </h3>
                <p className="mt-2 text-sm text-surface-500">
                  {branch.description}
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
