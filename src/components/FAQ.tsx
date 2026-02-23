"use client";

import { useState } from "react";
import type { FAQItem } from "@/data/faq";

interface FAQProps {
  items: FAQItem[];
  heading?: string;
  subheading?: string;
}

export default function FAQ({
  items,
  heading = "Vanliga frågor",
  subheading,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-white" id="faq">
      <div className="container-section">
        <div className="section-intro">
          <h2 className="heading-2">{heading}</h2>
          {subheading && <p className="body-text mt-5">{subheading}</p>}
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          {items.map((item, index) => (
            <div
              key={index}
              className="border-b border-surface-100"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-brand-700"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                aria-expanded={openIndex === index}
              >
                <span className="text-base font-medium text-surface-900">
                  {item.question}
                </span>
                <span className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full transition-all ${openIndex === index ? "bg-brand-100 text-brand-700 rotate-180" : "bg-surface-100 text-surface-400"}`}>
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? "max-h-96 pb-5" : "max-h-0"
                }`}
              >
                <p className="pr-12 text-sm leading-6 text-surface-500">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
