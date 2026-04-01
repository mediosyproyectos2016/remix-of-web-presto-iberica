import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import certBreeam from "@/assets/cert-breeam.png";
import certVerde from "@/assets/cert-verde.png";
import certLeed from "@/assets/cert-leed.png";
import certCte from "@/assets/cert-cte.png";
import certWaterlabel from "@/assets/cert-waterlabel.png";

const certifications = [
  {
    name: "AENOR",
    logo: "N",
    image: null as string | null,
    description: "Grifería de cierre automático PN10 conforme a EN 816. Grifería termostática conforme a EN 1111.",
  },
  {
    name: "NF AFNOR",
    logo: "NF",
    image: null as string | null,
    description: "Certificación N UNE EN 12541 y EN 15091. Grifería sanitaria y válvulas de cierre automático.",
  },
  {
    name: "ISO 9001",
    logo: "ISO",
    image: null as string | null,
    description: "Calidad Gestión Empresarial certificada para Presto.",
  },
  {
    name: "Marcado CE",
    logo: "CE",
    image: null as string | null,
    description: "Circuitos conforme con las directivas 1006/95/CE y 2004/108/CE.",
  },
  {
    name: "CTE",
    logo: "CTE",
    image: certCte,
    description: "Código Técnico de Edificación. Pruebas dimensionales, estanqueidad e hidráulicas.",
  },
  {
    name: "Producto Ecológico",
    logo: "ECO",
    image: null as string | null,
    description: "Marca de productos con especial ahorro de agua y energía.",
  },
  {
    name: "Calidad Ambiental",
    logo: "QA",
    image: null as string | null,
    description: "Sello de Calidad Medio Ambiental de la Generalitat de Cataluña.",
  },
  {
    name: "LEED",
    logo: "LEED",
    image: certLeed,
    description: "Certificación de edificios sostenibles y eficientes en recursos.",
  },
  {
    name: "BREEAM",
    logo: "BR",
    image: certBreeam,
    description: "Metodología de evaluación medioambiental de edificios.",
  },
  {
    name: "VERDE",
    logo: "VR",
    image: certVerde,
    description: "Evaluación de la sostenibilidad ambiental, económica y social del edificio.",
  },
  {
    name: "Waterlabel",
    logo: "WL",
    image: certWaterlabel,
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
              {cert.image ? (
                <div className="w-14 h-14 flex items-center justify-center mb-4">
                  <img src={cert.image} alt={cert.name} className="w-full h-full object-contain" loading="lazy" width={56} height={56} />
                </div>
              ) : (
                <div className="w-14 h-14 bg-primary text-primary-foreground flex items-center justify-center font-display text-sm mb-4">
                  {cert.logo}
                </div>
              )}
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
