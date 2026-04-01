import { motion } from "framer-motion";
import certBreeam from "@/assets/cert-breeam-new.png";
import certVerde from "@/assets/cert-verde-new.png";
import certLeed from "@/assets/cert-leed-new.png";
import certCte from "@/assets/cert-cte.png";
import certWaterlabel from "@/assets/cert-waterlabel.png";

const certifications = [
  {
    name: "BREEAM",
    image: certBreeam,
    description:
      "Fomenta una construcción más sostenible que repercute en beneficios económicos, ambientales y sociales para todas las personas vinculadas a la vida de un edificio.",
  },
  {
    name: "VERDE",
    image: certVerde,
    description:
      "Evalúa en términos de sostenibilidad ambiental, económica y social, el ciclo completo del edificio...",
  },
  {
    name: "LEED",
    image: certLeed,
    description:
      "Etiqueta verde que garantiza la eficiencia global del edificio. Contribución positiva para preservar la calidad del Medio Ambiente.",
  },
  {
    name: "CTE",
    image: certCte,
    description:
      "Código Técnico Edificación española. Presto realiza pruebas dimensionales, estanqueidad e hidráulicas. Cumpliendo con el Código Técnico de Edificación.",
  },
  {
    name: "WATERLABEL",
    image: certWaterlabel,
    description:
      "Sistema internacional de clasificación para la medición del consumo de agua de los productos de grifería sanitaria.",
  },
];

export const ProyectosSostenible = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="font-display text-3xl md:text-4xl mb-6 text-center">Certificaciones eficientes</h2>
        <p className="text-muted-foreground max-w-4xl leading-relaxed mb-16 text-sm text-center mx-auto">
          La legislación española, desde el año 2013, obliga a que, para realizar la compra o alquiler de cualquier tipo de 
          inmueble, se emita un certificado energético del mismo que permita cuantificar su grado de eficiencia energética.
        </p>
        <p className="text-muted-foreground max-w-4xl leading-relaxed mb-16 text-sm text-center mx-auto -mt-10">
          Existen a nivel mundial diversas organizaciones que han promovido distintos sistemas de certificación con el objetivo 
          de fomentar la sostenibilidad en los edificios, permitiendo cuantificar de forma sencilla, a partir de la aplicación de 
          una serie de requisitos, el grado de sostenibilidad de un edificio desde el primer momento de su proyecto.
        </p>
      </motion.div>

      {/* Certifications grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="text-center"
          >
            <div className="w-20 h-20 mx-auto mb-4 border border-border flex items-center justify-center bg-secondary/50">
              <span className="font-display text-xs text-primary font-semibold tracking-wide">
                {cert.name}
              </span>
            </div>
            <h3 className="font-display text-sm font-medium mb-2">
              Certificación<br />{cert.name}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {cert.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
