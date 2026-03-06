import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactSidebar, type ContactTab } from "@/components/contact/ContactSidebar";
import { AsistenciaSection } from "@/components/contact/AsistenciaSection";
import { FAQSection } from "@/components/contact/FAQSection";
import { MercadosSection } from "@/components/contact/MercadosSection";
import { RRSSSection } from "@/components/contact/RRSSSection";
import { LocalizadorSection } from "@/components/contact/LocalizadorSection";
import { SocialBar } from "@/components/contact/SocialBar";

const validTabs: ContactTab[] = ["asistencia", "faq", "mercados", "rrss", "localizador"];

const ContactPage = () => {
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get("tab") as ContactTab | null;
  const [activeTab, setActiveTab] = useState<ContactTab>(
    tabParam && validTabs.includes(tabParam) ? tabParam : "asistencia"
  );

  useEffect(() => {
    if (tabParam && validTabs.includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const handleTabChange = (tab: ContactTab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-0">
        <div className="container-presto">
          <div className="grid lg:grid-cols-[260px_1fr] gap-16">
            {/* Sidebar */}
            <ContactSidebar activeTab={activeTab} onTabChange={handleTabChange} />

            {/* Content */}
            <div className="min-w-0 pb-16 lg:pl-4">
              {activeTab === "asistencia" && <AsistenciaSection />}
              {activeTab === "faq" && (
                <FAQSection onSwitchToContact={() => setActiveTab("asistencia")} />
              )}
              {activeTab === "mercados" && <MercadosSection />}
              {activeTab === "rrss" && <RRSSSection />}
              {activeTab === "localizador" && <LocalizadorSection />}
            </div>
          </div>
        </div>

        {/* Social Bar - always visible at bottom */}
        <SocialBar />
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
