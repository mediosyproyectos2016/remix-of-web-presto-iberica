import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import certAenor from "@/assets/cert-aenor.png";
import certNf from "@/assets/cert-nf.png";
import certIso from "@/assets/cert-iso9001.png";
import certCe from "@/assets/cert-ce.png";
import certCte from "@/assets/cert-cte.png";
import certCalidad from "@/assets/cert-calidad-ambiental.png";
import certBreeam from "@/assets/cert-breeam-new.png";
import certVerde from "@/assets/cert-verde-new.png";
import certLeed from "@/assets/cert-leed-new.png";
import certWaterlabel from "@/assets/cert-waterlabel.png";
import certEco from "@/assets/cert-eco.png";

const certificaciones = [
  {
    name: "Certificación N AENOR",
    description: "Grifería de cierre automático PN10 conforme a EN816.",
    downloadUrl: "https://d7rh5s3nxmpy4.cloudfront.net/CMP2288/files/Certificado-AENOR-PRESTO-IBERICA.pdf",
  },
  {
    name: "Certificado N AENOR",
    description: "Grifería monomando conforme EN817.",
    downloadUrl: "https://d7rh5s3nxmpy4.cloudfront.net/CMP2288/files/Certificado-AENOR-PRESTO-IBERICA-EN817.pdf",
  },
  {
    name: "Certificado N AENOR",
    description: "Grifería monomando conforme EN817 Alfa.",
    downloadUrl: "https://d7rh5s3nxmpy4.cloudfront.net/CMP2288/files/Certificado-AENOR-PRESTO-IBERICA-EN817-ALFA.pdf",
  },
  {
    name: "Certificación NF AFNOR",
    description: "Grifería de cierre automático PN10 conforme a EN816.",
    downloadUrl: "https://d7rh5s3nxmpy4.cloudfront.net/CMP2288/files/Certificado-NF-AFNOR-PRESTO.pdf",
  },
  {
    name: "Certificado NF AFNOR",
    description: "Grifería termostática conforme EN1111.",
    downloadUrl: "https://d7rh5s3nxmpy4.cloudfront.net/CMP2288/files/Certificado-NF-AFNOR-PRESTO-EN1111.pdf",
  },
  {
    name: "Certificación N UNE EN 12541",
    description: "Grifería sanitaria.",
    downloadUrl: null,
  },
  {
    name: "Certificación N UNE EN 15091",
    description: "Grifería sanitaria.",
    downloadUrl: null,
  },
  {
    name: "Certificación ISO 9001",
    description: "Calidad Gestión Empresarial a PRESTO IBÉRICA.",
    downloadUrl: "https://send.saleslayer.com/7631b22a10792c41713c78976ad760f6/ISO_9001_PRESTO_IBERICA_(2025-2028)_ESPAÑOL.pdf",
  },
  {
    name: "Marcado CE Grifería",
    description: "Circuitos conforme con las directivas 2006/95/CE y 2004/108/CE.",
    downloadUrl: "https://d7rh5s3nxmpy4.cloudfront.net/CMP2288/files/1/MARCADO-CE-Griferia-electronica.pdf",
  },
  {
    name: "Certificación Calidad Ambiental",
    description: "Sello de Calidad Medio Ambiental de la Generalitat de Cataluña.",
    downloadUrl: "https://send.saleslayer.com/4f4b8019146c4809df9e7d4ddfd7672b/Certificado-calidad-ambiental-cataluña-presto-iberica.pdf",
  },
  {
    name: "CTE",
    description: "Código Técnico de Edificación. Presto realiza pruebas dimensionales, estanqueidad e hidráulicas cumpliendo con el Código Técnico de Edificación.",
    downloadUrl: null,
  },
  {
    name: "BREEAM",
    description: "Metodología de evaluación y certificación de la sostenibilidad en la edificación.",
    downloadUrl: null,
  },
  {
    name: "VERDE",
    description: "Producto ecológico. El sistema de evaluación se basa en un método prestacional, respetando el medio ambiente.",
    downloadUrl: null,
  },
  {
    name: "LEED",
    description: "Certificación de edificios sostenibles y eficientes.",
    downloadUrl: null,
  },
  {
    name: "Waterlabel",
    description: "Sistema internacional de clasificación para la medición del consumo de agua de los productos de grifería sanitaria.",
    downloadUrl: null,
  },
];

const CertificacionesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero */}
        <section className="container-presto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-accent font-medium tracking-wider uppercase text-sm">
              Calidad
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mt-4 mb-6">
              Certificaciones
            </h1>
            <p className="text-lg text-muted-foreground">
              Nuestro compromiso con la calidad está respaldado por las certificaciones 
              más exigentes del sector a nivel internacional.
            </p>
          </motion.div>
        </section>

        {/* Certifications Grid */}
        <section className="container-presto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificaciones.map((cert, idx) => (
              <motion.div
                key={`${cert.name}-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-muted/30 rounded-xl p-6 hover:bg-muted/50 transition-colors group flex flex-col"
              >
                <h3 className="text-xl font-display text-primary mb-2">{cert.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">{cert.description}</p>
                
                {cert.downloadUrl ? (
                  <a
                    href={cert.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    <Download className="w-4 h-4" />
                    Descargar certificado
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-xs text-muted-foreground italic">
                    Certificación sin documento adjunto
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CertificacionesPage;
