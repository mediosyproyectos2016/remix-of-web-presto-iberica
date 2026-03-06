import { useState } from "react";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const SearchButton = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsSearchOpen(true)}
        className="p-2.5 hover:bg-white/10 rounded-full transition-colors text-white" 
        aria-label="Buscar"
      >
        <Search className="w-5 h-5" />
      </button>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/98 backdrop-blur-sm"
          >
            <div className="container-presto h-full flex flex-col items-center justify-center">
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute top-6 right-6 p-2"
              >
                <X className="w-6 h-6" />
              </button>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="w-full max-w-2xl"
              >
                <h2 className="font-display text-2xl text-center mb-8">¿Qué estás buscando?</h2>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Buscar productos, tecnologías, documentación..."
                    className="w-full bg-transparent border-b-2 border-border focus:border-primary py-4 text-xl outline-none transition-colors placeholder:text-muted-foreground/50"
                    autoFocus
                  />
                  <Search className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground" />
                </div>
                
                <div className="mt-12">
                  <p className="text-sm text-muted-foreground mb-4">Búsquedas populares</p>
                  <div className="flex flex-wrap gap-2">
                    {["Grifería electrónica", "Duchas", "Presto Custom", "Antilegionella", "Barras de apoyo"].map((term) => (
                      <button
                        key={term}
                        className="px-4 py-2 text-sm border border-border hover:border-primary hover:text-primary transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
