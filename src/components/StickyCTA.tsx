"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { events } from "@/lib/analytics";

const CONSENT_KEY = "griddrone_cookie_consent";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    setVisible(consent === "accepted" || consent === "declined");

    function handleStorage() {
      const c = localStorage.getItem(CONSENT_KEY);
      setVisible(c === "accepted" || c === "declined");
    }
    window.addEventListener("storage", handleStorage);

    const interval = setInterval(handleStorage, 500);
    const cleanup = setTimeout(() => clearInterval(interval), 15000);

    return () => {
      window.removeEventListener("storage", handleStorage);
      clearInterval(interval);
      clearTimeout(cleanup);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="mobile-safe-padding fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 p-3 shadow-elevated backdrop-blur-lg lg:hidden">
      <div className="flex items-center justify-center gap-3">
        <Link
          href="/kontakt"
          className="btn-primary flex-1 justify-center"
          onClick={() => events.clickBook()}
        >
          Boka genomgång
        </Link>
      </div>
    </div>
  );
}
