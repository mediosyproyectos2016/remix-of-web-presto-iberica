import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { casosExito, categoriesProyectos } from "@/data/casosExito";

const ITEMS_PER_PAGE = 12;

export const ProyectosCasos = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = casosExito.filter(
    (c) => activeCategory === "Todos" || c.category === activeCategory
  );

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div>
      <h2 className="font-display text-3xl md:text-4xl mb-8">Casos de Éxito</h2>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categoriesProyectos.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-4 py-2 text-xs tracking-elegant uppercase transition-all duration-300 border ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-transparent border-border text-muted-foreground hover:border-primary hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeCategory}-${currentPage}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {paginated.map((caso, idx) => (
            <motion.div
              key={caso.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.03 }}
              className="group cursor-pointer"
            >
              <div className="category-card aspect-[3/2] mb-3 overflow-hidden">
                <img
                  src={caso.image}
                  alt={caso.title}
                  className="category-card-image"
                  loading="lazy"
                />
                <div className="category-card-overlay" />
              </div>
              <h3 className="font-display text-sm mt-1 group-hover:text-primary transition-colors">
                {caso.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-10">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 text-xs uppercase tracking-elegant border border-border hover:border-primary hover:text-primary disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            Anterior
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 text-xs transition-colors ${
                currentPage === page
                  ? "bg-primary text-primary-foreground"
                  : "border border-border hover:border-primary hover:text-primary"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 text-xs uppercase tracking-elegant border border-border hover:border-primary hover:text-primary disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
};
