import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Grid3X3, 
  LayoutList, 
  SlidersHorizontal, 
  ChevronDown,
  X,
  Check
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Datos de productos de ejemplo
const products = [
  {
    id: 1,
    name: "PRESTO 2000",
    category: "Grifería Electrónica",
    subcategory: "Lavabo",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80",
    price: "Consultar",
    finishes: ["Cromo", "Negro Mate"],
    technologies: ["Electrónica", "ECO"],
    isNew: true,
  },
  {
    id: 2,
    name: "PRESTO ALPA",
    category: "Grifería Temporizada",
    subcategory: "Ducha",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&q=80",
    price: "Consultar",
    finishes: ["Cromo"],
    technologies: ["Temporizada", "Antilegionella"],
    isNew: false,
  },
  {
    id: 3,
    name: "PRESTO ARTE",
    category: "Grifería Doméstica",
    subcategory: "Lavabo",
    image: "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?w=600&q=80",
    price: "Consultar",
    finishes: ["Cromo", "Oro Cepillado", "Negro Mate"],
    technologies: ["ECO"],
    isNew: true,
  },
  {
    id: 4,
    name: "PRESTO SECURIT",
    category: "Ayudas Técnicas",
    subcategory: "Barras de Apoyo",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80",
    price: "Consultar",
    finishes: ["Blanco", "Cromo"],
    technologies: ["Seguridad"],
    isNew: false,
  },
  {
    id: 5,
    name: "PRESTO CONCEPT",
    category: "Grifería Electrónica",
    subcategory: "Cocina",
    image: "https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?w=600&q=80",
    price: "Consultar",
    finishes: ["Cromo", "Acero Inoxidable"],
    technologies: ["Electrónica", "ECO"],
    isNew: false,
  },
  {
    id: 6,
    name: "PRESTO COLUMNA",
    category: "Grifería Doméstica",
    subcategory: "Ducha",
    image: "https://images.unsplash.com/photo-1629774631753-88f827bf6447?w=600&q=80",
    price: "Consultar",
    finishes: ["Cromo", "Negro Mate", "Bronce"],
    technologies: ["Termostática"],
    isNew: true,
  },
  {
    id: 7,
    name: "PRESTO INDUSTRIAL",
    category: "Grifería Industrial",
    subcategory: "Lavabo",
    image: "https://images.unsplash.com/photo-1613685703305-5ca5e2e23e4d?w=600&q=80",
    price: "Consultar",
    finishes: ["Cromo"],
    technologies: ["Antivandalismo"],
    isNew: false,
  },
  {
    id: 8,
    name: "PRESTO SANIT",
    category: "Ayudas Técnicas",
    subcategory: "Sanitarios PMR",
    image: "https://images.unsplash.com/photo-1564540574859-0dfb63985953?w=600&q=80",
    price: "Consultar",
    finishes: ["Blanco"],
    technologies: ["Accesibilidad"],
    isNew: false,
  },
];

const categories = [
  { id: "all", label: "Todos los productos" },
  { id: "electronica", label: "Grifería Electrónica" },
  { id: "temporizada", label: "Grifería Temporizada" },
  { id: "domestica", label: "Grifería Doméstica" },
  { id: "industrial", label: "Grifería Industrial" },
  { id: "ayudas", label: "Ayudas Técnicas" },
];

const technologies = [
  "Electrónica",
  "Temporizada",
  "Termostática",
  "Antilegionella",
  "ECO",
  "Antivandalismo",
  "Seguridad",
  "Accesibilidad",
];

const finishes = [
  { id: "cromo", label: "Cromo", color: "#C0C0C0" },
  { id: "negro", label: "Negro Mate", color: "#1a1a1a" },
  { id: "oro", label: "Oro Cepillado", color: "#D4AF37" },
  { id: "bronce", label: "Bronce", color: "#CD7F32" },
  { id: "acero", label: "Acero Inoxidable", color: "#8B8B8B" },
  { id: "blanco", label: "Blanco", color: "#FFFFFF" },
];

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [selectedFinishes, setSelectedFinishes] = useState<string[]>([]);

  const toggleTechnology = (tech: string) => {
    setSelectedTechnologies(prev => 
      prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
    );
  };

  const toggleFinish = (finish: string) => {
    setSelectedFinishes(prev => 
      prev.includes(finish) ? prev.filter(f => f !== finish) : [...prev, finish]
    );
  };

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedTechnologies([]);
    setSelectedFinishes([]);
  };

  const hasActiveFilters = selectedCategory !== "all" || selectedTechnologies.length > 0 || selectedFinishes.length > 0;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container-presto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6 uppercase">
              Catálogo de Productos
            </h1>
            <p className="text-lg text-muted-foreground">
              Descubre nuestra gama completa de soluciones en grifería profesional, 
              diseñadas para ofrecer máxima eficiencia, durabilidad y elegancia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Toolbar */}
      <div className="sticky top-16 lg:top-[104px] z-30 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container-presto py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Categorías en desktop */}
            <div className="hidden lg:flex items-center gap-1 overflow-x-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === cat.id
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Mobile category selector */}
            <div className="lg:hidden flex-1">
              <button className="flex items-center gap-2 text-sm font-medium">
                {categories.find(c => c.id === selectedCategory)?.label}
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Acciones */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-4 py-2 text-sm border transition-colors ${
                  showFilters || hasActiveFilters
                    ? "border-primary text-primary"
                    : "border-border hover:border-foreground"
                }`}
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span className="hidden sm:inline">Filtros</span>
                {hasActiveFilters && (
                  <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                    {selectedTechnologies.length + selectedFinishes.length + (selectedCategory !== "all" ? 1 : 0)}
                  </span>
                )}
              </button>
              
              <div className="hidden sm:flex items-center border border-border">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 transition-colors ${viewMode === "grid" ? "bg-foreground text-background" : "hover:bg-muted/50"}`}
                  aria-label="Vista cuadrícula"
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 transition-colors ${viewMode === "list" ? "bg-foreground text-background" : "hover:bg-muted/50"}`}
                  aria-label="Vista lista"
                >
                  <LayoutList className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Panel de filtros expandido */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 pt-6 border-t border-border"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Tecnologías */}
                <div>
                  <h4 className="text-sm font-medium mb-4">Tecnologías</h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <button
                        key={tech}
                        onClick={() => toggleTechnology(tech)}
                        className={`px-3 py-1.5 text-xs border transition-colors ${
                          selectedTechnologies.includes(tech)
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border hover:border-foreground"
                        }`}
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Acabados */}
                <div>
                  <h4 className="text-sm font-medium mb-4">Acabados</h4>
                  <div className="flex flex-wrap gap-3">
                    {finishes.map((finish) => (
                      <button
                        key={finish.id}
                        onClick={() => toggleFinish(finish.id)}
                        className="group relative"
                        title={finish.label}
                      >
                        <span
                          className={`block w-8 h-8 rounded-full border-2 transition-all ${
                            selectedFinishes.includes(finish.id)
                              ? "border-primary scale-110"
                              : "border-transparent hover:scale-110"
                          }`}
                          style={{ backgroundColor: finish.color }}
                        />
                        {selectedFinishes.includes(finish.id) && (
                          <Check className="absolute inset-0 m-auto w-4 h-4 text-background" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Limpiar filtros */}
                {hasActiveFilters && (
                  <div className="flex items-end">
                    <button
                      onClick={clearFilters}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <X className="w-4 h-4" />
                      Limpiar filtros
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Productos */}
      <section className="py-12 lg:py-16">
        <div className="container-presto">
          <div className="mb-6 text-sm text-muted-foreground">
            Mostrando {products.length} productos
          </div>

          {viewMode === "grid" ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {products.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    to={`/producto/${product.id}`}
                    className="group block"
                  >
                    <div className="relative aspect-square bg-muted/30 mb-4 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                      {product.isNew && (
                        <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium tracking-wider uppercase">
                          Nuevo
                        </span>
                      )}
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                      <h3 className="font-display text-lg group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex gap-1.5 mt-3">
                        {product.finishes.slice(0, 4).map((finish, i) => (
                          <span
                            key={i}
                            className="w-4 h-4 rounded-full border border-border"
                            style={{
                              backgroundColor: finishes.find(f => f.label === finish)?.color || "#ccc"
                            }}
                          />
                        ))}
                        {product.finishes.length > 4 && (
                          <span className="text-xs text-muted-foreground">
                            +{product.finishes.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {products.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    to={`/producto/${product.id}`}
                    className="group flex gap-6 p-4 border border-border hover:border-primary transition-colors"
                  >
                     <div className="w-32 h-32 flex-shrink-0 bg-muted/30 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="flex-1 py-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                          <h3 className="font-display text-xl group-hover:text-primary transition-colors">
                            {product.name}
                          </h3>
                        </div>
                        {product.isNew && (
                          <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium tracking-wider uppercase">
                            Nuevo
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4 mt-3">
                        <div className="flex gap-1.5">
                          {product.finishes.map((finish, i) => (
                            <span
                              key={i}
                              className="w-4 h-4 rounded-full border border-border"
                              style={{
                                backgroundColor: finishes.find(f => f.label === finish)?.color || "#ccc"
                              }}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {product.technologies.join(" • ")}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SEO Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container-presto">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl mb-6">
              Grifería Profesional de Alta Calidad
            </h2>
            <div className="prose prose-sm text-muted-foreground">
              <p>
                En Presto Ibérica ofrecemos la más amplia gama de grifería profesional para 
                colectividades, espacios domésticos y soluciones de accesibilidad. Nuestros 
                productos están diseñados para ofrecer máxima eficiencia, durabilidad y 
                sostenibilidad.
              </p>
              <p>
                Desde grifería electrónica con sensores de última generación hasta sistemas 
                temporizados antivandalismo, cada producto incorpora las tecnologías más 
                avanzadas del mercado. Descubre nuestras colecciones de grifería de baño, 
                cocina, duchas y sistemas especializados para hospitales, hoteles y espacios públicos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
