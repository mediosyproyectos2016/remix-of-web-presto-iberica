import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Download, FileText, Image, FileCode, Package, Search, Filter } from "lucide-react";
import { useState } from "react";

const categories = [
  { id: "all", label: "Todos", icon: Package },
  { id: "fichas", label: "Fichas Técnicas", icon: FileText },
  { id: "cad", label: "Archivos CAD", icon: FileCode },
  { id: "bim", label: "Objetos BIM", icon: Package },
  { id: "images", label: "Imágenes HD", icon: Image },
];

const downloads = [
  {
    id: 1,
    name: "PRESTO 2000 E",
    type: "fichas",
    files: [
      { name: "Ficha técnica", format: "PDF", size: "1.2 MB" },
      { name: "Manual instalación", format: "PDF", size: "3.5 MB" },
      { name: "Archivo CAD", format: "DWG", size: "0.8 MB" },
    ],
  },
  {
    id: 2,
    name: "PRESTO SENSACIÓN",
    type: "fichas",
    files: [
      { name: "Ficha técnica", format: "PDF", size: "1.5 MB" },
      { name: "Objeto BIM", format: "RFA", size: "2.1 MB" },
      { name: "Imágenes HD", format: "ZIP", size: "15 MB" },
    ],
  },
  {
    id: 3,
    name: "Barra Abatible 800mm",
    type: "fichas",
    files: [
      { name: "Ficha técnica", format: "PDF", size: "0.9 MB" },
      { name: "Instrucciones montaje", format: "PDF", size: "2.0 MB" },
    ],
  },
  {
    id: 4,
    name: "Columna Ducha ALPA",
    type: "cad",
    files: [
      { name: "Archivo CAD 2D", format: "DWG", size: "1.1 MB" },
      { name: "Archivo CAD 3D", format: "DWG", size: "2.8 MB" },
      { name: "Objeto BIM", format: "RFA", size: "3.5 MB" },
    ],
  },
  {
    id: 5,
    name: "Grifo Electrónico Lavabo",
    type: "bim",
    files: [
      { name: "Objeto BIM Revit", format: "RFA", size: "2.3 MB" },
      { name: "Objeto BIM IFC", format: "IFC", size: "1.8 MB" },
    ],
  },
];

const DescargasPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero */}
        <section className="container-presto mb-12">
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
              Accede a fichas técnicas, archivos CAD, objetos BIM e imágenes 
              de alta resolución de todos nuestros productos.
            </p>
          </motion.div>
        </section>

        {/* Search & Filters */}
        <section className="container-presto mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar por nombre de producto..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    activeCategory === cat.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/80 text-muted-foreground'
                  }`}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Downloads List */}
        <section className="container-presto">
          <div className="space-y-4">
            {downloads.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-muted/30 rounded-xl p-6 hover:bg-muted/50 transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-display mb-1">{item.name}</h3>
                    <p className="text-muted-foreground text-sm">
                      {item.files.length} archivos disponibles
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.files.map((file, fileIdx) => (
                      <button
                        key={fileIdx}
                        className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm hover:bg-background transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        <span>{file.name}</span>
                        <span className="text-xs text-muted-foreground">
                          ({file.format} · {file.size})
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* BIM Platforms */}
        <section className="container-presto mt-16 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-display mb-3">Formato BIM</h2>
            <p className="text-muted-foreground max-w-2xl">
              Disponible en las siguientes plataformas. Descarga objetos BIM de Presto 
              para integrarlos directamente en tus proyectos.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                name: "BIM&CO",
                description: "Biblioteca de objetos BIM para profesionales de la construcción.",
                href: "https://www.bimandco.com/es/objetos-bim?search=presto",
              },
              {
                name: "BIMobject",
                description: "Plataforma global de contenido BIM para arquitectos e ingenieros.",
                href: "https://productsite.bimobject.com/es/prestoiberica/privatecloud/presto-iberica-product-site",
              },
              {
                name: "ACAE",
                description: "Asociación de fabricantes con catálogo de productos BIM.",
                href: "https://www.acae.es/cat/PRE/presto-iberica.html/PRESTO-IBERICA/presto-iberica.html",
              },
            ].map((platform, idx) => (
              <motion.a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-muted/30 rounded-xl p-6 hover:bg-muted/50 transition-colors border border-border/50 hover:border-primary/30"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Package className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-lg">{platform.name}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{platform.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Visitar plataforma →
                </span>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Help Section */}
        <section className="container-presto">
          <div className="bg-muted/50 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-display mb-4">¿No encuentras lo que buscas?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Nuestro equipo técnico puede ayudarte a encontrar la documentación 
              que necesitas para tu proyecto.
            </p>
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Contactar con soporte técnico
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DescargasPage;
