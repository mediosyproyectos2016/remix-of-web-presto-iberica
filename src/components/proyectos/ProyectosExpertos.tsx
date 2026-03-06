import { motion } from "framer-motion";

const experts = [
  {
    name: "Álvaro García",
    role: "Ingeniero de Edificación, Departamento de Proyectos",
    quote:
      "Hasta hace poco, la construcción sostenible se veía como una apuesta de futuro en la que sólo se sumergían las grandes empresas y no acababa de llegar al consumidor final, que es el máximo beneficiario. Así, ofrecemos la solución óptima para tipo de instalación.",
  },
  {
    name: "Gustavo Diez",
    role: "Director Comercial y de Proyectos",
    quote:
      "Somos el primer fabricante en aplicar la domótica en el baño mediante sistemas 'Smart' de control de consumos de agua y energía, en la que todos los elementos se comunican con una unidad central que los gestiona a distancia inalámbricamente.",
  },
  {
    name: "Estefanía Arias",
    role: "Arquitecta de Interiores, Departamento de Proyectos",
    quote:
      "Los elementos como la grifería, a priori pueden parecer básicos e impersonales, pero saber elegir colecciones que den ese toque \"especial\" marca la diferencia. Atrás ya quedaron los baños y cocinas simples y anodinos.",
  },
];

export const ProyectosExpertos = () => {
  return (
    <div className="bg-primary text-primary-foreground -mx-8 md:-mx-12 lg:-mx-16 px-8 md:px-12 lg:px-16 py-16 md:py-20">
      <div className="text-center mb-12">
        <span className="text-xs tracking-luxury uppercase text-white/50 block mb-3">
          Departamento de Proyectos
        </span>
        <h2 className="font-display text-3xl md:text-4xl">
          Nuestros expertos hablan
        </h2>
        <div className="accent-line mx-auto mt-6" />
      </div>

      <div className="grid md:grid-cols-3 gap-0">
        {experts.map((expert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
            className="text-center p-8 border-r border-white/10 last:border-0"
          >
            <p className="text-sm leading-relaxed italic text-white/80 mb-6">
              "{expert.quote}"
            </p>
            <p className="font-display text-sm font-medium text-white">{expert.name}</p>
            <p className="text-xs text-white/50 mt-1">{expert.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
