import { motion } from "framer-motion";
import companyGota from "@/assets/company-gota.jpg";

export const CompanyQuality = () => {
  return (
    <section className="section-py">
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
                src={companyGota}
                alt="Todo empezó con una gota — Presto Ibérica"
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
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-8">
              Nuestro Compromiso con la Calidad
            </h2>
            <div className="accent-line mb-8" />
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                La calidad certificada es nuestro aval. En Presto Ibérica S.A. somos la empresa nacional de fabricación de grifería temporizada con mayor número de certificaciones, todas ellas ajustadas a la legislación vigente que regula el sector de colectividades.
              </p>
              <p>
                Conscientes del uso cada vez más intensivo de los espacios públicos y del alto tránsito de personas, nos enorgullece ser el único fabricante que ofrece todas las tecnologías disponibles en grifería, aportando soluciones innovadoras, eficientes y adaptadas a cada necesidad.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
