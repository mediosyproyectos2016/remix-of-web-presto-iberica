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
              <section>
                <h2 className="font-display text-2xl mb-4">1. Información al Usuario</h2>

                <h3 className="font-display text-lg mt-6 mb-3">¿Quién es el responsable del tratamiento de tus datos personales?</h3>
                <p><strong>PRESTO IBERICA SA</strong> es el RESPONSABLE del tratamiento de los datos personales del USUARIO y le informa de que estos datos serán tratados de conformidad con lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril (GDPR), y la Ley Orgánica 3/2018, de 5 de diciembre (LOPDGDD).</p>

                <h3 className="font-display text-lg mt-6 mb-3">¿Para qué tratamos tus datos personales?</h3>
                <p>Para mantener una relación comercial con el usuario. Las operaciones previstas para realizar el tratamiento son:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Remisión de comunicaciones comerciales publicitarias por e-mail, fax, SMS, MMS, redes sociales o cualquier otro medio electrónico o físico, presente o futuro, que posibilite realizar comunicaciones comerciales. Estas comunicaciones serán realizadas por el RESPONSABLE y estarán relacionadas con sus productos y servicios, o de sus colaboradores o proveedores, con los que este haya alcanzado algún acuerdo de promoción. En este caso, los terceros nunca tendrán acceso a los datos personales.</li>
                  <li>Realizar estudios de mercado y análisis estadísticos.</li>
                  <li>Tramitar encargos, solicitudes, dar respuesta a las consultas o cualquier tipo de petición que sea realizada por el USUARIO a través de cualquiera de las formas de contacto que se ponen a su disposición en la página web del RESPONSABLE.</li>
                  <li>Remitir el boletín informativo online, sobre novedades, ofertas y promociones en nuestra actividad.</li>
                </ul>

                <h3 className="font-display text-lg mt-6 mb-3">¿Por qué motivo podemos tratar tus datos personales?</h3>
                <p>Porque el tratamiento está legitimado por el artículo 6 del GDPR de la siguiente forma:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Con el consentimiento del USUARIO:</strong> remisión de comunicaciones comerciales y del boletín informativo.</li>
                  <li><strong>Por interés legítimo del RESPONSABLE:</strong> realizar estudios de mercado, análisis estadísticos, etc. y tramitar encargos, solicitudes, etc. a petición del USUARIO.</li>
                </ul>

                <h3 className="font-display text-lg mt-6 mb-3">¿Durante cuánto tiempo guardaremos tus datos personales?</h3>
                <p>Se conservarán durante no más tiempo del necesario para mantener el fin del tratamiento o existan prescripciones legales que dictaminen su custodia y cuando ya no sea necesario para ello, se suprimirán con medidas de seguridad adecuadas para garantizar la anonimización de los datos o la destrucción total de los mismos.</p>

                <h3 className="font-display text-lg mt-6 mb-3">¿A quién facilitamos tus datos personales?</h3>
                <p>No está prevista ninguna comunicación de datos personales a terceros salvo, si fuese necesario para el desarrollo y ejecución de las finalidades del tratamiento, a nuestros proveedores de servicios relacionados con comunicaciones, con los cuales el RESPONSABLE tiene suscritos los contratos de confidencialidad y de encargado de tratamiento exigidos por la normativa vigente de privacidad.</p>

                <h3 className="font-display text-lg mt-6 mb-3">¿Cuáles son tus derechos?</h3>
                <p>Los derechos que asisten al USUARIO son:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Derecho a retirar el consentimiento en cualquier momento.</li>
                  <li>Derecho de acceso, rectificación, portabilidad y supresión de sus datos, y de limitación u oposición a su tratamiento.</li>
                  <li>Derecho a presentar una reclamación ante la autoridad de control (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.aepd.es</a>) si considera que el tratamiento no se ajusta a la normativa vigente.</li>
                </ul>
                <p className="mt-4"><strong>Datos de contacto para ejercer sus derechos:</strong><br />
                PRESTO IBERICA SA. C/ Príncipe De Vergara, 13 - 28001 Madrid (Madrid).<br />
                E-mail: <a href="mailto:info@prestoiberica.com" className="text-accent hover:underline">info@prestoiberica.com</a></p>
              </section>

              <section>
                <h2 className="font-display text-2xl mb-4">2. Carácter Obligatorio o Facultativo de la Información Facilitada por el Usuario</h2>
                <p>Los USUARIOS, mediante la marcación de las casillas correspondientes y la entrada de datos en los campos, marcados con un asterisco (*) en el formulario de contacto o presentados en formularios de descarga, aceptan expresamente y de forma libre e inequívoca, que sus datos son necesarios para atender su petición, por parte del prestador, siendo voluntaria la inclusión de datos en los campos restantes. El USUARIO garantiza que los datos personales facilitados al RESPONSABLE son veraces y se hace responsable de comunicar cualquier modificación de los mismos.</p>
                <p>El RESPONSABLE informa de que todos los datos solicitados a través del sitio web son obligatorios, ya que son necesarios para la prestación de un servicio óptimo al USUARIO. En caso de que no se faciliten todos los datos, no se garantiza que la información y servicios facilitados sean completamente ajustados a sus necesidades.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl mb-4">3. Medidas de Seguridad</h2>
                <p>De conformidad con lo dispuesto en las normativas vigentes en protección de datos personales, el RESPONSABLE está cumpliendo con todas las disposiciones de las normativas GDPR y LOPDGDD para el tratamiento de los datos personales de su responsabilidad, y manifiestamente con los principios descritos en el artículo 5 del GDPR, por los cuales son tratados de manera lícita, leal y transparente en relación con el interesado y adecuados, pertinentes y limitados a lo necesario en relación con los fines para los que son tratados.</p>
                <p>El RESPONSABLE garantiza que ha implementado políticas técnicas y organizativas apropiadas para aplicar las medidas de seguridad que establecen el GDPR y la LOPDGDD con el fin de proteger los derechos y libertades de los USUARIOS y les ha comunicado la información adecuada para que puedan ejercerlos.</p>
                <p>Para más información sobre las garantías de privacidad, puedes dirigirte al RESPONSABLE a través de PRESTO IBERICA SA. C/ Príncipe De Vergara, 13 - 28001 Madrid (Madrid). E-mail: <a href="mailto:info@prestoiberica.com" className="text-accent hover:underline">info@prestoiberica.com</a></p>
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
