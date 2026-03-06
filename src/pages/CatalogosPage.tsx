import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Download, FileText, Calendar, Eye, ExternalLink } from "lucide-react";

import portadaCatalogo2026 from "@/assets/portada-catalogo-2026.jpg";
import catalogoKits from "@/assets/catalogo-kits-transformacion.jpg";
import catalogoElectronica from "@/assets/catalogo-electronica.jpg";
import catalogoAntilegionella from "@/assets/catalogo-antilegionella.jpg";
import catalogoNess from "@/assets/catalogo-ness.jpg";
import catalogoHealthcover from "@/assets/catalogo-healthcover.jpg";
import logoBimobject from "@/assets/logo-bimobject.jpg";
import logoBimandco from "@/assets/logo-bimandco.jpg";
import logoAcae from "@/assets/logo-acae.jpg";

const catalogoTarifa = {
  title: "Catálogo-Tarifa Presto 2026",
  description: "Catálogo completo con toda la gama de productos y tarifas Presto.",
  available: "En vigor a partir del 1 de marzo de 2026",
  href: "https://grupoprestoiberica.us7.list-manage.com/track/click?u=60850daaeec780356bbf5580e&id=4ee93783c0&e=e97d63add3",
  image: portadaCatalogo2026,
};

const bimPlatforms = [
  {
    name: "BIMobject",
    url: "https://productsite.bimobject.com/es/prestoiberica/privatecloud/presto-iberica-product-site",
    logo: logoBimobject,
  },
  {
    name: "BIM&CO",
    url: "https://www.bimandco.com/es/objetos-bim?search=presto",
    logo: logoBimandco,
  },
  {
    name: "ACAE",
    url: "https://www.acae.es/cat/PRE/presto-iberica.html/PRESTO-IBERICA/presto-iberica.html",
    logo: logoAcae,
  },
];

const catalogos = [
  {
    id: 1,
    title: "Kits de Transformación",
    description: "Convierte los grifos temporizados a electrónicos sin obras.",
    image: catalogoKits,
  },
  {
    id: 2,
    title: "Catálogo Electrónica Presto",
    description: "Grifería electrónica para colectividades y espacios públicos.",
    image: catalogoElectronica,
  },
  {
    id: 3,
    title: "Sistemas Antilegionella",
    description: "Soluciones para la prevención de legionelosis en instalaciones.",
    image: catalogoAntilegionella,
  },
  {
    id: 4,
    title: "Catálogo Tecnología Ness",
    description: "Tecnología Ness para el control inteligente del agua.",
    image: catalogoNess,
  },
  {
    id: 5,
    title: "Productos Tecnología HealthCover",
    description: "Tecnología antibacterias para la protección de las personas.",
    image: catalogoHealthcover,
  },
];

const CatalogosPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero */}
        <section className="container-presto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-accent font-medium tracking-wider uppercase text-sm">
              Recursos
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mt-4 mb-6">
              Área de Descargas
            </h1>
            <p className="text-lg text-muted-foreground">
              Descarga nuestros catálogos en formato PDF. Toda la información técnica 
              y comercial que necesitas.
            </p>
          </motion.div>
        </section>

        {/* Catálogo-Tarifa Principal */}
        <section className="container-presto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-48 aspect-[3/4] relative overflow-hidden rounded-lg bg-muted flex-shrink-0 shadow-lg">
                <img
                  src={catalogoTarifa.image}
                  alt={catalogoTarifa.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-display mb-3">{catalogoTarifa.title}</h2>
                <p className="text-muted-foreground mb-4">{catalogoTarifa.description}</p>
                <p className="text-sm text-accent font-medium mb-6">{catalogoTarifa.available}</p>
                <a 
                  href={catalogoTarifa.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Descargar PDF
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* BIM Platforms */}
        <section className="container-presto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-display mb-3">Enlaces disponibles a otros formatos</h2>
            <p className="text-muted-foreground mb-8">
              Disponible formato BIM en las siguientes plataformas:
            </p>
            <div className="flex flex-wrap items-center gap-6 md:gap-10">
              {bimPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-xl hover:shadow-md transition-all border border-border/50 overflow-hidden"
                >
                  <img
                    src={platform.logo}
                    alt={platform.name}
                    className="h-20 md:h-24 w-auto object-contain p-2"
                  />
                </a>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Otros Catálogos */}
        <section className="container-presto">
          <h2 className="text-2xl font-display mb-8">Otros catálogos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {catalogos.map((catalogo, idx) => (
              <motion.article
                key={catalogo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 + 0.3 }}
                className="group bg-muted/30 rounded-xl overflow-hidden hover:bg-muted/50 transition-colors"
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-white flex items-center justify-center p-4">
                  <img
                    src={catalogo.image}
                    alt={catalogo.title}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-display mb-2">{catalogo.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{catalogo.description}</p>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                      <Download className="w-4 h-4" />
                      Descargar
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CatalogosPage;
