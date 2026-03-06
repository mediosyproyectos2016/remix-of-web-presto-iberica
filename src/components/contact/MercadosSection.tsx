import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import refCompromisoImg from "@/assets/ref-compromiso.jpg";

const mercados = [
  { pais: "España y Resto de territorios", emails: ["proyectos@prestoiberica.com", "exportaciones@prestoiberica.com"] },
  { pais: "México", emails: ["mexico@prestoiberica.com"] },
  { pais: "Centro América", emails: ["centroamerica@prestoiberica.com"] },
  { pais: "Colombia", emails: ["colombia@prestoiberica.com"] },
  { pais: "Bolivia", emails: ["bolivia@prestoiberica.com"] },
  { pais: "Perú", emails: ["peru@prestoiberica.com"] },
  { pais: "Chile", emails: ["chile@prestoiberica.com"] },
  { pais: "Argentina", emails: ["argentina@prestoiberica.com"] },
  { pais: "Portugal", emails: ["portugal@prestoiberica.com"] },
];

export const MercadosSection = () => {
  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="font-display text-4xl md:text-5xl text-center mb-6">
          Máxima especialización en colectividades
        </h1>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-16 italic leading-relaxed">
          Abarcamos todo tipo de mercados adaptando nuestros productos a los requerimientos y normativas de cada país y las características técnicas que requiere cada instalación para proteger a las personas con dispositivos seguros y robustos y proteger al medio ambiente maximizando el ahorro de agua y energía.
        </p>
      </motion.div>

      {/* Proyectos + Emails grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid lg:grid-cols-[1fr_2fr] gap-0 mb-16"
      >
        {/* Left - CTA block */}
        <div className="bg-primary text-primary-foreground p-8 md:p-10 flex flex-col justify-center">
          <h2 className="font-display text-2xl md:text-3xl mb-4 leading-tight">
            Proyectos de calidad garantizada
          </h2>
          <p className="text-primary-foreground/80 text-sm leading-relaxed mb-8">
            Queremos ofrecer nuestro asesoramiento y dispositivos para conseguir una construcción sostenible que proteja el medioambiente y la salubridad de las personas.
          </p>
          <Link
            to="/proyectos"
            className="inline-block border border-primary-foreground px-6 py-3 text-sm uppercase tracking-wider font-medium hover:bg-primary-foreground hover:text-primary transition-colors self-start"
          >
            Ver Proyectos
          </Link>
        </div>

        {/* Right - Country emails */}
        <div className="bg-background border border-border p-8 md:p-10">
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
            {mercados.map((m) => (
              <div key={m.pais}>
                <h4 className="font-medium text-sm mb-1">{m.pais}</h4>
                {m.emails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="block text-primary text-sm hover:underline"
                  >
                    {email}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
