import imgNoticia1 from "@/assets/blog/noticia-1-griferia-profesional.jpg";
import imgNoticia2 from "@/assets/blog/noticia-2-historia-40-anos.jpg";
import imgNoticia3 from "@/assets/blog/noticia-3-universo-marca.jpg";
import imgNoticia4 from "@/assets/blog/noticia-4-catalogo-2026.jpg";

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
  content: string[];
  subtitles?: { title: string; paragraphs: string[] }[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "griferia-profesional-nueva-etapa",
    title: "Presto Ibérica anticipa la nueva etapa de la grifería profesional: más normativa, más eficiencia y mayor control tecnológico",
    excerpt: "Ante la actualización del Código Técnico y una mayor exigencia en ahorro de agua, Gustavo Díez, director comercial de Presto Ibérica, analiza cómo el sector evoluciona hacia soluciones más eficientes y tecnológicamente avanzadas.",
    date: "2025",
    readTime: "8 min",
    image: imgNoticia1,
    featured: true,
    content: [
      "Ante la actualización del Código Técnico y una mayor exigencia en ahorro de agua, Gustavo Díez, director comercial de Presto Ibérica, analiza cómo el sector evoluciona hacia soluciones más eficientes y tecnológicamente avanzadas.",
      "Con más de 40 años de experiencia, la compañía se prepara para una nueva etapa estratégica que reforzará su posicionamiento en grifería profesional.",
      "La grifería profesional atraviesa un momento de redefinición técnica. La actualización del Código Técnico de la Edificación, el refuerzo de los criterios de eficiencia hídrica y la exigencia en materiales de bajo contenido en plomo están elevando el nivel de especialización en proyectos públicos y privados. Las instalaciones ya no se evalúan únicamente por su funcionamiento inmediato, sino por su capacidad de mantener eficiencia, salubridad y durabilidad a lo largo del tiempo.",
      "En este contexto, la anticipación adquiere un papel determinante. Así lo explica Gustavo Díez, director comercial de Presto Ibérica, quien señala que las necesidades del mercado deben abordarse antes de que se conviertan en obligación normativa. Desde el desarrollo del primer sistema de cierre automático hasta la introducción de latones de bajo contenido en plomo, la incorporación de soluciones antibacterianas o la adaptación a las primeras normativas de ahorro de agua en España, la trayectoria de la compañía ha estado ligada a esa manera de entender la evolución del producto.",
    ],
    subtitles: [
      {
        title: "Anticipación normativa y desarrollo tecnológico",
        paragraphs: [
          "La evolución del sector está directamente vinculada al entorno regulatorio. Las exigencias en eficiencia hídrica, calidad de los materiales y condiciones de salubridad obligan a fabricantes y prescriptores a trabajar con una perspectiva que va más allá del cumplimiento inmediato. La planificación técnica se realiza cada vez con mayor antelación, y el producto debe estar preparado para ese escenario.",
          "En este contexto, la anticipación ha formado parte de la trayectoria de Presto Ibérica. Tal y como señala Gustavo Díez, la compañía ha procurado situarse por delante de los cambios del mercado. La introducción de latones de bajo contenido en plomo, el desarrollo de soluciones antibacterianas o la adaptación a las primeras normativas autonómicas de ahorro de agua en España son ejemplos de una evolución vinculada a la lectura previa del entorno regulatorio.",
          "Hoy, esa misma lógica se aplica a la próxima actualización del Código Técnico de la Edificación. Presto trabaja en las adaptaciones necesarias con el objetivo de ofrecer a instaladores, distribuidores y prescriptores soluciones alineadas con los requisitos que marcarán el corto plazo. Preparar el producto antes de que la exigencia sea obligatoria forma parte de esa manera de entender el desarrollo tecnológico en el ámbito profesional.",
        ],
      },
      {
        title: "Producto orientado a la realidad de cada instalación",
        paragraphs: [
          "La demanda del mercado no responde a un único criterio. Tal y como explica Gustavo Díez, la decisión técnica varía en función del perfil de la obra y del instalador. En determinados proyectos, especialmente en entornos de uso intensivo como centros educativos o penitenciarios, la durabilidad continúa siendo prioritaria. Presto ofrece una garantía estándar de cinco años, aunque existen instalaciones con más de 30 años de funcionamiento continuo, lo que refleja una concepción del producto orientada a la fiabilidad y a la reducción de incidencias a largo plazo.",
          "En otros casos, el foco se sitúa en el ahorro. El consumo de agua y energía se ha convertido en un criterio habitual en la toma de decisiones, tanto por exigencia normativa como por la necesidad de optimizar costes. Sin embargo, como señala Gustavo, no se trata únicamente de reducir el caudal, sino de hacerlo manteniendo el confort del usuario. La eficiencia debe integrarse sin comprometer la experiencia de uso, especialmente en instalaciones de alta frecuencia.",
          "A estos factores se suma de forma progresiva el control. Aunque no siempre es el primer atributo demandado, la gestión avanzada de la grifería comienza a incorporarse en determinados proyectos. Presto dispone de soluciones que permiten un control integral del producto y una gestión más precisa del consumo en instalaciones con mayor nivel de tecnificación.",
        ],
      },
      {
        title: "Soluciones específicas para entornos exigentes",
        paragraphs: [
          "La oferta de Presto se adapta a cada tipo de instalación. En entornos como centros deportivos, educativos o polideportivos, algunos modelos de PrestoDuc, incorporan sistemas que facilitan el mantenimiento y permiten automatizar procesos de desinfección frente a la legionella, una exigencia técnica cada vez más habitual en este tipo de espacios.",
          "En el ámbito hospitalario, los propios centros sanitarios demandan equipamientos específicos como los lavacuñas, mientras que en el día a día de las instalaciones colectivas las barras de apoyo forman parte de proyectos donde la accesibilidad, la resistencia y la adaptación al diseño son factores técnicos a tener en cuenta.",
          "Esta orientación práctica hacia la realidad de cada instalación también se ha reflejado en situaciones concretas. Durante la pandemia, por ejemplo, Presto desarrolló un proyecto específico para AENA, diseñando soluciones adaptadas a las nuevas necesidades sanitarias de varios aeropuertos. Un caso que ejemplifica cómo la compañía ajusta su desarrollo técnico a contextos reales del mercado profesional cuando las circunstancias lo requieren.",
        ],
      },
      {
        title: "Una nueva etapa en la evolución de Presto Ibérica",
        paragraphs: [
          "Los cambios en el marco normativo, la integración del ahorro de agua en la prescripción y el desarrollo de sistemas de control están redefiniendo las exigencias de la grifería profesional. Anticiparse a esta evolución ya no se entiende como una ventaja competitiva, sino como una necesidad en el diseño de producto y en la planificación técnica de las instalaciones.",
          "La trayectoria de Presto Ibérica ha estado ligada a esa manera de trabajar: desarrollar soluciones concebidas para el uso intensivo, alineadas con la normativa y diseñadas para mantener su rendimiento a lo largo del tiempo. La transformación del mercado refuerza la importancia de abordar el equipamiento del agua en espacios públicos y colectividades desde una perspectiva técnica más amplia y coherente con las exigencias actuales.",
          "En este momento de transformación, la compañía se prepara para dar un paso más dentro del ámbito de la grifería profesional. Una evolución que responde a la propia dinámica del mercado y que ampliará su alcance sin perder los principios que han definido su recorrido. El sector avanza y Presto Ibérica trabaja ya en las soluciones que acompañarán esa evolución.",
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "40-anos-historia-agua",
    title: "Presto Ibérica: 40 años de historia con el agua como protagonista",
    excerpt: "Desde sus orígenes, Presto Ibérica supo entender el agua no como un recurso ilimitado, sino como un legado que merece cuidado y gestión consciente. Una trayectoria marcada por la innovación y el compromiso.",
    date: "2025",
    readTime: "6 min",
    image: imgNoticia2,
    featured: false,
    content: [
      "Si pensamos en el agua, lo hacemos de forma instintiva como fuente primera de vida: un elemento esencial y universal, que rige nuestros ritmos, define culturas y reclama respeto.",
      "Y esta es también la inspiración inicial de una empresa que supo, desde sus orígenes, entender el agua no como un recurso ilimitado, sino como un legado que merece cuidado y gestión consciente: Presto Ibérica.",
      "Es el año 1979. En un contexto de cambios sociales y crecimiento urbano, un grupo de profesionales empieza a reflexionar sobre un reto cada vez más evidente: la necesidad de mejorar el uso del agua en espacios públicos con alta afluencia. Frente a un modelo basado en el consumo sin control, toma forma la idea de utilizar la tecnología como aliada para gestionar el agua de manera más eficiente.",
      "En ese escenario se sitúan los primeros pasos de Presto Ibérica. Desde el inicio, la compañía entiende que el desarrollo industrial debe ir acompañado de responsabilidad y que la innovación solo tiene sentido cuando pone al agua en el centro. Durante esos primeros años, el equipo trabaja en soluciones capaces de regular su flujo sin renunciar al confort ni a la seguridad del usuario. Un planteamiento poco habitual en aquel momento que acabaría dando lugar al primer sistema de cierre automático para grifería en España.",
      "Esa forma de entender la innovación ha acompañado a Presto Ibérica a lo largo de su trayectoria. Con el tiempo, la compañía ha desarrollado tecnologías orientadas al control y ahorro de agua, integrando criterios de calidad y compromiso social y medioambiental. Una evolución constante que hoy se refleja en soluciones presentes en instalaciones públicas, hogares y espacios colectivos de distintos países.",
    ],
    subtitles: [
      {
        title: "El primer temporizado",
        paragraphs: [
          "Ese primer planteamiento pronto empezó a dar resultados. En muy poco tiempo, Presto Ibérica materializó su visión en un avance que marcaría su recorrido, el desarrollo del primer sistema de cierre automático para grifería en España. A partir de ese momento, cada gesto tenía un impacto y cada usuario pasaba a formar parte de una gestión más consciente del recurso.",
          "El cierre automático supuso un cambio relevante en la relación cotidiana con el agua. Permitía reducir consumos sin afectar a la experiencia, asegurando confort, higiene y seguridad en espacios de alta rotación. Más allá del componente técnico, este desarrollo reflejaba una manera de entender la innovación como herramienta para cuidar un recurso esencial, integrando eficiencia y responsabilidad en un mismo diseño.",
          "Esta línea de trabajo situó a Presto Ibérica en una posición destacada dentro del sector del baño y las colectividades. Sus soluciones respondían a necesidades reales y anticipaban una preocupación creciente por el uso responsable del agua, que con el paso del tiempo se convertiría en una prioridad compartida por la sociedad y la industria.",
        ],
      },
      {
        title: "Una trayectoria marcada por la innovación y el compromiso",
        paragraphs: [
          "Hablar de Presto Ibérica es hablar de una forma de trabajar que se ha construido con el tiempo. Desde sus inicios, la compañía ha desarrollado una cultura empresarial orientada a la calidad, entendida como la combinación de seguridad, salubridad y sostenibilidad. Cada producto se diseña y fabrica bajo criterios técnicos exigentes, pensados para responder a un uso intensivo y prolongado, y para ofrecer un rendimiento fiable en la relación cotidiana entre las personas y el agua.",
          "Para Presto Ibérica, el agua no es solo un recurso gestionado por la ingeniería. Es bienestar, salud y equilibrio. Esta manera de entenderla ha guiado cada avance tecnológico, dando lugar a soluciones mecánicas, temporizadas, electrónicas y automáticas diseñadas para optimizar el consumo de agua y energía sin comprometer la experiencia del usuario.",
          "La sostenibilidad forma parte de esta manera de hacer y se integra desde el diseño hasta la fabricación. La elección de materiales robustos, la atención a la higiene, la accesibilidad y la ergonomía, así como el desarrollo de tecnologías antibacterianas y soluciones sin contacto, reflejan una filosofía que sitúa a las personas y al entorno en el centro de cada decisión. Innovaciones como Healthcover, con tratamiento antibacteriano aplicado a superficies de uso frecuente, o los sistemas ContactLess, basados en sensores sin contacto, refuerzan una visión en la que la eficiencia del agua va siempre ligada a la seguridad y al bienestar.",
        ],
      },
      {
        title: "Innovación aplicada, personalización y mirada al futuro",
        paragraphs: [
          "Con el paso de los años, el trabajo del equipo de I+D+i ha ampliado este enfoque, investigando y desarrollando tecnologías sostenibles orientadas a optimizar el uso del agua en todo tipo de espacios, desde instalaciones de alta rotación hasta el ámbito doméstico. Soluciones pensadas para responder a necesidades reales, donde la eficiencia, la higiene y la durabilidad son elementos esenciales.",
          "Esta capacidad de innovación también se ha trasladado al ámbito del diseño y la personalización. Con el lanzamiento de Presto Exclusive Manufacturing, la compañía incorporó la fabricación a medida como parte de su propuesta de valor, permitiendo adaptar cada solución a las necesidades técnicas y estéticas de cada proyecto. A ello se suman herramientas digitales y procesos de configuración avanzada que amplían las posibilidades de prescriptores y clientes, demostrando que es posible ofrecer soluciones personalizadas sin renunciar a la eficiencia ni al uso responsable del agua.",
          "Hoy, esa trayectoria sigue evolucionando. Presto Ibérica continúa explorando nuevas formas de entender el uso del agua, desarrollando soluciones que profundizan en la eficiencia, la higiene y el confort. Un camino que se construye con la experiencia y con la mirada puesta en lo que está por venir, donde la innovación sigue marcando el ritmo y el agua sigue siendo la protagonista.",
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "universo-marca-unificado",
    title: "Presto Ibérica consolida su crecimiento bajo un único universo de marca",
    excerpt: "La compañía reúne todas sus tecnologías y soluciones en una estructura unificada con capacidad para cubrir cualquier necesidad en entornos colectivos y residenciales.",
    date: "2025",
    readTime: "7 min",
    image: imgNoticia3,
    featured: false,
    content: [
      "Presto Ibérica reúne todas sus tecnologías y soluciones en una estructura unificada con capacidad para cubrir cualquier necesidad en entornos colectivos y residenciales. La unificación concentra fabricación nacional, innovación y diseño en un único marco estratégico que simplifica la prescripción y amplía la respuesta al mercado.",
      "Presto Ibérica anuncia la unificación de todas sus líneas de especialización en un único universo de marca, culminando así un proceso de evolución empresarial orientado a ofrecer una propuesta más amplia, coherente y alineada con las necesidades actuales del sector.",
      "Con más de 40 años de trayectoria y reconocida por haber desarrollado el primer sistema de cierre automático para grifería en España, la compañía ha construido su posicionamiento sobre la especialización técnica, la fabricación propia y una apuesta constante por la innovación. A lo largo de estas décadas, su crecimiento ha permitido incorporar nuevas tipologías y soluciones que amplían su alcance más allá de la tecnología temporizada, dando respuesta a los distintos ámbitos de la edificación contemporánea.",
      "Esta integración articula en una única estructura el conjunto de capacidades desarrolladas por la compañía. Soluciones para el ahorro y control del agua, propuestas monomando y equipamiento especializado para entornos colectivos y profesionales se integran ahora bajo una misma identidad, conformando un porfolio global, coherente y alineado con las necesidades del mercado.",
      "Esta evolución permite a Presto Ibérica ofrecer una respuesta integral a cualquier necesidad en instalaciones colectivas, espacios públicos, proyectos hoteleros, entornos sanitarios y vivienda, apoyándose en su fabricación nacional, en certificaciones oficiales y en una experiencia técnica que continúa marcando su evolución en el sector.",
    ],
    subtitles: [
      {
        title: "Una identidad única para una propuesta más clara y estructurada",
        paragraphs: [
          "La integración de todas las líneas de especialización en un único universo de marca responde a la voluntad de ofrecer al mercado una propuesta más comprensible, ordenada y alineada con la realidad actual del sector. Más allá de una reorganización interna, este paso permite reunir bajo una misma identidad todo el conocimiento técnico, la experiencia acumulada y la capacidad industrial desarrollados a lo largo de su trayectoria.",
          "Esta nueva estructura permite presentar de forma cohesionada tecnologías y tipologías que, aun respondiendo a necesidades distintas, comparten una misma base de ingeniería, fabricación y control de calidad. El resultado es una oferta que facilita la prescripción y la planificación de proyectos, al integrar en un mismo marco soluciones orientadas al ahorro y control del agua, propuestas monomando, líneas de diseño y equipamiento especializado para colectividades y espacios profesionales.",
          "Para los profesionales del sector, esta evolución se traduce en una interlocución única y en una mayor coherencia técnica entre soluciones. La estructura unificada facilita la planificación y ejecución de proyectos, garantizando continuidad, compatibilidad y respaldo industrial en todas las fases, desde el diseño hasta la puesta en servicio, con plena adaptación a las exigencias normativas y funcionales de la edificación actual.",
        ],
      },
      {
        title: "Una respuesta alineada con la nueva realidad del sector",
        paragraphs: [
          "El sector de la edificación atraviesa una etapa de transformación marcada por mayores exigencias normativas, objetivos de eficiencia hídrica y energética más ambiciosos y una creciente sensibilidad hacia la accesibilidad y la seguridad en los espacios de uso colectivo. En este escenario, los proyectos requieren soluciones integradas que permitan cumplir con criterios técnicos, funcionales y estéticos sin fragmentar la prescripción.",
          "La unificación de todas las capacidades de Presto Ibérica responde directamente a este contexto. Al reunir bajo una misma identidad soluciones orientadas al control del consumo, la higiene, la resistencia al uso intensivo, la adaptación a normativa y el diseño contemporáneo, la compañía ofrece una arquitectura de producto coherente con las nuevas demandas del mercado.",
          "Además, la integración amplía la capacidad de la compañía para responder a desafíos como la rehabilitación de edificios, la modernización de infraestructuras públicas y la adecuación de espacios a criterios cada vez más exigentes en sostenibilidad, eficiencia y accesibilidad.",
        ],
      },
      {
        title: "Visión estratégica de la nueva estructura empresarial",
        paragraphs: [
          "\"Este hito representa mucho más que una fusión empresarial: es la consolidación de un proyecto común que nace con la ambición de liderar el futuro del sector. Hemos unido experiencia industrial, conocimiento técnico y capacidad de innovación para construir una organización más fuerte, preparada para aportar soluciones que contribuyan al ahorro de agua, a la protección de las personas y al cuidado del medioambiente.\" En palabras de Antonio Pardal, director general de la compañía.",
          "\"Tras esta integración visualizamos una compañía más innovadora, con mayor presencia en el mercado nacional e internacional y con más capacidad para invertir en desarrollo tecnológico. Estamos construyendo una empresa preparada para liderar una etapa en la que la eficiencia de los recursos y la seguridad de las personas serán más importantes que nunca.\"",
        ],
      },
      {
        title: "Una nueva etapa con visión de futuro",
        paragraphs: [
          "La convergencia de todas sus capacidades en un único universo marca un momento decisivo en la evolución de Presto Ibérica. Al integrar en una misma estructura su conocimiento industrial, su experiencia en ingeniería y su enfoque en diseño, la compañía ofrece una respuesta coherente y completa a un mercado que demanda amplitud de soluciones y una visión técnica integrada en cada proyecto.",
          "Bajo el concepto \"El agua nos mueve. Nosotros movemos el futuro\", Presto Ibérica avanza con una identidad más clara y una propuesta alineada con los desafíos actuales de la edificación.",
          "Un mismo origen, un único universo y una capacidad ampliada para seguir dando respuesta al futuro de la gestión del agua.",
        ],
      },
    ],
  },
  {
    id: 4,
    slug: "catalogo-2026",
    title: "Presto Ibérica presenta su Catálogo 2026",
    excerpt: "La nueva publicación reúne en un único documento grifería monomando, grifería para colectividades y ayudas técnicas, reflejando el crecimiento de la compañía hacia una propuesta integral.",
    date: "2025",
    readTime: "5 min",
    image: imgNoticia4,
    featured: false,
    content: [
      "La nueva publicación reúne en un único documento grifería monomando, grifería para colectividades y ayudas técnicas y equipamientos, reflejando el crecimiento de la compañía hacia una propuesta integral en la gestión profesional del agua.",
      "Presto Ibérica anuncia la publicación de su Catálogo-Tarifa 2026, una edición que inaugura una nueva etapa para la compañía. Más que una actualización anual de referencias, esta publicación se convierte en la primera que recoge de forma unificada la totalidad de su oferta tras la integración corporativa, presentando bajo una misma estructura todas sus tipologías de producto.",
      "Como refleja la portada, el catálogo fija el posicionamiento de esta etapa con el lema \"El agua nos mueve. Nosotros movemos el futuro\", una declaración que vincula identidad, responsabilidad técnica y visión de desarrollo.",
    ],
    subtitles: [
      {
        title: "Una estructura clara para una oferta ampliada",
        paragraphs: [
          "El Catálogo-Tarifa 2026 reorganiza la oferta en tres grandes universos claramente definidos: Grifería, Grifería para colectividades y Ayudas técnicas y equipamientos. Esta estructura abarca desde baño, ducha y cocina hasta soluciones electrónicas y temporizadas, sistemas hospitalarios y gerontológicos, equipamiento en acero inoxidable, ayudas técnicas, válvulas y mucho más.",
          "La publicación incorpora además herramientas de consulta rápida, índice por bloques y páginas de selección por tipología que permiten identificar soluciones según entorno, nivel de exigencia y tipo de usuario.",
        ],
      },
      {
        title: "Nuevas soluciones y ampliación de gamas",
        paragraphs: [
          "La edición 2026 refuerza el enfoque tecnológico de la compañía, recordando su trayectoria pionera en sistemas de cierre automático y su larga experiencia en soluciones orientadas al ahorro y control del agua.",
          "Este año incorpora novedades destacadas como nuevas líneas de grifería monomando, el lanzamiento de una nueva línea de grifería electrónica, la incorporación de equipamientos especializados para ostomizados y una nueva gama de grifería de pedal.",
        ],
      },
      {
        title: "Personalización a medida, sin límite",
        paragraphs: [
          "Desde sus inicios, la compañía ha apostado por ofrecer soluciones adaptadas a las necesidades específicas de cada proyecto. Esa filosofía de personalización y excelencia se materializa en Presto Exclusive Manufacturing (PEM), un servicio distintivo que combina tecnología avanzada y fabricación a medida, garantizando que cada proyecto, residencial o contract, se desarrolle sin límites ni compromisos en acabados, colores o funcionalidades.",
          "PEM constituye uno de los principales elementos diferenciales de la compañía, proporcionando asesoramiento técnico especializado y una amplia gama de opciones, desde acabados especiales y colores RAL hasta grabado láser e impresión personalizada.",
        ],
      },
      {
        title: "Sostenibilidad",
        paragraphs: [
          "El Catálogo-Tarifa 2026 incorpora de forma explícita el compromiso de la compañía con la sostenibilidad y la calidad certificada. Este año, la publicación refleja la continuidad de un historial consolidado, habiendo obtenido de manera consecutiva en los tres años anteriores el sello oficial de Cálculo de Huella de Carbono otorgado por el Ministerio para la Transición Ecológica y el Reto Demográfico.",
          "El enfoque hacia productos reciclables, eficiencia en el uso de recursos y tecnologías de ahorro hídrico refuerza una línea de desarrollo alineada con los requisitos actuales de proyecto en materia de sostenibilidad y cumplimiento normativo.",
        ],
      },
      {
        title: "Una herramienta que materializa una nueva etapa",
        paragraphs: [
          "El Catálogo-Tarifa 2026 no representa únicamente una actualización comercial. Funciona como la expresión editorial de la etapa actual de Presto Ibérica: una oferta ampliada, organizada bajo una misma identidad y preparada para responder con coherencia a las necesidades del sector.",
          "Con esta edición, la compañía presenta una herramienta estructurada y transversal que facilita la prescripción, aporta claridad en la selección tecnológica y refleja la dimensión actual de su propuesta en la gestión profesional del agua.",
        ],
      },
    ],
  },
];
