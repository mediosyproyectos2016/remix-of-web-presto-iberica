import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Building2 } from "lucide-react";
import inspirationHotel from "@/assets/inspiration-hotel.jpg";
import { casosExito, categoriesProyectos } from "@/data/casosExito";

const ITEMS_PER_PAGE = 24;

const CasosExitoPage = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCasos = casosExito.filter(caso => {
    return activeCategory === "Todos" || caso.category === activeCategory;
  });

  const totalPages = Math.ceil(filteredCasos.length / ITEMS_PER_PAGE);
  const paginatedCasos = filteredCasos.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Cinematic Hero */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        <img
          src={inspirationHotel}
          alt="Casos de Éxito"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
        <div className="absolute inset-0 flex items-end pb-16">
          <div className="container-presto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl text-white"
            >
              <span className="text-accent font-medium tracking-luxury uppercase text-xs block mb-4">
                Proyectos
              </span>
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6 uppercase">
                Donde se hace visible la excelencia
              </h1>
              <div className="w-20 h-0.5 bg-accent mb-6" />
              <p className="text-lg text-white/80">
                Nuestros productos están presentes en proyectos emblemáticos de todo el mundo.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="pb-20">
        {/* Filters */}
        <section className="container-presto py-10 border-b border-border">
          <div className="flex flex-wrap gap-2">
            {categoriesProyectos.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-5 py-2.5 text-xs font-medium tracking-elegant uppercase transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            {filteredCasos.length} proyecto{filteredCasos.length !== 1 ? 's' : ''} encontrado{filteredCasos.length !== 1 ? 's' : ''}
          </p>
        </section>

        {/* Grid */}
        <section className="container-presto pt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${currentPage}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {paginatedCasos.map((caso, idx) => (
                <motion.article
                  key={caso.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group cursor-pointer"
                >
                  <div className="category-card aspect-[4/3] mb-5">
                    <img
                      src={caso.image}
                      alt={caso.title}
                      className="category-card-image"
                      loading="lazy"
                    />
                    <div className="category-card-overlay" />
                    <div className="absolute bottom-4 left-5 right-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="inline-flex items-center text-xs tracking-elegant uppercase font-medium">
                        Ver proyecto <ArrowRight className="ml-2 w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                  
                  <span className="text-accent text-xs tracking-wider uppercase font-medium">{caso.category}</span>
                  <h3 className="font-display text-xl mt-1.5 mb-2 group-hover:text-primary transition-colors">
                    {caso.title}
                  </h3>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredCasos.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Building2 className="w-12 h-12 mx-auto text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground">No hay proyectos con estos filtros.</p>
            </motion.div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => {
                    setCurrentPage(page);
                    window.scrollTo({ top: 400, behavior: "smooth" });
                  }}
                  className={`w-10 h-10 text-sm font-medium transition-colors ${
                    currentPage === page
                      ? "bg-primary text-primary-foreground"
                      : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          )}
        </section>

        {/* CTA */}
        <section className="container-presto mt-20">
          <div className="bg-primary text-primary-foreground p-12 md:p-16 text-center">
            <span className="text-xs tracking-luxury uppercase text-accent block mb-4">
              Colaboremos
            </span>
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              ¿Tienes un proyecto?
            </h2>
            <div className="accent-line mx-auto mb-6" />
            <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8">
              Nuestro equipo de proyectos te ayudará a encontrar las mejores soluciones.
            </p>
            <a href="/proyectos" className="btn-hero">
              Área Proyectos / Especialización
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasosExitoPage;
