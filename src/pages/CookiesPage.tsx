import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const CookiesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <section className="container-presto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-display mb-10">Política de Cookies</h1>

            <div className="prose prose-lg max-w-none text-foreground space-y-8 text-sm leading-relaxed">
              <section>
                <h2 className="font-display text-2xl mb-4">¿Qué son las cookies?</h2>
                <p>Este sitio web puede utilizar cookies técnicas (pequeños archivos de información que el servidor envía al ordenador de quien accede a la página) para llevar a cabo determinadas funciones que son consideradas imprescindibles para el correcto funcionamiento y visualización del sitio. Las cookies utilizadas tienen, en todo caso, carácter temporal, con la única finalidad de hacer más eficaz la navegación, y desaparecen al terminar la sesión del usuario. En ningún caso, estas cookies proporcionan por sí mismas datos de carácter personal y no se utilizarán para la recogida de los mismos.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl mb-4">Uso de cookies</h2>
                <p>Mediante el uso de cookies también es posible que el servidor donde se encuentra la web reconozca el navegador utilizado por el usuario con la finalidad de que la navegación sea más sencilla, permitiendo, por ejemplo, el acceso de los usuarios que se hayan registrado previamente a las áreas, servicios, promociones o concursos reservados exclusivamente a ellos sin tener que registrarse en cada visita.</p>
                <p>También se pueden utilizar para medir la audiencia, parámetros de tráfico, controlar el progreso y número de entradas, etc., siendo en estos casos cookies prescindibles técnicamente, pero beneficiosas para el usuario. Este sitio web no instalará cookies prescindibles sin el consentimiento previo del usuario.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl mb-4">Configuración del navegador</h2>
                <p>El usuario tiene la posibilidad de configurar su navegador para ser alertado de la recepción de cookies y para impedir su instalación en su equipo. Por favor, consulte las instrucciones de su navegador para ampliar esta información.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl mb-4">Datos de contacto</h2>
                <p><strong>PRESTO IBERICA SA</strong><br />
                C/ Príncipe De Vergara, 13 - 28001 Madrid (Madrid)<br />
                E-mail: <a href="mailto:info@prestoiberica.com" className="text-accent hover:underline">info@prestoiberica.com</a><br />
                Teléfono: 915 782 575</p>
              </section>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CookiesPage;
