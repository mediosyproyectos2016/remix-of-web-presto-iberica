import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { PrestoCustomSection } from "@/components/PrestoCustomSection";
import { TechnologiesSection } from "@/components/TechnologiesSection";
import { CompanySection } from "@/components/CompanySection";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
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
