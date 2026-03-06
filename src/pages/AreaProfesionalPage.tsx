import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Lock, User, Mail, Building2, ArrowRight, FileText, Download, Headphones } from "lucide-react";
import { useState } from "react";

const benefits = [
  {
    icon: FileText,
    title: "Documentación Técnica Exclusiva",
    description: "Accede a fichas técnicas avanzadas, manuales de instalación y especificaciones detalladas.",
  },
  {
    icon: Download,
    title: "Descargas Ilimitadas",
    description: "BIM, CAD, renders 3D y toda la documentación que necesitas para tus proyectos.",
  },
  {
    icon: Headphones,
    title: "Soporte Prioritario",
    description: "Línea directa con nuestro equipo técnico para resolver tus consultas.",
  },
];

const AreaProfesionalPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container-presto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-accent font-medium tracking-wider uppercase text-sm">
                Profesionales
              </span>
              <h1 className="text-4xl md:text-5xl font-display mt-4 mb-6">
                Área Profesional
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Espacio exclusivo para arquitectos, ingenieros, instaladores y 
                profesionales del sector. Accede a herramientas y recursos 
                diseñados para facilitar tu trabajo.
              </p>

              <div className="space-y-6 mb-8">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-muted/30 rounded-xl p-6">
                <p className="text-sm text-muted-foreground">
                  ¿Necesitas ayuda con tu registro? Contacta con nuestro equipo 
                  en <a href="mailto:profesionales@prestoiberica.com" className="text-primary">profesionales@prestoiberica.com</a>
                </p>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-muted/30 rounded-2xl p-8"
            >
              {/* Toggle */}
              <div className="flex bg-muted rounded-lg p-1 mb-8">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-3 rounded-md text-sm font-medium transition-colors ${
                    isLogin ? 'bg-background shadow-sm' : 'text-muted-foreground'
                  }`}
                >
                  Iniciar Sesión
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-3 rounded-md text-sm font-medium transition-colors ${
                    !isLogin ? 'bg-background shadow-sm' : 'text-muted-foreground'
                  }`}
                >
                  Registrarse
                </button>
              </div>

              {isLogin ? (
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="email"
                        placeholder="tu@email.com"
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Contraseña</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 text-sm">
                      <input type="checkbox" className="rounded border-border" />
                      Recordarme
                    </label>
                    <a href="#" className="text-sm text-primary hover:underline">
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  >
                    Acceder
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nombre</label>
                      <input
                        type="text"
                        placeholder="Tu nombre"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Apellidos</label>
                      <input
                        type="text"
                        placeholder="Tus apellidos"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Empresa</label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Nombre de tu empresa"
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email profesional</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="email"
                        placeholder="tu@empresa.com"
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Perfil profesional</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20">
                      <option value="">Selecciona tu perfil</option>
                      <option value="arquitecto">Arquitecto</option>
                      <option value="ingeniero">Ingeniero</option>
                      <option value="instalador">Instalador</option>
                      <option value="distribuidor">Distribuidor</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Contraseña</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="password"
                        placeholder="Mínimo 8 caracteres"
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <label className="flex items-start gap-2 text-sm">
                    <input type="checkbox" className="rounded border-border mt-0.5" />
                    <span className="text-muted-foreground">
                      Acepto la <a href="#" className="text-primary hover:underline">política de privacidad</a> y 
                      los <a href="#" className="text-primary hover:underline">términos de uso</a>
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  >
                    Crear cuenta
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AreaProfesionalPage;
