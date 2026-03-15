import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { PrestoCustomSection } from "@/components/PrestoCustomSection";
import { TechnologiesSection } from "@/components/TechnologiesSection";
import { CompanySection } from "@/components/CompanySection";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Presto Ibérica | Grifería Profesional y Doméstica desde 1979"
        description="Fabricante español de grifería profesional para colectividades, grifería doméstica y ayudas técnicas. Tecnología, diseño y sostenibilidad desde 1979."
        canonical="https://www.prestoiberica.com/"
      />
      <Header />
      <main>
        <Hero />
        <CategoryGrid />
        <PrestoCustomSection />
        <TechnologiesSection />
        <CompanySection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
