import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqCategories } from "@/data/faqData";

interface FAQSectionProps {
  onSwitchToContact: () => void;
}

export const FAQSection = ({ onSwitchToContact }: FAQSectionProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].id);

  const currentCategory = faqCategories.find((cat) => cat.id === activeCategory);

  const filteredQuestions = searchQuery.trim()
    ? faqCategories.flatMap((cat) =>
        cat.questions.filter(
          (q) =>
            q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.a.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : null;

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <span className="text-accent font-medium tracking-wider uppercase text-sm">Soporte</span>
        <h1 className="text-4xl md:text-5xl font-display mt-4 mb-4">Preguntas Frecuentes</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Encuentra respuestas a las preguntas más comunes sobre nuestros productos, instalación y mantenimiento.
        </p>
      </motion.div>

      {/* Search */}
      <div className="relative max-w-2xl mb-10">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Buscar en las preguntas frecuentes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-4 border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-lg"
        />
      </div>

      {filteredQuestions ? (
        <div className="space-y-4 mb-16">
          <h2 className="text-xl font-display mb-4">Resultados ({filteredQuestions.length})</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {filteredQuestions.map((faq, idx) => (
              <AccordionItem key={idx} value={`search-${idx}`} className="border border-border px-6 data-[state=open]:bg-muted/30">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">{faq.q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          <div className="lg:col-span-1">
            <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
              {faqCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-3 text-left whitespace-nowrap transition-colors text-sm ${
                    activeCategory === cat.id
                      ? "bg-foreground text-background font-bold"
                      : "hover:bg-muted text-muted-foreground"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </nav>
          </div>
          <div className="lg:col-span-3">
            {currentCategory && (
              <motion.div key={currentCategory.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <h2 className="text-2xl font-display mb-6">{currentCategory.name}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {currentCategory.questions.map((faq, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`} className="border border-border px-6 data-[state=open]:bg-muted/30">
                      <AccordionTrigger className="text-left hover:no-underline py-4">
                        <span className="font-medium">{faq.q}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">{faq.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            )}
          </div>
        </div>
      )}

      {/* Contact CTA */}
      <div className="bg-muted/50 p-8 md:p-12 text-center">
        <MessageCircle className="w-12 h-12 text-foreground mx-auto mb-4" />
        <h2 className="text-2xl font-display mb-4">¿No encuentras tu respuesta?</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Nuestro equipo de soporte está disponible para ayudarte con cualquier duda o consulta que tengas.
        </p>
        <button onClick={onSwitchToContact} className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors">
          Contactar con soporte
        </button>
      </div>
    </div>
  );
};
