"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState, useId } from "react";
import { NAV_ITEMS, COMPANY_NAME, SERVICE_ITEMS, BRANCH_ITEMS } from "@/lib/constants";

type OpenDropdown = null | "services" | "branches";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<OpenDropdown>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mobileMenuId = useId();

  // Close all menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdowns on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Close dropdowns on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleDropdown = useCallback((dropdown: OpenDropdown) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  }, []);

  const handleMouseEnter = useCallback((dropdown: OpenDropdown) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(dropdown);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
      closeTimeoutRef.current = null;
    }, 100);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile menu when resizing to desktop breakpoint
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024 && mobileOpen) {
        setMobileOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileOpen]);

  // Focus management: move focus into menu when opened, return when closed
  useEffect(() => {
    if (mobileOpen && mobileMenuRef.current) {
      const firstLink = mobileMenuRef.current.querySelector<HTMLElement>("a, button");
      firstLink?.focus();
    } else if (!mobileOpen && mobileToggleRef.current) {
      if (document.activeElement && mobileMenuRef.current?.contains(document.activeElement)) {
        mobileToggleRef.current.focus();
      }
    }
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 shadow-header backdrop-blur-md"
          : "bg-white"
      }`}
    >
      {/* Top accent line */}
      <div className="h-[2px] bg-brand-600" />

      <nav
        ref={navRef}
        className="container-section flex items-center justify-between py-3.5"
        aria-label="Huvudnavigering"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
        >
          <Image
            src="/images/Logotyp.png"
            alt={COMPANY_NAME}
            width={160}
            height={40}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className={`flex items-center gap-1.5 whitespace-nowrap px-3.5 py-2 text-[13px] font-medium transition-colors ${
                pathname.startsWith("/tjanster")
                  ? "text-brand-700"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              onClick={() => toggleDropdown("services")}
              aria-expanded={openDropdown === "services"}
              aria-haspopup="true"
            >
              Tjänster
              <svg
                className={`h-3 w-3 transition-transform duration-200 ${openDropdown === "services" ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === "services" && (
              <div className="absolute left-0 top-full z-50 mt-2 w-80 border border-slate-200 bg-white p-2 shadow-elevated">
                {SERVICE_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3.5 py-2.5 transition-colors hover:bg-surface-50"
                  >
                    <span className="text-[13px] font-medium text-slate-900">{item.label}</span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-slate-400">{item.description}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Branches dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("branches")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className={`flex items-center gap-1.5 whitespace-nowrap px-3.5 py-2 text-[13px] font-medium transition-colors ${
                pathname.startsWith("/branscher")
                  ? "text-brand-700"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              onClick={() => toggleDropdown("branches")}
              aria-expanded={openDropdown === "branches"}
              aria-haspopup="true"
            >
              Branscher
              <svg
                className={`h-3 w-3 transition-transform duration-200 ${openDropdown === "branches" ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === "branches" && (
              <div className="absolute left-0 top-full z-50 mt-2 w-72 border border-slate-200 bg-white p-2 shadow-elevated">
                {BRANCH_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3.5 py-2.5 transition-colors hover:bg-surface-50"
                  >
                    <span className="text-[13px] font-medium text-slate-900">{item.label}</span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-slate-400">{item.description}</span>
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
                className={`whitespace-nowrap px-3.5 py-2 text-[13px] font-medium transition-colors ${
                  active
                    ? "text-brand-700"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center lg:flex">
          <Link href="/kontakt" className="btn-primary whitespace-nowrap text-[13px]">
            Diskutera ert behov
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          ref={mobileToggleRef}
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-slate-500 transition-colors hover:text-slate-900 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls={mobileMenuId}
          aria-label={mobileOpen ? "Stäng meny" : "Öppna meny"}
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

      {/* Mobile menu backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 top-[var(--header-h)] z-40 bg-navy-900/30 backdrop-blur-[2px] lg:hidden"
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile menu */}
      <div
        ref={mobileMenuRef}
        id={mobileMenuId}
        role="region"
        aria-label="Mobilmeny"
        className={`max-h-[calc(100dvh-64px)] overflow-y-auto border-t border-slate-100 bg-white transition-all duration-200 ease-out lg:hidden ${
          mobileOpen
            ? "visible opacity-100 translate-y-0"
            : "invisible opacity-0 -translate-y-2 pointer-events-none h-0 max-h-0 border-t-0"
        }`}
      >
        <div className="container-section space-y-1 py-5">
          <p className="eyebrow px-3 pb-2">Tjänster</p>
          {SERVICE_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              tabIndex={mobileOpen ? 0 : -1}
              className={`block px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "text-brand-700"
                  : "text-slate-700 hover:text-slate-900"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className="my-3 border-t border-slate-100" />

          <p className="eyebrow px-3 pb-2">Branscher</p>
          {BRANCH_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              tabIndex={mobileOpen ? 0 : -1}
              className={`block px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "text-brand-700"
                  : "text-slate-700 hover:text-slate-900"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className="my-3 border-t border-slate-100" />

          {NAV_ITEMS.filter((item) => item.label !== "Tjänster" && item.label !== "Branscher").map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                tabIndex={mobileOpen ? 0 : -1}
                aria-current={active ? "page" : undefined}
                className={`block px-3 py-3 text-base font-medium transition-colors ${
                  active
                    ? "text-brand-700"
                    : "text-slate-700 hover:text-slate-900"
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
              tabIndex={mobileOpen ? 0 : -1}
              className="btn-primary block w-full text-center"
              onClick={() => setMobileOpen(false)}
            >
              Diskutera ert behov
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
