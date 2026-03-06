export interface FAQQuestion {
  q: string;
  a: string;
}

export interface FAQCategory {
  id: string;
  name: string;
  questions: FAQQuestion[];
}

export const faqCategories: FAQCategory[] = [
  {
    id: "empresa",
    name: "Información General",
    questions: [
      {
        q: "¿Cómo puedo obtener catálogos de Presto Ibérica?",
        a: "Todos nuestros catálogos están disponibles en el área de descargas de nuestra web, donde también puede obtener folletos y catálogos sectoriales. Si desea un catálogo físico, puede ponerse en contacto con nosotros mediante el formulario de contacto, en el teléfono (+34) 91 578 25 75 o escribiendo un correo electrónico a info@prestoiberica.com.",
      },
      {
        q: "¿Dónde puedo obtener más información técnica sobre los productos?",
        a: "En el apartado de producto, cuando seleccione alguno, tiene la opción de descargar la ficha técnica disponible con la información técnica referente al producto. Además, en Presto Ibérica disponemos de servicio de atención técnica especializado (postventa@prestoiberica.com) y de un departamento de proyectos que le asesorará de la mejor opción en su obra y/o proyecto (proyectos@prestoiberica.com).",
      },
      {
        q: "¿Qué tipo de garantía ofrece Presto Ibérica?",
        a: "El producto está cubierto por una garantía de 5 años a partir de la fecha de compra. Esta garantía cubre defectos de fabricación y contra los defectos del cromado, fundición o estampación, funcionamiento y/o defectos en cualquier componente de la grifería, excepto en aquellos ocasionados por la formación de depósitos calcáreos. Para productos con acabados, se ofrece una garantía de 3 años. Para griferías termostáticas, se ofrece una garantía de 3 años.",
      },
      {
        q: "¿Qué certificación tiene mi grifería y qué significa?",
        a: "Los grifos temporizados de Presto Ibérica poseen la certificación N de AENOR conforme a la norma europea de grifería temporizada EN-816. La grifería monomando posee la certificación N de AENOR conforme a la norma europea EN-817. También dispone de certificación NF de AFNOR, Sello de Calidad Medio Ambiental de la Generalitat de Cataluña, ACS y WRAS.",
      },
      {
        q: "¿Disponen de algún tipo de certificación las barras de apoyo?",
        a: "Las barras de aluminio recubierto de nylon son las únicas de todo el mercado que poseen la certificación \"Producto accesible\" otorgado por \"Vía libre\", de la Fundación ONCE.",
      },
      {
        q: "¿Los usuarios se pueden descargar los manuales de uso / instrucciones de instalación / fichas técnicas?",
        a: "Todas las fichas técnicas disponibles de producto se pueden descargar en el apartado de producto, seleccionando aquel que desee. Los manuales de uso e instrucciones de instalación se suministran al adquirir el producto, pero en caso de duda, puede ponerse en contacto con nosotros mediante el formulario de contacto, en el teléfono (+34) 91 578 25 75, o bien escribiendo un correo electrónico a info@prestoiberica.com.",
      },
      {
        q: "¿Ofrecen también productos hechos a medida?",
        a: "Presto Ibérica es un fabricante de grifería y accesorios de alta calidad, robustez y diseño. Si usted requiere de un producto especial que no aparece en nuestro portfolio de producto, puede ponerse en contacto con nosotros mediante el formulario de contacto de nuestra web o bien escribiendo un correo electrónico a proyectos@prestoiberica.com.",
      },
    ],
  },
  {
    id: "compra",
    name: "Compra",
    questions: [
      {
        q: "¿Dónde puedo comprar los productos?",
        a: "Nuestro sistema de venta es mediante distribuidor autorizado. En el mercado de la península ibérica e islas disponemos de más de 3.000 puntos de venta repartidos por todo el territorio. Puede usar nuestro localizador de tiendas en el apartado de contacto de nuestra web. También puede ponerse en contacto con nosotros mediante el formulario de contacto, en el teléfono (+34) 91 578 25 75 o escribiendo un correo electrónico a info@prestoiberica.com.",
      },
      {
        q: "¿Cómo puedo saber el precio de los productos?",
        a: "Nuestros precios y productos son variables dependiendo del país, pues se adaptan a los requerimientos del lugar donde son suministrados. Puede consultar nuestros PVP en nuestra web o mediante nuestro catálogo. Para otros mercados, puede ponerse en contacto con nosotros mediante el formulario de contacto, en el teléfono (+34) 91 578 25 75, escribiendo un correo electrónico a exportaciones@prestoiberica.com o contactando con el agente de su zona.",
      },
      {
        q: "¿Dónde me pueden asesorar sobre diseños para baño y cocina?",
        a: "Nuestros distribuidores y agentes comerciales son expertos en el mundo del baño y cocina, pero si requiere de una atención más personalizada, ponemos a su disposición a nuestro departamento de proyectos. Puede contactar con él mediante el correo electrónico proyectos@prestoiberica.com o rellenando nuestro formulario de contacto.",
      },
    ],
  },
  {
    id: "producto",
    name: "Producto",
    questions: [
      {
        q: "¿Cuál es la presión recomendada para una grifería?",
        a: "Nuestras griferías funcionan en un amplísimo rango de presiones, estando optimizadas para presiones de 2,5 a 3 bar (36,3 a 43,5 psi), tal y como aconsejan las normas europeas y el Código Técnico de la Edificación español.",
      },
      {
        q: "¿Cuál es la presión mínima necesaria para las griferías?",
        a: "La presión mínima de funcionamiento necesario es de 1 bar (14,1 psi), pero se recomiendan presiones superiores, ya que el caudal para esa presión puede llegar a ser escaso.",
      },
      {
        q: "¿De qué materiales son fabricadas las griferías?",
        a: "Nuestros grifos están fabricados en latón sin plomo incluido en el 4MSI Common Approach. Las piezas interiores son realizadas en componentes resistentes a la corrosión y a las incrustaciones calcáreas.",
      },
      {
        q: "¿Qué griferías me permiten ahorrar agua?",
        a: "Todas las griferías de Presto están diseñadas para ahorrar agua. Sin embargo, disponemos de líneas específicas para un ahorro especial que distinguimos con un distintivo verde ECO. Puede localizarlas en la parte de producto utilizando el filtro \"Ahorro de agua\".",
      },
      {
        q: "¿Se suministran instrucciones junto con la grifería?",
        a: "Sí, todas nuestras griferías se suministran junto con sus instrucciones.",
      },
      {
        q: "¿Qué es la pulsación normal en grifería temporizada?",
        a: "Es la pulsación más convencional para lugares públicos. Con ella se obtiene el mayor grado de antivandalismo, pues está diseñada para funcionar ante golpes y las condiciones más adversas.",
      },
      {
        q: "¿Qué es la pulsación antiblocaje en grifería temporizada?",
        a: "Es un sistema de pulsación especialmente indicado para lugares donde el vandalismo es un grave problema. Con este sistema, el agua fluye por el grifo cuando se suelta el pulsador y no cuando se acciona. De esta manera es imposible dejar un grifo bloqueado. Los productos con pulsación antiblocaje están identificados en nuestro catálogo mediante \"PA\".",
      },
      {
        q: "¿Qué es la pulsación suave en grifería temporizada?",
        a: "Es un sistema de pulsación especialmente indicado para niños, personas mayores, enfermos y cualquier persona que no tenga suficiente fuerza para accionar un grifo convencional. Este sistema posee un diseño interno especial que requiere mucha menos fuerza para su funcionamiento.",
      },
      {
        q: "¿Qué es la tecnología Sensia?",
        a: "Es una nueva tecnología que utilizan nuestros grifos electrónicos de sensor de la gama \"Domo Sensia\" mediante la cual no es necesario ningún tipo de programación para su óptimo funcionamiento sin ningún tipo de contacto.",
      },
      {
        q: "¿Qué es la tecnología Touch?",
        a: "Es la última tendencia en grifería para colectividades. Los grifos de las series \"Touch\" necesitan ser levemente tocados en su sensor para comenzar a funcionar. Están regulados de fábrica a una temporización que se puede detener en cualquier momento al poseer tecnología Start/Stop.",
      },
      {
        q: "¿Cuáles son las diferencias entre un mezclador normal y un termostato?",
        a: "En un mezclador normal, se obtiene agua a la temperatura deseada mediante la mezcla de caudales de agua fría y caliente. En un grifo termostático, un sensor de cera estabiliza la temperatura de salida ante cambios en la temperatura de entrada, ofreciendo mayor confort en las duchas.",
      },
      {
        q: "¿Qué es un limitador de temperatura?",
        a: "Es una pieza que incorporan nuestros grifos temporizados mezcladores de la serie ALPA mediante la cual se puede limitar el giro de selección de temperatura, limitando la misma.",
      },
      {
        q: "¿Cómo se configura el tiempo de apertura de la grifería temporizada?",
        a: "El tiempo de las griferías mecánicas de Presto Ibérica es regulado en fábrica. Para prevenir actos vandálicos y adaptarse a la norma europea, únicamente pueden ser regulados en nuestras instalaciones. Si necesita otra temporización, puede contactarnos mediante el formulario de contacto, en el teléfono (+34) 91 578 25 75 o escribiendo a info@prestoiberica.com.",
      },
      {
        q: "¿Por qué puede variar el caudal de agua en la grifería?",
        a: "El caudal está directamente influido por la configuración de la instalación, la presión y las partículas en las tuberías. Presto Ibérica prueba el 100% de los productos; sin embargo, dentro de una misma instalación puede haber grifos con distinto caudal debido a las diferentes condiciones.",
      },
      {
        q: "¿Existe grifería específica para niños pequeños?",
        a: "Presto es el único fabricante del mundo que posee tres tipos diferentes de pulsación, incluyendo una pulsación suave especialmente indicada para instalaciones con niños pequeños. También es recomendable los grifos con tecnología \"Touch\".",
      },
      {
        q: "¿Cómo funciona una apertura de doble posición en grifería?",
        a: "El sistema de apertura de doble posición está diseñado para ahorrar agua. Presenta una resistencia a la apertura del grifo en el 50% de recorrido, de manera que si el usuario necesita la máxima apertura, tendría que ejercer una presión un poco superior a la habitual.",
      },
      {
        q: "¿Existen productos aptos para uso exterior?",
        a: "Las instalaciones exteriores están sometidas a condiciones atmosféricas adversas. Los productos ideales para este tipo de instalaciones son los que poseen acabado en acero inoxidable.",
      },
      {
        q: "¿Existe alguna distancia a la que instalar las ayudas técnicas?",
        a: "Debe consultar la legislación vigente en el territorio donde se vayan a instalar. En España, el Código Técnico de la Edificación es el texto de referencia. En él se dice, por ejemplo, que las barras horizontales deben estar situadas a una altura entre 70 y 75 cm.",
      },
      {
        q: "¿De qué materiales son fabricadas las barras de apoyo?",
        a: "En Presto disponemos de dos acabados de barras de apoyo: Aluminio recubierto de nylon y Acero inoxidable.",
      },
    ],
  },
  {
    id: "mantenimiento",
    name: "Mantenimiento y Reparaciones",
    questions: [
      {
        q: "¿Cómo debo limpiar la grifería?",
        a: "Para la limpieza se recomienda utilizar un paño suave con agua, agua jabonosa o detergente suave. Tras la limpieza, aclarar con agua limpia y secar con un paño suave. No deben utilizarse productos con ácidos fuertes, lejía, hipoclorito, limpiadores abrasivos, blanqueadores, desinfectantes concentrados ni álcalis fuertes.",
      },
      {
        q: "¿Cómo puedo eliminar los residuos de cal?",
        a: "Para limpiar los depósitos calcáreos se recomienda diluir vinagre blanco en agua tibia al 50% y mantener durante una hora la pieza a limpiar en dicha solución. Se recomienda la limpieza diaria secando la grifería después de cada uso para prevenir la acumulación de minerales.",
      },
      {
        q: "¿Se debe realizar alguna labor de mantenimiento?",
        a: "Limpieza de filtros y aireadores periódicamente para un correcto funcionamiento. El recubrimiento de nuestros grifos debe ser limpiado exclusivamente con agua y secar con un paño suave. No aplicar detergentes abrasivos ni mezclar diversos tipos de detergentes. Se puede usar algún tipo de detergente neutro con la dosificación adecuada, aplicándolo sobre paños o esponjas no abrasivos.",
      },
      {
        q: "¿Dónde debo reclamar si tengo un problema con un producto de Presto Ibérica?",
        a: "Puede dirigirse al distribuidor autorizado donde lo adquirió. En caso de que no lo recuerde o necesite otro tipo de atención, la opción más rápida es contactar con el agente de su zona. También puede hacerlo mediante el formulario de contacto, en el teléfono (+34) 91 578 25 75 o escribiendo a info@prestoiberica.com.",
      },
      {
        q: "¿Dónde puedo comprar recambios para mi grifería?",
        a: "Presto Ibérica dispone de recambios para todos sus productos. Nuestro sistema de venta es mediante distribuidor autorizado. En el mercado de la península ibérica e islas disponemos de más de 3.000 puntos de venta. Puede usar nuestro localizador de tiendas en la web.",
      },
      {
        q: "¿Dónde puedo encontrar ayuda para reparar mi grifo?",
        a: "Nuestros distribuidores y agentes comerciales son expertos en el mundo del baño, pero si requiere de una atención más personalizada, ponemos a su disposición nuestro servicio de atención técnica especializado. Puede contactar mediante el correo electrónico postventa@prestoiberica.com o rellenando nuestro formulario de contacto.",
      },
      {
        q: "¿Disponen de ayuda online?",
        a: "Sí, Presto Ibérica dispone de un canal propio en YouTube donde se explican las principales tareas de instalación y mantenimiento de los productos más significativos.",
      },
    ],
  },
];
