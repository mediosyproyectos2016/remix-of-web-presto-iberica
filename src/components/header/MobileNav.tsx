import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";

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
  { label: "Tecnologías", href: "/tecnologias" },
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
          { label: "Certificaciones", href: "/certificaciones" },
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
  { label: "Inspiración", href: "/novedades" },
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

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) setExpandedItem(null);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-[60] bg-background">
      <nav className="h-full overflow-y-auto px-6 py-6">
        {menuItems.map((item) => {
          const isExpanded = expandedItem === item.label;

          return (
            <div key={item.label} className="border-b border-border/50">
              {item.href ? (
                <Link
                  to={item.href}
                  className="flex items-center justify-between py-4 text-lg font-display text-foreground"
                  onClick={onClose}
                >
                  {item.label}
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </Link>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => setExpandedItem(isExpanded ? null : item.label)}
                    className="flex items-center justify-between w-full py-4 text-lg font-display text-foreground"
                    aria-expanded={isExpanded}
                    aria-controls={`submenu-${item.label}`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                    />
                  </button>

                  <div
                    id={`submenu-${item.label}`}
                    className="grid transition-[grid-template-rows,opacity] duration-300 ease-out"
                    style={{ gridTemplateRows: isExpanded ? "1fr" : "0fr", opacity: isExpanded ? 1 : 0 }}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-4">
                        {item.submenu?.map((section) => (
                          <div key={section.title} className="mb-4 pl-4">
                            <h4 className="font-medium text-sm text-primary mb-2">{section.title}</h4>
                            <ul className="space-y-2 pl-4 border-l border-border/50">
                              {section.items.map((subItem) => (
                                <li key={subItem.label}>
                                  <Link
                                    to={subItem.href}
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    onClick={onClose}
                                  >
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}

        <div className="mt-8 pt-6 border-t border-border">
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <a href="tel:+34915782575" className="hover:text-foreground transition-colors">
              91 578 25 75
            </a>
            <a href="mailto:info@prestoiberica.com" className="hover:text-foreground transition-colors">
              info@prestoiberica.com
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};
