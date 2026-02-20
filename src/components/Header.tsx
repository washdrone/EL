"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_ITEMS, COMPANY_NAME } from "@/lib/constants";
import { events } from "@/lib/analytics";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav
        className="container-section flex items-center justify-between py-3"
        aria-label="Huvudnavigering"
      >
        <Link
          href="/elnatsinspektion-med-dronare"
          className="flex items-center gap-2 text-lg font-bold text-primary-600"
        >
          <svg
            className="h-8 w-8"
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
          >
            <rect width="32" height="32" rx="6" fill="#1e3a5f" />
            <path
              d="M8 20l4-8 4 5 4-3 4 6"
              stroke="#f97316"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="16" cy="10" r="3" stroke="#fff" strokeWidth="1.5" />
          </svg>
          <span className="hidden sm:inline">{COMPANY_NAME}</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-primary-600"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/elnatsinspektion-med-dronare/kontakt"
            className="btn-primary text-sm"
            onClick={() => events.clickBook()}
          >
            Boka genomgång
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Öppna meny"
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container-section space-y-1 py-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-primary-600"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/elnatsinspektion-med-dronare/kontakt"
              className="btn-primary mt-3 block w-full text-center text-sm"
              onClick={() => {
                setMobileOpen(false);
                events.clickBook();
              }}
            >
              Boka genomgång
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
