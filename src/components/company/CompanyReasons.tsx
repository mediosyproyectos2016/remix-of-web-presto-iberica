import { motion } from "framer-motion";
import { Shield, Droplets, MapPin, Award, Zap, Wrench, Leaf, HeartPulse, Users, Globe } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Calidad garantizada",
    desc: "Más de 55 años fabricando grifería de alta calidad",
  },
  {
    icon: Droplets,
    title: "Ahorro de agua",
    desc: "Hasta 70% de ahorro hídrico con grifería temporizada",
  },
  {
    icon: MapPin,
    title: "Made in Spain",
    desc: "Diseño y fabricación 100% en España",
  },
  {
    icon: Award,
    title: "Certificaciones",
    desc: "Cumplimos con las normativas más exigentes",
  },
  {
    icon: Zap,
    title: "Innovación",
    desc: "I+D constante para las mejores soluciones",
  },
  {
    icon: Wrench,
    title: "Servicio técnico",
    desc: "Asistencia profesional en toda España",
  },
  {
    icon: Leaf,
    title: "Sostenibilidad",
    desc: "Compromiso con el medio ambiente",
  },
  {
    icon: HeartPulse,
    title: "Higiene",
    desc: "Tecnología Healthcover antibacteriana",
  },
  {
    icon: Users,
    title: "Experiencia",
    desc: "Proyectos en más de 40 países",
  },
  {
    icon: Globe,
    title: "Distribución",
    desc: "Red de más de 3.000 puntos de venta",
  },
];

export const CompanyReasons = () => {
  return (
    <section className="section-py bg-secondary overflow-hidden">
      <div className="container-presto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-luxury uppercase text-muted-foreground mb-4 block">
            Por qué elegirnos
          </span>
          <h2 className="font-display text-4xl md:text-5xl">
            10 Razones para Elegir Presto
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-background p-6 border border-border hover:border-accent/40 transition-colors text-center"
            >
              <reason.icon className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-display text-base mb-2">{reason.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
