import { cn } from "@/lib/utils";

export type ContactTab = "asistencia" | "faq" | "localizador" | "mercados" | "rrss";

const tabs: { id: ContactTab; label: string }[] = [
  { id: "asistencia", label: "Asistencia" },
  { id: "faq", label: "Preguntas y Respuestas" },
  { id: "localizador", label: "Localizador de Tiendas" },
  { id: "mercados", label: "Mercados" },
  { id: "rrss", label: "RRSS" },
];

interface ContactSidebarProps {
  activeTab: ContactTab;
  onTabChange: (tab: ContactTab) => void;
}

export const ContactSidebar = ({ activeTab, onTabChange }: ContactSidebarProps) => {
  return (
    <div className="lg:sticky lg:top-32">
      <h2 className="text-2xl font-display text-primary mb-6 uppercase tracking-wider">
        Contacto
      </h2>
      <nav className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "px-4 py-3 text-left whitespace-nowrap transition-colors text-sm font-medium border-l-2",
              activeTab === tab.id
                ? "border-primary text-foreground font-bold bg-muted/30"
                : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
            )}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};
