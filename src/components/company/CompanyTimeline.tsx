import { motion } from "framer-motion";

const timeline = [
  { year: "1979", title: "Creación del temporizado en España", desc: "Implantación de la tecnología de temporización, siendo pioneros en el primer temporizado en España." },
  { year: "1982", title: "Creación de productos, ayudas técnicas y equipamientos", desc: "Ampliación del catálogo con nuevas soluciones técnicas." },
  { year: "2009", title: "Consecución de certificados de calidad", desc: "Obtención de certificaciones de calidad y normativa." },
  { year: "2022", title: "Huella de carbono: primer certificado", desc: "Certificación del impacto ambiental y compromiso sostenible." },
  { year: "2026", title: "Monomandos", desc: "Incorporación de grifería monomando." },
];

export const CompanyTimeline = () => {
  return (
    <section className="section-py">
      <div className="container-presto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-luxury uppercase text-muted-foreground mb-4 block">
            Más de 40 Años
          </span>
          <h2 className="font-display text-4xl md:text-5xl">
            Nuestra Historia
          </h2>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12 lg:space-y-0">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative lg:w-1/2 ${
                  index % 2 === 0 
                    ? "lg:pr-16 lg:text-right" 
                    : "lg:pl-16 lg:ml-auto"
                }`}
              >
                <div className={`hidden lg:block absolute top-0 w-4 h-4 bg-accent rounded-full ${
                  index % 2 === 0 
                    ? "right-0 translate-x-1/2 -mr-px" 
                    : "left-0 -translate-x-1/2 -ml-px"
                }`} />
                
                <div className="flex items-start gap-6 lg:block">
                  <span className="font-display text-4xl md:text-5xl text-accent block mb-2 flex-shrink-0">
                    {item.year}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
