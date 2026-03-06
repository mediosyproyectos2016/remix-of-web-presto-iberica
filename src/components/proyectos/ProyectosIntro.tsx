import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const stats = [
  { value: "70%", label: "Productos Eficientes" },
  { value: "50%", label: "Obras Ecológicas" },
  { value: "62%", label: "Eficiencia Hídrica" },
  { value: "36%", label: "Eficiencia Energética" },
];

export const ProyectosIntro = () => {
  return (
    <div>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="font-display text-3xl md:text-4xl mb-6">
          Asesoramiento personalizado de proyectos
        </h1>
        <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
          En nuestro afán de ofrecer soluciones integrales al canal prescriptor para solventar los problemas en las instalaciones de agua 
          sanitaria, en Presto Ibérica contamos con el DEPARTAMENTO DE PROYECTOS, formado por los mejores profesionales en el 
          ámbito técnico de instalaciones para asesorar proyectos y obras.
        </p>
        <a
          href="mailto:proyectos@prestoiberica.com"
          className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
        >
          <Mail className="w-4 h-4" />
          proyectos@prestoiberica.com
        </a>
      </motion.div>

      {/* El reto / La solución */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid md:grid-cols-2 gap-12 mb-16"
      >
        <div>
          <h3 className="font-display text-xl mb-4">El reto</h3>
          <p className="text-muted-foreground leading-relaxed text-sm">
            Hasta hace poco, la construcción sostenible se veía como una apuesta en la 
            que sólo se sumergían las grandes empresas y no acababa de llegar al 
            consumidor final, que es el máximo beneficiario.
          </p>
        </div>
        <div>
          <h3 className="font-display text-xl mb-4">La solución</h3>
          <p className="text-muted-foreground leading-relaxed text-sm">
            Construir de forma equilibrada tiene un importante retorno en forma de 
            ahorros en consumos, revalorización del inmueble, mayor productividad y 
            mejor confort.
          </p>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
      >
        {stats.map((stat, idx) => (
          <div key={idx}>
            <span className="font-display text-4xl md:text-5xl text-primary font-light">
              {stat.value}
            </span>
            <p className="text-xs tracking-luxury uppercase text-primary font-medium mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
