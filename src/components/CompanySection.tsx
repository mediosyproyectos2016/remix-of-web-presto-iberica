import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import companyFactory from "@/assets/company-worker-presto.jpg";

const stats = [
  { value: "1979", label: "Año de fundación" },
  { value: "2.200+", label: "Referencias de producto" },
  { value: "España", label: "Fabricación nacional" },
  { value: "20+", label: "Países con presencia" },
];

export const CompanySection = () => {
  return (
    <section className="section-py bg-background overflow-hidden">
      <div className="container-presto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative aspect-[4/3] lg:aspect-auto">
            <img
              src={companyFactory}
              alt="Fábrica Presto Ibérica"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20" />
          </div>

          {/* Content */}
          <div className="bg-secondary p-6 sm:p-10 lg:p-16 flex flex-col justify-center">
            <span className="text-xs tracking-luxury uppercase text-muted-foreground block mb-4">
              Nuestra Historia
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Diseñado y fabricado en España
            </h2>
            <div className="accent-line mb-8" />
            <div className="space-y-5 text-muted-foreground mb-10">
              <p className="leading-relaxed">
                Desarrollado, diseñado y fabricado en España. Cada uno de nuestros 
                grifos nace de un proceso íntegro realizado en nuestro país: desde 
                la concepción del diseño, la selección de materiales y la ingeniería, 
                hasta la fabricación final y los controles de calidad.
              </p>
              <p className="leading-relaxed">
                Apostamos por la producción nacional porque creemos en el valor del 
                talento local, en la precisión de la manufactura española y en la 
                garantía de un producto creado con dedicación y experiencia.
              </p>
              <p className="leading-relaxed">
                Nuestros grifos se diseñan y se producen íntegramente en España 
                para ofrecer la máxima calidad y durabilidad.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l-2 border-accent pl-4">
                  <div className="font-display text-2xl lg:text-3xl text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Link to="/empresa" className="btn-outline-elegant self-start">
              Conócenos
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
