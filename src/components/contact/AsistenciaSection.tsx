import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, MessageSquare } from "lucide-react";
import { PrivacyInfoTooltip } from "./PrivacyInfoTooltip";

const contactInfo = [
  {
    icon: MapPin,
    title: "Sede Central",
    lines: ["Príncipe de Vergara 13", "28001 Madrid", "España"],
  },
  {
    icon: MapPin,
    title: "Fábrica",
    lines: ["Polígono Industrial", "Torrejón de Ardoz", "Madrid, España"],
  },
  {
    icon: Phone,
    title: "Teléfono",
    lines: ["+34 93 474 15 00", "+34 93 474 15 01 (Fax)"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@prestoiberica.com", "comercial@prestoiberica.com"],
  },
];

const departments = [
  { value: "arquitectura_ingenieria", label: "Arquitectura y/o Ingeniería", email: "proyectos@prestoiberica.com" },
  { value: "constructora", label: "Empresa Constructora", email: "proyectos@prestoiberica.com" },
  { value: "soporte_tecnico", label: "Soporte Técnico", email: "soporte@prestoiberica.com" },
  { value: "organismo_publico", label: "Organismo Público", email: "info@prestoiberica.com" },
  { value: "distribuidor", label: "Distribuidor", email: "ventas@prestoiberica.com" },
  { value: "interiorista", label: "Interiorista", email: "proyectos@prestoiberica.com" },
  { value: "particular", label: "Particular", email: "info@prestoiberica.com" },
  { value: "proveedor", label: "Proveedor", email: "compras@prestoiberica.com" },
  { value: "prensa", label: "Prensa y Comunicación", email: "marketing@prestoiberica.com" },
  { value: "otros", label: "Otros", email: "info@prestoiberica.com" },
];

export const AsistenciaSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    department: "",
    subject: "",
    message: "",
    privacy: false,
    newsletter: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getDestinationEmail = () => {
    const selectedDept = departments.find((d) => d.value === formState.department);
    return selectedDept?.email || "info@prestoiberica.com";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const destinationEmail = getDestinationEmail();
    console.log(`Form submitted to: ${destinationEmail}`, { ...formState, destinationEmail });
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div>
      {/* Hero - Atención al Cliente y Servicio Técnico */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="font-display text-4xl md:text-5xl mb-4">
          Atención al Cliente
          <br />
          y Servicio Técnico
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mb-12">
          Ponemos a tu disposición mediante vía telefónica y correo electrónico a nuestros mejores expertos para servicio pre y post venta. Puedes contactar con nosotros por teléfono, correo electrónico, whatsapp o rellenando el formulario.
        </p>
      </motion.div>

      {/* Two columns: Atención al Cliente + Servicio Técnico */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Atención al Cliente */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-background border border-border p-8"
        >
          <h3 className="font-display text-xl text-primary uppercase tracking-wider text-center mb-4">
            Atención al Cliente
          </h3>
          <p className="text-sm text-muted-foreground text-center mb-2">
            L a J 7:30 a 17:00h - V 7:30 a 14:00h
          </p>
          <p className="text-xs text-muted-foreground text-center mb-6">
            Horario verano julio-agosto
            <br />
            L a V 7:30 a 15:30
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />
              <p className="text-xs uppercase tracking-wider font-medium mb-1">Vía Telefónica</p>
              <a href="tel:+34915782575" className="text-sm text-primary hover:underline">
                (+34) 915 782 575
              </a>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />
              <p className="text-xs uppercase tracking-wider font-medium mb-1">Vía Correo Electrónico</p>
              <a href="mailto:info@prestoiberica.com" className="text-sm text-primary hover:underline">
                info@prestoiberica.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* Servicio Técnico */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-primary text-primary-foreground p-8"
        >
          <h3 className="font-display text-xl uppercase tracking-wider text-center mb-4">
            Servicio Técnico
          </h3>
          <p className="text-sm text-primary-foreground/80 text-center mb-2">
            L a J 7:30 a 17:00h - V 7:30 a 14:00h
          </p>
          <p className="text-xs text-primary-foreground/60 text-center mb-6">
            Horario verano julio-agosto
            <br />
            L a V 7:30 a 15:30
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <MessageSquare className="w-8 h-8 mx-auto mb-3 text-primary-foreground/80" />
              <p className="text-xs uppercase tracking-wider font-medium mb-1">Vía WhatsApp</p>
              <a href="https://wa.me/34683169947" className="text-sm hover:underline">
                683 169 947
              </a>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-3 text-primary-foreground/80" />
              <p className="text-xs uppercase tracking-wider font-medium mb-1">Vía Correo Electrónico</p>
              <a href="mailto:soporte@prestoiberica.com" className="text-sm hover:underline">
                soporte@prestoiberica.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hablemos de tu proyecto */}
      <section className="bg-secondary p-8 md:p-12 mb-16">
        <span className="text-xs tracking-luxury uppercase text-muted-foreground mb-3 block">
          Contacto
        </span>
        <h2 className="font-display text-3xl md:text-4xl mb-4">
          Hablemos de
          <br />
          <span className="italic">tu proyecto</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-8">
          Nuestro equipo de expertos está preparado para ayudarte a encontrar la solución perfecta para tus necesidades.
        </p>

        {/* Info cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactInfo.map((info, index) => (
            <div key={info.title} className="bg-background p-5 border border-border">
              <info.icon className="w-5 h-5 text-accent mb-3" />
              <h4 className="font-display text-sm text-accent mb-2">{info.title}</h4>
              {info.lines.map((line, i) => (
                <p key={i} className="text-xs text-muted-foreground">{line}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Form + Map */}
      <div className="grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center h-full text-center py-16 px-4"
            >
              <div className="w-20 h-20 rounded-full border-2 border-accent flex items-center justify-center mb-8">
                <svg className="w-10 h-10 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className="font-display text-3xl mb-6">Mensaje Enviado</h2>
              <p className="text-muted-foreground max-w-md mb-10">
                Gracias por contactar con nosotros. Nuestro equipo revisará tu mensaje y te responderá en un plazo máximo de 24-48 horas.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormState({ name: "", email: "", phone: "", company: "", department: "", subject: "", message: "", privacy: false, newsletter: false });
                }}
                className="btn-outline-elegant uppercase tracking-wider text-sm px-10 py-4"
              >
                Enviar Otro Mensaje
              </button>
            </motion.div>
          ) : (
            <>
              <h2 className="font-display text-3xl mb-8">Envíanos un Mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-2 block">Nombre completo *</label>
                    <input type="text" id="name" name="name" required value={formState.name} onChange={handleChange} className="input-elegant" placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-2 block">Email *</label>
                    <input type="email" id="email" name="email" required value={formState.email} onChange={handleChange} className="input-elegant" placeholder="tu@email.com" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium mb-2 block">Teléfono</label>
                    <input type="tel" id="phone" name="phone" value={formState.phone} onChange={handleChange} className="input-elegant" placeholder="+34 600 000 000" />
                  </div>
                  <div>
                    <label htmlFor="company" className="text-sm font-medium mb-2 block">Empresa</label>
                    <input type="text" id="company" name="company" value={formState.company} onChange={handleChange} className="input-elegant" placeholder="Nombre de tu empresa" />
                  </div>
                </div>
                <div>
                  <label htmlFor="department" className="text-sm font-medium mb-2 block">Tipo de contacto *</label>
                  <select id="department" name="department" required value={formState.department} onChange={handleChange} className="input-elegant cursor-pointer bg-background">
                    <option value="">Selecciona tu perfil</option>
                    {departments.map((dept) => (
                      <option key={dept.value} value={dept.value}>{dept.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="subject" className="text-sm font-medium mb-2 block">Asunto *</label>
                  <input type="text" id="subject" name="subject" required value={formState.subject} onChange={handleChange} className="input-elegant" placeholder="¿En qué podemos ayudarte?" />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-2 block">Mensaje *</label>
                  <textarea id="message" name="message" required rows={5} value={formState.message} onChange={handleChange} className="input-elegant resize-none" placeholder="Cuéntanos más sobre tu proyecto o consulta..." />
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="privacy" name="privacy" required checked={formState.privacy} onChange={handleChange} className="mt-1" />
                    <label htmlFor="privacy" className="text-sm text-muted-foreground">
                      He leído y acepto la <PrivacyInfoTooltip />, así como la información adicional detallada en la{" "}
                      <a href="/privacidad" className="text-foreground hover:text-accent transition-colors underline">Política de privacidad y protección de datos</a>. *
                    </label>
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="newsletter" name="newsletter" checked={formState.newsletter} onChange={handleChange} className="mt-1" />
                    <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                      Acepto recibir boletines informativos sobre las actividades de PRESTO IBÉRICA, S.A.
                    </label>
                  </div>
                  <p className="text-xs text-muted-foreground italic">* En caso de que no se marque la casilla no se podrá proceder a la gestión de su solicitud.</p>
                </div>
                <button type="submit" disabled={isSubmitting} className="btn-primary-elegant w-full md:w-auto flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Enviar Mensaje
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </motion.div>

        {/* Map + Visit */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="sticky top-32">
            <div className="aspect-[4/3] bg-muted mb-8 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.0!2d-3.685!3d40.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI1JzQ4LjAiTiAzwrA0MScwNi4wIlc!5e0!3m2!1ses!2ses!4v1620000000000!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Presto Ibérica - Madrid"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
