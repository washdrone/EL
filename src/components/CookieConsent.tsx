"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CONSENT_KEY = "griddrone_cookie_consent";

type ConsentStatus = "pending" | "accepted" | "declined";

function getStoredConsent(): ConsentStatus {
  if (typeof window === "undefined") return "pending";
  const stored = localStorage.getItem(CONSENT_KEY);
  if (stored === "accepted" || stored === "declined") return stored;
  return "pending";
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<ConsentStatus>("accepted"); // default to hide flash
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setConsent(getStoredConsent());
    setMounted(true);
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setConsent("accepted");
    // Enable GA4 by reloading — gtag consent update
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, "declined");
    setConsent("declined");
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }
  }

  if (!mounted || consent !== "pending") return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-samtycke"
      className="fixed bottom-0 left-0 right-0 z-[45] border-t border-surface-200 bg-white p-4 shadow-elevated sm:p-5"
    >
      <div className="container-section flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-surface-600">
          Vi använder cookies för att analysera besökstrafik och förbättra
          webbplatsen.{" "}
          <Link
            href="/integritetspolicy"
            className="text-brand-600 underline hover:text-brand-700"
          >
            Läs mer i vår integritetspolicy
          </Link>
          .
        </p>
        <div className="flex flex-shrink-0 gap-3">
          <button
            type="button"
            onClick={decline}
            className="rounded-sm border border-surface-200 bg-white px-4 py-2 text-sm font-medium text-surface-700 transition-colors hover:bg-surface-50"
          >
            Avböj
          </button>
          <button
            type="button"
            onClick={accept}
            className="rounded-sm bg-brand-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-700"
          >
            Godkänn
          </button>
        </div>
      </div>
    </div>
  );
}

export function getConsentStatus(): ConsentStatus {
  return getStoredConsent();
}
