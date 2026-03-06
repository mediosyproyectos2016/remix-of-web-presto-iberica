import { motion } from "framer-motion";
import { Search, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import { distribuidores, buscarDistribuidores, LOCALIZADOR_ENABLED } from "@/data/distribuidores";

const ITEMS_PER_PAGE = 10;

export const LocalizadorSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const resultados = useMemo(() => buscarDistribuidores(searchQuery), [searchQuery]);

  if (!LOCALIZADOR_ENABLED) {
    return null;
  }

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(resultados.length / ITEMS_PER_PAGE);
  const paginatedResults = resultados.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  const hasSearched = searchQuery.trim().length > 0;

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mb-8"
      >
        <span className="text-accent font-medium tracking-wider uppercase text-sm">
          Buscador de Puntos de Venta
        </span>
        <h1 className="text-4xl md:text-5xl font-display mt-4 mb-6">
          Encuentra a tu Distribuidor
        </h1>
        <p className="text-lg text-muted-foreground">
          Encuentra tu tienda más cercana. Más de {distribuidores.length} puntos de
          venta autorizados en toda España y Europa.
        </p>
      </motion.div>

      <section className="mb-8">
        <div className="bg-secondary p-6 rounded-xl">
          <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
            Código Postal o Municipio
          </label>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Introduce tu código postal o municipio..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>
      </section>

      <section>
        {!hasSearched ? (
          <div className="text-center py-16 text-muted-foreground">
            <MapPin className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p className="text-lg">Introduce un código postal o municipio para buscar distribuidores</p>
          </div>
        ) : resultados.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            <Search className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p className="text-lg">No se encontraron distribuidores para "{searchQuery}"</p>
            <p className="text-sm mt-2">Prueba con otro código postal o municipio</p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-display">
                {resultados.length} Resultado{resultados.length !== 1 ? "s" : ""}
              </h2>
              <span className="text-sm text-muted-foreground">
                Página {currentPage} de {totalPages}
              </span>
            </div>

            <div className="space-y-3">
              {paginatedResults.map((distribuidor, index) => (
                <motion.div
                  key={distribuidor.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className="p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-all"
                >
                  <h3 className="font-semibold text-foreground mb-2">{distribuidor.nombre}</h3>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>
                      {distribuidor.direccion}, {distribuidor.codigoPostal} {distribuidor.ciudad}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-border hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                  let page: number;
                  if (totalPages <= 7) {
                    page = i + 1;
                  } else if (currentPage <= 4) {
                    page = i + 1;
                  } else if (currentPage >= totalPages - 3) {
                    page = totalPages - 6 + i;
                  } else {
                    page = currentPage - 3 + i;
                  }

                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                        currentPage === page
                          ? "bg-primary text-primary-foreground"
                          : "border border-border hover:bg-muted"
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}

                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-border hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </>
        )}
      </section>

      <section className="mt-16">
        <div className="bg-secondary rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-display mb-4">¿Quieres ser distribuidor Presto?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Únete a nuestra red de distribuidores y ofrece productos de la más alta calidad a tus clientes.
          </p>
          <a
            href="mailto:info@prestoiberica.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Contactar
          </a>
        </div>
      </section>
    </div>
  );
};
