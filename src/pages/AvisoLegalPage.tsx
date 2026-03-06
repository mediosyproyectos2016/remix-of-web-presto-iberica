import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const AvisoLegalPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <section className="container-presto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-display mb-10">Aviso Legal</h1>

            <div className="prose prose-lg max-w-none text-foreground space-y-8 text-sm leading-relaxed">
              <section>
                <h2 className="font-display text-2xl mb-4">Ley de los Servicios de la Sociedad de la Información (LSSI)</h2>
                <p>PRESTO IBERICA SA, responsable del sitio web, en adelante RESPONSABLE, pone a disposición de los usuarios el presente documento, con el que pretende dar cumplimiento a las obligaciones dispuestas en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSICE), BOE N.º 166, así como informar a todos los usuarios del sitio web respecto a cuáles son las condiciones de uso.</p>
                <p>Toda persona que acceda a este sitio web asume el papel de usuario, comprometiéndose a la observancia y cumplimiento riguroso de las disposiciones aquí dispuestas, así como a cualquier otra disposición legal que fuera de aplicación.</p>
                <p>PRESTO IBERICA SA se reserva el derecho de modificar cualquier tipo de información que pudiera aparecer en el sitio web, sin que exista obligación de preavisar o poner en conocimiento de los usuarios dichas obligaciones, entendiéndose como suficiente la publicación en el sitio web de PRESTO IBERICA SA.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl mb-4">1. Datos Identificativos</h2>
                <ul className="list-none space-y-1 pl-0">
                  <li><strong>Nombre de dominio:</strong> prestoiberica.com</li>
                  <li><strong>Nombre comercial:</strong> PRESTOIBERICA</li>
                  <li><strong>Denominación social:</strong> PRESTO IBERICA SA</li>
                  <li><strong>NIF:</strong> A28576197</li>
                  <li><strong>Domicilio social:</strong> C/ Príncipe De Vergara 13, 28001 Madrid (MADRID)</li>
                  <li><strong>Teléfono:</strong> 915 782 575</li>
                  <li><strong>E-mail:</strong> info@prestoiberica.com</li>
                </ul>
                <p className="mt-3 text-muted-foreground">Presto Ibérica, S.A., CIF A28576197. Inscripción en el registro mercantil de Madrid: Tomo 7.836 Folio 51 Hoja M-126.634 Inscripción 1ª</p>
              </section>

              <section>
                <h2 className="font-display text-2xl mb-4">2. Derechos de Propiedad Intelectual e Industrial</h2>
                <p>El sitio web, incluyendo a título enunciativo pero no limitativo su programación, edición, compilación y demás elementos necesarios para su funcionamiento, los diseños, logotipos, texto y/o gráficos, son propiedad del RESPONSABLE o, si es el caso, dispone de licencia o autorización expresa por parte de los autores. Todos los contenidos del sitio web se encuentran debidamente protegidos por la normativa de propiedad intelectual e industrial, así como inscritos en los registros públicos correspondientes.</p>
                <p>Independientemente de la finalidad para la que fueran destinados, la reproducción total o parcial, uso, explotación, distribución y comercialización, requiere en todo caso la autorización escrita previa por parte del RESPONSABLE. Cualquier uso no autorizado previamente se considera un incumplimiento grave de los derechos de propiedad intelectual o industrial del autor.</p>
                <p>Los diseños, logotipos, texto y/o gráficos ajenos al RESPONSABLE y que pudieran aparecer en el sitio web, pertenecen a sus respectivos propietarios, siendo ellos mismos responsables de cualquier posible controversia que pudiera suscitarse respecto a los mismos. El RESPONSABLE autoriza expresamente a que terceros puedan redirigir directamente a los contenidos concretos del sitio web, y en todo caso redirigir al sitio web principal de prestoiberica.com.</p>
                <p>Para realizar cualquier tipo de observación respecto a posibles incumplimientos de los derechos de propiedad intelectual o industrial, así como sobre cualquiera de los contenidos del sitio web, puede hacerlo a través del correo electrónico info@prestoiberica.com.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl mb-4">3. Exención de Responsabilidades</h2>
                <p>El RESPONSABLE se exime de cualquier tipo de responsabilidad derivada de la información publicada en su sitio web siempre que esta información haya sido manipulada o introducida por un tercero ajeno al mismo.</p>

                <h3 className="font-display text-xl mt-6 mb-3">Uso de Cookies</h3>
                <p>Este sitio web puede utilizar cookies técnicas (pequeños archivos de información que el servidor envía al ordenador de quien accede a la página) para llevar a cabo determinadas funciones que son consideradas imprescindibles para el correcto funcionamiento y visualización del sitio. Las cookies utilizadas tienen, en todo caso, carácter temporal, con la única finalidad de hacer más eficaz la navegación, y desaparecen al terminar la sesión del usuario. En ningún caso, estas cookies proporcionan por sí mismas datos de carácter personal y no se utilizarán para la recogida de los mismos.</p>
                <p>Mediante el uso de cookies también es posible que el servidor donde se encuentra la web reconozca el navegador utilizado por el usuario con la finalidad de que la navegación sea más sencilla, permitiendo, por ejemplo, el acceso de los usuarios que se hayan registrado previamente a las áreas, servicios, promociones o concursos reservados exclusivamente a ellos sin tener que registrarse en cada visita. También se pueden utilizar para medir la audiencia, parámetros de tráfico, controlar el progreso y número de entradas, etc., siendo en estos casos cookies prescindibles técnicamente, pero beneficiosas para el usuario. Este sitio web no instalará cookies prescindibles sin el consentimiento previo del usuario.</p>
                <p>El usuario tiene la posibilidad de configurar su navegador para ser alertado de la recepción de cookies y para impedir su instalación en su equipo. Por favor, consulte las instrucciones de su navegador para ampliar esta información.</p>

                <h3 className="font-display text-xl mt-6 mb-3">Política de enlaces</h3>
                <p>Desde el sitio web, es posible que se redirija a contenidos de terceros sitios web. Dado que el RESPONSABLE no puede controlar siempre los contenidos introducidos por terceros en sus respectivos sitios web, no asume ningún tipo de responsabilidad respecto a dichos contenidos. En todo caso, procederá a la retirada inmediata de cualquier contenido que pudiera contravenir la legislación nacional o internacional, la moral o el orden público, procediendo a la retirada inmediata de la redirección a dicho sitio web, poniendo en conocimiento de las autoridades competentes el contenido en cuestión.</p>
                <p>El RESPONSABLE no se hace responsable de la información y contenidos almacenados, a título enunciativo pero no limitativo, en foros, chats, generadores de blogs, comentarios, redes sociales o cualquier otro medio que permita a terceros publicar contenidos de forma independiente en la página web del RESPONSABLE. Sin embargo, y en cumplimiento de lo dispuesto en los artículos 11 y 16 de la LSSICE, se pone a disposición de todos los usuarios, autoridades y fuerzas de seguridad, colaborando de forma activa en la retirada o, en su caso, bloqueo de todos aquellos contenidos que puedan afectar o contravenir la legislación nacional o internacional, los derechos de terceros o la moral y el orden público.</p>
                <p>Este sitio web se ha revisado y probado para que funcione correctamente. En principio, puede garantizarse el correcto funcionamiento los 365 días del año, 24 horas al día. Sin embargo, el RESPONSABLE no descarta la posibilidad de que existan ciertos errores de programación, o que acontezcan causas de fuerza mayor, catástrofes naturales, huelgas o circunstancias semejantes que hagan imposible el acceso a la página web.</p>

                <h3 className="font-display text-xl mt-6 mb-3">Direcciones IP</h3>
                <p>Los servidores del sitio web podrán detectar de manera automática la dirección IP y el nombre de dominio utilizados por el usuario. Una dirección IP es un número asignado automáticamente a un ordenador cuando este se conecta a Internet. Toda esta información se registra en un fichero de actividad del servidor que permite el posterior procesamiento de los datos con el fin de obtener mediciones únicamente estadísticas que permitan conocer el número de impresiones de páginas, el número de visitas realizadas a los servidores web, el orden de visitas, el punto de acceso, etc.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl mb-4">4. Ley Aplicable y Jurisdicción</h2>
                <p>Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las actividades en él desarrolladas, será de aplicación la legislación española, a la que se someten expresamente las partes, siendo competentes para la resolución de todos los conflictos derivados o relacionados con su uso los Juzgados y Tribunales del domicilio del USUARIO o el lugar del cumplimiento de la obligación.</p>
              </section>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AvisoLegalPage;
