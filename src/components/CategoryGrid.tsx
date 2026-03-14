import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ambienteColectividades from "@/assets/ambiente-22.jpg";
import ambienteGriferia from "@/assets/ambiente-5.jpg";
import ambienteAyudas from "@/assets/ambiente-12.jpg";

const categories = [
  {
    id: "colectividades",
    title: "Grifería de Colectividades",
    description: "Tecnologías innovadoras para la gestión eficiente del agua",
    image: ambienteColectividades,
    href: "/griferia-colectividades",
    subcategories: ["Electrónica", "Temporizada", "Industrial", "Antilegionella"],
  },
  {
    id: "griferia",
    title: "Grifería",
    description: "El diseño como valor diferencial para hogares y hoteles exigentes",
    image: ambienteGriferia,
    href: "/griferia",
    subcategories: ["Baño", "Cocina", "Duchas", "Colecciones"],
  },
  {
    id: "ayudas",
    title: "Ayudas Técnicas",
    description: "Diseño accesible con seguridad, confort y estética",
    image: ambienteAyudas,
    href: "/ayudas-tecnicas",
    subcategories: ["Barras de Apoyo", "Sanitarios PMR", "Equipamientos"],
  },
];

export const CategoryGrid = () => {
  return (
    <section className="section-py bg-background">
      <div className="container-presto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-luxury uppercase text-muted-foreground mb-4">
            Nuestras Soluciones
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
            Explora nuestras categorías
          </h2>
          <div className="accent-line mx-auto" />
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.href}
              className="category-card aspect-category group"
            >
              <img
                src={category.image}
                alt={category.title}
                className="category-card-image"
                loading="lazy"
                decoding="async"
              />
              <div className="category-card-overlay" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8 text-white">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="font-display text-2xl lg:text-3xl mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm opacity-80 mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  
                  {/* Subcategories */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.subcategories.slice(0, 3).map((sub) => (
                      <span
                        key={sub}
                        className="text-xs px-3 py-1 border border-white/30 rounded-full"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                  
                  <span className="inline-flex items-center text-xs tracking-elegant uppercase group">
                    Explorar
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
