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
              <p>La presente política tiene como finalidad definir el uso de cookies de la página web <a href="https://www.prestoiberica.com/" className="text-accent hover:underline">https://www.prestoiberica.com/</a>, así como facilitar información a los usuarios y visitantes de la misma en relación al uso de cookies y los medios de configuración de sus navegadores.</p>
              <p>La utilización de los servicios ofrecidos por https://www.prestoiberica.com/, supondrá la aceptación plena y sin reservas de esta política de uso de cookies.</p>
              <p>PRESTO IBÉRICA, S.A. podrá recoger información a través de archivos como cookies o ficheros log sobre la navegación de los usuarios por la web. Estos dispositivos se asocian exclusivamente a un único usuario y a su propio dispositivo de acceso.</p>

              <section>
                <h2 className="font-display text-2xl mb-4">1. ¿Qué es una Cookie?</h2>
                <p>Las cookies son pequeños archivos de información que se descargan en el dispositivo del usuario al visitar un sitio web. Las "cookies" constituyen una herramienta empleada por los servidores Web para almacenar y recuperar información acerca de sus usuarios. Son archivos de texto que algunos servidores piden al navegador que escriba en su disco duro, con información acerca de su actividad en la página web. Poseen una fecha de caducidad, que puede oscilar desde el tiempo que dure la sesión hasta una fecha futura especificada, a partir de la cual dejan de ser operativas.</p>
                <p>Las cookies son esenciales para el funcionamiento de Internet; no pueden dañar el equipo/dispositivo del usuario y, si se encuentran activadas en la configuración de su navegador, nos ayudan a identificar y resolver posibles errores de funcionamiento de https://www.prestoiberica.com/.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl mb-4">2. Tipos de Cookies</h2>
                <p>Las cookies se dividen en varios tipos de clasificaciones: por quién es el que utiliza dichas cookies, por la finalidad de su uso y por el plazo de tiempo que permanecen activadas.</p>

                <h3 className="font-display text-lg mt-6 mb-3">a) Por quién es el propietario, se clasifican en:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Cookies propias:</strong> Aquellas que enviamos a su ordenador o terminal desde nuestra página web.</li>
                  <li><strong>Cookies de tercero:</strong> Aquellas que se envían a su ordenador o terminal desde un dominio o una página web que no es gestionada por nosotros, sino por otra entidad que trata los datos obtenidos a través de las cookies.</li>
                </ul>

                <h3 className="font-display text-lg mt-6 mb-3">b) Por la finalidad, se clasifican en:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Cookies funcionales:</strong> Son aquellas que permiten al usuario la navegación a través de una página web y la utilización de las diferentes opciones o servicios que en ella existan.</li>
                  <li><strong>Cookies de personalización:</strong> Son aquellas que permiten al usuario acceder al servicio con algunas características generales predefinidas en función de una serie de criterios en el terminal del usuario, como por ejemplo, el idioma, el tipo de navegador a través del cual accede al servicio, la configuración regional desde donde accede al servicio, etc.</li>
                  <li><strong>Cookies de análisis:</strong> Son aquellas que, bien tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización que hacen los usuarios de nuestra web. Para ello analizamos la navegación en nuestra página web con el fin de mejorar la oferta de productos o servicios que ofrecemos.</li>
                  <li><strong>Cookies de publicidad comportamental:</strong> Son aquellas que almacenan información del comportamiento de los usuarios obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para mostrar publicidad en función del mismo.</li>
                </ul>

                <h3 className="font-display text-lg mt-6 mb-3">c) Por la permanencia, se clasifican en:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Cookies de Sesión:</strong> Son aquellas diseñadas para recabar y almacenar datos mientras el usuario accede a una página web. Desaparecen cuando el usuario finaliza la sesión.</li>
                  <li><strong>Cookies Persistentes:</strong> Son aquellas en las que los datos siguen almacenados en el terminal, y pueden ser accedidos y tratados durante un periodo definido por el responsable de la cookie, que puede ir de unos minutos a varios años.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl mb-4">3. Uso de Cookies por parte de https://www.prestoiberica.com/</h2>
                <p>PRESTO IBÉRICA, S.A. utiliza en su página web https://www.prestoiberica.com/ cookies funcionales, necesarias para mostrar correctamente la página web y garantizar el correcto funcionamiento de la misma, y cookies analíticas, que se utilizan para analizar el comportamiento de los usuarios de forma agregada y anónima, incluyendo el número de visitantes a la web y a diferentes páginas internas, la procedencia de las visita, día y hora, plataforma o palabras de búsqueda que utiliza un usuario para encontrar su contenido deseado.</p>
                <p>Las finalidades para las cuales utilizamos las cookies son las siguientes:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Para personalizar la navegación del usuario, reconocer su idioma y equilibrar la carga de la página web.</li>
                  <li>Para poder introducir mejoras en el sitio web y saber qué contenido o diseño es más relevante para el usuario.</li>
                </ul>
                <p>PRESTO IBÉRICA, S.A. no puede leer las cookies implementadas en el disco duro del equipo/terminal del usuario desde otros Servidores web distintos al suyo.</p>
                <p>En la siguiente tabla puede consultar las cookies utilizadas en este sitio web, su finalidad, si es propia o de terceros y su duración.</p>

                <div className="overflow-x-auto mt-6">
                  <table className="w-full border-collapse border border-border text-sm">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border px-4 py-3 text-left font-medium">Cookie</th>
                        <th className="border border-border px-4 py-3 text-left font-medium">Tipo</th>
                        <th className="border border-border px-4 py-3 text-left font-medium">Finalidad</th>
                        <th className="border border-border px-4 py-3 text-left font-medium">Propia/Terceros</th>
                        <th className="border border-border px-4 py-3 text-left font-medium">Duración</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border px-4 py-3 text-muted-foreground" colSpan={5}>
                          Información pendiente de completar con las cookies implementadas en la web.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="font-display text-2xl mb-4">4. Uso de Cookies de Analíticas de Google Analytics</h2>
                <p>La página web https://www.prestoiberica.com/ utiliza cookies analíticas de Google Analytics (1600 Amphitheatre Parkway, Mountain View, California, CA 94043, Estados Unidos). Estas cookies no recopilan información personal que identifique a un visitante. Toda la información que recopilan estas cookies se acumula y, por lo tanto, es anónima. Solo se usa para mejorar el funcionamiento del sitio.</p>
                <p>Puede encontrar más información sobre las cookies de Google Analytics en:</p>
                <ul className="list-disc pl-5">
                  <li><a href="https://policies.google.com/technologies/cookies?hl=es" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">https://policies.google.com/technologies/cookies?hl=es</a></li>
                </ul>
                <p>Puede evitar la utilización de Google Analytics en relación con su uso de https://www.prestoiberica.com/ al descargar e instalar el complemento de navegador disponible a través de este enlace:</p>
                <ul className="list-disc pl-5">
                  <li><a href="https://tools.google.com/dlpage/gaoptout?hl=es" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">https://tools.google.com/dlpage/gaoptout?hl=es</a></li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl mb-4">5. Configuración de las Cookies</h2>
                <p>El usuario puede bloquear las Cookies a través de las herramientas de configuración del navegador, o bien, puede configurar su navegador para que le avise cuando un servidor quiera guardar una Cookie.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Si utiliza <strong>Microsoft Internet Explorer</strong>, encontrará la opción en el menú Herramientas &gt; Opciones de Internet &gt; Privacidad &gt; Configuración.</li>
                  <li>Si utiliza <strong>Firefox</strong>, encontrará la opción en el menú Herramientas &gt; Opciones &gt; Privacidad &gt; Cookies.</li>
                  <li>Si utiliza <strong>Chrome</strong>, en la sección de Opciones &gt; Opciones avanzadas &gt; Privacidad.</li>
                  <li>Si utiliza <strong>Opera</strong>, en la opción de Seguridad y Privacidad, podrá configurar el navegador.</li>
                  <li>Si utiliza <strong>Safari</strong> encontrará la opción en el menú Preferencias/Privacidad.</li>
                </ul>
                <p className="mt-4">Desde el banner de cookies que le aparece al acceder a la web, tiene la posibilidad de ejercer su derecho a bloquear, eliminar y rechazar el uso de Cookies.</p>
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
