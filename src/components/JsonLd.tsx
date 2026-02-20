import { SITE_URL, SITE_NAME } from "@/lib/metadata";
import { COMPANY_NAME, CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/constants";
import type { BreadcrumbItem } from "@/components/Breadcrumbs";
import type { FAQItem } from "@/data/faq";

interface JsonLdProps {
  type: "Organization" | "Service" | "FAQPage" | "BreadcrumbList";
  breadcrumbs?: BreadcrumbItem[];
  faqItems?: FAQItem[];
  serviceName?: string;
  serviceDescription?: string;
}

export default function JsonLd({
  type,
  breadcrumbs,
  faqItems,
  serviceName,
  serviceDescription,
}: JsonLdProps) {
  let schema: Record<string, unknown>;

  switch (type) {
    case "Organization":
      schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: COMPANY_NAME,
        url: SITE_URL,
        email: CONTACT_EMAIL,
        telephone: CONTACT_PHONE,
        description: `${SITE_NAME} – professionell drönareinspektion av elnät och luftledningar.`,
      };
      break;

    case "Service":
      schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: serviceName || "Elnätsinspektion med drönare",
        description:
          serviceDescription ||
          "Professionell inspektion av luftledningar och elnät med drönare. Standardiserad datainsamling, georefererade bilder och strukturerade rapporter.",
        provider: {
          "@type": "Organization",
          name: COMPANY_NAME,
          url: SITE_URL,
        },
        areaServed: {
          "@type": "Country",
          name: "Sweden",
        },
        serviceType: "Drönareinspektion",
      };
      break;

    case "FAQPage":
      schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity:
          faqItems?.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })) || [],
      };
      break;

    case "BreadcrumbList":
      schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Hem",
            item: SITE_URL,
          },
          ...(breadcrumbs?.map((item, index) => ({
            "@type": "ListItem",
            position: index + 2,
            name: item.name,
            ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
          })) || []),
        ],
      };
      break;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
