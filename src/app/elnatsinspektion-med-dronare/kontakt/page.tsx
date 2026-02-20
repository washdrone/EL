import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import LeadForm from "@/components/LeadForm";
import JsonLd from "@/components/JsonLd";
import { CONTACT_EMAIL, CONTACT_PHONE, COMPANY_NAME } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata({
  title: "Kontakt – elnätsinspektion med drönare",
  description:
    "Boka en genomgång eller begär offert för drönareinspektion av ert elnät. Vi återkommer inom två arbetsdagar.",
  path: "/elnatsinspektion-med-dronare/kontakt",
  keywords: [
    "kontakt drönareinspektion elnät",
    "offert elnätsinspektion drönare",
    "boka elnätsinspektion",
  ],
});

export default function KontaktPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          {
            name: "Elnätsinspektion med drönare",
            href: "/elnatsinspektion-med-dronare",
          },
          { name: "Kontakt" },
        ]}
      />

      <Breadcrumbs
        items={[
          {
            name: "Elnätsinspektion med drönare",
            href: "/elnatsinspektion-med-dronare",
          },
          { name: "Kontakt" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 lg:grid-cols-5">
              {/* Left: Info */}
              <div className="lg:col-span-2">
                <h1 className="heading-1">Boka genomgång eller begär offert</h1>
                <p className="body-text mt-4">
                  Fyll i formuläret så återkommer vi inom två arbetsdagar
                  med en genomgång anpassad efter ert behov.
                </p>

                <div className="mt-8 space-y-4">
                  <div>
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                      Kontaktuppgifter
                    </h2>
                    <div className="mt-3 space-y-2">
                      <p className="text-base text-slate-700">
                        {COMPANY_NAME}
                      </p>
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="block text-base text-primary-600 hover:text-primary-700"
                      >
                        {CONTACT_EMAIL}
                      </a>
                      <a
                        href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                        className="block text-base text-primary-600 hover:text-primary-700"
                      >
                        {CONTACT_PHONE}
                      </a>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                      Vad vi behöver för en träffsäker offert
                    </h2>
                    <ul className="mt-3 space-y-2 text-sm text-slate-600">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-accent-500">●</span>
                        Ungefärlig sträcka (km) eller antal stolpar
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-accent-500">●</span>
                        Nättyp och spänningsnivå
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-accent-500">●</span>
                        GIS-underlag eller kartlänk (om tillgängligt)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-accent-500">●</span>
                        Önskad inspektionstyp och leveransformat
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <div className="lg:col-span-3">
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 sm:p-8">
                  <h2 className="text-lg font-semibold text-slate-900">
                    Skicka förfrågan
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Obligatoriska fält markerade med *
                  </p>
                  <div className="mt-6">
                    <LeadForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
