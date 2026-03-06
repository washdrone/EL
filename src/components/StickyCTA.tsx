"use client";

import Link from "next/link";
import { events } from "@/lib/analytics";

export default function StickyCTA() {
  return (
    <div className="mobile-safe-padding fixed bottom-0 left-0 right-0 z-40 border-t border-surface-100 bg-white/95 p-3 shadow-elevated backdrop-blur-lg lg:hidden">
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
