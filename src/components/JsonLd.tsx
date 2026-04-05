import { SITE_URL, SITE_NAME } from "@/lib/metadata";
import { COMPANY_NAME, CONTACT_EMAIL } from "@/lib/constants";
import type { BreadcrumbItem } from "@/components/Breadcrumbs";
import type { FAQItem } from "@/data/faq";

interface HowToStep {
  name: string;
  text: string;
}

interface JsonLdProps {
  type:
    | "Organization"
    | "Service"
    | "FAQPage"
    | "BreadcrumbList"
    | "WebSite"
    | "HowTo";
  breadcrumbs?: BreadcrumbItem[];
  faqItems?: FAQItem[];
  serviceName?: string;
  serviceDescription?: string;
  servicePath?: string;
  howToName?: string;
  howToDescription?: string;
  howToSteps?: HowToStep[];
}

export default function JsonLd({
  type,
  breadcrumbs,
  faqItems,
  serviceName,
  serviceDescription,
  servicePath,
  howToName,
  howToDescription,
  howToSteps,
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
        logo: `${SITE_URL}/images/Logotyp.png`,
        email: CONTACT_EMAIL,
        description: `${COMPANY_NAME} – professionell drönarinspektion av kraftledningar, elnät och energiinfrastruktur i Sverige.`,
        areaServed: {
          "@type": "Country",
          name: "Sweden",
        },
        // hasCredential: Borttaget – lägg till verifierade credentials här när de bekräftats.
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
          name: COMPANY_NAME,
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

    case "HowTo":
      schema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: howToName || "",
        description: howToDescription || "",
        step:
          howToSteps?.map((step, index) => ({
            "@type": "HowToStep",
            position: index + 1,
            name: step.name,
            text: step.text,
          })) || [],
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
