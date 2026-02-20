"use client";

import Link from "next/link";
import { events } from "@/lib/analytics";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white p-3 shadow-lg lg:hidden">
      <div className="flex items-center justify-center gap-3">
        <Link
          href="/elnatsinspektion-med-dronare/kontakt"
          className="btn-primary flex-1 text-center text-sm"
          onClick={() => events.clickBook()}
        >
          Boka genomgång
        </Link>
        <a
          href="tel:+4610000000"
          className="btn-secondary flex-shrink-0 text-sm"
          onClick={() => events.clickCall()}
          aria-label="Ring oss"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
