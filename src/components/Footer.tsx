import Link from "next/link";
import { NAV_ITEMS, COMPANY_NAME, CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-section py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              {COMPANY_NAME}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Professionell drönareinspektion av elnät och luftledningar.
              Standardiserad datainsamling för elnätsbolag och entreprenörer.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Tjänster
            </h3>
            <ul className="mt-3 space-y-2">
              {NAV_ITEMS.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-600 transition-colors hover:text-primary-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Information
            </h3>
            <ul className="mt-3 space-y-2">
              {NAV_ITEMS.slice(5).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-600 transition-colors hover:text-primary-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/integritetspolicy"
                  className="text-sm text-slate-600 transition-colors hover:text-primary-600"
                >
                  Integritetspolicy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Kontakt
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm text-slate-600 transition-colors hover:text-primary-600"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                  className="text-sm text-slate-600 transition-colors hover:text-primary-600"
                >
                  {CONTACT_PHONE}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6">
          <p className="text-center text-xs text-slate-500">
            © {new Date().getFullYear()} {COMPANY_NAME}. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
}
