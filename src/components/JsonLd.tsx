import { SITE_URL, SITE_NAME } from "@/lib/metadata";
import { COMPANY_NAME, CONTACT_EMAIL } from "@/lib/constants";
import type { FAQItem } from "@/data/faq";

interface HowToStep {
  name: string;
  text: string;
}

// href är obligatoriskt: Google kräver fältet `item` på varje ListItem
// (GSC-fel "Fältet item saknas" uppstår annars). Sista posten ska ha sidans egen URL.
interface JsonLdBreadcrumb {
  name: string;
  href: string;
}

interface ItemListEntry {
  name: string;
  href: string;
}

interface JsonLdProps {
  type:
    | "Organization"
    | "Service"
    | "FAQPage"
    | "BreadcrumbList"
    | "WebSite"
    | "HowTo"
    | "Article"
    | "TechArticle"
    | "ItemList"
    | "DefinedTermSet"
    | "ImageObject";
  breadcrumbs?: JsonLdBreadcrumb[];
  faqItems?: FAQItem[];
  serviceName?: string;
  serviceDescription?: string;
  servicePath?: string;
  howToName?: string;
  howToDescription?: string;
  howToSteps?: HowToStep[];
  articleHeadline?: string;
  articleDescription?: string;
  articlePath?: string;
  datePublished?: string;
  dateModified?: string;
  itemListName?: string;
  itemListItems?: ItemListEntry[];
  definedTermSetName?: string;
  definedTermSetPath?: string;
  definedTerms?: { name: string; description: string }[];
  imagePath?: string;
  imageCaption?: string;
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
  articleHeadline,
  articleDescription,
  articlePath,
  datePublished,
  dateModified,
  itemListName,
  itemListItems,
  definedTermSetName,
  definedTermSetPath,
  definedTerms,
  imagePath,
  imageCaption,
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
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/images/Logotyp.png`,
        },
        email: CONTACT_EMAIL,
        description: `${COMPANY_NAME} – professionell drönarinspektion av kraftledningar, elnät och energiinfrastruktur i Sverige.`,
        areaServed: {
          "@type": "Country",
          name: "Sweden",
        },
        // Verifierat av ägaren 2026-08-03: EASA-utbildning, BVLOS, mörkerflyg.
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            name: "EASA-utbildning för drönarpiloter",
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "BVLOS-behörighet (flygning bortom synhåll)",
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "Behörighet för mörkerflygning",
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
            item: `${SITE_URL}${item.href}`,
          })) || []),
        ],
      };
      break;

    case "Article":
    case "TechArticle":
      schema = {
        "@context": "https://schema.org",
        "@type": type,
        "@id": `${SITE_URL}${articlePath || ""}#article`,
        headline: articleHeadline || "",
        description: articleDescription || "",
        url: `${SITE_URL}${articlePath || ""}`,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}${articlePath || ""}`,
        },
        inLanguage: "sv-SE",
        image: {
          "@type": "ImageObject",
          url: `${SITE_URL}/opengraph-image`,
          width: 1200,
          height: 630,
        },
        ...(datePublished ? { datePublished } : {}),
        ...(dateModified ? { dateModified } : {}),
        author: {
          "@type": "Organization",
          "@id": `${SITE_URL}#organization`,
          name: COMPANY_NAME,
          url: SITE_URL,
        },
        publisher: {
          "@type": "Organization",
          "@id": `${SITE_URL}#organization`,
          name: COMPANY_NAME,
          url: SITE_URL,
        },
      };
      break;

    // Endast för bilder från GridDrones egna inspektioner (verifierat av ägaren).
    case "ImageObject":
      schema = {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        contentUrl: `${SITE_URL}${imagePath || ""}`,
        caption: imageCaption || "",
        creditText: COMPANY_NAME,
        creator: {
          "@type": "Organization",
          "@id": `${SITE_URL}#organization`,
          name: COMPANY_NAME,
        },
        copyrightHolder: {
          "@type": "Organization",
          "@id": `${SITE_URL}#organization`,
          name: COMPANY_NAME,
        },
      };
      break;

    case "DefinedTermSet":
      schema = {
        "@context": "https://schema.org",
        "@type": "DefinedTermSet",
        "@id": `${SITE_URL}${definedTermSetPath || ""}#termset`,
        name: definedTermSetName || "",
        url: `${SITE_URL}${definedTermSetPath || ""}`,
        inLanguage: "sv-SE",
        hasDefinedTerm:
          definedTerms?.map((term) => ({
            "@type": "DefinedTerm",
            name: term.name,
            description: term.description,
            inDefinedTermSet: `${SITE_URL}${definedTermSetPath || ""}#termset`,
          })) || [],
      };
      break;

    case "ItemList":
      schema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: itemListName || "",
        itemListElement:
          itemListItems?.map((entry, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: entry.name,
            url: `${SITE_URL}${entry.href}`,
          })) || [],
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
