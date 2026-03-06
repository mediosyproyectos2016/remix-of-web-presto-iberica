import { useEffect, useState } from "react";

export type ProyectosSection = "intro" | "casos" | "sostenible" | "expertos" | "cta";

const sections: { id: ProyectosSection; label: string }[] = [
  { id: "intro", label: "Intro" },
  { id: "casos", label: "Casos de Éxito" },
  { id: "sostenible", label: "Sostenible" },
  { id: "expertos", label: "Expertos" },
  { id: "cta", label: "CTA Area Proyectos/Especializ" },
];

export const ProyectosSidebar = () => {
  const [active, setActive] = useState<ProyectosSection>("intro");

  useEffect(() => {
    const handleScroll = () => {
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(`proyectos-${section.id}`);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(section.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: ProyectosSection) => {
    const el = document.getElementById(`proyectos-${id}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <aside className="hidden lg:block w-[280px] shrink-0 border-r border-border bg-secondary/30 p-8 sticky top-0 h-screen overflow-auto">
      <h2 className="font-display text-xl text-primary font-semibold mb-6 tracking-wide uppercase">
        Proyectos
      </h2>
      <nav className="space-y-1">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className={`block w-full text-left px-4 py-3 text-sm transition-all duration-300 border-l-2 ${
              active === s.id
                ? "border-primary text-primary font-medium bg-primary/5"
                : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
            }`}
          >
            {s.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};
