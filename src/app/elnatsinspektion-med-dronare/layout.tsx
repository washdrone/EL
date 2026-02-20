import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import JsonLd from "@/components/JsonLd";

export default function SectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd type="Organization" />
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <StickyCTA />
    </>
  );
}
