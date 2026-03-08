import Link from "next/link";
import { COMPANY_NAME, CONTACT_EMAIL } from "@/lib/constants";
import { Zap } from "lucide-react";

const footerServices = [
  { label: "Kraftledningar", href: "/tjanster/kraftledningsinspektion" },
  { label: "Termografering", href: "/tjanster/termografering-kraftledning" },
  { label: "Stationer", href: "/tjanster/transformatorstation-inspektion" },
  { label: "Vegetationskontroll", href: "/tjanster/vegetationskontroll" },
  { label: "BVLOS-inspektion", href: "/tjanster/bvlos-inspektion" },
  { label: "Stormskadeinspektion", href: "/tjanster/stormskadeinspektion" },
];

const footerBranches = [
  { label: "Nätägare & energibolag", href: "/branscher/energibolag" },
  { label: "Vindkraft", href: "/branscher/vindkraft" },
  { label: "Trafikverket", href: "/branscher/trafikverket" },
  { label: "Kommuner", href: "/branscher/kommuner" },
  { label: "Försäkring", href: "/branscher/forsakring" },
];

const footerNavigation = [
  { label: "Exempelrapport", href: "/exempelrapport" },
  { label: "ROI-kalkylator", href: "/roi-kalkylator" },
  { label: "Certifieringar", href: "/certifieringar" },
  { label: "Blogg", href: "/blogg" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white pb-20 lg:pb-0">
      <div className="container-section py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-slate-900">
                <Zap className="h-4 w-4 text-cyan-400" strokeWidth={2.5} />
              </div>
              <span className="text-sm font-bold tracking-tight text-slate-900">
                {COMPANY_NAME}
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              Drönarbaserad inspektion av kraftledningar, elnät
              och energiinfrastruktur i hela Sverige.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="eyebrow">Inspektion</h3>
            <ul className="mt-4 space-y-2.5">
              {footerServices.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-600 transition-colors hover:text-cyan-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h3 className="eyebrow">Branscher</h3>
            <ul className="mt-4 space-y-2.5">
              {footerBranches.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-600 transition-colors hover:text-cyan-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="eyebrow">Resurser</h3>
            <ul className="mt-4 space-y-2.5">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-600 transition-colors hover:text-cyan-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="eyebrow">Kontakt</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm text-slate-600 transition-colors hover:text-cyan-600"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-sm text-slate-600 transition-colors hover:text-cyan-600"
                >
                  Kontaktformulär
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. Alla rättigheter förbehållna.
          </p>
          <div className="flex gap-4">
            <Link
              href="/integritetspolicy"
              className="text-xs text-slate-500 hover:text-slate-600"
            >
              Integritetspolicy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
