import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import techHealthcover from "@/assets/tech-healthcover-new.jpg";
import techDreams from "@/assets/tech-dreams.jpg";
import techDreamsVisto from "@/assets/tech-dreams-visto.jpg";
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
    features: [
      "Eliminación del 99.9% de bacterias",
      "Tecnología de iones de plata",
      "Eficacia permanente",
      "Certificado por laboratorios independientes",
    ],
    stats: { value: "99.9%", label: "Bacterias eliminadas" },
  },
  {
    id: "dreams",
    title: "Dreams",
    subtitle: "Domótica Inteligente",
    description:
      "Sistemas inteligentes de grifería electrónica y domótica. Permiten la gestión y el control eficiente de los consumos de agua y energía de la instalación y del edificio.",
    image: techDreams,
    features: [
      "Control remoto e integración domótica",
      "Gestión eficiente de consumos",
      "Monitorización en tiempo real",
      "Compatible con sistemas BMS",
    ],
    stats: { value: "40%", label: "Ahorro energético" },
  },
  {
    id: "kits",
    title: "Kits de Transformación",
    subtitle: "Máxima Higiene",
    description:
      "Transforma la grifería temporizada de urinario y fluxores de inodoro en electrónicos por sensor sin necesidad de obra. La última tecnología de Presto que maximiza la higiene y salubridad.",
    image: techKit,
    features: [
      "Instalación sin obra",
      "Sensor infrarrojo de alta precisión",
      "Alimentación por pilas de larga duración",
      "Compatible con instalaciones existentes",
    ],
    stats: { value: "100%", label: "Sin contacto" },
    videoUrl: "https://www.youtube.com/watch?v=ZhnhRt0kyQE",
  },
  {
    id: "presto-go",
    title: "Presto Go System",
    subtitle: "Control Inteligente",
    description:
      "Sistema electrónico de ahorro de agua ecológico e innovador gracias a su sistema de recirculación del agua, permitiendo que salga el agua caliente de forma instantánea sin derrochar agua.",
    image: techPrestoGo,
    features: [
      "Recirculación inteligente del agua",
      "Agua caliente instantánea",
      "Ahorro significativo de agua",
      "Sistema ecológico e innovador",
    ],
    stats: { value: "70%", label: "Ahorro de agua" },
  },
];

const TechnologiesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        <img
          src={techDreamsVisto}
          alt="Tecnologías Presto"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container-presto text-white">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs tracking-luxury uppercase text-white/70 mb-4 block">
                Innovación Continua
              </span>
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6 uppercase">
                Tecnologías
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                Más de 40 años desarrollando soluciones innovadoras para la gestión 
                eficiente del agua. Diseño, ingeniería y fabricación española.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Detail */}
      <section className="section-py">
        <div className="container-presto">
          <div className="space-y-32">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.id}
                id={tech.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="mb-6">
                    <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
                      {tech.subtitle}
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl">
                      {tech.title}
                    </h2>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {tech.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {tech.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-8">
                    <div className="border-l-2 border-accent pl-4">
                      <span className="font-display text-4xl text-accent">
                        {tech.stats.value}
                      </span>
                      <p className="text-sm text-muted-foreground">
                        {tech.stats.label}
                      </p>
                    </div>
                    {tech.videoUrl ? (
                      <a
                        href={tech.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium tracking-elegant uppercase hover:text-accent transition-colors group"
                      >
                        Más información
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    ) : (
                      <Link
                        to="/contacto"
                        className="inline-flex items-center gap-2 text-sm font-medium tracking-elegant uppercase hover:text-accent transition-colors group"
                      >
                        Más información
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Visual */}
                <div
                  className={`relative ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                >
                  <div className="aspect-[4/5] bg-secondary overflow-hidden">
                    <img
                      src={tech.image}
                      alt={tech.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  {/* Stat overlay */}
                  <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-8">
                    <span className="font-display text-4xl block">
                      {tech.stats.value}
                    </span>
                    <span className="text-xs tracking-elegant uppercase opacity-70">
                      {tech.stats.label}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py">
        <div className="container-presto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              ¿Necesitas Asesoramiento Técnico?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
              Nuestro equipo de ingenieros está disponible para ayudarte a
              encontrar la solución perfecta para tu proyecto.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contacto" className="btn-primary-elegant">
                Contactar con un Experto
              </Link>
              <Link to="/descargas" className="btn-outline-elegant">
                Área de Descargas
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TechnologiesPage;
