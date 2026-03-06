import Link from "next/link";
import { COMPANY_NAME, CONTACT_EMAIL, SERVICE_ITEMS, BRANCH_ITEMS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-surface-100 bg-surface-50">
      <div className="container-section py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-hero">
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 14l3-6 3 4 3-2 3 4" stroke="#1fe0ca" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="10" cy="6" r="2" stroke="#fff" strokeWidth="1.2" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-surface-900">
                {COMPANY_NAME}
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-surface-500">
              Professionell drönarinspektion av kraftledningar, elnät och
              energiinfrastruktur.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="eyebrow">
              Tjänster
            </h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICE_ITEMS.slice(0, 7).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-surface-600 transition-colors hover:text-brand-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Branscher */}
          <div>
            <h3 className="eyebrow">
              Branscher
            </h3>
            <ul className="mt-4 space-y-2.5">
              {BRANCH_ITEMS.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-surface-600 transition-colors hover:text-brand-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="eyebrow">
              Information
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/om-oss"
                  className="text-sm text-surface-600 transition-colors hover:text-brand-600"
                >
                  Om oss
                </Link>
              </li>
              <li>
                <Link
                  href="/certifieringar"
                  className="text-sm text-surface-600 transition-colors hover:text-brand-600"
                >
                  Certifieringar
                </Link>
              </li>
              <li>
                <Link
                  href="/roi-kalkylator"
                  className="text-sm text-surface-600 transition-colors hover:text-brand-600"
                >
                  ROI-kalkylator
                </Link>
              </li>
              <li>
                <Link
                  href="/exempelrapport"
                  className="text-sm text-surface-600 transition-colors hover:text-brand-600"
                >
                  Exempelrapport
                </Link>
              </li>
              <li>
                <Link
                  href="/blogg"
                  className="text-sm text-surface-600 transition-colors hover:text-brand-600"
                >
                  Blogg
                </Link>
              </li>
              <li>
                <Link
                  href="/stormrespons"
                  className="text-sm text-surface-600 transition-colors hover:text-brand-600"
                >
                  Stormrespons
                </Link>
              </li>
              <li>
                <Link
                  href="/integritetspolicy"
                  className="text-sm text-surface-600 transition-colors hover:text-brand-600"
                >
                  Integritetspolicy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="eyebrow">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm text-surface-600 transition-colors hover:text-brand-600"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-sm text-surface-600 transition-colors hover:text-brand-600"
                >
                  Kontaktformulär
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-surface-200 pt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-surface-400">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. Alla rättigheter förbehållna.
          </p>
          <div className="flex gap-4">
            <Link href="/integritetspolicy" className="text-xs text-surface-400 hover:text-surface-600">
              Integritetspolicy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
