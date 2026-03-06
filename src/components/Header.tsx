"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_ITEMS, COMPANY_NAME, SERVICE_ITEMS } from "@/lib/constants";
import { events } from "@/lib/analytics";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/tjanster/kraftledningsinspektion") {
      return pathname === href || pathname.startsWith("/tjanster/kraftledningsinspektion/");
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-surface-100 bg-white/90 backdrop-blur-lg">
      <nav
        className="container-section flex items-center justify-between py-3 sm:py-3.5"
        aria-label="Huvudnavigering"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-hero">
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 14l3-6 3 4 3-2 3 4" stroke="#1fe0ca" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="10" cy="6" r="2" stroke="#fff" strokeWidth="1.2" />
            </svg>
          </div>
          <span className="hidden text-base font-semibold text-surface-900 sm:inline">
            {COMPANY_NAME}
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {/* Services dropdown */}
          <div className="relative">
            <button
              type="button"
              className={`flex items-center gap-1 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${
                pathname.startsWith("/tjanster")
                  ? "bg-brand-50 text-brand-700"
                  : "text-surface-600 hover:bg-surface-50 hover:text-brand-700"
              }`}
              onClick={() => setServicesOpen(!servicesOpen)}
              onMouseEnter={() => setServicesOpen(true)}
              aria-expanded={servicesOpen}
            >
              Tjänster
              <svg className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div
                className="absolute left-0 top-full z-50 mt-1 w-72 rounded-xl border border-surface-100 bg-white p-2 shadow-lg"
                onMouseLeave={() => setServicesOpen(false)}
              >
                {SERVICE_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-surface-50"
                  >
                    <span className="text-sm font-medium text-surface-900">{item.label}</span>
                    <span className="mt-0.5 block text-xs text-surface-500">{item.description}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {NAV_ITEMS.filter(item => item.label !== "Tjänster").map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${
                  active
                    ? "bg-brand-50 text-brand-700"
                    : "text-surface-600 hover:bg-surface-50 hover:text-brand-700"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/kontakt"
            className="btn-primary whitespace-nowrap"
            onClick={() => events.clickBook()}
          >
            Boka genomgång
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-surface-500 transition-colors hover:bg-surface-50 hover:text-surface-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Öppna meny"
        >
          {mobileOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-surface-100 bg-white shadow-soft lg:hidden">
          <div className="container-section space-y-1 py-4 pb-6">
            {/* Services section */}
            <p className="eyebrow px-3 pb-1">Tjänster</p>
            {SERVICE_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${
                  isActive(item.href)
                    ? "bg-brand-50 text-brand-700"
                    : "text-surface-700 hover:bg-surface-50 hover:text-brand-700"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="my-3 border-t border-surface-100" />

            {NAV_ITEMS.filter(item => item.label !== "Tjänster").map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-lg px-3 py-2.5 text-base font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${
                    active
                      ? "bg-brand-50 text-brand-700"
                      : "text-surface-700 hover:bg-surface-50 hover:text-brand-700"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="pt-4">
              <Link
                href="/kontakt"
                className="btn-primary block w-full text-center"
                onClick={() => {
                  setMobileOpen(false);
                  events.clickBook();
                }}
              >
                Boka genomgång
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
