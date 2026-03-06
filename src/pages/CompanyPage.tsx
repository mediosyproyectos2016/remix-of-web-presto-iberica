import { useRef } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Building2, Hotel, School, Utensils, Factory, HeartPulse, Globe } from "lucide-react";

import factoryImage from "@/assets/company-faucet-full.png";
import heroImage from "@/assets/ambiente-xt2000-niquel.jpg";
import productionImage from "@/assets/company-production.jpg";
import workerImage from "@/assets/company-worker.jpg";

import { CompanyReasons } from "@/components/company/CompanyReasons";
import { CompanyCertifications } from "@/components/company/CompanyCertifications";
import { CompanyTimeline } from "@/components/company/CompanyTimeline";
import { CompanyQuality } from "@/components/company/CompanyQuality";

const stats = [
  { icon: Factory, value: "40+", label: "Años de experiencia", suffix: "" },
  { icon: Globe, value: "20", label: "Países", suffix: "+" },
  { icon: Building2, value: "3.000", label: "Puntos de venta", suffix: "+" },
  { icon: HeartPulse, value: "100", label: "Certificaciones", suffix: "%" },
];

const solutions = [
  {
    icon: Building2,
    title: "Pequeños negocios",
    description: "Grifería ideal para comercios, oficinas pequeñas y espacios de trabajo.",
    cta: "Conocer propuesta",
    href: "/contacto",
  },
  {
    icon: Factory,
    title: "Oficinas",
    description: "Ofrece la mejor calidad a tu equipo. Perfecto para salas de reuniones y espacios de autoservicio.",
    cta: "Descubrir soluciones",
    href: "/productos",
  },
  {
    icon: Hotel,
    title: "Hoteles",
    description: "Deleita a tus huéspedes con grifería de calidad en habitaciones, desayuno, recepción y terraza.",
    cta: "Conocer ventajas",
    href: "/casos-exito",
  },
  {
    icon: Utensils,
    title: "Restaurantes",
    description: "Mejora la experiencia gastronómica de tus clientes con grifería profesional.",
    cta: "Ver soluciones",
    href: "/categoria/griferia-cocina",
  },
  {
    icon: HeartPulse,
    title: "Hospitales",
    description: "Grifería hospitalaria con los más altos estándares de higiene y accesibilidad.",
    cta: "Soluciones sanitarias",
    href: "/categoria/griferia-hospitalaria",
  },
  {
    icon: School,
    title: "Centros educativos",
    description: "Soluciones robustas y seguras para colegios, universidades e instalaciones deportivas.",
    cta: "Proyectos educativos",
    href: "/casos-exito",
  },
];

const CompanyPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img
            src={heroImage}
            alt="Presto Ibérica"
            className="w-full h-[120%] object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        
        <motion.div 
          style={{ opacity }}
          className="absolute inset-0 flex items-center justify-center text-center"
        >
          <div className="container-presto text-white">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="text-xs tracking-luxury uppercase text-white/70 mb-6 block">
                Desde 1972
              </span>
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6 uppercase">
                Líderes en el
                <br />
                <span className="italic">sector de baño</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                Contamos con tecnologías propias desarrolladas para el control y ahorro de agua.
                Amplia gama de productos diseñados para cumplir las más altas expectativas de funcionalidad, calidad y diseño.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent pt-32 pb-8">
          <div className="container-presto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-3 text-accent" />
                  <span className="font-display text-3xl md:text-4xl block">
                    {stat.value}{stat.suffix}
                  </span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fabricación española intro */}
      <section className="section-py bg-secondary">
        <div className="container-presto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={factoryImage}
                  alt="Fabricación española Presto Ibérica"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
                Diseñado y fabricado en España
              </h2>
              <div className="accent-line mb-8" />
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  En Presto, lideramos cada fase del ciclo de vida de nuestros productos. Desde la concepción técnica y el diseño industrial hasta los más estrictos controles de calidad, nuestra producción se desarrolla íntegramente en España.
                </p>
                <p>
                  Apostamos por el talento local y la precisión técnica de la manufactura nacional para garantizar soluciones de grifería que destacan por su durabilidad, fiabilidad y compromiso con la excelencia.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <CompanyTimeline />

      {/* Mission Section */}
      <section className="section-py">
        <div className="container-presto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs tracking-luxury uppercase text-muted-foreground mb-4 block">
                Nuestra Misión
              </span>
              <h2 className="font-display text-4xl md:text-5xl mb-8">
                Soluciones para el uso responsable del agua
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Fundada en 1984, Presto Ibérica es una empresa dedicada a la fabricación y 
                  comercialización de grifos para baño y cocina y otras soluciones para el uso del 
                  agua.
                </p>
                <p>
                  Con presencia en todo el mercado europeo, nuestra fábrica central situada en 
                  Torrejón de Ardoz (Madrid) produce más de 3.000 modelos distintos de grifería con 
                  el objetivo de dar respuesta a las necesidades de los usuarios.
                </p>
              </div>
              <div className="space-y-3 mt-8 text-sm">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span>Torrejón de Ardoz, Madrid, España</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span>Príncipe de Vergara, Madrid, España</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-secondary overflow-hidden">
                <img 
                  src={productionImage} 
                  alt="Producción Presto Ibérica"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-8 max-w-xs">
                <span className="font-display text-3xl block mb-2">100%</span>
                <span className="text-sm opacity-80">Diseño y fabricación en España</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 10 Reasons Section */}
      <CompanyReasons />

      {/* Certifications */}
      <CompanyCertifications />

      {/* Quality Commitment */}
      <CompanyQuality />

      {/* CTA */}
      <section className="section-py bg-muted/30">
        <div className="container-presto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              ¿Quieres Conocernos Mejor?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
              Visita nuestra fábrica en Madrid o contacta con nuestro equipo 
              para descubrir cómo podemos ayudarte en tu proyecto.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contacto" className="btn-primary-elegant">
                Contactar
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CompanyPage;
