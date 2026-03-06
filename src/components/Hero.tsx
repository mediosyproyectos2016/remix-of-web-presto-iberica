import { useState, useEffect, useCallback } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logoPresto from "@/assets/logo-presto.png";
import ambienteColectividades from "@/assets/ambiente-22.jpg";
import ambiente5 from "@/assets/ambiente-5.jpg";
import ambienteAyudas from "@/assets/ambiente-12.jpg";
import heroUnion from "@/assets/hero-union-new.png";
import heroCatalogo from "@/assets/hero-catalogo-2026.png";
import heroSinLimites from "@/assets/hero-sin-limites-new.png";
import heroGota from "@/assets/hero-gota.jpg";

interface Slide {
  id: string;
  bgImage: string;
  title: string;
  subtitle?: string;
  body?: string;
  cta: string;
  ctaLink: string;
  showLogo?: boolean;
  overlayOpacity?: string;
  isStatic?: boolean;
  staticBg?: string;
}

const slides: Slide[] = [
  {
    id: "union",
    bgImage: heroUnion,
    showLogo: true,
    overlayOpacity: "bg-black/30",
    title: "La fuerza de nuestra unión",
    body: "Esta fusión no borra nuestra historia; la amplifica. Evolucionamos hacia una marca única, sólida y reconocible que integra la fiabilidad técnica de siempre con una visión orientada a la excelencia.",
    cta: "Descubre más",
    ctaLink: "/empresa",
  },
  {
    id: "catalogo",
    bgImage: heroCatalogo,
    title: "Presto Ibérica presenta el catálogo 2026",
    body: "Descubre todas las novedades, soluciones y productos que definen el futuro de la grifería profesional.",
    cta: "Descubre más",
    ctaLink: "/catalogos",
  },
  {
    id: "tecnologias",
    bgImage: heroGota,
    title: "Líderes en tecnologías para el ahorro de agua",
    body: "Ya conseguimos optimizar el ahorro de agua y energía.\nYa aseguramos la higiene y la salubridad.\nYa inventamos la customización para crear espacios únicos.\nY ahora, seguimos fabricando el agua de tu futuro.\nLa grandeza la llevamos dentro.",
    cta: "Descubre más",
    ctaLink: "/tecnologias",
  },
  {
    id: "sinlimites",
    bgImage: heroSinLimites,
    title: "Presto Sin Límites",
    body: "Múltiples opciones de personalización y combinación de elementos para crear grifería sin límites. Consulta infinitas posibilidades.",
    cta: "Descubre más",
    ctaLink: "/presto-custom",
  },
];

const INTERVAL = 6000;

export const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const [resetKey, setResetKey] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
      setResetKey((k) => k + 1);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setResetKey((k) => k + 1);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [next, resetKey]);

  const slide = slides[current];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={slide.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slide.bgImage}
            alt={slide.title || slide.id}
            className="w-full h-full object-cover"
          />
          {!slide.isStatic && (
            <>
              <div className={`absolute inset-0 ${slide.staticBg ? "bg-gradient-to-r from-white/90 via-white/60 to-transparent" : slide.overlayOpacity || "bg-black/30"}`} />
              <div className="absolute inset-0 flex flex-col justify-center">
                <div className="container-presto">
                  <div className={`max-w-2xl mx-auto text-center ${slide.staticBg ? "text-foreground" : "text-white"}`}>
                    {slide.showLogo && (
                      <img
                        src={logoPresto}
                        alt="Presto"
                        className="h-12 sm:h-16 md:h-24 mb-4 sm:mb-6 md:mb-8 object-contain mx-auto"
                      />
                    )}
                    <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6 uppercase">
                      {slide.title}
                    </h1>
                    {slide.subtitle && (
                      <p className="text-xs sm:text-sm tracking-widest uppercase opacity-70 mb-3 sm:mb-4">
                        {slide.subtitle}
                      </p>
                    )}
                    {slide.body && (
                      <div className="text-sm sm:text-base md:text-lg opacity-90 mb-6 sm:mb-8 leading-relaxed whitespace-pre-line line-clamp-4 sm:line-clamp-none">
                        {slide.body}
                      </div>
                    )}
                    {slide.cta && (
                      <Link
                        to={slide.ctaLink}
                        className="inline-flex items-center text-xs sm:text-sm font-bold tracking-widest uppercase hover:opacity-80 transition-opacity"
                      >
                        {slide.cta}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
          {slide.isStatic && (
            <Link to={slide.ctaLink} className="absolute inset-0 z-[1]" aria-label={slide.id} />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white mix-blend-difference" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white mix-blend-difference" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2 sm:gap-3">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/60"
            }`}
            style={{ mixBlendMode: "difference" }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
