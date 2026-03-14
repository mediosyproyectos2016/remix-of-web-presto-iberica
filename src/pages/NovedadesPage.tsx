import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import banoTheoDark from "@/assets/inspiracion/bano-theo-dark.jpg";
import banoArohaLavabo from "@/assets/inspiracion/bano-aroha-lavabo.jpg";
import banoArohaNegroImg from "@/assets/inspiracion/bano-aroha-negro.jpg";
import banoTheoMural from "@/assets/inspiracion/bano-theo-mural.jpg";
import banoAmbiente1 from "@/assets/inspiracion/bano-ambiente-1.png";
import banoAmbiente2 from "@/assets/inspiracion/bano-ambiente-2.png";
import banoAmbiente3 from "@/assets/inspiracion/bano-ambiente-3.jpg";
import banoAmbiente4 from "@/assets/inspiracion/bano-ambiente-4.jpg";
import banoAmbiente6 from "@/assets/inspiracion/bano-ambiente-6.png";
import banoAmbiente9 from "@/assets/inspiracion/bano-ambiente-9.jpg";
import banoConicoLavaboMural from "@/assets/inspiracion/bano-conico-lavabo-mural.jpg";
import bano46500Lavabo from "@/assets/inspiracion/bano-46500-lavabo.jpg";
import banoArohaLavaboAmbiente from "@/assets/inspiracion/bano-aroha-lavabo-ambiente.jpg";
import banoChapAmbiente from "@/assets/inspiracion/bano-chap-ambiente.jpg";
import banoConicoDucha from "@/assets/inspiracion/bano-conico-ducha.jpg";
import banoDuchaDalma from "@/assets/inspiracion/bano-ducha-dalma.jpg";
import banoLavaboNegroMural from "@/assets/inspiracion/bano-lavabo-negro-mural.jpg";
import banoDuchaColumna from "@/assets/inspiracion/bano-ducha-columna.jpg";
import banoSevenMarmol from "@/assets/inspiracion/bano-seven-marmol.jpg";
import cocinaKarim from "@/assets/inspiracion/cocina-karim-cromo.png";
import cocinaOsmo from "@/assets/inspiracion/cocina-osmo.jpg";

import hotelDreams from "@/assets/inspiracion/hotel-dreams.jpg";
import hotelLineaOr from "@/assets/inspiracion/hotel-linea-or.jpg";
import hotelAmbiente5 from "@/assets/inspiracion/hotel-ambiente-5.jpg";
import hotelAmbiente13 from "@/assets/inspiracion/hotel-ambiente-13.jpg";
import hotelAmbiente15 from "@/assets/inspiracion/hotel-ambiente-15.jpg";
import hotelAmbiente23 from "@/assets/inspiracion/hotel-ambiente-23.png";
import hotelAmbiente24 from "@/assets/inspiracion/hotel-ambiente-24.jpg";
import hotelAmbiente25 from "@/assets/inspiracion/hotel-ambiente-25.png";
import hotelUrinario from "@/assets/inspiracion/hotel-urinario.jpg";
import hotelRestaurant from "@/assets/inspiracion/hotel-linea-restaurant.jpg";

import hospitalLavaboAcero from "@/assets/inspiracion/hospital-lavabo-acero.png";
import hospitalAccesibleVerde from "@/assets/inspiracion/hospital-accesible-verde.png";
import hospitalAmbiente12 from "@/assets/inspiracion/hospital-ambiente-12.png";
import hospitalSensia from "@/assets/inspiracion/hospital-sensia-lavabo.jpg";
import hospitalXtElect from "@/assets/inspiracion/hospital-xt-elect.jpg";
import hospitalXtElectWeb from "@/assets/inspiracion/hospital-xt-elect-web.jpg";

import transitoDomoSensia from "@/assets/inspiracion/transito-domo-sensia.jpg";
import transitoPrestorizon from "@/assets/inspiracion/transito-prestorizon.jpg";
import transitoAmbiente16 from "@/assets/inspiracion/transito-ambiente-16.png";
import transitoAmbiente22 from "@/assets/inspiracion/transito-ambiente-22.jpg";

import educacionFluxor from "@/assets/inspiracion/educacion-fluxor-infantil.jpg";
import educacionLavabos from "@/assets/inspiracion/educacion-lavabos-color.jpg";
import educacionMitigeur from "@/assets/inspiracion/educacion-mitigeur.jpg";
import educacionUrinarios from "@/assets/inspiracion/educacion-urinarios-color.png";

import seguridadAmbiente17 from "@/assets/inspiracion/seguridad-ambiente-17.jpg";

import deporteDl400e from "@/assets/inspiracion/deporte-dl400e-vestuario.jpg";
import deporteDuchaVestuario from "@/assets/inspiracion/deporte-ducha-vestuario.jpg";
import deporteDuchaDreams from "@/assets/inspiracion/deporte-ducha-dreams.jpg";
import deporteAmbiente11 from "@/assets/inspiracion/deporte-ambiente-11.png";
import deporteAmbiente20 from "@/assets/inspiracion/deporte-ambiente-20.jpg";
import deporteAmbiente26 from "@/assets/inspiracion/deporte-ambiente-26.png";

import cocinaIndustrial7 from "@/assets/inspiracion/cocina-industrial-7.jpg";
import cocinaIndustrial8 from "@/assets/inspiracion/cocina-industrial-8.jpg";

import ocioRioShopping from "@/assets/inspiracion/ocio-rio-shopping.jpg";
import ocioXt2000 from "@/assets/inspiracion/ocio-xt2000-niquel.jpg";
import ocioAmbiente20 from "@/assets/inspiracion/ocio-ambiente-20.png";
import ocioPrestotem from "@/assets/inspiracion/ocio-prestotem-piscina.jpg";
import ocioSensao from "@/assets/inspiracion/ocio-sensao-aseos.jpg";

import airelibreDuchaPlaya from "@/assets/inspiracion/airelibre-ducha-playa.jpg";
import airelibreGranja from "@/assets/inspiracion/airelibre-granja.png";
import airelibreParqueFuente from "@/assets/inspiracion/airelibre-parque-fuente.jpg";
import airelibreJardinFuente from "@/assets/inspiracion/airelibre-jardin-fuente.jpg";

const inspiracionBano = [
  { id: "theo-dark", image: banoTheoDark, title: "Theo Dark — Cromo negro cepillado" },
  { id: "aroha-lavabo", image: banoArohaLavabo, title: "Aroha — Lavabo cromo" },
  { id: "aroha-negro", image: banoArohaNegroImg, title: "Aroha — Lavabo alto negro" },
  { id: "theo-mural", image: banoTheoMural, title: "Theo — Lavabo mural" },
  { id: "ambiente-1", image: banoAmbiente1, title: "Ducha — Mármol azul" },
  { id: "ambiente-2", image: banoAmbiente2, title: "Lavabo — Azul intenso" },
  { id: "ambiente-3", image: banoAmbiente3, title: "Lavabo — Verde y oro" },
  { id: "ambiente-4", image: banoAmbiente4, title: "Ducha — Verde negro" },
  { id: "ambiente-6", image: banoAmbiente6, title: "Baño — Piedra natural" },
  { id: "ambiente-9", image: banoAmbiente9, title: "Ducha — Oro cepillado" },
  { id: "conico-lavabo-mural", image: banoConicoLavaboMural, title: "Cónico — Lavabo mural" },
  { id: "46500-lavabo", image: bano46500Lavabo, title: "Lavabo — Diseño contemporáneo" },
  { id: "aroha-lavabo-ambiente", image: banoArohaLavaboAmbiente, title: "Aroha — Lavabo ambiente" },
  { id: "chap-ambiente", image: banoChapAmbiente, title: "Chap — Ambiente color" },
  { id: "conico-ducha", image: banoConicoDucha, title: "Cónico — Ducha minimalista" },
  { id: "ducha-dalma", image: banoDuchaDalma, title: "Dalma — Ducha negro mate" },
  { id: "lavabo-negro-mural", image: banoLavaboNegroMural, title: "Lavabo — Negro mural" },
  { id: "ducha-columna", image: banoDuchaColumna, title: "Columna de ducha — Gris piedra" },
  { id: "seven-marmol", image: banoSevenMarmol, title: "Seven — Mármol negro" },
];

const inspiracionCocina = [
  { id: "karim-cromo", image: cocinaKarim, title: "Karim Due — Cromo" },
  { id: "osmo", image: cocinaOsmo, title: "Osmo — Cocina cromo" },
];

const inspiracionHoteles = [
  { id: "hotel-dreams", image: hotelDreams, title: "Dreams — Baño conectado" },
  { id: "hotel-linea-or", image: hotelLineaOr, title: "Linea — Oro cepillado" },
  { id: "hotel-ambiente-5", image: hotelAmbiente5, title: "Baño — Piedra oscura" },
  { id: "hotel-ambiente-13", image: hotelAmbiente13, title: "Lavabo — Cobre mediterráneo" },
  { id: "hotel-ambiente-15", image: hotelAmbiente15, title: "Lavabo — Rojo y negro" },
  { id: "hotel-ambiente-23", image: hotelAmbiente23, title: "Lavabo — Mosaico artesanal" },
  { id: "hotel-ambiente-24", image: hotelAmbiente24, title: "Lavabo — Piedra natural" },
  { id: "hotel-ambiente-25", image: hotelAmbiente25, title: "Baño accesible — Oro" },
  { id: "hotel-urinario", image: hotelUrinario, title: "Urinarios — Electrónica" },
  { id: "hotel-restaurant", image: hotelRestaurant, title: "Restaurante — Cobre mural" },
];

const inspiracionHospitales = [
  { id: "hospital-lavabo-acero", image: hospitalLavaboAcero, title: "Lavabo quirúrgico — Acero inoxidable" },
  { id: "hospital-accesible-verde", image: hospitalAccesibleVerde, title: "Baño accesible — Geriátrico" },
  { id: "hospital-ambiente-12", image: hospitalAmbiente12, title: "Baño accesible — Negro minimalista" },
  { id: "hospital-sensia", image: hospitalSensia, title: "Sensia — Lavabo electrónico" },
  { id: "hospital-xt-elect-web", image: hospitalXtElectWeb, title: "XT Elect — Lavabos públicos" },
];

const inspiracionTransito = [
  { id: "transito-domo-sensia", image: transitoDomoSensia, title: "Domo Sensia — Mármol blanco" },
  { id: "transito-prestorizon", image: transitoPrestorizon, title: "Prestorizon — Lavabos PrestoEquip" },
  { id: "transito-ambiente-16", image: transitoAmbiente16, title: "Aeropuerto — Electrónica" },
  { id: "transito-ambiente-22", image: transitoAmbiente22, title: "Aseos públicos — Industrial" },
];

const inspiracionEducacion = [
  { id: "educacion-fluxor", image: educacionFluxor, title: "Infantil — Baños adaptados" },
  { id: "educacion-lavabos", image: educacionLavabos, title: "Primaria — Lavabos color" },
  { id: "educacion-mitigeur", image: educacionMitigeur, title: "Secundaria — Lavabos colectivos" },
  { id: "educacion-urinarios", image: educacionUrinarios, title: "Aseos — Urinarios color" },
];

const inspiracionSeguridad = [
  { id: "seguridad-ambiente-17", image: seguridadAmbiente17, title: "Seguridad — Acero inoxidable" },
];

const inspiracionDeportes = [
  { id: "deporte-dl400e", image: deporteDl400e, title: "Vestuarios — Panel ducha" },
  { id: "deporte-ducha-vestuario", image: deporteDuchaVestuario, title: "Vestuarios — Ducha mural" },
  { id: "deporte-ducha-dreams", image: deporteDuchaDreams, title: "Gimnasio — Ducha electrónica" },
  { id: "deporte-ambiente-11", image: deporteAmbiente11, title: "Polideportivo — Ducha temporizada" },
  { id: "deporte-ambiente-20", image: deporteAmbiente20, title: "Spa — Ducha mural" },
  { id: "deporte-ambiente-26", image: deporteAmbiente26, title: "Vestuarios — Lavabo acero" },
];

const inspiracionCocinasIndustriales = [
  { id: "cocina-industrial-7", image: cocinaIndustrial7, title: "Cocina profesional — Grifo industrial" },
  { id: "cocina-industrial-8", image: cocinaIndustrial8, title: "Cocina profesional — Fregadero acero" },
];

const inspiracionOcio = [
  { id: "ocio-rio-shopping", image: ocioRioShopping, title: "Centro comercial — Lavabos premium" },
  { id: "ocio-xt2000", image: ocioXt2000, title: "Ocio — Grifo temporizado níquel" },
  { id: "ocio-ambiente-20", image: ocioAmbiente20, title: "Spa — Duchas colectivas" },
  { id: "ocio-prestotem", image: ocioPrestotem, title: "Piscina — Ducha exterior" },
  { id: "ocio-sensao", image: ocioSensao, title: "Ocio — Aseos diseño" },
];

const inspiracionAireLibre = [
  { id: "airelibre-ducha-playa", image: airelibreDuchaPlaya, title: "Playa — Ducha exterior acero" },
  { id: "airelibre-granja", image: airelibreGranja, title: "Rural — Grifo exterior" },
  { id: "airelibre-parque-fuente", image: airelibreParqueFuente, title: "Parque — Fuente ornamental" },
  { id: "airelibre-jardin-fuente", image: airelibreJardinFuente, title: "Jardín — Fuente con piscina" },
];


const NovedadesPage = () => {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero */}
        <section className="container-presto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-accent font-medium tracking-luxury uppercase text-xs">
              Inspiración
            </span>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6 uppercase">
              Inspiración
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explora nuestra selección de ambientes donde la grifería PRESTO se integra como protagonista. Espacios reales, eficientes y contemporáneos que reflejan nuestra identidad: tecnología de precisión, máxima durabilidad y un diseño pensado para facilitar la vida.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Inspírate con cocinas y baños donde cada pieza transmite confianza, innovación y funcionalidad responsable.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Una experiencia visual creada para arquitectos, diseñadores, prescriptores y profesionales que buscan soluciones fiables y coherentes para cada proyecto.
            </p>
          </motion.div>
        </section>

        {/* Inspiración Baño */}
        <section className="container-presto mb-20">
          <div className="mb-10">
            <span className="text-accent font-medium tracking-luxury uppercase text-xs block mb-3">
              Ambientes
            </span>
            <h2 className="font-display text-3xl md:text-4xl mb-2">Baño</h2>
            <div className="w-16 h-0.5 bg-accent" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {inspiracionBano.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group cursor-pointer overflow-hidden"
                onClick={() => setLightboxImg(item.image)}
              >
                <div className="category-card aspect-[3/4]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="category-card-image"
                    loading="lazy"
                  />
                  <div className="category-card-overlay" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-xs font-medium tracking-elegant uppercase">{item.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Inspiración Cocina */}
        <section className="container-presto mb-20">
          <div className="mb-10">
            <span className="text-accent font-medium tracking-luxury uppercase text-xs block mb-3">
              Ambientes
            </span>
            <h2 className="font-display text-3xl md:text-4xl mb-2">Cocina</h2>
            <div className="w-16 h-0.5 bg-accent" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {inspiracionCocina.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group cursor-pointer overflow-hidden"
                onClick={() => setLightboxImg(item.image)}
              >
                <div className="category-card aspect-[3/4]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="category-card-image"
                    loading="lazy"
                  />
                  <div className="category-card-overlay" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-xs font-medium tracking-elegant uppercase">{item.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Inspiración Hoteles y Restaurantes */}
        <section className="container-presto mb-20">
          <div className="mb-10">
            <span className="text-accent font-medium tracking-luxury uppercase text-xs block mb-3">
              Ambientes
            </span>
            <h2 className="font-display text-3xl md:text-4xl mb-2">Hoteles y Restaurantes</h2>
            <div className="w-16 h-0.5 bg-accent" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {inspiracionHoteles.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group cursor-pointer overflow-hidden"
                onClick={() => setLightboxImg(item.image)}
              >
                <div className="category-card aspect-[3/4]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="category-card-image"
                    loading="lazy"
                  />
                  <div className="category-card-overlay" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-xs font-medium tracking-elegant uppercase">{item.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Inspiración Hospitales */}
        <section className="container-presto mb-20">
          <div className="mb-10">
            <span className="text-accent font-medium tracking-luxury uppercase text-xs block mb-3">
              Ambientes
            </span>
            <h2 className="font-display text-3xl md:text-4xl mb-2">Hospitales</h2>
            <div className="w-16 h-0.5 bg-accent" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {inspiracionHospitales.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group cursor-pointer overflow-hidden"
                onClick={() => setLightboxImg(item.image)}
              >
                <div className="category-card aspect-[3/4]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="category-card-image"
                    loading="lazy"
                  />
                  <div className="category-card-overlay" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-xs font-medium tracking-elegant uppercase">{item.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Inspiración Centros de Alto Tránsito */}
        <section className="container-presto mb-20">
          <div className="mb-10">
            <span className="text-accent font-medium tracking-luxury uppercase text-xs block mb-3">
              Ambientes
            </span>
            <h2 className="font-display text-3xl md:text-4xl mb-2">Centros de Alto Tránsito</h2>
            <div className="w-16 h-0.5 bg-accent" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {inspiracionTransito.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group cursor-pointer overflow-hidden"
                onClick={() => setLightboxImg(item.image)}
              >
                <div className="category-card aspect-[3/4]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="category-card-image"
                    loading="lazy"
                  />
                  <div className="category-card-overlay" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-xs font-medium tracking-elegant uppercase">{item.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Inspiración Centros Educativos */}
        <section className="container-presto mb-20">
          <div className="mb-10">
            <span className="text-accent font-medium tracking-luxury uppercase text-xs block mb-3">
              Ambientes
            </span>
            <h2 className="font-display text-3xl md:text-4xl mb-2">Centros Educativos</h2>
            <div className="w-16 h-0.5 bg-accent" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {inspiracionEducacion.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group cursor-pointer overflow-hidden"
                onClick={() => setLightboxImg(item.image)}
              >
                <div className="category-card aspect-[3/4]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="category-card-image"
                    loading="lazy"
                  />
                  <div className="category-card-overlay" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-xs font-medium tracking-elegant uppercase">{item.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Inspiración Centros de Alta Seguridad */}
        <section className="container-presto mb-20">
          <div className="mb-10">
            <span className="text-accent font-medium tracking-luxury uppercase text-xs block mb-3">
              Ambientes
            </span>
            <h2 className="font-display text-3xl md:text-4xl mb-2">Centros de Alta Seguridad</h2>
            <div className="w-16 h-0.5 bg-accent" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {inspiracionSeguridad.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group cursor-pointer overflow-hidden"
                onClick={() => setLightboxImg(item.image)}
              >
                <div className="category-card aspect-[3/4]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="category-card-image"
                    loading="lazy"
                  />
                  <div className="category-card-overlay" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-xs font-medium tracking-elegant uppercase">{item.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Inspiración Centros Deportivos */}
        <section className="container-presto mb-20">
          <div className="mb-10">
            <span className="text-accent font-medium tracking-luxury uppercase text-xs block mb-3">
              Ambientes
            </span>
            <h2 className="font-display text-3xl md:text-4xl mb-2">Centros Deportivos</h2>
            <div className="w-16 h-0.5 bg-accent" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {inspiracionDeportes.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group cursor-pointer overflow-hidden"
                onClick={() => setLightboxImg(item.image)}
              >
                <div className="category-card aspect-[3/4]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="category-card-image"
                    loading="lazy"
                  />
                  <div className="category-card-overlay" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-xs font-medium tracking-elegant uppercase">{item.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Inspiración Cocinas Industriales */}
        <section className="container-presto mb-20">
          <div className="mb-10">
            <span className="text-accent font-medium tracking-luxury uppercase text-xs block mb-3">
              Ambientes
            </span>
            <h2 className="font-display text-3xl md:text-4xl mb-2">Cocinas Industriales</h2>
            <div className="w-16 h-0.5 bg-accent" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {inspiracionCocinasIndustriales.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group cursor-pointer overflow-hidden"
                onClick={() => setLightboxImg(item.image)}
              >
                <div className="category-card aspect-[3/4]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="category-card-image"
                    loading="lazy"
                  />
                  <div className="category-card-overlay" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-xs font-medium tracking-elegant uppercase">{item.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Inspiración Centros de Ocio */}
        <section className="container-presto mb-20">
          <div className="mb-10">
            <span className="text-accent font-medium tracking-luxury uppercase text-xs block mb-3">
              Ambientes
            </span>
            <h2 className="font-display text-3xl md:text-4xl mb-2">Centros de Ocio</h2>
            <div className="w-16 h-0.5 bg-accent" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {inspiracionOcio.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group cursor-pointer overflow-hidden"
                onClick={() => setLightboxImg(item.image)}
              >
                <div className="category-card aspect-[3/4]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="category-card-image"
                    loading="lazy"
                  />
                  <div className="category-card-overlay" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-xs font-medium tracking-elegant uppercase">{item.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Inspiración Aire Libre */}
        <section className="container-presto mb-20">
          <div className="mb-10">
            <span className="text-accent font-medium tracking-luxury uppercase text-xs block mb-3">
              Ambientes
            </span>
            <h2 className="font-display text-3xl md:text-4xl mb-2">Aire Libre</h2>
            <div className="w-16 h-0.5 bg-accent" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {inspiracionAireLibre.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group cursor-pointer overflow-hidden"
                onClick={() => setLightboxImg(item.image)}
              >
                <div className="category-card aspect-[3/4]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="category-card-image"
                    loading="lazy"
                  />
                  <div className="category-card-overlay" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-xs font-medium tracking-elegant uppercase">{item.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="container-presto">
          <div className="bg-primary text-primary-foreground p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-display mb-4">
              No te pierdas ninguna novedad
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Suscríbete a nuestra newsletter y recibe las últimas novedades directamente en tu correo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button className="px-6 py-3 bg-white text-primary font-medium hover:bg-white/90 transition-colors">
                Suscribirse
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxImg(null)}
          >
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={lightboxImg}
              alt="Inspiración"
              className="max-w-full max-h-[90vh] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default NovedadesPage;
