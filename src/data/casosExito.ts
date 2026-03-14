import campusRepsol from "@/assets/casos/campus-repsol.jpg";
import ciudadJusticia from "@/assets/casos/ciudad-justicia-barcelona.jpg";
import ccLaGavia from "@/assets/casos/cc-la-gavia.jpg";
import cityFive from "@/assets/casos/city-five-valencia.jpg";
import caldeaAndorra from "@/assets/casos/caldea-andorra.jpg";
import elCorteIngles from "@/assets/casos/el-corte-ingles.jpg";
import hotelArts from "@/assets/casos/hotel-arts-barcelona.jpg";
import colegioCalasanz from "@/assets/casos/colegio-calasanz-oviedo.jpg";
import estadioBernabeu from "@/assets/casos/estadio-bernabeu.jpg";
import hospitalVallHebron from "@/assets/casos/hospital-vall-hebron.jpg";
import hospitalLaFe from "@/assets/casos/hospital-la-fe.jpg";
import canfCocemfe from "@/assets/casos/canf-cocemfe-sevilla.jpg";
import geriatros from "@/assets/casos/geriatros.jpg";
import hospitalReinaSofia from "@/assets/casos/hospital-reina-sofia.jpg";
import hospitalSanLuis from "@/assets/casos/hospital-san-luis-palencia.jpg";
import hospitalMostoles from "@/assets/casos/hospital-mostoles.jpg";
import hospitalMacarena from "@/assets/casos/hospital-macarena.jpg";
import hospitalVirgenPaloma from "@/assets/casos/hospital-virgen-paloma.jpg";
import hospitalesNisa from "@/assets/casos/hospitales-nisa.jpg";
import hotelAlfa from "@/assets/casos/hotel-alfa.jpg";
import hotelDesPins from "@/assets/casos/hotel-des-pins.jpg";
import hotelDome from "@/assets/casos/hotel-dome.jpg";
import hotelJazz from "@/assets/casos/hotel-jazz.jpg";
import hotelReyDonJaime from "@/assets/casos/hotel-rey-don-jaime.jpg";
import hotelRiberies from "@/assets/casos/hotel-riberies.jpg";
import hotelUrquinaona from "@/assets/casos/hotel-urquinaona.jpg";
import hotelUshuaia from "@/assets/casos/hotel-ushuaia-ibiza.jpg";
import hotelVincci from "@/assets/casos/hotel-vincci-sevilla.jpg";
import playasCosta from "@/assets/casos/playas-costa.jpg";
import residenciaSotillo from "@/assets/casos/residencia-sotillo.jpg";
import universidadMurcia from "@/assets/casos/universidad-murcia.jpg";
import urjcVicalvaro from "@/assets/casos/urjc-vicalvaro.jpg";

export type CasoExito = {
  id: number;
  title: string;
  image: string;
  category: string;
};

export const casosExito: CasoExito[] = [
  // === PRESTO IBÉRICA (con imagen local) ===
  { id: 1, title: "Estadio Santiago Bernabéu (Madrid)", image: estadioBernabeu, category: "Centros deportivos" },
  { id: 5, title: "Sede corporativa de REPSOL (Madrid)", image: campusRepsol, category: "Centro de oficinas" },
  { id: 7, title: "Hospital Valle de Hebrón (Barcelona)", image: hospitalVallHebron, category: "Centros sanitarios" },
  { id: 8, title: "Hospital de la Nueva Fe (Valencia)", image: hospitalLaFe, category: "Centros sanitarios" },
  { id: 12, title: "Playas de la costa Española", image: playasCosta, category: "Centros de gran tránsito" },
  { id: 13, title: "Hotel Ushuaia (Ibiza)", image: hotelUshuaia, category: "Centros hoteleros" },
  { id: 39, title: "Ciudad de la Justicia (Barcelona)", image: ciudadJusticia, category: "Centros de alta seguridad" },
  { id: 40, title: "Centro Comercial La Gavia (Madrid)", image: ccLaGavia, category: "Centros de gran tránsito" },
  { id: 41, title: "Complejo deportivo Futbol City – Five (Valencia)", image: cityFive, category: "Centros deportivos" },
  { id: 42, title: "Universidad de Murcia – Campus El Espinardo", image: universidadMurcia, category: "Centros educativos" },
  { id: 43, title: "Hotel Balneario de Caldea (Andorra)", image: caldeaAndorra, category: "Centros hoteleros" },

  // === GRIFERÍAS GALINDO (con imagen local) ===
  { id: 58, title: "Hotel Riberies (Lérida)", image: hotelRiberies, category: "Centros hoteleros" },
  { id: 59, title: "Hotel Rey don Jaime (Castelldefels)", image: hotelReyDonJaime, category: "Centros hoteleros" },
  { id: 60, title: "Hotel Alfa (Barcelona)", image: hotelAlfa, category: "Centros hoteleros" },
  { id: 61, title: "Hotel Vincci La Rábida (Sevilla)", image: hotelVincci, category: "Centros hoteleros" },
  { id: 62, title: "Hotel Urquinaona (Barcelona)", image: hotelUrquinaona, category: "Centros hoteleros" },
  { id: 63, title: "Hotel Boutique Des Pins (Bedoin, France)", image: hotelDesPins, category: "Centros hoteleros" },
  { id: 64, title: "Hotel Jazz (Barcelona)", image: hotelJazz, category: "Centros hoteleros" },

  // === PRESTO EQUIP (con imagen local) ===
  { id: 71, title: "Campus de Vicálvaro de la URJC (Madrid)", image: urjcVicalvaro, category: "Centros educativos" },
  { id: 72, title: "Residencias del Grupo Geriatros", image: geriatros, category: "Residencias" },
  { id: 73, title: "Hospital Virgen de la Paloma (Madrid)", image: hospitalVirgenPaloma, category: "Centros sanitarios" },
  { id: 74, title: "Hotel Dome (Madrid)", image: hotelDome, category: "Centros hoteleros" },
  { id: 75, title: "El Corte Inglés (Varios centros)", image: elCorteIngles, category: "Centros de gran tránsito" },
  { id: 76, title: "Residencia de la Santísima Trinidad (Ávila)", image: residenciaSotillo, category: "Residencias" },
  { id: 77, title: "Centro polivalente CANF – COCEMFE (Sevilla)", image: canfCocemfe, category: "Residencias" },
  { id: 78, title: "Hospital Virgen de la Macarena (Sevilla)", image: hospitalMacarena, category: "Centros sanitarios" },

  // === NUEVOS ===
  { id: 79, title: "Hotel Arts (Barcelona)", image: hotelArts, category: "Centros hoteleros" },
  { id: 80, title: "Colegio Calasanz Loyola (Oviedo)", image: colegioCalasanz, category: "Centros educativos" },
  { id: 81, title: "Hospital Reina Sofía (Córdoba)", image: hospitalReinaSofia, category: "Centros sanitarios" },
  { id: 82, title: "Hospital San Luis (Palencia)", image: hospitalSanLuis, category: "Centros sanitarios" },
  { id: 83, title: "Hospital Universitario de Móstoles (Madrid)", image: hospitalMostoles, category: "Centros sanitarios" },
  { id: 84, title: "Hospitales Nisa", image: hospitalesNisa, category: "Centros sanitarios" },
];

export const categoriesProyectos = [
  "Todos",
  "Centro de oficinas",
  "Centros de alta seguridad",
  "Centros de gran tránsito",
  "Centros deportivos",
  "Centros educativos",
  "Centros hoteleros",
  "Centros sanitarios",
  "Residencias",
  "Viviendas",
];
