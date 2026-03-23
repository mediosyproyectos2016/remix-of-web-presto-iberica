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

// Nuevas imágenes - Centro de oficinas
import amazonEspana from "@/assets/casos/centro-oficinas-centro-logistico-amazon-Espana.jpg";
import endesaMadrid from "@/assets/casos/centro-oficinas-endesa-madrid.jpg";
import grupoGodo from "@/assets/casos/centro-oficinas-grupo-Godo-barcelona.jpg";
import navesLidl from "@/assets/casos/centro-oficinas-naves-lidl-espana.jpg";
import pfizer from "@/assets/casos/centro-oficinas-pfizer-mexico.jpg";
import sedeSeat from "@/assets/casos/centro-oficinas-Sede-seat-martorell-barcelona.jpg";
import sedeTelefonica from "@/assets/casos/centro-oficinas-sede-telefonica-madrid.jpg";
import torreCaleido from "@/assets/casos/centro-oficinas-torre-caleido-madrid.jpg";

// Nuevas imágenes - Centros deportivos
import balaidos from "@/assets/casos/centros-deportivos-Balaidos-vigo-pontevedra.jpg";
import dreamfit from "@/assets/casos/centros-deportivos-centro_dreamfit-spain.jpg";
import montmelo from "@/assets/casos/centros-deportivos-circuito-montmelo-motor-barcelona.jpg";
import realBetis from "@/assets/casos/centros-deportivos-ciudad-deportiva-real-betis-sevilla.jpg";
import sevillaFc from "@/assets/casos/centros-deportivos-ciudad-deportiva-sevilla-fc.jpg";
import athleticBilbao from "@/assets/casos/centros-deportivos-ciuidad-deportiva-atletic-bilbao-lezama.jpg";
import enjoyOviedo from "@/assets/casos/centros-deportivos-enjoy-oviedo.jpg";
import laCartuja from "@/assets/casos/centros-deportivos-estadio-la-cartuja-sevilla.jpg";
import vivaGym from "@/assets/casos/centros-deportivos-viva-gym-gimnasio-spain.jpg";

// Nuevas imágenes - Centros educativos
import salesianosPamplona from "@/assets/casos/centros-educativos-colegio-salesianos-pamplona-navarra.jpg";
import uabBarcelona from "@/assets/casos/centros-educativos-universidad-autonoma-barcelona.jpg";

// Nuevas imágenes - Centros de gran tránsito
import aeropuertoMalaga from "@/assets/casos/centros-gran-transito-aeropuerto-De-Malaga-Costa-del-Sol-AGP.jpg";
import aeropuertoPalma from "@/assets/casos/centros-gran-transito-aeropuerto-palma-mallorca_baleares.jpg";
import aeropuertoTenerife from "@/assets/casos/centros-gran-transito-aeropuerto-tenerife-sur-canarias.jpg";
import aeropuertoIbiza from "@/assets/casos/centros-gran-transito-aeropuerto_de_ibiza_baleares.jpg";
import ccLaCanada from "@/assets/casos/centros-gran-transito-centro-comercial-la-canada-malaga.jpg";
import ccLasArenas from "@/assets/casos/centros-gran-transito-centro-comercial-las-arenas-las-palmas.jpg";
import ccNevada from "@/assets/casos/centros-gran-transito-centro-comercial-nevada-granada.jpg";
import ccOasiz from "@/assets/casos/centros-gran-transito-centro-comercial-oasiz-torrejon-ardoz-madrid.jpg";
import movistarArena from "@/assets/casos/centros-gran-transito-movistar-arena-madrid.jpg";
import primark from "@/assets/casos/centros-gran-transito-tiendas-primark-espana.jpg";
import puyDuFou from "@/assets/casos/centros-gran-transito_Puy_du_Fou_toledo.jpg";

// Nuevas imágenes - Centros hoteleros
import delfinVerde from "@/assets/casos/centros-hoteleros-el-delfin-verde-camping-gerona.jpg";
import hotelTropicana from "@/assets/casos/centros-hoteleros-hotel-tropicana-manacor-baleares.jpg";

// Nuevas imágenes - Centros sanitarios
import hospitalTorrecardenas from "@/assets/casos/centros-sanitarios-hospital-torrecardenas-almeria.jpg";
import hospitalSalamanca from "@/assets/casos/centros-sanitarios-Hospital-universitario-salamanca.jpg";
import hospitalCuenca from "@/assets/casos/centros-sanitarios-hospital-virgen-de-la-luz-cuenca.jpg";

export type CasoExito = {
  id: number;
  title: string;
  image: string;
  category: string;
};

export const casosExito: CasoExito[] = [
  // === EXISTENTES ===
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
  { id: 58, title: "Hotel Riberies (Lérida)", image: hotelRiberies, category: "Centros hoteleros" },
  { id: 59, title: "Hotel Rey don Jaime (Castelldefels)", image: hotelReyDonJaime, category: "Centros hoteleros" },
  { id: 60, title: "Hotel Alfa (Barcelona)", image: hotelAlfa, category: "Centros hoteleros" },
  { id: 61, title: "Hotel Vincci La Rábida (Sevilla)", image: hotelVincci, category: "Centros hoteleros" },
  { id: 62, title: "Hotel Urquinaona (Barcelona)", image: hotelUrquinaona, category: "Centros hoteleros" },
  { id: 63, title: "Hotel Boutique Des Pins (Bedoin, France)", image: hotelDesPins, category: "Centros hoteleros" },
  { id: 64, title: "Hotel Jazz (Barcelona)", image: hotelJazz, category: "Centros hoteleros" },
  { id: 71, title: "Campus de Vicálvaro de la URJC (Madrid)", image: urjcVicalvaro, category: "Centros educativos" },
  { id: 72, title: "Residencias del Grupo Geriatros", image: geriatros, category: "Residencias" },
  { id: 73, title: "Hospital Virgen de la Paloma (Madrid)", image: hospitalVirgenPaloma, category: "Centros sanitarios" },
  { id: 74, title: "Hotel Dome (Madrid)", image: hotelDome, category: "Centros hoteleros" },
  { id: 75, title: "El Corte Inglés (Varios centros)", image: elCorteIngles, category: "Centros de gran tránsito" },
  { id: 76, title: "Residencia de la Santísima Trinidad (Ávila)", image: residenciaSotillo, category: "Residencias" },
  { id: 77, title: "Centro polivalente CANF – COCEMFE (Sevilla)", image: canfCocemfe, category: "Residencias" },
  { id: 78, title: "Hospital Virgen de la Macarena (Sevilla)", image: hospitalMacarena, category: "Centros sanitarios" },
  { id: 79, title: "Hotel Arts (Barcelona)", image: hotelArts, category: "Centros hoteleros" },
  { id: 80, title: "Colegio Calasanz Loyola (Oviedo)", image: colegioCalasanz, category: "Centros educativos" },
  { id: 81, title: "Hospital Reina Sofía (Córdoba)", image: hospitalReinaSofia, category: "Centros sanitarios" },
  { id: 82, title: "Hospital San Luis (Palencia)", image: hospitalSanLuis, category: "Centros sanitarios" },
  { id: 83, title: "Hospital Universitario de Móstoles (Madrid)", image: hospitalMostoles, category: "Centros sanitarios" },
  { id: 84, title: "Hospitales Nisa", image: hospitalesNisa, category: "Centros sanitarios" },

  // === NUEVOS - Centro de oficinas ===
  { id: 100, title: "Centro Logístico Amazon (España)", image: amazonEspana, category: "Centro de oficinas" },
  { id: 101, title: "Sede Endesa (Madrid)", image: endesaMadrid, category: "Centro de oficinas" },
  { id: 102, title: "Grupo Godó (Barcelona)", image: grupoGodo, category: "Centro de oficinas" },
  { id: 103, title: "Naves Lidl (España)", image: navesLidl, category: "Centro de oficinas" },
  { id: 104, title: "Pfizer (México)", image: pfizer, category: "Centro de oficinas" },
  { id: 105, title: "Sede SEAT Martorell (Barcelona)", image: sedeSeat, category: "Centro de oficinas" },
  { id: 106, title: "Sede Telefónica (Madrid)", image: sedeTelefonica, category: "Centro de oficinas" },
  { id: 107, title: "Torre Caleido (Madrid)", image: torreCaleido, category: "Centro de oficinas" },

  // === NUEVOS - Centros deportivos ===
  { id: 110, title: "Estadio de Balaídos (Vigo, Pontevedra)", image: balaidos, category: "Centros deportivos" },
  { id: 111, title: "Centro Dreamfit (España)", image: dreamfit, category: "Centros deportivos" },
  { id: 112, title: "Circuito de Montmeló (Barcelona)", image: montmelo, category: "Centros deportivos" },
  { id: 113, title: "Ciudad Deportiva Real Betis (Sevilla)", image: realBetis, category: "Centros deportivos" },
  { id: 114, title: "Ciudad Deportiva Sevilla FC", image: sevillaFc, category: "Centros deportivos" },
  { id: 115, title: "Ciudad Deportiva Athletic Club – Lezama (Bilbao)", image: athleticBilbao, category: "Centros deportivos" },
  { id: 116, title: "Enjoy Wellness (Oviedo)", image: enjoyOviedo, category: "Centros deportivos" },
  { id: 117, title: "Estadio de La Cartuja (Sevilla)", image: laCartuja, category: "Centros deportivos" },
  { id: 118, title: "Viva Gym (España)", image: vivaGym, category: "Centros deportivos" },

  // === NUEVOS - Centros educativos ===
  { id: 120, title: "Colegio Salesianos (Pamplona, Navarra)", image: salesianosPamplona, category: "Centros educativos" },
  { id: 121, title: "Universidad Autónoma de Barcelona", image: uabBarcelona, category: "Centros educativos" },

  // === NUEVOS - Centros de gran tránsito ===
  { id: 130, title: "Aeropuerto de Málaga – Costa del Sol", image: aeropuertoMalaga, category: "Centros de gran tránsito" },
  { id: 131, title: "Aeropuerto de Palma de Mallorca (Baleares)", image: aeropuertoPalma, category: "Centros de gran tránsito" },
  { id: 132, title: "Aeropuerto de Tenerife Sur (Canarias)", image: aeropuertoTenerife, category: "Centros de gran tránsito" },
  { id: 133, title: "Aeropuerto de Ibiza (Baleares)", image: aeropuertoIbiza, category: "Centros de gran tránsito" },
  { id: 134, title: "Centro Comercial La Cañada (Málaga)", image: ccLaCanada, category: "Centros de gran tránsito" },
  { id: 135, title: "Centro Comercial Las Arenas (Las Palmas)", image: ccLasArenas, category: "Centros de gran tránsito" },
  { id: 136, title: "Centro Comercial Nevada (Granada)", image: ccNevada, category: "Centros de gran tránsito" },
  { id: 137, title: "Centro Comercial Oasiz (Torrejón de Ardoz, Madrid)", image: ccOasiz, category: "Centros de gran tránsito" },
  { id: 138, title: "Movistar Arena (Madrid)", image: movistarArena, category: "Centros de gran tránsito" },
  { id: 139, title: "Tiendas Primark (España)", image: primark, category: "Centros de gran tránsito" },
  { id: 140, title: "Puy du Fou (Toledo)", image: puyDuFou, category: "Centros de gran tránsito" },

  // === NUEVOS - Centros hoteleros ===
  { id: 150, title: "Camping El Delfín Verde (Gerona)", image: delfinVerde, category: "Centros hoteleros" },
  { id: 151, title: "Hotel Tropicana (Manacor, Baleares)", image: hotelTropicana, category: "Centros hoteleros" },

  // === NUEVOS - Centros sanitarios ===
  { id: 160, title: "Hospital Torrecárdenas (Almería)", image: hospitalTorrecardenas, category: "Centros sanitarios" },
  { id: 161, title: "Hospital Universitario de Salamanca", image: hospitalSalamanca, category: "Centros sanitarios" },
  { id: 162, title: "Hospital Virgen de la Luz (Cuenca)", image: hospitalCuenca, category: "Centros sanitarios" },
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
