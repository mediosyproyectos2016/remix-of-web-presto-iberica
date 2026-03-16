import { useState, useRef, useEffect, useCallback } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Palette, Sparkles, Shield, Droplets, Clock, Wrench, Check, Scale, Cog, Eye, Star, ChevronLeft, ChevronRight } from "lucide-react";

import prestoCustomBg from "@/assets/configurador-presto.jpg";
import finishGold from "@/assets/acabados-luxcover.jpg";
import finishNickel from "@/assets/finish-nickel.jpg";
import productHero from "@/assets/product-hero-faucet.jpg";
import pemMetales from "@/assets/pem-metales.png";
import faucetCromo from "@/assets/ral/faucet-cromo.jpg";
import productBlack from "@/assets/product-black-faucet.jpg";
import faucetOroRosa from "@/assets/ral/faucet-oro-rosa.jpg";
import faucetCobreEnvejecido from "@/assets/ral/faucet-cobre-envejecido.jpg";
import faucetBronce from "@/assets/ral/faucet-bronce.jpg";
import faucetCromoMate from "@/assets/ral/faucet-cromo-mate.jpg";
import faucetCromoNegroBrillo from "@/assets/ral/faucet-cromo-negro-brillo.jpg";
import faucetCromoNegroCepillado from "@/assets/ral/faucet-cromo-negro-cepillado.jpg";
import faucetOro from "@/assets/ral/faucet-oro.jpg";
import faucetOroArenado from "@/assets/ral/faucet-oro-arenado.jpg";
import faucetOroCepillado from "@/assets/ral/faucet-oro-cepillado.jpg";
import faucetNiquelCepillado from "@/assets/ral/faucet-niquel-cepillado.jpg";
import faucetLatonNatural from "@/assets/ral/faucet-laton-natural.jpg";

// Print product images
import printCatrina from "@/assets/ral/print-catrina.png";
import printEspiral from "@/assets/ral/print-espiral.png";
import printFloral from "@/assets/ral/print-floral.jpg";
import printGraffiti from "@/assets/ral/print-graffiti.jpg";
import printMarmolBlanco from "@/assets/ral/print-marmol-blanco.jpg";
import printMarmolNegro from "@/assets/ral/print-marmol-negro.jpg";
import printTornasolado from "@/assets/ral/print-tornasolado.jpg";
import printSerpiente from "@/assets/ral/print-serpiente.jpg";
import printMarmolNegroAmbiente from "@/assets/ral/print-marmol-negro-ambiente.jpg";
import printAnimal from "@/assets/ral/print-animal.png";
import printArtDeco from "@/assets/ral/print-art-deco.jpg";
import printEsmerizado from "@/assets/ral/print-esmerizado.png";
import printAnimalMulti from "@/assets/ral/print-animal-multi.png";
import printMadera from "@/assets/ral/print-madera.jpg";
import printCarbonoClaro from "@/assets/ral/print-carbono-claro.jpg";
import printCarbono from "@/assets/ral/print-carbono.jpg";
import printDalmata from "@/assets/ral/print-dalmata.jpg";

import ral1004c from "@/assets/ral/RAL-1004-3.png";
import ral2002c from "@/assets/ral/RAL-2002-3.png";
import ral2007c from "@/assets/ral/RAL-2007-3.png";
import ral4005c from "@/assets/ral/RAL-4005-3.png";
import ral5017c from "@/assets/ral/RAL-5017-3.png";
import ral5024c from "@/assets/ral/RAL-5024.jpg";
import ral6027c from "@/assets/ral/RAL-6027-3.png";
import ral6037c from "@/assets/ral/RAL-6037-3.png";
import ral7045c from "@/assets/ral/RAL-7045-3.png";
import ral8003c from "@/assets/ral/RAL-8003-3.png";
import ral9016c from "@/assets/ral/RAL-9016-3.png";
import ral9005c from "@/assets/ral/RAL-9005-3.png";
import ralMulticolorc from "@/assets/ral/RAL-multicolor-3.png";

import ral1004 from "@/assets/ral/RAL-1004.png";
import ral8003 from "@/assets/ral/RAL-8003.png";
import ral7045 from "@/assets/ral/RAL-7045.png";
import ral6037 from "@/assets/ral/RAL-6037.png";
import ral6027 from "@/assets/ral/RAL-6027.png";
import ral5017 from "@/assets/ral/RAL-5017.png";
import ral4005 from "@/assets/ral/RAL-4005.png";
import ral2007 from "@/assets/ral/RAL-2007.png";
import ral2002 from "@/assets/ral/RAL-2002.png";
import acabadoMarmol from "@/assets/ral/Acabado-Marmol-2.png";
import acabadoPanel from "@/assets/ral/Acabado-Panel-2.png";
import acabadoMadera from "@/assets/ral/Acabado-Madera-2.png";
import acabadoEsmerizadoAzul from "@/assets/ral/Acabado-Esmerizalo-azul-2.png";
import acabadoCarbonoClaro from "@/assets/ral/Acabado-carbono-claro-2.png";
import acabadoCarbono from "@/assets/ral/Acabado-carbono-2.png";
import acabadoCamaleon from "@/assets/ral/Acabado-Camaleon-2.png";
import iconCatrina from "@/assets/ral/icon-catrina.jpg";
import iconCocodrilo from "@/assets/ral/icon-cocodrilo.jpg";
import iconDalmata from "@/assets/ral/icon-dalmata.jpg";
import iconEspiral from "@/assets/ral/icon-espiral.jpg";
import iconFloral from "@/assets/ral/icon-floral.jpg";
import iconGraffiti from "@/assets/ral/icon-graffiti.jpg";
import iconSerpiente from "@/assets/ral/icon-serpiente.jpg";
import iconMadera from "@/assets/ral/icon-madera.jpg";
import iconMarmolBlanco from "@/assets/ral/icon-marmol-blanco.jpg";

// Laser gallery images
import laserRosa from "@/assets/ral/laser-rosa.jpg";
import laserRock from "@/assets/ral/laser-rock.jpg";
import laserRocket from "@/assets/ral/laser-rocket.jpg";
import laserIdentity from "@/assets/ral/laser-identity.jpg";
import laserAgua from "@/assets/ral/laser-agua.jpg";
import laserNamaste from "@/assets/ral/laser-namaste.jpg";
import laserDaisa from "@/assets/ral/laser-daisa.jpg";

// Faucet product photos per RAL
import faucetRal1004 from "@/assets/ral/faucet-ral-1004.jpg";
import faucetRal1018 from "@/assets/ral/faucet-ral-1018.png";
import faucetRal2002 from "@/assets/ral/faucet-ral-2002.png";
import faucetRal2002b from "@/assets/ral/faucet-ral-2002b.png";
import faucetRal2007 from "@/assets/ral/faucet-ral-2007.png";
import faucetRal4005 from "@/assets/ral/faucet-ral-4005.png";
import faucetRal5017 from "@/assets/ral/faucet-ral-5017.png";
import faucetRal5024 from "@/assets/ral/faucet-ral-5024.png";
import faucetRal6027 from "@/assets/ral/faucet-ral-6027.png";
import faucetRal8003 from "@/assets/ral/faucet-ral-8003.jpg";
import faucetMulticolor from "@/assets/ral/faucet-multicolor.jpg";
import faucetRal8003b from "@/assets/ral/faucet-ral-8003b.jpg";
import faucetRal9016 from "@/assets/ral/faucet-ral-9016.png";
import faucetRal7045 from "@/assets/ral/faucet-ral-7045.png";
import faucetRal6037 from "@/assets/ral/faucet-ral-6037.png";
import faucetRal9005 from "@/assets/ral/faucet-ral-9005.jpg";

interface Finish {
  id: string;
  name: string;
  code: string;
  description: string;
  image: string;
  maintenance: string;
  productImage?: string;
  gallery?: string[];
}

// Categorías actualizadas según documento PEM
const finishCategories = [
  { 
    id: "metales", 
    name: "Metales", 
    description: "Acabados metálicos de alta resistencia. Sustituye la terminación YY de la referencia de producto seleccionado por el código de metal elegido." 
  },
  { 
    id: "color", 
    name: "Color", 
    description: "Combinaciones para pintar las piezas con colores planos o degradados usando la carta de colores RAL. Máximo rendimiento y calidad técnica." 
  },
  { 
    id: "print", 
    name: "Print", 
    description: "Técnica de impresión que fija cualquier motivo a la superficie del grifo. Personalización sin límites." 
  },
  { 
    id: "laser", 
    name: "Láser", 
    description: "Técnica láser que permite realizar un grabado en un área del grifo, un diseño individual con toque muy personal." 
  },
];

const finishesByCategory: Record<string, Finish[]> = {
  color: [
    { id: "ral-1004-c", name: "RAL 1004", code: "#E1A100", description: "Amarillo oro. Acabado de alta resistencia y brillo uniforme.", image: ral1004c, maintenance: "Paño suave húmedo. Evitar frotar con fuerza.", productImage: faucetRal1004 },
    { id: "ral-1018-c", name: "RAL 1018", code: "#F0D000", description: "Amarillo zinc. Tono vibrante y luminoso.", image: ral1004c, maintenance: "Paño suave húmedo.", productImage: faucetRal1018 },
    { id: "ral-2002-c", name: "RAL 2002", code: "#C63927", description: "Rojo bermellón. Intensidad y carácter en acabado.", image: ral2002c, maintenance: "Esponja blanca con jabón suave.", productImage: faucetRal2002b },
    { id: "ral-2007-c", name: "RAL 2007", code: "#FF8200", description: "Naranja luminoso. Energía y creatividad en acabado.", image: ral2007c, maintenance: "Jabón líquido diluido en agua.", productImage: faucetRal2007 },
    { id: "ral-4005-c", name: "RAL 4005", code: "#8B6FAC", description: "Lila azulado. Personalidad única en acabado.", image: ral4005c, maintenance: "Paño de microfibra seco.", productImage: faucetRal4005 },
    { id: "ral-5017-c", name: "RAL 5017", code: "#1A5784", description: "Azul tráfico. Tono profundo y elegante.", image: ral5017c, maintenance: "Limpieza suave con agua.", productImage: faucetRal5017 },
    { id: "ral-5024-c", name: "RAL 5024", code: "#8DAFC4", description: "Azul pastel. Tono suave y elegante.", image: ral5017c, maintenance: "Paño suave húmedo.", productImage: faucetRal5024 },
    { id: "ral-6027-c", name: "RAL 6027", code: "#7AADAA", description: "Verde turquesa claro. Frescura y sofisticación.", image: ral6027c, maintenance: "Paño suave húmedo.", productImage: faucetRal6027 },
    { id: "ral-6037-c", name: "RAL 6037", code: "#2D8930", description: "Verde puro. Color vibrante y natural.", image: ral6037c, maintenance: "Jabón suave diluido en agua.", productImage: faucetRal6037 },
    { id: "ral-7045-c", name: "RAL 7045", code: "#8E929B", description: "Gris telegris. Acabado neutro y elegante.", image: ral7045c, maintenance: "Paño de microfibra húmedo.", productImage: faucetRal7045 },
    { id: "ral-8003-c", name: "RAL 8003", code: "#7B5B3A", description: "Marrón arcilla. Tono cálido y natural.", image: ral8003c, maintenance: "Limpieza suave con agua y jabón neutro.", productImage: faucetRal8003b },
    { id: "ral-9016-c", name: "RAL Blanco", code: "#F1F0EA", description: "Blanco tráfico. Pureza y luminosidad.", image: ral9016c, maintenance: "Paño suave húmedo.", productImage: faucetRal9016 },
    { id: "ral-9005-c", name: "RAL Negro", code: "#0E0E10", description: "Negro intenso. Elegancia y sofisticación.", image: ral9005c, maintenance: "Paño de microfibra seco.", productImage: faucetRal9005 },
    { id: "ral-multi-c", name: "RAL Multicolor", code: "#FFD700", description: "Combinación multicolor. Personalización sin límites mezclando varios colores RAL en una misma pieza.", image: ralMulticolorc, maintenance: "Paño suave húmedo.", productImage: faucetMulticolor },
  ],
  print: [
    { id: "marmol", name: "Mármol Negro", code: "#1a1a1a", description: "Efecto mármol negro con vetas blancas. Elegancia clásica sobre la superficie del grifo.", image: acabadoMarmol, maintenance: "Paño suave húmedo. Evitar productos abrasivos.", productImage: printMarmolNegroAmbiente },
    { id: "marmol-blanco", name: "Mármol Blanco", code: "#F0EDE8", description: "Efecto mármol blanco con vetas sutiles. Pureza y sofisticación en cada detalle.", image: iconMarmolBlanco, maintenance: "Paño suave húmedo.", productImage: printMarmolBlanco },
    { id: "panel", name: "Panel Hexagonal", code: "#4A4A4A", description: "Patrón geométrico hexagonal. Diseño contemporáneo y sofisticado.", image: acabadoPanel, maintenance: "Limpieza suave con agua y jabón neutro." },
    { id: "madera", name: "Madera Natural", code: "#B5651D", description: "Efecto madera natural. Calidez orgánica aplicada sobre la superficie metálica.", image: iconMadera, maintenance: "Paño de microfibra húmedo.", productImage: printMadera },
    { id: "esmerizado-azul", name: "Esmerizado Azul", code: "#5B6EAE", description: "Azul esmerizado con textura suave y acabado mate distintivo.", image: acabadoEsmerizadoAzul, maintenance: "Jabón suave diluido en agua." },
    { id: "carbono-claro", name: "Carbono Claro", code: "#B0B0B0", description: "Fibra de carbono en tono claro. Tecnología y diseño en un acabado único.", image: acabadoCarbonoClaro, maintenance: "Paño suave húmedo.", productImage: printCarbonoClaro },
    { id: "carbono", name: "Carbono", code: "#5A5A5A", description: "Fibra de carbono oscuro. Acabado técnico de alto rendimiento.", image: acabadoCarbono, maintenance: "Limpieza suave con agua.", productImage: printCarbono },
    { id: "camaleon", name: "Camaleón", code: "#5B6D8E", description: "Efecto camaleón con degradado de tonos azul-violeta. Acabado iridiscente único.", image: acabadoCamaleon, maintenance: "Paño de microfibra seco." },
    { id: "catrina", name: "Catrina", code: "#D4317C", description: "Estampado floral tipo catrina mexicana. Arte y color en cada pieza.", image: iconCatrina, maintenance: "Paño suave húmedo.", productImage: printCatrina },
    { id: "espiral", name: "Espiral", code: "#C8A800", description: "Diseño con espirales en negro y dorado. Carácter único y artesanal.", image: iconEspiral, maintenance: "Paño de microfibra seco.", productImage: printEspiral },
    { id: "floral", name: "Floral", code: "#E8453C", description: "Estampado floral colorido. Frescura y alegría en el diseño del grifo.", image: iconFloral, maintenance: "Paño suave húmedo.", productImage: printFloral },
    { id: "graffiti", name: "Graffiti", code: "#FF4500", description: "Arte urbano sobre la grifería. Explosión de color y creatividad.", image: iconGraffiti, maintenance: "Paño suave húmedo.", productImage: printGraffiti },
    { id: "tornasolado", name: "Tornasolado", code: "#6B4C8A", description: "Acabado tornasolado con reflejos violeta-azul. Efecto cambiante según la luz.", image: acabadoEsmerizadoAzul, maintenance: "Paño de microfibra seco.", productImage: printTornasolado },
    { id: "serpiente", name: "Serpiente", code: "#8B7355", description: "Textura piel de serpiente. Acabado exótico y atrevido.", image: iconSerpiente, maintenance: "Paño suave húmedo.", productImage: printSerpiente },
    { id: "animal", name: "Animal Print", code: "#C8A45A", description: "Estampado animal leopardo. Diseño salvaje y sofisticado.", image: iconCocodrilo, maintenance: "Paño suave húmedo.", productImage: printAnimal },
    { id: "art-deco", name: "Art Decó", code: "#C9A84C", description: "Motivos florales Art Decó en oro y negro. Elegancia clásica reinventada.", image: acabadoCamaleon, maintenance: "Paño de microfibra seco.", productImage: printArtDeco },
    { id: "esmerizado", name: "Esmerizado", code: "#5B6EAE", description: "Acabado esmerizado liso en tono azul intenso. Superficie mate uniforme.", image: acabadoEsmerizadoAzul, maintenance: "Paño suave húmedo.", productImage: printEsmerizado },
    { id: "animal-multi", name: "Animal Collection", code: "#8B6914", description: "Colección animal print: zebra, leopardo, serpiente y tigre. Naturaleza salvaje en la grifería.", image: iconCocodrilo, maintenance: "Paño suave húmedo.", productImage: printAnimalMulti },
    { id: "dalmata", name: "Dálmata", code: "#FFFFFF", description: "Estampado dálmata blanco y negro. Diseño divertido y atrevido.", image: iconDalmata, maintenance: "Paño suave húmedo.", productImage: printDalmata },
  ],
  laser: [
    { id: "laser-grabado", name: "Grabado láser", code: "#848789", description: "Técnica láser que permite realizar un grabado en un área del grifo, un diseño individual con toque muy personal.", image: productHero, maintenance: "Paño de microfibra seco.", productImage: laserRosa, gallery: [laserRosa, laserRock, laserRocket, laserIdentity, laserAgua, laserNamaste, laserDaisa] },
  ],
  metales: [
    { id: "metal-cromo", name: "Cromo", code: "#C0C0C0", description: "Acabado cromado clásico. YY = 00", image: pemMetales, maintenance: "Paño suave húmedo.", productImage: faucetCromo },
    { id: "metal-cromo-mate", name: "Cromo mate", code: "#D4D4D4", description: "Acabado cromado mate. YY = 61", image: pemMetales, maintenance: "Paño de microfibra seco.", productImage: faucetCromoMate },
    { id: "metal-cromo-negro-brillo", name: "Cromo negro brillo", code: "#2C2C2C", description: "Acabado cromo negro brillante. YY = 35", image: pemMetales, maintenance: "Paño suave húmedo.", productImage: faucetCromoNegroBrillo },
    { id: "metal-cromo-negro-cepillado", name: "Cromo negro cepillado", code: "#3A3A3A", description: "Acabado cromo negro cepillado. YY = 36", image: pemMetales, maintenance: "Paño de microfibra seco.", productImage: faucetCromoNegroCepillado },
    { id: "metal-oro", name: "Oro", code: "#D4AF37", description: "Acabado dorado brillante. YY = 18", image: pemMetales, maintenance: "Paño suave húmedo.", productImage: faucetOro },
    { id: "metal-oro-arenado", name: "Oro arenado", code: "#CFB53B", description: "Acabado dorado arenado mate. YY = 28", image: pemMetales, maintenance: "Paño de microfibra seco.", productImage: faucetOroArenado },
    { id: "metal-oro-cepillado", name: "Oro cepillado", code: "#C5A028", description: "Acabado dorado cepillado. YY = 29", image: pemMetales, maintenance: "Paño suave húmedo.", productImage: faucetOroCepillado },
    { id: "metal-oro-rosa", name: "Oro rosa", code: "#B76E79", description: "Acabado oro rosa. YY = 30", image: pemMetales, maintenance: "Paño de microfibra seco.", productImage: faucetOroRosa },
    { id: "metal-niquel-cepillado", name: "Níquel cepillado", code: "#7A7A7A", description: "Acabado níquel cepillado. YY = 71", image: pemMetales, maintenance: "Paño suave húmedo.", productImage: faucetNiquelCepillado },
    { id: "metal-laton-natural", name: "Latón natural", code: "#B5A642", description: "Acabado latón natural. YY = 37", image: pemMetales, maintenance: "Jabón suave diluido en agua.", productImage: faucetLatonNatural },
    { id: "metal-bronce-envejecido", name: "Bronce envejecido", code: "#A0785A", description: "Acabado bronce envejecido. YY = 40", image: pemMetales, maintenance: "Paño de microfibra seco.", productImage: faucetBronce },
    { id: "metal-cobre-envejecido", name: "Cobre envejecido", code: "#B87333", description: "Acabado cobre envejecido. YY = 41", image: pemMetales, maintenance: "Paño suave húmedo.", productImage: faucetCobreEnvejecido },
  ],
};

const defaultFinishes = finishesByCategory.metales;

// Servicios PEM según documento
const pemServices = [
  {
    icon: Scale,
    title: "Requerimientos Legales",
    description: "Adaptación de productos a normativas específicas de cada instalación y país.",
  },
  {
    icon: Cog,
    title: "Requerimientos Técnicos",
    description: "Adaptación de productos a necesidades de la instalación, desarrollo de nuevos productos, y consultoría para instalación de productos de ahorro de agua y energía.",
  },
  {
    icon: Eye,
    title: "Requerimientos Estéticos",
    description: "Recomendaciones según tendencias e interiorismo de ambiente, incorporando siempre la máxima garantía y asegurando la satisfacción del cliente.",
  },
  {
    icon: Star,
    title: "Requerimientos Especializados",
    description: "Consulta con nuestro Departamento Presto Exclusive Manufacturing todas las opciones de customización y optimización y crea tu propio diseño.",
  },
];

const customBenefits = [
  {
    icon: Palette,
    title: "Más de 25 Acabados",
    description: "Amplia paleta de acabados premium: galvánicos, lacados y tonos exclusivos."
  },
  {
    icon: Sparkles,
    title: "Técnicas Artesanales",
    description: "Procesos exclusivos aplicados por maestros con décadas de experiencia en España."
  },
  {
    icon: Shield,
    title: "Máxima Durabilidad",
    description: "Acabados con resistencia mecánica única y garantía extendida de 3 años."
  },
];

const processSteps = [
  { icon: Palette, step: "01", title: "Elige Acabado", desc: "Selecciona entre Metal, Color, Print o Láser" },
  { icon: Wrench, step: "02", title: "Personaliza", desc: "Añade variantes y opciones específicas a tu diseño" },
  { icon: Clock, step: "03", title: "Fabricación", desc: "Creamos tu pieza con artesanía española en 4-6 semanas" },
  { icon: Droplets, step: "04", title: "Entrega", desc: "Recibe tu grifo exclusivo con documentación de cuidado" },
];

const PrestoCustomPage = () => {
  const [activeCategory, setActiveCategory] = useState("color");
  const [selectedFinishId, setSelectedFinishId] = useState<string | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const currentFinishes = finishesByCategory[activeCategory] || defaultFinishes;
  const selectedFinish = currentFinishes.find(f => f.id === selectedFinishId) || currentFinishes[0];

  // Auto-advance gallery for laser
  useEffect(() => {
    if (selectedFinish?.gallery && selectedFinish.gallery.length > 1) {
      setGalleryIndex(0);
      const interval = setInterval(() => {
        setGalleryIndex(prev => (prev + 1) % selectedFinish.gallery!.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [selectedFinish?.id]);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setSelectedFinishId(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img src={prestoCustomBg} alt="Presto Exclusive Manufacturing" className="w-full h-[120%] object-cover" loading="eager" decoding="async" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="container-presto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="max-w-2xl text-white"
            >
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6 uppercase">
                Presto Exclusive
                <br />
                Manufacturing
              </h1>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-8 leading-none">
                Servicio de Asesoramiento
                <br />
                <span className="text-accent italic">Personalizado</span>
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-lg">
                Personalización técnica y estética. Múltiples opciones de personalización 
                y combinación de elementos para crear grifería sin límites.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contacto" className="btn-hero">
                  Solicitar Presupuesto
                </Link>
                <Link to="/productos" className="btn-hero border-white/30 hover:bg-white/10 hover:text-white">
                  Ver Productos
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-16 bg-white/30 relative overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-x-0 h-1/3 bg-white"
            />
          </div>
        </motion.div>
      </section>

      {/* PEM Services - 4 Requerimientos */}
      <section className="section-py bg-primary text-primary-foreground">
        <div className="container-presto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-luxury uppercase text-primary-foreground/70 mb-4 block">
              Nuestro Servicio
            </span>
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              Personalización Técnica y Estética
            </h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto">
              Consulta con nuestro equipo especializado todas las opciones de 
              customización y optimización y crea tu propio diseño.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pemServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center"
              >
                <service.icon className="w-10 h-10 mx-auto mb-6 text-accent" />
                <h3 className="font-display text-xl mb-3">{service.title}</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestros Acabados - Category Tabs */}
      <section className="section-py bg-secondary">
        <div className="container-presto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-xs tracking-luxury uppercase text-muted-foreground mb-4 block">
              Personaliza Grifos Únicos
            </span>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Nuestros Acabados
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Múltiples opciones de personalización y combinación de elementos para crear grifería sin límites. 
              Consulta infinitas posibilidades.
            </p>
          </motion.div>

          {/* Category pills with labels */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {finishCategories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => handleCategoryChange(category.id)}
                className={`flex flex-col items-center px-8 py-4 text-sm font-medium transition-all duration-300 border ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background border-border hover:border-primary hover:text-primary"
                }`}
              >
                <span className="font-display text-lg">{category.name}</span>
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-center mb-12"
            >
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {finishCategories.find(c => c.id === activeCategory)?.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>



      {/* Finishes Showcase - Vertical List + Product Photo */}
      <section ref={containerRef} className="section-py">
        <div className="container-presto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0"
            >
              {/* Left: Vertical list of finishes */}
              <div className="bg-secondary p-6 sm:p-10 lg:p-12 overflow-y-auto max-h-[700px]">
                <div className="space-y-1">
                  {currentFinishes.map((finish, index) => (
                    <motion.button
                      key={finish.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                      onClick={() => setSelectedFinishId(finish.id)}
                      className={`w-full flex items-center gap-4 px-4 py-3 text-left transition-all duration-200 border-l-2 ${
                        selectedFinish?.id === finish.id
                          ? "border-l-primary bg-background"
                          : "border-l-transparent hover:bg-background/50"
                      }`}
                    >
                      <div 
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-border shadow-sm overflow-hidden flex-shrink-0"
                        style={{ backgroundColor: finish.code }}
                      >
                        {(activeCategory === "print" || activeCategory === "color") && finish.image && (
                          <img src={finish.image} alt={finish.name} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <h4 className={`font-display text-sm md:text-base transition-colors ${
                          selectedFinish?.id === finish.id ? "text-primary" : "text-foreground"
                        }`}>
                          {finish.name}
                        </h4>
                        <p className="text-xs text-muted-foreground truncate">
                          {activeCategory === "metales" 
                            ? finish.description.split('. ').pop() 
                            : finish.description.split('.')[0]}
                        </p>
                      </div>
                      {selectedFinish?.id === finish.id && (
                        <Check className="w-4 h-4 text-primary ml-auto flex-shrink-0" />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

               {/* Right: Product photo */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-auto bg-muted overflow-hidden min-h-[400px] lg:min-h-[600px]">
                {selectedFinish?.gallery && selectedFinish.gallery.length > 1 ? (
                  /* Laser gallery slider */
                  <>
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={galleryIndex}
                        src={selectedFinish.gallery[galleryIndex]}
                        alt={`Grabado láser ejemplo ${galleryIndex + 1}`}
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                      />
                    </AnimatePresence>
                    {/* Nav arrows */}
                    <button
                      onClick={() => setGalleryIndex(prev => (prev - 1 + selectedFinish.gallery!.length) % selectedFinish.gallery!.length)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors z-10"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setGalleryIndex(prev => (prev + 1) % selectedFinish.gallery!.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors z-10"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    {/* Dots */}
                    <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {selectedFinish.gallery.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setGalleryIndex(i)}
                          className={`w-2 h-2 rounded-full transition-all ${i === galleryIndex ? "bg-white w-6" : "bg-white/50"}`}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedFinish?.id}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    {selectedFinish?.productImage ? (
                      <img 
                        src={selectedFinish.productImage} 
                        alt={`Grifo Presto acabado ${selectedFinish.name}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : selectedFinish?.image && (activeCategory === "print") ? (
                      <img 
                        src={selectedFinish.image} 
                        alt={`Acabado ${selectedFinish.name}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div 
                        className="w-full h-full flex items-center justify-center"
                        style={{ backgroundColor: selectedFinish?.code }}
                      >
                        <div className="text-center text-white/80 p-8">
                          <Palette className="w-16 h-16 mx-auto mb-4 opacity-40" />
                          <p className="font-display text-2xl mb-2">{selectedFinish?.name}</p>
                          <p className="text-sm opacity-60">{selectedFinish?.description}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
                )}

                {/* Overlay with finish info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 sm:p-8">
                  <h3 className="font-display text-white text-2xl md:text-3xl mb-1">{selectedFinish?.name}</h3>
                  <p className="text-white/70 text-sm">{selectedFinish?.description}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-py bg-secondary">
        <div className="container-presto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-xs tracking-luxury uppercase text-muted-foreground mb-4 block">
              Personalización
            </span>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Cómo Funciona
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative text-center"
              >
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-border" />
                )}
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="font-display text-4xl text-accent/30 mb-2 block">{item.step}</span>
                <h3 className="font-display text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Info */}
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
                Tecnología Luxcover
              </span>
              <h2 className="font-display text-4xl md:text-5xl mb-6">
                Acabados de Máxima Calidad
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Elige entre múltiples opciones de acabados y diferentes tecnologías para destacar 
                la estética de los ambientes y captar la atención. Un fuerte valor añadido al ambiente 
                de baño con un toque muy personal distinguiendo con exclusividad la instalación.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Resistencia mecánica superior",
                  "Brillo excepcional duradero",
                  "Resistencia a corrosión y manchas",
                  "Acabados exclusivos artesanales",
                  "Garantía extendida de 3 años"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Link to="/tecnologias" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium">
                Descubre nuestras tecnologías
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img src={finishGold} alt="Acabados Luxcover" className="w-full aspect-[4/5] object-cover" />
              <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-8 max-w-xs">
                <p className="font-display text-2xl mb-2">Infinitos acabados</p>
                <p className="text-sm text-primary-foreground/70">No tienes límite</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py bg-primary text-primary-foreground">
        <div className="container-presto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Diseña Aquí con Nuestro Equipo Especializado
            </h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              Empieza a diseñar. Consulta infinitas posibilidades con el equipo de 
              Presto Exclusive Manufacturing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contacto" className="btn-hero">
                Solicitar Consulta
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrestoCustomPage;
