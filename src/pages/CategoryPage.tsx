import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChevronRight, Filter, Grid, List } from "lucide-react";
import { useState } from "react";
import categoryColectividades from "@/assets/category-colectividades.jpg";
import categoryGriferia from "@/assets/category-griferia.jpg";
import categoryAyudas from "@/assets/category-ayudas-tecnicas.jpg";

// Datos de ejemplo para las categorías
const categoryData: Record<string, {
  title: string;
  description: string;
  heroImage: string;
  subcategories: { name: string; count: number }[];
}> = {
  "griferia-colectividades": {
    title: "Grifería de Colectividades",
    description: "Gestión eficiente y tecnologías innovadoras para la gestión del agua. Desarrollamos tecnologías para la gestión del agua que permitan una mejor y mayor contribución a la sostenibilidad del medio ambiente.",
    heroImage: categoryColectividades,
    subcategories: [
      { name: "Grifería Electrónica", count: 45 },
      { name: "Grifería Temporizada", count: 38 },
      { name: "Grifería Industrial", count: 22 },
      { name: "Seguridad Temporizada", count: 15 },
      { name: "Sistemas Antilegionella", count: 12 },
      { name: "Válvulas", count: 28 },
    ],
  },
  "griferia": {
    title: "Grifería Doméstica",
    description: "El diseño como valor diferencial. Grifería orientada a un público exigente. Nuestras colecciones de baño y cocina combinan adecuadamente los materiales y diseños.",
    heroImage: categoryGriferia,
    subcategories: [
      { name: "Grifería Baño", count: 120 },
      { name: "Especial Duchas", count: 65 },
      { name: "Grifería Cocina", count: 48 },
      { name: "Colecciones", count: 8 },
    ],
  },
  "ayudas-tecnicas": {
    title: "Ayudas Técnicas y Equipamientos",
    description: "Expertos en equipamientos y colectividades para un diseño accesible para todos. Creamos productos que mejoren la accesibilidad y que al mismo tiempo ofrecen seguridad, confort y estética.",
    heroImage: categoryAyudas,
    subcategories: [
      { name: "Barras de Apoyo", count: 35 },
      { name: "Sanitarios PMR", count: 28 },
      { name: "Equipos de Emergencia", count: 15 },
      { name: "Accesorios de Baño", count: 42 },
    ],
  },
};

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  
  const category = slug ? categoryData[slug] : null;

  if (!category) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container-presto text-center">
            <h1 className="font-display text-4xl mb-4">Categoría no encontrada</h1>
            <p className="text-muted-foreground mb-8">
              La categoría que buscas no existe.
            </p>
            <Link to="/" className="btn-primary-elegant">
              Volver al inicio
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero section */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        <img
          src={category.heroImage}
          alt={category.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-end pb-16">
          <div className="container-presto text-white">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm mb-4 opacity-80">
              <Link to="/" className="hover:opacity-100">Inicio</Link>
              <ChevronRight className="w-4 h-4" />
              <span>Productos</span>
              <ChevronRight className="w-4 h-4" />
              <span>{category.title}</span>
            </nav>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6 uppercase">
              {category.title}
            </h1>
            <p className="text-lg opacity-80 max-w-2xl">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      <main className="section-py">
        <div className="container-presto">
          {/* Toolbar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12 pb-6 border-b border-border">
            <p className="text-muted-foreground">
              {category.subcategories.reduce((acc, sub) => acc + sub.count, 0)} productos disponibles
            </p>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-sm px-4 py-2 border border-border hover:border-foreground transition-colors">
                <Filter className="w-4 h-4" />
                Filtrar
              </button>
              <div className="flex border border-border">
                <button
                  className={`p-2 ${viewMode === "grid" ? "bg-secondary" : ""}`}
                  onClick={() => setViewMode("grid")}
                  aria-label="Vista cuadrícula"
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  className={`p-2 ${viewMode === "list" ? "bg-secondary" : ""}`}
                  onClick={() => setViewMode("list")}
                  aria-label="Vista lista"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Subcategories grid */}
          <div className={`grid gap-8 ${
            viewMode === "grid" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
              : "grid-cols-1"
          }`}>
            {category.subcategories.map((sub) => (
              <Link
                key={sub.name}
                to={`/categoria/${sub.name.toLowerCase().replace(/\s+/g, "-")}`}
                className={`group border border-border hover:border-accent transition-all duration-500 ${
                  viewMode === "list" ? "flex items-center justify-between p-6" : "p-8"
                }`}
              >
                <div>
                  <h3 className="font-display text-xl mb-2 group-hover:text-accent transition-colors">
                    {sub.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {sub.count} productos
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>

          {/* SEO text section */}
          <div className="mt-20 pt-12 border-t border-border">
            <h2 className="font-display text-2xl mb-6">
              Sobre {category.title}
            </h2>
            <div className="prose prose-neutral max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                {category.description} Nuestros productos cuentan con los mejores 
                materiales y cumplimos los estándares nacionales e internacionales 
                de calidad y seguridad. Fabricación española desde 1968.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;
