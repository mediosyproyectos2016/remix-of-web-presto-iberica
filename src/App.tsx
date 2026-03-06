import { ScrollToTop } from "@/components/ScrollToTop";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import Index from "./pages/Index";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import PrestoCustomPage from "./pages/PrestoCustomPage";
import TechnologiesPage from "./pages/TechnologiesPage";
import CompanyPage from "./pages/CompanyPage";
import ContactPage from "./pages/ContactPage";
import CasosExitoPage from "./pages/CasosExitoPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import NovedadesPage from "./pages/NovedadesPage";
import CatalogosPage from "./pages/CatalogosPage";
import DescargasPage from "./pages/DescargasPage";
import CertificacionesPage from "./pages/CertificacionesPage";
import FAQPage from "./pages/FAQPage";
import AreaProfesionalPage from "./pages/AreaProfesionalPage";
import ProyectosPage from "./pages/ProyectosPage";
import AvisoLegalPage from "./pages/AvisoLegalPage";
import PrivacidadPage from "./pages/PrivacidadPage";
import CookiesPage from "./pages/CookiesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/productos" element={<ProductsPage />} />
          <Route path="/griferia-colectividades" element={<CategoryPage />} />
          <Route path="/griferia" element={<CategoryPage />} />
          <Route path="/ayudas-tecnicas" element={<CategoryPage />} />
          <Route path="/categoria/:slug" element={<CategoryPage />} />
          <Route path="/producto/:slug" element={<ProductPage />} />
          <Route path="/presto-custom" element={<PrestoCustomPage />} />
          <Route path="/tecnologias" element={<TechnologiesPage />} />
          <Route path="/empresa" element={<CompanyPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/casos-exito" element={<CasosExitoPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/novedades" element={<NovedadesPage />} />
          <Route path="/catalogos" element={<CatalogosPage />} />
          <Route path="/descargas" element={<DescargasPage />} />
          <Route path="/certificaciones" element={<CertificacionesPage />} />
          <Route path="/faq" element={<Navigate to="/contacto" replace />} />
          <Route path="/localizador" element={<Navigate to="/contacto?tab=localizador" replace />} />
          <Route path="/area-pro" element={<AreaProfesionalPage />} />
          <Route path="/proyectos" element={<ProyectosPage />} />
          <Route path="/aviso-legal" element={<AvisoLegalPage />} />
          <Route path="/privacidad" element={<PrivacidadPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;