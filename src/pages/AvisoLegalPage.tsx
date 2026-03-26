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
              <p>Le agradecemos que hayas decidido visitarnos. Queremos que su experiencia en nuestra Web sea lo mejor posible.</p>
              <p>Para acceder a nuestros servicios, declara que es mayor de edad y que tiene la capacidad legal suficiente para usar nuestros servicios, de acuerdo con su ley nacional. El acceso y la navegación en el sitio web, o el uso de los servicios del mismo, implican la aceptación expresa e íntegra de todas y cada una de las presentes Condiciones Generales, incluidas tanto las Condiciones Particulares fijadas para ciertas promociones, así como de las Políticas de Privacidad y de las Cookies, relacionadas con la normativa vigente en la materia de Protección de Datos Personales. Por favor, le recomendamos que las lea con atención para saber qué tipo de datos se recogen a través de nuestra Web, con qué finalidades y qué derechos relacionados con ello le conciernen.</p>

              <section>
                <h2 className="font-display text-2xl mb-4">1. Información Legal</h2>
                <p>En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, los datos identificativos del titular del Portal Web son:</p>
                <ul className="list-none space-y-1 pl-0">
                  <li><strong>PRESTO IBÉRICA, S.A.</strong></li>
                  <li>A28576197</li>
                  <li>Calle Príncipe De Vergara, nº 13 – 28001 Madrid</li>
                  <li>Inscripción en el registro mercantil de Madrid: Tomo 7.836 Folio 51 Hoja M-126.634 Inscripción 1ª</li>
                </ul>
                <p className="mt-3">Para cualquier duda o consulta, puede ponerse en contacto con nosotros a través del Telf: 915 782 575 o e-mail: <a href="mailto:info@prestoiberica.com" className="text-accent hover:underline">info@prestoiberica.com</a>.</p>
                <p>El acceso a la Web supone la aceptación expresa del Usuario a las presentes Condiciones Generales de Uso, que podrán ser modificadas total o parcialmente o sustituidas por otras, por su titular y en cualquier momento sin previo aviso. Le recomendamos que acceda a las presentes condiciones de vez en cuando para comprobar sus posibles modificaciones, que se publicarán en el mismo apartado.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl mb-4">2. Condiciones Generales de Uso</h2>
                <p>Las siguientes Condiciones Generales regulan el uso y acceso al portal Web, cuya finalidad es establecer pautas de buen uso y comportamiento de la misma. PRESTO IBÉRICA, S.A. pone a disposición de los usuarios información sobre el uso, los servicios y los contenidos que se alojan en la Web. A través ésta, el Usuario tiene acceso a información sobre productos y servicios específicos, herramientas y aplicaciones.</p>
                <p>Los datos e informaciones sobre productos o servicios, precios y características u otros datos relevantes ofrecidos a través de la página web son realizados, proporcionados y actualizados por proveedores y terceras empresas. PRESTO IBÉRICA, S.A. no es, en ningún caso, responsable de dichos datos e informaciones ni asume ninguna obligación sobre los mismos.</p>
                <p>El Usuario se compromete a hacer un uso adecuado de los contenidos, servicios, aplicaciones y herramientas que están accesibles, con sujeción a la Ley y a las presentes Condiciones Generales de Uso y, en su caso a las Condiciones Particulares que puedan establecerse para el acceso a determinados servicios y aplicaciones, respetando en todo momento a los demás Usuarios de la misma.</p>
                <p>En caso de incumplimiento total y/o parcial por el Usuario de las presentes condiciones Generales de Uso, PRESTO IBÉRICA, S.A. se reserva el derecho de denegar el acceso a la Web, sin necesidad de previo aviso al Usuario.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl mb-4">3. Obligaciones Generales del Usuario</h2>
                <p>El Usuario, al aceptar las presentes condiciones Generales de Uso, se obliga expresamente a:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>No realizar ninguna acción destinada perjudicar, bloquear, dañar, inutilizar, sobrecargar, de forma temporal o definitiva, las funcionalidades, herramientas, contenidos y/o la infraestructura de la página web, de manera que impida su normal utilización.</li>
                  <li>Custodiar y mantener la confidencialidad de las claves de acceso asociadas a su nombre de Usuario, siendo responsable de la utilización de dichas claves de acceso personales e intransferibles por parte de terceros.</li>
                  <li>No introducir ni realizar contenidos injuriosos o calumniosos, tanto de otros Usuarios como de terceras empresas ajenas a PRESTO IBÉRICA, S.A.</li>
                  <li>No utilizar cualquiera de los materiales e informaciones contenidos en este Sitio Web con fines ilícitos y/o expresamente prohibidos en las presentes Condiciones Generales de Uso, así como a las condiciones particulares que, en su caso, se establezcan para determinadas aplicaciones y/o utilidades y que resulten contrarios a los derechos e intereses de PRESTO IBÉRICA, S.A., sus usuarios y/o terceros.</li>
                  <li>No ofertar ni distribuir productos y servicios, ni realizar publicidad o comunicaciones comerciales no solicitadas a otros Usuarios y visitantes de PRESTO IBÉRICA, S.A.</li>
                </ul>
                <p className="mt-4">El Usuario responderá de los todos los daños y perjuicios de toda naturaleza que PRESTO IBÉRICA, S.A. o cualquier tercero pueda sufrir como consecuencia del incumplimiento de cualesquiera de las obligaciones a las que queda sometido por virtud de estas "Condiciones Generales de Uso" o de la ley en relación con el acceso y/o utilización de la página.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl mb-4">4. Propiedad Intelectual e Industrial</h2>
                <p>El sitio web, las páginas que comprende y la información o elementos contenidos en las mismas (incluyendo textos, documentos, fotografías, dibujos, representaciones gráficas, de los que es titular o de los que sean titulares terceros que autorizan al propietario a su utilización, entre otros), así como logotipos, marcas, nombres comerciales u otros signos distintivos, se encuentran protegidos por derechos de propiedad intelectual y/o industrial, de los que PRESTO IBÉRICA, S.A. es titular u ostenta autorización para su utilización y comunicación pública de los legítimos titulares de las mismas.</p>
                <p>El Usuario se obliga a usar los contenidos de forma diligente y correcta, de acuerdo con la ley, la moral y el orden público. PRESTO IBÉRICA, S.A. autoriza al Usuario para visualizar la información que se contiene en este sitio web, así como para efectuar reproducciones privadas (simple actividad de descarga y almacenamiento en sus sistemas informáticos), siempre y cuando los elementos sean destinados únicamente al uso personal. En ningún caso, ello significará una autorización o licencia sobre los derechos de propiedad de PRESTO IBÉRICA, S.A. o de los legítimos titulares de las mismas.</p>
                <p>El Usuario no está autorizado para proceder a la distribución, modificación, cesión o comunicación pública de la información contenida en esta Web en cualquier forma y cualquiera que sea su finalidad.</p>
                <p>Para realizar cualquier tipo de observación respecto a posibles incumplimientos de los derechos de propiedad intelectual o industrial, así como sobre cualquiera de los contenidos del sitio web, puede hacerlo a través de las direcciones postales o electrónicas indicadas en el encabezamiento.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl mb-4">5. Enlaces</h2>
                <p>Las conexiones y enlaces a sitios o páginas Web de terceros se han establecido únicamente como una utilidad para el Usuario. PRESTO IBÉRICA, S.A. no es, en ningún caso, responsable de las mismas o de su contenido.</p>
                <p>PRESTO IBÉRICA, S.A. no asume ninguna responsabilidad derivada de la existencia de enlaces entre los contenidos de este sitio y contenidos situados fuera del mismo o de cualquier otra mención de contenidos externos a este sitio. Tales enlaces o menciones tienen una finalidad exclusivamente informativa y, en ningún caso, implican el apoyo, aprobación, comercialización o relación alguna entre PRESTO IBÉRICA, S.A. y las personas o entidades autoras y/o gestoras de tales contenidos o titulares de los sitios donde se encuentren.</p>
                <p>Para realizar enlaces con la página Web será necesaria la autorización expresa y por escrito de los titulares del portal.</p>
                <p>Si cualquier usuario o tercero observa que tales enlaces pueden ser contrarios a las leyes, la moral o el orden público, o que sean susceptibles de incitar a la violencia o a la discriminación por razones sexuales, ideológicas, religiosas o raciales, rogamos que lo ponga en nuestro conocimiento a través de las direcciones indicadas en el encabezamiento, o a través de la dirección de correo electrónico.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl mb-4">6. Responsabilidad</h2>
                <p>PRESTO IBÉRICA, S.A. no garantiza el acceso continuado, ni la correcta visualización, descarga o utilidad de los elementos e información contenidos en las páginas del portal que pueden verse impedidos, dificultados o interrumpidos por factores o circunstancias fuera de su control o ajenas a su voluntad, ni de aquellos que sean producidos por la existencia de virus informáticos en Internet.</p>
                <p>PRESTO IBÉRICA, S.A. no asume responsabilidad alguna por daños, perjuicios, pérdidas, reclamaciones o gastos, producidos por:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Interferencias, interrupciones, fallos, omisiones, retrasos, bloqueos o desconexiones, motivadas por errores en las líneas y redes de telecomunicaciones o por cualquier otra causa ajena al control de PRESTO IBÉRICA, S.A.</li>
                  <li>Intromisiones ilegítimas mediante el uso de programas malignos de cualquier tipo y a través de cualquier medio de comunicación, tales como virus informáticos o cualesquiera otros.</li>
                  <li>Uso indebido o inadecuado de la página web de PRESTO IBÉRICA, S.A.</li>
                  <li>Errores de seguridad o navegación producidos por un mal funcionamiento del navegador o por el uso de versiones no actualizadas.</li>
                </ul>
                <p className="mt-4">PRESTO IBÉRICA, S.A. no es responsable ni en ningún caso responderá frente a los usuarios y a terceros sobre actos de cualquier tercero ajeno a PRESTO IBÉRICA, S.A. que conlleve o pueda suponer la realización de actos de competencia desleal y publicidad ilícita o la infracción de los derechos de propiedad intelectual e industrial, de los secretos empresariales, de compromisos contractuales de cualquier clase, de los derechos al honor, a la intimidad personal y familiar y a la imagen, de los derechos de propiedad y de toda otra naturaleza pertenecientes a un tercero por razón de la transmisión, difusión, almacenamiento, puesta a disposición, recepción, obtención o acceso a los contenidos.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl mb-4">7. Protección de Datos de Carácter Personal</h2>
                <p>Toda la política de tratamiento de datos personales la encontrarás en la <a href="/privacidad" className="text-accent hover:underline">Política de Privacidad</a>, que forma parte integrante de estas Condiciones Generales pero que, por simplicidad, hemos puesto en un documento aparte.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl mb-4">8. Legislación y Jurisdicción</h2>
                <p>El presente Aviso Legal y sus términos y condiciones se regirán e interpretarán de acuerdo con la Legislación Española. Cualquier controversia será resuelta ante los Juzgados y Tribunales competentes.</p>
                <p>El usuario, por el solo hecho de acceder a la página web u obtener la condición de usuario registrado otorga, de forma irrevocable, su consentimiento a que los Tribunales competentes por defecto puedan conocer de cualquier acción judicial derivada de o relacionada con las presentes condiciones, o con su uso de este Sitio o la navegación realizada por el mismo.</p>
                <p>Si alguna cláusula o apartado de las presentes Condiciones Generales, que no sea de naturaleza esencial para la existencia del mismo, es declarada nula o inaplicable, la validez de las restantes cláusulas no se verá afectada.</p>
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
