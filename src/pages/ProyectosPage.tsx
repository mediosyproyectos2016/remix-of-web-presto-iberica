import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProyectosIntro } from "@/components/proyectos/ProyectosIntro";
import { ProyectosCasos } from "@/components/proyectos/ProyectosCasos";
import { ProyectosSostenible } from "@/components/proyectos/ProyectosSostenible";
import { motion } from "framer-motion";
import heroProyectos from "@/assets/hero-proyectos.jpg";

const ProyectosPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        <img
          src={heroProyectos}
          alt="Proyectos Presto Ibérica"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container-presto text-white">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="text-xs tracking-luxury uppercase text-white/70 mb-6 block">
                Área Profesional
              </span>
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6 uppercase">
                Proyectos
              </h1>
              <div className="w-20 h-0.5 bg-accent mx-auto mb-6" />
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Soluciones integrales para arquitectos, diseñadores y profesionales del sector.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <main>
        <section id="proyectos-area" className="section-py">
          <div className="container-presto">
            <ProyectosIntro />
          </div>
        </section>

        <section id="proyectos-casos" className="section-py border-t border-border">
          <div className="container-presto">
            <ProyectosCasos />
          </div>
        </section>

        <section id="proyectos-certificaciones" className="section-py border-t border-border">
          <div className="container-presto">
            <ProyectosSostenible />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProyectosPage;
