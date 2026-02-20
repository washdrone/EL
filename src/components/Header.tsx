"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_ITEMS, COMPANY_NAME } from "@/lib/constants";
import { events } from "@/lib/analytics";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-surface-100 bg-white/90 backdrop-blur-lg">
      <nav
        className="container-section flex items-center justify-between py-4"
        aria-label="Huvudnavigering"
      >
        <Link
          href="/elnatsinspektion-med-dronare"
          className="flex items-center gap-2.5"
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
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-surface-600 transition-colors hover:bg-surface-50 hover:text-brand-700"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/elnatsinspektion-med-dronare/kontakt"
            className="btn-primary"
            onClick={() => events.clickBook()}
          >
            Boka genomgång
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-surface-500 transition-colors hover:bg-surface-50 hover:text-surface-900 lg:hidden"
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
        <div className="border-t border-surface-100 bg-white lg:hidden">
          <div className="container-section space-y-1 py-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2.5 text-base font-medium text-surface-700 transition-colors hover:bg-surface-50 hover:text-brand-700"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                href="/elnatsinspektion-med-dronare/kontakt"
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
