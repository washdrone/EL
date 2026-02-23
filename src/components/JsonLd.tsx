import { SITE_URL, SITE_NAME } from "@/lib/metadata";
import { COMPANY_NAME, CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/constants";
import type { BreadcrumbItem } from "@/components/Breadcrumbs";
import type { FAQItem } from "@/data/faq";

interface JsonLdProps {
  type:
    | "Organization"
    | "Service"
    | "FAQPage"
    | "BreadcrumbList"
    | "WebSite";
  breadcrumbs?: BreadcrumbItem[];
  faqItems?: FAQItem[];
  serviceName?: string;
  serviceDescription?: string;
  servicePath?: string;
}

export default function JsonLd({
  type,
  breadcrumbs,
  faqItems,
  serviceName,
  serviceDescription,
  servicePath,
}: JsonLdProps) {
  let schema: Record<string, unknown>;

  switch (type) {
    case "Organization":
      schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${SITE_URL}#organization`,
        name: COMPANY_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/opengraph-image`,
        email: CONTACT_EMAIL,
        telephone: CONTACT_PHONE,
        description: `${SITE_NAME} – professionell drönareinspektion av elnät och luftledningar.`,
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: CONTACT_EMAIL,
            telephone: CONTACT_PHONE,
            availableLanguage: ["sv"],
          },
        ],
      };
      break;

    case "Service":
      schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${SITE_URL}${servicePath || "/elnatsinspektion-med-dronare"}#service`,
        name: serviceName || "Elnätsinspektion med drönare",
        description:
          serviceDescription ||
          "Professionell inspektion av luftledningar och elnät med drönare. Standardiserad datainsamling, georefererade bilder och strukturerade rapporter.",
        url: `${SITE_URL}${servicePath || "/elnatsinspektion-med-dronare"}`,
        provider: {
          "@type": "Organization",
          "@id": `${SITE_URL}#organization`,
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

    case "WebSite":
      schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${SITE_URL}#website`,
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: "sv-SE",
        description: `${SITE_NAME} – professionell drönareinspektion av elnät och luftledningar.`,
        publisher: {
          "@type": "Organization",
          "@id": `${SITE_URL}#organization`,
          name: COMPANY_NAME,
          url: SITE_URL,
        },
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
