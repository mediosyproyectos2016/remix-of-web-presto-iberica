import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import pemSketch from "@/assets/pem-sketch.png";

export const PrestoCustomSection = () => {
  return (
    <section className="section-py bg-secondary overflow-hidden">
      <div className="container-presto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
            <img
              src={pemSketch}
              alt="Diseño de grifería Presto Exclusive Manufacturing"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Content */}
          <div className="p-6 sm:p-10 lg:p-16 flex flex-col justify-center">
            <span className="text-xs tracking-luxury uppercase text-primary font-bold block mb-4">
              Equipo de Especialistas
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Presto Exclusive Manufacturing
            </h2>
            <div className="accent-line mb-8" />
            <div className="space-y-5 text-muted-foreground mb-10">
              <p className="leading-relaxed">
                Consulta con nuestro Departamento Presto Exclusive Manufacturing
                todas las opciones de customización de la grifería.
              </p>
              <p className="leading-relaxed">
                Nuestro equipo de profesionales valorará todas las necesidades para
                conseguir optimizar los requisitos técnicos y estéticos de la
                instalación, dando una solución personalizada.
              </p>
            </div>

            <Link
              to="/presto-custom"
              className="inline-flex items-center justify-center self-start px-8 py-4 bg-primary text-primary-foreground font-bold text-xs tracking-luxury uppercase hover:bg-primary/90 transition-colors"
            >
              Consulta con nuestros expertos
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
