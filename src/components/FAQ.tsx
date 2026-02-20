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
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="heading-2">{heading}</h2>
          {subheading && <p className="body-text mt-4">{subheading}</p>}
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-slate-200">
          {items.map((item, index) => (
            <div key={index} className="py-4">
              <button
                type="button"
                className="flex w-full items-start justify-between text-left"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                aria-expanded={openIndex === index}
              >
                <span className="text-base font-medium text-slate-900 pr-4">
                  {item.question}
                </span>
                <span className="ml-4 flex-shrink-0 text-slate-400">
                  <svg
                    className={`h-5 w-5 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-3 pr-12">
                  <p className="text-sm leading-6 text-slate-600">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
