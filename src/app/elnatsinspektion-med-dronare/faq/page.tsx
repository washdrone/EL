import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";
import JsonLd from "@/components/JsonLd";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = createPageMetadata({
  title: "Vanliga frågor – elnätsinspektion med drönare",
  description:
    "Svar på vanliga frågor om drönareinspektion av elnät: upphandling, arbetsmiljö, leveranser, utrustning, tidsåtgång och prisdrivare.",
  path: "/elnatsinspektion-med-dronare/faq",
  keywords: [
    "frågor drönareinspektion elnät",
    "FAQ elnätsinspektion",
    "drönareinspektion frågor svar",
  ],
});

export default function FAQPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          {
            name: "Elnätsinspektion med drönare",
            href: "/elnatsinspektion-med-dronare",
          },
          { name: "FAQ" },
        ]}
      />
      <JsonLd type="FAQPage" faqItems={faqItems} />

      <Breadcrumbs
        items={[
          {
            name: "Elnätsinspektion med drönare",
            href: "/elnatsinspektion-med-dronare",
          },
          { name: "Vanliga frågor" },
        ]}
      />

      <Hero
        title="Vanliga frågor om elnätsinspektion med drönare"
        subtitle="FAQ"
        description="Svar på de vanligaste frågorna vi får från elnätsbolag, entreprenörer och upphandlare."
      />

      <FAQ
        items={faqItems}
        heading="Frågor och svar"
        subheading="Hittar ni inte svaret ni söker? Kontakta oss så hjälper vi er."
      />

      <CTABand
        heading="Har ni fler frågor?"
        description="Kontakta oss direkt – vi svarar gärna på specifika frågor om er situation."
      />
    </>
  );
}
