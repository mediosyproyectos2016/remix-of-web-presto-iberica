import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const certifications = [
  {
    name: "AENOR",
    logo: "N",
    description: "Grifería de cierre automático PN10 conforme a EN 816. Grifería termostática conforme a EN 1111.",
  },
  {
    name: "NF AFNOR",
    logo: "NF",
    description: "Certificación N UNE EN 12541 y EN 15091. Grifería sanitaria y válvulas de cierre automático.",
  },
  {
    name: "ISO 9001",
    logo: "ISO",
    description: "Calidad Gestión Empresarial certificada para Presto.",
  },
  {
    name: "Marcado CE",
    logo: "CE",
    description: "Circuitos conforme con las directivas 1006/95/CE y 2004/108/CE.",
  },
  {
    name: "CTE",
    logo: "CTE",
    description: "Código Técnico de Edificación. Pruebas dimensionales, estanqueidad e hidráulicas.",
  },
  {
    name: "Producto Ecológico",
    logo: "ECO",
    description: "Marca de productos con especial ahorro de agua y energía.",
  },
  {
    name: "Calidad Ambiental",
    logo: "QA",
    description: "Sello de Calidad Medio Ambiental de la Generalitat de Cataluña.",
  },
  {
    name: "LEED",
    logo: "LEED",
    description: "Certificación de edificios sostenibles y eficientes en recursos.",
  },
  {
    name: "BREEAM",
    logo: "BR",
    description: "Metodología de evaluación medioambiental de edificios.",
  },
  {
    name: "Waterlabel",
    logo: "WL",
    description: "Sistema internacional de clasificación para el ahorro de agua.",
  },
];

export const CompanyCertifications = () => {
  return (
    <section className="section-py bg-secondary">
      <div className="container-presto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-luxury uppercase text-muted-foreground mb-4 block">
            Cumplimos con las normativas
          </span>
          <h2 className="font-display text-4xl md:text-5xl mb-4">
            Grandes Certificaciones para Grandes Productos
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Nuestras áreas de ingeniería e investigación y desarrollo trabajan día a día 
            con los prescriptores, clientes y usuarios para lograr productos y soluciones 
            cada vez más perfectas.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-background p-6 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-14 h-14 bg-primary text-primary-foreground flex items-center justify-center font-display text-sm mb-4">
                {cert.logo}
              </div>
              <h3 className="font-display text-xl mb-2">{cert.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link 
            to="/certificaciones" 
            className="inline-flex items-center gap-2 text-sm tracking-elegant uppercase hover:text-accent transition-colors group"
          >
            Ver todas las certificaciones
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
