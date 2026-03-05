import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "Vindkraftinspektion med drönare i Skåne",
  description:
    "GridDrone inspekterar vindkraftverk med drönare i Skåne. Rotorblad, torn och nacelle. Minimal driftstopp. Begär offert.",
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
          { name: "Platser", href: "/platser/kraftledningsinspektion-stockholm" },
          { name: "Vindkraftinspektion Skåne" },
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
        description="Skåne är en av Sveriges mest vindkraftintensiva regioner. Vi inspekterar vindkraftverk med drönare — rotorblad, torn, nacelle och åskledarsystem."
        primaryCta={{ label: "Begär offert", href: "/kontakt" }}
        secondaryCta={{ label: "Vindkraftinspektion", href: "/tjanster/vindkraftinspektion" }}
      />

      <Breadcrumbs
        items={[
          { name: "Platser" },
          { name: "Vindkraftinspektion Skåne" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-section">
          <h2 className="heading-2">Vindkraftinspektion i Skåne</h2>
          <p className="body-text mt-4 max-w-3xl">
            Skåne har ett stort antal vindkraftverk, både på land och i
            kustnära miljö. Drönare ger en effektiv metod för att inspektera
            turbiner med minimal driftstopp.
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
            Vi utför vindkraftinspektioner i hela Skåne — från Malmö och Helsingborg
            till Ystad, Kristianstad och Ängelholm. Vi inspekterar enskilda turbiner
            såväl som hela vindkraftparker.
          </p>
        </div>
      </section>

      <CTABand />
    </>
  );
}
