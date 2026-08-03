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
  { label: "Vindkraftinspektion", href: "/tjanster/vindkraftinspektion" },
  { label: "Järnvägsinspektion", href: "/tjanster/jarnvagsinspektion" },
  { label: "Underhållsabonnemang", href: "/tjanster/underhallsabonnemang" },
];

const footerBranches = [
  { label: "Nätägare & energibolag", href: "/branscher/energibolag" },
  { label: "Vindkraft", href: "/branscher/vindkraft" },
  { label: "Trafikverket", href: "/branscher/trafikverket" },
  { label: "Kommuner", href: "/branscher/kommuner" },
  { label: "Försäkring", href: "/branscher/forsakring" },
  { label: "Alla branscher", href: "/branscher" },
];

const footerLocations = [
  { label: "Stockholm", href: "/platser/kraftledningsinspektion-stockholm" },
  { label: "Göteborg", href: "/platser/kraftledningsinspektion-goteborg" },
  { label: "Malmö", href: "/platser/kraftledningsinspektion-malmo" },
  { label: "Norrland", href: "/platser/kraftledningsinspektion-norrland" },
  { label: "Dalarna", href: "/platser/kraftledningsinspektion-dalarna" },
  { label: "Vindkraft Skåne", href: "/platser/vindkraftinspektion-skane" },
  { label: "Järnväg Stockholm", href: "/platser/jarnvagsinspektion-stockholm" },
  { label: "Alla platser", href: "/platser" },
];

const footerNavigation = [
  { label: "Exempelrapport", href: "/exempelrapport" },
  { label: "Kostnadskalkylator", href: "/roi-kalkylator" },
  { label: "Certifieringar", href: "/certifieringar" },
  { label: "Blogg", href: "/blogg" },
  { label: "Alla guider", href: "/guider" },
  { label: "Guide: Drönarinspektion", href: "/guider/dronareinspektion-elnat" },
  { label: "Guide: Termografering", href: "/guider/termografering-kraftledningar" },
  { label: "Guide: Dataleverans GIS", href: "/guider/dataleverans-gis-elnat" },
  { label: "Guide: BVLOS-inspektion", href: "/guider/bvlos-inspektion-elnat" },
  { label: "Guide: Upphandling", href: "/guider/upphandling-dronareinspektion" },
  { label: "Guide: Feltyper", href: "/guider/feltyper-kraftledningar" },
  { label: "Guide: Komponenter", href: "/guider/komponenter-elnat" },
  { label: "Helikopter vs drönare", href: "/jamforelser/helikopter-vs-dronare-inspektion" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-navy-950 pb-20 lg:pb-0">
      <div className="container-section py-16 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center bg-brand-600">
                <Zap className="h-4 w-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-sm font-bold tracking-tight text-white">
                {COMPANY_NAME}
              </span>
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-400">
              Drönarbaserad inspektion av kraftledningar, elnät
              och energiinfrastruktur i hela Sverige.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Inspektion</h3>
            <ul className="mt-4 space-y-2.5">
              {footerServices.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Branscher</h3>
            <ul className="mt-4 space-y-2.5">
              {footerBranches.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Platser</h3>
            <ul className="mt-4 space-y-2.5">
              {footerLocations.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Resurser</h3>
            <ul className="mt-4 space-y-2.5">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Kontakt</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  Kontaktformulär
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-slate-800 pt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. Alla rättigheter förbehållna.
          </p>
          <div className="flex gap-4">
            <Link
              href="/integritetspolicy"
              className="text-xs text-slate-500 hover:text-slate-300"
            >
              Integritetspolicy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
