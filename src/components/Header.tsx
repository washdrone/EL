"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_ITEMS, COMPANY_NAME, SERVICE_ITEMS, BRANCH_ITEMS } from "@/lib/constants";
import { Zap } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [branchesOpen, setBranchesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setBranchesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-200 ${
        scrolled
          ? "border-slate-200 bg-white/95 backdrop-blur-md shadow-sm"
          : "border-transparent bg-white"
      }`}
    >
      <nav
        className="container-section flex items-center justify-between py-3"
        aria-label="Huvudnavigering"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-slate-900">
            <Zap className="h-4 w-4 text-cyan-400" strokeWidth={2.5} />
          </div>
          <span className="text-base font-bold tracking-tight text-slate-900">
            {COMPANY_NAME}
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {/* Services dropdown */}
          <div className="relative">
            <button
              type="button"
              className={`flex items-center gap-1 whitespace-nowrap rounded-sm px-3 py-2 text-sm font-medium transition-colors ${
                pathname.startsWith("/tjanster")
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
              onClick={() => setServicesOpen(!servicesOpen)}
              onMouseEnter={() => setServicesOpen(true)}
              aria-expanded={servicesOpen}
            >
              Tjänster
              <svg
                className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div
                className="absolute left-0 top-full z-50 mt-1 w-72 rounded-sm border border-slate-200 bg-white p-1.5 shadow-lg"
                onMouseLeave={() => setServicesOpen(false)}
              >
                {SERVICE_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-sm px-3 py-2.5 transition-colors hover:bg-slate-50"
                  >
                    <span className="text-sm font-medium text-slate-900">{item.label}</span>
                    <span className="mt-0.5 block text-xs text-slate-500">{item.description}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Branches dropdown */}
          <div className="relative">
            <button
              type="button"
              className={`flex items-center gap-1 whitespace-nowrap rounded-sm px-3 py-2 text-sm font-medium transition-colors ${
                pathname.startsWith("/branscher")
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
              onClick={() => setBranchesOpen(!branchesOpen)}
              onMouseEnter={() => setBranchesOpen(true)}
              aria-expanded={branchesOpen}
            >
              Branscher
              <svg
                className={`h-3.5 w-3.5 transition-transform ${branchesOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {branchesOpen && (
              <div
                className="absolute left-0 top-full z-50 mt-1 w-64 rounded-sm border border-slate-200 bg-white p-1.5 shadow-lg"
                onMouseLeave={() => setBranchesOpen(false)}
              >
                {BRANCH_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-sm px-3 py-2.5 transition-colors hover:bg-slate-50"
                  >
                    <span className="text-sm font-medium text-slate-900">{item.label}</span>
                    <span className="mt-0.5 block text-xs text-slate-500">{item.description}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {NAV_ITEMS.filter((item) => item.label !== "Tjänster" && item.label !== "Branscher").map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`whitespace-nowrap rounded-sm px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/kontakt" className="btn-primary whitespace-nowrap">
            Diskutera ert behov
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm p-2 text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900 lg:hidden"
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
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <div className="container-section space-y-1 py-4">
            <p className="eyebrow px-3 pb-1">Tjänster</p>
            {SERVICE_ITEMS.slice(0, 6).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-sm px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="my-2 border-t border-slate-100" />

            <p className="eyebrow px-3 pb-1">Branscher</p>
            {BRANCH_ITEMS.slice(0, 5).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-sm px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="my-2 border-t border-slate-100" />

            {NAV_ITEMS.filter((item) => item.label !== "Tjänster" && item.label !== "Branscher").map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-sm px-3 py-2.5 text-base font-medium transition-colors ${
                    active
                      ? "bg-slate-100 text-slate-900"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="pt-3">
              <Link
                href="/kontakt"
                className="btn-primary block w-full text-center"
                onClick={() => setMobileOpen(false)}
              >
                Diskutera ert behov
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
