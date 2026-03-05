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
        name: `${COMPANY_NAME} AB`,
        url: SITE_URL,
        logo: `${SITE_URL}/opengraph-image`,
        email: CONTACT_EMAIL,
        telephone: CONTACT_PHONE,
        description: `${COMPANY_NAME} – professionell drönarinspektion av kraftledningar, elnät och energiinfrastruktur i Sverige.`,
        areaServed: {
          "@type": "Country",
          name: "Sweden",
        },
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            name: "BVLOS-certifiering Transportstyrelsen",
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "PDRA S-01 EASA",
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "UAS-operatörstillstånd",
          },
        ],
        knowsAbout: [
          "Kraftledningsinspektion",
          "Drönarinspektion elnät",
          "Termografering",
          "BVLOS",
          "LiDAR",
          "Vindkraftinspektion",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
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
        "@id": `${SITE_URL}${servicePath || "/tjanster/kraftledningsinspektion"}#service`,
        name: serviceName || "Kraftledningsinspektion med drönare",
        description:
          serviceDescription ||
          "Professionell inspektion av kraftledningar och elnät med drönare. Visuell kamera, värmekamera & LiDAR. Standardiserad datainsamling och strukturerade rapporter.",
        url: `${SITE_URL}${servicePath || "/tjanster/kraftledningsinspektion"}`,
        provider: {
          "@type": "Organization",
          "@id": `${SITE_URL}#organization`,
          name: `${COMPANY_NAME} AB`,
          url: SITE_URL,
        },
        areaServed: {
          "@type": "Country",
          name: "Sweden",
        },
        serviceType: "Drönarinspektion",
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          areaServed: {
            "@type": "Country",
            name: "Sweden",
          },
        },
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
        description: `${COMPANY_NAME} – professionell drönarinspektion av kraftledningar, elnät och energiinfrastruktur i Sverige.`,
        publisher: {
          "@type": "Organization",
          "@id": `${SITE_URL}#organization`,
          name: `${COMPANY_NAME} AB`,
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
