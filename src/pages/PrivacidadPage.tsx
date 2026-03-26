import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const PrivacidadPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <section className="container-presto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-display mb-10">Política de Privacidad</h1>

            <div className="prose prose-lg max-w-none text-foreground space-y-8 text-sm leading-relaxed">
              <p>En cumplimiento del principio de transparencia y deber de información establecido por la normativa comunitaria y nacional vigente en materia de protección de datos, PRESTO IBÉRICA, S.A. procede a informar a los interesados acerca de las circunstancias y condiciones del tratamiento de sus datos, así como de los derechos que les asisten.</p>
              <p>La Política de Privacidad forma parte de las Condiciones Generales que rigen la presente Web y aplica a todas las Entidades pertenecientes a PRESTO IBÉRICA, S.A.</p>

              <section>
                <h2 className="font-display text-2xl mb-4">¿Quién es el responsable del tratamiento de sus datos?</h2>
                <ul className="list-none space-y-1 pl-0">
                  <li><strong>PRESTO IBÉRICA, S.A.</strong></li>
                  <li>NIF: A28576197</li>
                  <li>Calle Príncipe De Vergara, nº 13 – 28001 Madrid</li>
                  <li>Teléfono: 915 782 575</li>
                  <li>Correo electrónico: <a href="mailto:info@prestoiberica.com" className="text-accent hover:underline">info@prestoiberica.com</a></li>
                </ul>
                <p className="mt-4">Nos reservamos el derecho a modificar o adaptar la presente Política de Privacidad en cualquier momento. Le recomendamos revisar la misma para mantenerse actualizado.</p>
              </section>

              <p className="font-display text-lg">Si es alguno de los siguientes colectivos, consulte la información desplegable:</p>

              {/* CLIENTES */}
              <section>
                <h2 className="font-display text-2xl mb-4">Clientes</h2>

                <h3 className="font-display text-lg mt-6 mb-3">¿Qué datos personales tratamos?</h3>
                <p>Trataremos los datos identificativos y de contacto de los representantes de nuestros clientes a efectos de gestionar la relación contractual que tenemos con las personas jurídicas a quienes representan. En caso de que sea una persona física, trataremos sus datos identificativos, de contacto y económicos únicamente a efectos de gestionar la relación contractual que tenemos con usted.</p>

                <h3 className="font-display text-lg mt-6 mb-3">¿Con qué finalidades vamos a tratar sus datos personales?</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Elaboración del presupuesto y seguimiento del mismo mediante comunicaciones entre ambas partes.</li>
                  <li>Prestar los servicios contratados, así como gestionar y mantener la relación comercial con nuestros clientes.</li>
                  <li>Proporcionar información a través de medios electrónicos, que versen sobre sus solicitudes.</li>
                  <li>Proporcionar información comercial o de eventos por medios electrónicos, siempre que exista autorización expresa o esté dentro de nuestro interés legítimo.</li>
                  <li>Facturación y declaración de los impuestos oportunos.</li>
                  <li>Realizar las transacciones que correspondan.</li>
                  <li>Gestiones de control y recobro.</li>
                  <li>Realizar estudios de mercado y análisis estadísticos.</li>
                </ul>

                <h3 className="font-display text-lg mt-6 mb-3">¿Cuál es la legitimación para el tratamiento de sus datos?</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Existencia de una relación contractual entre las partes o aplicación a petición del interesado de medidas precontractuales.</li>
                  <li>Cumplimiento de una obligación legal aplicable al Responsable del tratamiento.</li>
                  <li>Consentimiento otorgado por el interesado o por su representante legal.</li>
                  <li>Interés legítimo del Responsable del tratamiento.</li>
                </ul>

                <h3 className="font-display text-lg mt-6 mb-3">¿Durante cuánto tiempo vamos a mantener los datos personales?</h3>
                <p>Durante la vigencia de las relaciones entre las partes y, una vez finalizadas, debidamente bloqueados durante los plazos de prescripción derivados de las mismas.</p>
              </section>

              {/* CONTACTOS WEB */}
              <section>
                <h2 className="font-display text-2xl mb-4">Contactos de la Web o del Correo Electrónico</h2>

                <h3 className="font-display text-lg mt-6 mb-3">¿Qué datos recopilamos a través de la Web?</h3>
                <p>Si nos facilita información a través de un formulario de contacto, trataremos sus datos identificativos, de contacto y demás datos que nos comparta mediante el mencionado formulario. Además, podremos tratar su dirección IP, la tipología del sistema operativo o navegador utilizado, así como la duración de su visita, de forma seudonimizada.</p>

                <h3 className="font-display text-lg mt-6 mb-3">¿Con qué finalidades vamos a tratar sus datos personales?</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Gestionar el servicio solicitado, contestar su solicitud o tramitar su petición.</li>
                  <li>Proporcionar información comercial o de eventos a través de medios electrónicos.</li>
                  <li>Realizar análisis y mejoras en la página web de PRESTO IBÉRICA, S.A., en relación a los productos o servicios ofertados, así como mejorar la estrategia comercial.</li>
                </ul>

                <h3 className="font-display text-lg mt-6 mb-3">¿Cuál es la legitimación para el tratamiento de sus datos?</h3>
                <p>El consentimiento del usuario o la existencia de una relación contractual entre las partes.</p>

                <h3 className="font-display text-lg mt-6 mb-3">¿Durante cuánto tiempo vamos a mantener los datos personales?</h3>
                <p>Mientras permanezca vinculado con nosotros o hasta que ejercite algún derecho que implique la supresión de sus datos, manteniéndose los datos debidamente bloqueados por los plazos de prescripción legalmente establecidos.</p>
              </section>

              {/* PROVEEDORES */}
              <section>
                <h2 className="font-display text-2xl mb-4">Proveedores</h2>

                <h3 className="font-display text-lg mt-6 mb-3">¿Qué datos personales tratamos?</h3>
                <p>Trataremos los datos identificativos y de contacto de los representantes de nuestros proveedores a efectos de gestionar la relación contractual que tenemos con las personas jurídicas a quienes representan.</p>

                <h3 className="font-display text-lg mt-6 mb-3">¿Con qué finalidades vamos a tratar sus datos personales?</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Elaboración/aprobación del presupuesto y seguimiento del mismo mediante comunicaciones entre ambas partes.</li>
                  <li>Seguimiento de los servicios contratados y gestionar la relación comercial.</li>
                  <li>Facturación y declaración de los impuestos oportunos.</li>
                  <li>Proporcionar información comercial o de eventos por medios electrónicos, siempre que exista autorización expresa o esté dentro de nuestro interés legítimo.</li>
                  <li>Realizar las transacciones que correspondan, así como las gestiones de control y recobro.</li>
                </ul>

                <h3 className="font-display text-lg mt-6 mb-3">¿Cuál es la legitimación para el tratamiento de sus datos?</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Existencia de una relación contractual entre las partes o aplicación de medidas precontractuales.</li>
                  <li>Cumplimiento de una obligación legal aplicable a PRESTO IBÉRICA, S.A.</li>
                  <li>Consentimiento otorgado por un representante legal de proveedor.</li>
                  <li>Interés legítimo de PRESTO IBÉRICA, S.A.</li>
                </ul>

                <h3 className="font-display text-lg mt-6 mb-3">¿Durante cuánto tiempo vamos a mantener los datos personales?</h3>
                <p>Durante la vigencia de las relaciones entre las partes y, una vez finalizadas, debidamente bloqueados por los plazos de prescripción derivados de las mismas.</p>
              </section>

              {/* NEWSLETTER */}
              <section>
                <h2 className="font-display text-2xl mb-4">Contactos del Newsletter (Boletín Informativo)</h2>

                <h3 className="font-display text-lg mt-6 mb-3">¿Qué datos recopilamos a través del Newsletter?</h3>
                <p>Datos de contacto (dirección email).</p>

                <h3 className="font-display text-lg mt-6 mb-3">¿Con qué finalidades vamos a tratar sus datos personales?</h3>
                <p>Envío periódico de novedades, promociones e información de interés.</p>

                <h3 className="font-display text-lg mt-6 mb-3">¿Cuál es la legitimación para el tratamiento de sus datos?</h3>
                <p>Consentimiento otorgado por el interesado o por su representante legal.</p>

                <h3 className="font-display text-lg mt-6 mb-3">¿Durante cuánto tiempo vamos a mantener los datos personales?</h3>
                <p>Hasta la revocación del consentimiento otorgado, que podrá efectuarse en cualquier momento sin efectos retroactivos, manteniéndose los datos debidamente bloqueados por los plazos de prescripción legalmente establecidos. El interesado siempre dispondrá de la opción de darse de baja, en cualquier comunicación.</p>
              </section>

              {/* DEMANDANTES DE EMPLEO */}
              <section>
                <h2 className="font-display text-2xl mb-4">Demandantes de Empleo</h2>

                <h3 className="font-display text-lg mt-6 mb-3">¿Qué datos personales tratamos?</h3>
                <p>Trataremos los datos que comparta con nosotros en el marco del proceso de selección o candidatura espontánea. Por lo general, trataremos sus datos identificativos, datos de contacto, Currículum Vitae y datos relativos a su experiencia profesional y/o académica.</p>

                <h3 className="font-display text-lg mt-6 mb-3">¿Con qué finalidades vamos a tratar sus datos personales?</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Organización de procesos de selección para la contratación de empleados.</li>
                  <li>Citarle para entrevistas de trabajo y evaluar su candidatura.</li>
                  <li>Almacenar su Currículum Vitae para futuros procesos de selección en caso de no resultar seleccionado en el proceso para el cual ha aplicado.</li>
                </ul>

                <h3 className="font-display text-lg mt-6 mb-3">¿Cuál es la legitimación para el tratamiento de sus datos?</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Aplicación de medidas precontractuales a petición del interesado.</li>
                  <li>Consentimiento otorgado por el interesado o su representante legal para la conservación del Currículum Vitae y de los datos relativos a su experiencia profesional y/o académica.</li>
                </ul>

                <h3 className="font-display text-lg mt-6 mb-3">¿Durante cuánto tiempo vamos a mantener los datos personales?</h3>
                <p>Hasta la finalización del proceso de selección y, si disponemos de autorización, por el plazo máximo de 1 año, manteniéndose los datos debidamente bloqueados por los plazos de prescripción legalmente establecidos una vez cumplidos los plazos indicados.</p>
              </section>

              {/* REDES SOCIALES */}
              <section>
                <h2 className="font-display text-2xl mb-4">Redes Sociales</h2>

                <h3 className="font-display text-lg mt-6 mb-3">¿Qué datos personales tratamos?</h3>
                <p>Utilizaremos los datos disponibles en su perfil de usuario, así como los datos que nos facilite al ponerse en contacto con nosotros a través de nuestros perfiles en RRSS.</p>

                <h3 className="font-display text-lg mt-6 mb-3">¿Con qué finalidades vamos a tratar sus datos personales?</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Tramitar y contestar a sus consultas, solicitudes o peticiones.</li>
                  <li>Gestionar el servicio solicitado.</li>
                  <li>Publicar su imagen en nuestros perfiles, a petición suya.</li>
                  <li>Relacionarnos con usted y crear una comunidad de seguidores.</li>
                </ul>

                <h3 className="font-display text-lg mt-6 mb-3">¿Cuál es la legitimación para el tratamiento de sus datos?</h3>
                <p>Las bases que legitiman el tratamiento es el consentimiento voluntario del interesado de ponerse en contacto y, en su caso, la aceptación de una relación contractual en el entorno de la red social que corresponda. El tratamiento de los datos dentro de la Red Social se realizará conforme a sus políticas de Privacidad.</p>

                <h3 className="font-display text-lg mt-6 mb-3">¿Durante cuánto tiempo vamos a mantener los datos personales?</h3>
                <p>Sólo podemos consultar o dar de baja sus datos de forma restringida al tener un perfil específico. Los trataremos tanto tiempo como nos deje siguiéndonos, siendo amigos o dándole a "me gusta", "seguir" o botones similares. Cualquier rectificación de sus datos o restricción de información o de publicaciones debes realizarla a través de la configuración de su perfil o usuario en la propia red social.</p>
              </section>

              {/* INFORMACIÓN ADICIONAL */}
              <section>
                <h2 className="font-display text-2xl mb-4">Información Adicional sobre los Tratamientos de sus Datos</h2>

                <h3 className="font-display text-lg mt-6 mb-3">¿Incluimos datos personales de terceras personas?</h3>
                <p>No, como norma general sólo tratamos los datos que nos facilitan los titulares. Si nos aporta datos de terceros, deberá con carácter previo informar y solicitar su consentimiento a dichas personas, o de lo contrario nos exime de cualquier responsabilidad por el incumplimiento de este requisito.</p>

                <h3 className="font-display text-lg mt-6 mb-3">¿Y datos de menores?</h3>
                <p>No tratamos datos de menores de 14 años. Por tanto, absténgase de facilitarlos si no tiene esa edad o, en su caso, de facilitar datos de terceros que no tengan la citada edad. PRESTO IBÉRICA, S.A. se exime de cualquier responsabilidad por el incumplimiento de esta previsión.</p>

                <h3 className="font-display text-lg mt-6 mb-3">¿Qué medidas de seguridad aplicamos?</h3>
                <p>Puede estar tranquilo, hemos adoptado un nivel óptimo de protección de los datos personales que manejamos y hemos implementado todos los medios y medidas técnicas a nuestra disposición según el estado de la tecnología para evitar la pérdida, mal uso, alteración, acceso no autorizado y robo.</p>

                <h3 className="font-display text-lg mt-6 mb-3">¿A qué destinatarios se comunicarán sus datos?</h3>
                <p>Sus datos no se cederán a terceros, salvo obligación legal o consentimiento previamente otorgado por su parte. No obstante lo anterior, sus datos podrán ser comunicados a la Agencia Estatal de la Administración Tributaria y a bancos y entidades financieras para el cobro del servicio prestado o producto adquirido.</p>
                <p>Para cumplir las finalidades indicadas en la presente Política contaremos con la colaboración de proveedores de servicios que pueden tener acceso a sus datos personales. PRESTO IBÉRICA, S.A. ha suscrito con estos el correspondiente contrato de tratamiento de datos, mediante el cual se les impone, entre otras, las siguientes obligaciones: aplicar medidas técnicas y organizativas apropiadas; tratar los datos personales para las finalidades pactadas y atendiendo únicamente a las instrucciones indicadas por PRESTO IBÉRICA, S.A.</p>

                <h3 className="font-display text-lg mt-6 mb-3">¿Qué Derechos tiene?</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>A acceder a sus datos personales.</li>
                  <li>A solicitar la rectificación de sus datos si estos son inexactos.</li>
                  <li>A solicitar la supresión de sus datos.</li>
                  <li>A retirar los consentimientos otorgados.</li>
                  <li>A solicitar la limitación del tratamiento de sus datos.</li>
                  <li>A no ser objeto de decisiones automatizadas.</li>
                  <li>A portar sus datos, que le serán facilitados en un formato estructurado, de uso común o lectura mecánica.</li>
                  <li>A presentar una reclamación ante la <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Agencia Española de Protección de Datos (www.aepd.es)</a>.</li>
                </ul>
                <p className="mt-4">Si modifica algún dato, le agradecemos que nos lo comunique para mantenerlos actualizados.</p>

                <h3 className="font-display text-lg mt-6 mb-3">¿Cómo ejercer sus derechos?</h3>
                <p>Para el ejercicio de los derechos en materia de privacidad descritos, el interesado deberá dirigirse a las direcciones postales o electrónicas indicadas en la presente Política, identificándose de forma adecuada. En caso de duda razonable sobre la identidad del interesado, PRESTO IBÉRICA, S.A. podrá requerirle información adicional.</p>

                <h3 className="font-display text-lg mt-6 mb-3">¿Cuánto tardamos en contestar al ejercicio de derechos?</h3>
                <p>Un mes desde la recepción, prorrogable por dos meses adicionales, siempre que el ejercicio del derecho lo requiera debido a su complejidad, notificándoselo en tiempo y forma.</p>

                <h3 className="font-display text-lg mt-6 mb-3">¿Tratamos cookies?</h3>
                <p>Si usamos otro tipo de cookies que no sean las necesarias, podrá consultar la <a href="/cookies" className="text-accent hover:underline">Política de Cookies</a> en el enlace correspondiente, disponible en el inicio de nuestra web.</p>
              </section>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacidadPage;
