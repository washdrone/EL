import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = createPageMetadata({
  title: "Järnvägsinspektion Stockholm | Drönare",
  description:
    "Drönarinspektion av järnvägskontaktledningar i Stockholm och Mälardalen. Säker inspektion utan trafikstörning. Begär offert.",
  path: "/platser/jarnvagsinspektion-stockholm",
  keywords: [
    "järnvägsinspektion drönare Stockholm",
    "kontaktledning inspektion Stockholm",
    "drönarinspektion järnväg Stockholm",
    "järnväg inspektion drönare Mälardalen",
  ],
});

export default function JarnvagsinspektionStockholmPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Platser", href: "/platser/jarnvagsinspektion-stockholm" },
          { name: "Järnvägsinspektion Stockholm" },
        ]}
      />
      <JsonLd
        type="Service"
        servicePath="/platser/jarnvagsinspektion-stockholm"
        serviceName="Järnvägsinspektion Stockholm"
        serviceDescription="Professionell drönarinspektion av järnvägskontaktledningar i Stockholmsregionen."
      />

      <Hero
        title="Järnvägsinspektion med drönare i Stockholm"
        subtitle="Stockholm & Mälardalen"
        description="Drönarinspektion av kontaktledningssystem i Stockholmsregionen och Mälardalen. Hängare, bärlina, kontakttråd, isolatorer och fästanordningar — utan trafikstörning."
        primaryCta={{ label: "Begär offert", href: "/kontakt" }}
        secondaryCta={{ label: "Järnvägsinspektion", href: "/tjanster/jarnvagsinspektion" }}
      />

      <Breadcrumbs
        items={[
          { name: "Platser" },
          { name: "Järnvägsinspektion Stockholm" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-section">
          <h2 className="heading-2">Järnvägsinspektion i Stockholmsregionen</h2>
          <p className="body-text mt-4 max-w-3xl">
            Stockholmsregionen har ett av Sveriges mest trafikerade järnvägsnät
            med tät pendel- och fjärrtågstrafik samt ett komplext
            kontaktledningssystem. Hög trafikbelastning begränsar möjligheten
            till banarbeten, vilket gör drönarinspektion till en effektiv metod
            för tillsyn av kontaktledningar, isolatorer och fästanordningar
            utan att störa tågtrafiken.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Kontaktledningsinspektion",
                desc: "Inspektion av kontaktledningssystemets alla komponenter med högupplöst kamera.",
                href: "/tjanster/jarnvagsinspektion",
              },
              {
                title: "Termografering",
                desc: "Identifiera varmgångar och elektriska fel i kontaktledningssystemet.",
                href: "/tjanster/termografering-kraftledning",
              },
              {
                title: "Vegetationskontroll",
                desc: "Kartlägg vegetation som riskerar att påverka spår och kontaktledningar.",
                href: "/tjanster/vegetationskontroll",
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
            Vi utför järnvägsinspektioner i Stockholmsregionen och Mälardalen,
            inklusive sträckor mot Uppsala, Södertälje, Västerås och Eskilstuna.
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
              <Link href="/tjanster/jarnvagsinspektion" className="text-brand-600 hover:underline">
                Järnvägsinspektion
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
              <Link href="/branscher/trafikverket" className="text-brand-600 hover:underline">
                Trafikverket
              </Link>{" "}
              — hur vi stödjer järnvägsinfrastrukturens tillsyn
            </li>
          </ul>
        </div>
      </section>

      <CTABand />
    </>
  );
}
