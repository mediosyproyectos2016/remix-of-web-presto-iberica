import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  ChevronRight, 
  Heart, 
  Share2, 
  Download, 
  Check, 
  ChevronLeft,
  Droplets,
  Shield,
  Leaf,
  Award
} from "lucide-react";

import productHero from "@/assets/product-hero-faucet.jpg";
import productBlack from "@/assets/product-black-faucet.jpg";
import productShower from "@/assets/product-shower-system.jpg";
import finishGold from "@/assets/finish-gold.jpg";
import finishNickel from "@/assets/finish-nickel.jpg";

const productImages = [productHero, productBlack, productShower];

const finishes = [
  { name: "Cromo", code: "#C0C0C0", image: null },
  { name: "Negro Mate", code: "#1a1a1a", image: null },
  { name: "Oro Cepillado", code: "#D4AF37", image: finishGold },
  { name: "Níquel Cepillado", code: "#848789", image: finishNickel },
];

const features = [
  { icon: Droplets, label: "Ahorro de Agua", value: "65%" },
  { icon: Shield, label: "Garantía", value: "10 años" },
  { icon: Leaf, label: "ECO", value: "Clase A+" },
  { icon: Award, label: "Certificado", value: "CE/ACS" },
];

const relatedProducts = [
  { name: "ALONA Lavabo Mural", category: "Grifería Electrónica", price: "890€" },
  { name: "DOMO Sistema Ducha", category: "Columnas de Ducha", price: "1.250€" },
  { name: "AQUA Bañera", category: "Grifería Baño", price: "720€" },
];

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedFinish, setSelectedFinish] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 lg:pt-32">
        {/* Breadcrumb */}
        <div className="container-presto mb-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Inicio</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/griferia" className="hover:text-foreground transition-colors">Grifería</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">ALONA Lavabo</span>
          </nav>
        </div>

        {/* Product Section */}
        <section className="container-presto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Gallery */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Main Image */}
              <div className="relative aspect-square bg-secondary overflow-hidden mb-4">
                <motion.img
                  key={selectedImage}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src={productImages[selectedImage]}
                  alt="ALONA Lavabo"
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation arrows */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 flex items-center justify-center hover:bg-background transition-colors"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 flex items-center justify-center hover:bg-background transition-colors"
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Image counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/90 px-4 py-2 text-xs tracking-elegant">
                  {selectedImage + 1} / {productImages.length}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === index ? "border-accent" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt={`Vista ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:py-8"
            >
              {/* Category & Reference */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs tracking-elegant uppercase text-muted-foreground">
                  Grifería Electrónica
                </span>
                <span className="text-xs text-muted-foreground">
                  Ref. 52010
                </span>
              </div>

              {/* Title */}
              <h1 className="font-display text-4xl lg:text-5xl mb-6">
                ALONA Lavabo
              </h1>

              {/* Short description */}
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
                Grifo electrónico de diseño minimalista con detección infrarroja. 
                Ahorro de agua del 65% y máxima higiene sin contacto.
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className="font-display text-3xl">€ 485</span>
                <span className="text-sm text-muted-foreground ml-2">IVA incl.</span>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-4 gap-4 mb-10 py-6 border-y border-border">
                {features.map((feature) => (
                  <div key={feature.label} className="text-center">
                    <feature.icon className="w-5 h-5 mx-auto mb-2 text-accent" />
                    <p className="text-xs text-muted-foreground mb-1">{feature.label}</p>
                    <p className="text-sm font-medium">{feature.value}</p>
                  </div>
                ))}
              </div>

              {/* Finishes */}
              <div className="mb-10">
                <h3 className="text-sm font-medium mb-4 tracking-elegant uppercase">
                  Acabado: {finishes[selectedFinish].name}
                </h3>
                <div className="flex gap-3">
                  {finishes.map((finish, index) => (
                    <button
                      key={finish.name}
                      onClick={() => setSelectedFinish(index)}
                      className={`relative w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                        selectedFinish === index ? "border-accent" : "border-border hover:border-muted-foreground"
                      }`}
                      style={{ backgroundColor: finish.code }}
                      aria-label={finish.name}
                    >
                      {selectedFinish === index && (
                        <Check className="absolute inset-0 m-auto w-4 h-4 text-white drop-shadow-lg" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 mb-8">
                <Link to="/contacto" className="btn-primary-elegant flex-1 text-center">
                  Solicitar Información
                </Link>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`w-14 h-14 border flex items-center justify-center transition-all duration-300 ${
                    isWishlisted 
                      ? "border-accent bg-accent text-white" 
                      : "border-border hover:border-foreground"
                  }`}
                  aria-label="Añadir a favoritos"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
                </button>
                <button 
                  className="w-14 h-14 border border-border hover:border-foreground flex items-center justify-center transition-colors"
                  aria-label="Compartir"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              {/* Downloads */}
              <div className="border-t border-border pt-8">
                <h3 className="text-sm font-medium mb-4 tracking-elegant uppercase">
                  Documentación
                </h3>
                <div className="space-y-3">
                  {["Ficha Técnica", "Manual de Instalación", "Certificados"].map((doc) => (
                    <button
                      key={doc}
                      className="flex items-center justify-between w-full py-3 px-4 bg-secondary hover:bg-muted transition-colors group"
                    >
                      <span className="text-sm">{doc}</span>
                      <Download className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Product Details Tabs */}
        <section className="section-py border-t border-border mt-20">
          <div className="container-presto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-3xl mb-6">Descripción</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    El grifo ALONA representa la perfecta fusión entre diseño contemporáneo 
                    y tecnología de vanguardia. Su sistema de detección infrarroja ofrece 
                    una experiencia de uso completamente higiénica, ideal para espacios 
                    públicos y residenciales de alto standing.
                  </p>
                  <p>
                    Fabricado en latón de primera calidad con acabados premium, cada pieza 
                    pasa por un riguroso control de calidad que garantiza su durabilidad 
                    y rendimiento óptimo durante décadas.
                  </p>
                </div>
              </motion.div>

              {/* Specifications */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="font-display text-3xl mb-6">Especificaciones</h2>
                <div className="space-y-4">
                  {[
                    { label: "Material", value: "Latón cromado" },
                    { label: "Altura", value: "165 mm" },
                    { label: "Alcance", value: "120 mm" },
                    { label: "Presión mínima", value: "0.5 bar" },
                    { label: "Presión máxima", value: "5 bar" },
                    { label: "Alimentación", value: "Pilas / Red 230V" },
                    { label: "Caudal", value: "5 L/min (ECO)" },
                    { label: "Certificaciones", value: "CE, ACS, NF" },
                  ].map((spec) => (
                    <div 
                      key={spec.label}
                      className="flex justify-between py-3 border-b border-border"
                    >
                      <span className="text-muted-foreground">{spec.label}</span>
                      <span className="font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="section-py bg-secondary">
          <div className="container-presto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl mb-4">
                Productos Relacionados
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Completa tu proyecto con nuestra selección de productos complementarios
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedProducts.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link 
                    to={`/producto/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="group block"
                  >
                    <div className="aspect-product bg-muted mb-6 overflow-hidden">
                      <img 
                        src={productImages[index % productImages.length]} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground tracking-elegant uppercase mb-2">
                      {product.category}
                    </p>
                    <h3 className="font-display text-xl mb-2 group-hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                    <p className="font-medium">{product.price}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductPage;
