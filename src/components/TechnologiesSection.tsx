import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import techHealthcover from "@/assets/tech-healthcover-new.jpg";
import techDreams from "@/assets/tech-dreams.jpg";
import techKit from "@/assets/tech-kit-new.jpg";
import techPrestoGo from "@/assets/pulsador-sky-frente.png";

const technologies = [
  {
    id: "healthcover",
    title: "HealthCover",
    subtitle: "Anti Bacterias",
    description:
      "Evita la proliferación de bacterias en las superficies mediante el uso de iones de plata, incrementando la seguridad y salubridad de los productos sin perder la estética y el confort.",
    image: techHealthcover,
    href: "/tecnologias",
  },
  {
    id: "dreams",
    title: "Dreams",
    subtitle: "Domótica Inteligente",
    description:
      "Sistemas inteligentes de grifería electrónica y domótica. Permiten la gestión y el control eficiente de los consumos de agua y energía de la instalación y del edificio.",
    image: techDreams,
    href: "/tecnologias",
  },
  {
    id: "kits",
    title: "Kits de Transformación",
    subtitle: "Máxima Higiene",
    description:
      "Transforma la grifería temporizada de urinario y fluxores de inodoro en electrónicos por sensor sin necesidad de obra. La última tecnología de Presto que maximiza la higiene y salubridad.",
    image: techKit,
    href: "/tecnologias",
    videoUrl: "https://www.youtube.com/watch?v=ZhnhRt0kyQE",
  },
  {
    id: "presto-go",
    title: "Presto Go System",
    subtitle: "Control Inteligente",
    description:
      "Sistema electrónico de ahorro de agua ecológico e innovador gracias a su sistema de recirculación del agua, permitiendo que salga el agua caliente de forma instantánea sin derrochar agua.",
    image: techPrestoGo,
    href: "/tecnologias",
  },
];

export const TechnologiesSection = () => {
  return (
    <section className="section-py bg-secondary">
      <div className="container-presto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-luxury uppercase text-muted-foreground mb-4">
            Innovación Continua
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
            Nuestras Tecnologías
          </h2>
          <div className="accent-line mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            En Presto Ibérica fabricamos y desarrollamos tecnologías propias patentadas,
            sometidas a diferentes procesos de certificación para ofrecer la máxima
            calidad, sostenibilidad y seguridad.
          </p>
        </div>

        {/* Technologies grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {technologies.map((tech) => (
            <Link
              key={tech.id}
              to={tech.href}
              className="group relative overflow-hidden bg-background"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={tech.image}
                  alt={tech.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 lg:p-8">
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
                  {tech.subtitle}
                </p>
                <h3 className="font-display text-xl lg:text-2xl mb-3 group-hover:text-primary transition-colors">
                  {tech.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {tech.description}
                </p>
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center text-xs tracking-elegant uppercase font-medium group-hover:text-primary transition-colors">
                    Descubre más
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  {tech.videoUrl && (
                    <a
                      href={tech.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center text-xs tracking-elegant uppercase font-medium text-primary hover:text-accent transition-colors"
                    >
                      Ver vídeo
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/tecnologias" className="btn-outline-elegant">
            Ver Todas las Tecnologías
          </Link>
        </div>
      </div>
    </section>
  );
};
