import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const ProyectosCTA = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: handle form submission
    console.log("Form submitted:", form);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto text-center"
    >
      <span className="text-xs tracking-luxury uppercase text-muted-foreground block mb-3">
        Atención Personalizada
      </span>
      <h2 className="font-display text-2xl md:text-3xl mb-2">
        Contacta con el Departamento de Proyectos
      </h2>
      <p className="text-muted-foreground text-sm mb-10">
        Escríbenos a{" "}
        <a href="mailto:proyectos@prestoiberica.com" className="text-primary hover:text-accent transition-colors">
          proyectos@prestoiberica.com
        </a>{" "}
        o rellena el siguiente formulario
      </p>

      <form onSubmit={handleSubmit} className="space-y-0 text-left">
        <input
          type="text"
          placeholder="Nombre*"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="input-elegant"
        />
        <input
          type="email"
          placeholder="Correo electrónico*"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="input-elegant"
        />
        <textarea
          placeholder="Mensaje"
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="input-elegant resize-y"
        />
        <div className="pt-6 text-center">
          <button type="submit" className="btn-primary-elegant">
            Enviar mensaje
            <ArrowRight className="ml-2 w-4 h-4 inline" />
          </button>
        </div>
      </form>
    </motion.div>
  );
};
