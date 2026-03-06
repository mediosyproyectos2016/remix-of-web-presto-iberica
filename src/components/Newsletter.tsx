import { useState } from "react";
import { ArrowRight } from "lucide-react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      window.location.href = `mailto:info@prestoiberica.com?subject=Suscripción Newsletter&body=Hola, me gustaría suscribirme a la newsletter con el email: ${encodeURIComponent(email)}`;
      setEmail("");
    }
  };

  return (
    <section className="bg-primary text-primary-foreground overflow-hidden">
      <div className="container-presto py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs tracking-luxury uppercase text-accent block mb-4">
              Newsletter
            </span>
            <h2 className="font-display text-3xl md:text-4xl leading-tight mb-4">
              Mantente al día con las últimas novedades
            </h2>
            <div className="accent-line mb-6" />
            <p className="text-white/60 leading-relaxed">
              Recibe las últimas novedades, lanzamientos de productos y 
              contenido exclusivo directamente en tu correo.
            </p>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white text-sm tracking-wide placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-accent text-accent-foreground text-xs font-medium tracking-elegant uppercase hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
              >
                Suscribirse
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            <p className="text-xs text-white/40 mt-4">
              Al suscribirte, aceptas nuestra{" "}
              <a href="/privacidad" className="underline hover:text-white/60 transition-colors">
                política de privacidad
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
