import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { MegaMenu } from "./MegaMenu";

const menuItems = [
  {
    label: "Personalización",
    submenu: [
      {
        title: "Personalización",
        items: [
          { label: "Intro", href: "/presto-custom" },
          { label: "Acabados", href: "/presto-custom#acabados" },
        ],
      },
    ],
  },
  {
    label: "Tecnologías",
    href: "/tecnologias",
  },
  {
    label: "Productos",
    submenu: [
      {
        title: "Grifería de Colectividades",
        items: [
          { label: "Grifería Electrónica", href: "/categoria/griferia-electronica" },
          { label: "Grifería Temporizada", href: "/categoria/griferia-temporizada" },
          { label: "Grifería Industrial", href: "/categoria/griferia-industrial" },
          { label: "Válvulas", href: "/categoria/valvulas" },
          { label: "Seguridad Temporizada", href: "/categoria/seguridad-temporizada" },
          { label: "Sistemas Anti Legionela", href: "/categoria/antilegionella" },
          { label: "Equipos de Emergencia", href: "/categoria/equipos-emergencia" },
          { label: "Lavacuñas", href: "/categoria/lavacunas" },
        ],
      },
      {
        title: "Grifería Doméstica",
        items: [
          { label: "Baño - Colecciones", href: "/categoria/griferia-bano" },
          { label: "Ducha", href: "/categoria/ducha" },
          { label: "Cocina", href: "/categoria/griferia-cocina" },
          { label: "Multimódulo", href: "/categoria/multimodulo" },
        ],
      },
      {
        title: "Ayudas Técnicas y Equipamientos",
        items: [
          { label: "Grifería Hospitalaria y Gerontológica", href: "/categoria/griferia-hospitalaria" },
          { label: "Ayudas Técnicas", href: "/categoria/ayudas-tecnicas" },
          { label: "Barras de Apoyo", href: "/categoria/barras-apoyo" },
          { label: "Sanitarios PMR", href: "/categoria/sanitarios-pmr" },
          { label: "Sanitarios Acero Inox", href: "/categoria/sanitarios-acero-inox" },
          { label: "Accesorios de Baño", href: "/categoria/accesorios-bano" },
          { label: "Urinarios Secos", href: "/categoria/urinarios-secos" },
        ],
      },
    ],
  },
  {
    label: "Sobre Presto",
    submenu: [
      {
        title: "Empresa",
        items: [
          { label: "Empresa", href: "/empresa" },
          { label: "Noticias - Blog", href: "/blog" },
        ],
      },
    ],
  },
  {
    label: "Proyectos",
    submenu: [
      {
        title: "Referencias",
        items: [
          { label: "Área Proyectos / Especialización", href: "/proyectos#proyectos-area" },
          { label: "Casos de Éxito", href: "/proyectos#proyectos-casos" },
          { label: "Certificaciones Eficientes", href: "/proyectos#proyectos-certificaciones" },
        ],
      },
    ],
  },
  {
    label: "Inspiración",
    href: "/novedades",
  },
  {
    label: "Descargas",
    submenu: [
      {
        title: "Recursos",
        items: [
          { label: "Catálogos", href: "/catalogos" },
          { label: "Documentación Técnica", href: "/descargas" },
          { label: "Certificaciones", href: "/certificaciones" },
        ],
      },
    ],
  },
  {
    label: "Contacto",
    showSocials: true,
    submenu: [
      {
        title: "Atención",
        items: [
          { label: "Asistencia", href: "/contacto" },
          { label: "Preguntas y Respuestas", href: "/contacto?tab=faq" },
          { label: "Localizador de Tiendas", href: "/contacto?tab=localizador" },
          { label: "Mercados", href: "/contacto?tab=mercados" },
          { label: "RRSS", href: "/contacto?tab=rrss" },
        ],
      },
    ],
  },
];

export const DesktopNav = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="hidden lg:flex items-center gap-0">
      {menuItems.map((item) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => item.submenu && setActiveMenu(item.label)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          {item.href ? (
            <Link
              to={item.href}
              className="px-3 xl:px-4 py-6 text-[11px] xl:text-xs font-medium tracking-elegant uppercase text-white/80 hover:text-white transition-colors relative group"
            >
              {item.label}
              <span className="absolute bottom-4 left-4 right-4 h-px bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          ) : (
            <button className="flex items-center gap-1.5 px-3 xl:px-4 py-6 text-[11px] xl:text-xs font-medium tracking-elegant uppercase text-white/80 hover:text-white transition-colors relative group">
              {item.label}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === item.label ? 'rotate-180' : ''}`} />
              <span className="absolute bottom-4 left-4 right-4 h-px bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          )}

          <AnimatePresence>
            {item.submenu && activeMenu === item.label && (
              <MegaMenu 
                sections={item.submenu} 
                onClose={() => setActiveMenu(null)}
                showSocials={(item as any).showSocials}
                footerLink={item.label === "Productos" ? { label: "Ver todos los productos", href: "/productos" } : undefined}
              />
            )}
          </AnimatePresence>
        </div>
      ))}
    </nav>
  );
};
