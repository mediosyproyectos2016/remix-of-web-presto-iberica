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

export type CasoExito = {
  id: number;
  title: string;
  image: string;
  category: string;
};

export const casosExito: CasoExito[] = [
  // === PRESTO IBÉRICA ===
  { id: 1, title: "Estadio Santiago Bernabéu (Madrid)", image: estadioBernabeu, category: "Centros deportivos" },
  { id: 2, title: "Torre Caleido (Madrid)", image: "https://www.prestoiberica.com/wp-content/uploads/2023/10/torre-caleido-400x284.jpg", category: "Centro de oficinas" },
  { id: 3, title: "Aeropuerto de Palma de Mallorca", image: "https://www.prestoiberica.com/wp-content/uploads/2023/10/aeropuerto-palma-mallorca-400x284.jpg", category: "Centros de gran tránsito" },
  { id: 4, title: "Aeropuerto de Ibiza", image: "https://www.prestoiberica.com/wp-content/uploads/2023/10/aeropuerto_de_ibiza_001-400x284.jpg", category: "Centros de gran tránsito" },
  { id: 5, title: "Sede corporativa de REPSOL (Madrid)", image: campusRepsol, category: "Centro de oficinas" },
  { id: 6, title: "Sede corporativa «Distrito C» Telefónica (Madrid)", image: "https://www.prestoiberica.com/wp-content/uploads/2023/10/sede-telefonica-400x284.jpg", category: "Centro de oficinas" },
  { id: 7, title: "Hospital Valle de Hebrón (Barcelona)", image: hospitalVallHebron, category: "Centros sanitarios" },
  { id: 8, title: "Hospital de la Nueva Fe (Valencia)", image: hospitalLaFe, category: "Centros sanitarios" },
  { id: 9, title: "Centro Comercial Oasiz (Madrid)", image: "https://www.prestoiberica.com/wp-content/uploads/2023/10/cc-oasiz-400x284.jpg", category: "Centros de gran tránsito" },
  { id: 10, title: "Wizink Center (Madrid)", image: "https://www.prestoiberica.com/wp-content/uploads/2023/10/wizinkcenter-400x284.jpg", category: "Centros deportivos" },
  { id: 11, title: "Planta de fabricación Pfizer (México)", image: "https://www.prestoiberica.com/wp-content/uploads/2023/10/pfizer-400x284.jpeg", category: "Centros de alta seguridad" },
  { id: 12, title: "Playas de la costa Española", image: "https://www.prestoiberica.com/wp-content/uploads/2017/06/playa-de-el-prat-new-400x284.jpg", category: "Centros de gran tránsito" },
  { id: 13, title: "Hotel Ushuaia (Ibiza)", image: "https://www.prestoiberica.com/wp-content/uploads/2023/10/UshuaiaIbizaBeachHotel-400x284.jpg", category: "Centros hoteleros" },
  { id: 14, title: "Naves logísticas Lidl", image: "https://www.prestoiberica.com/wp-content/uploads/2023/10/naves-lidl-400x284.jpg", category: "Centro de oficinas" },
  { id: 15, title: "Centros logísticos Amazon España", image: "https://www.prestoiberica.com/wp-content/uploads/2023/10/centro-logistico-Amazon-Espana-400x284.jpg", category: "Centro de oficinas" },
  { id: 16, title: "Sede corporativa Grupo Godó (Barcelona)", image: "https://www.prestoiberica.com/wp-content/uploads/2023/10/Grupo-Godo-524x360-1-400x284.jpg", category: "Centro de oficinas" },
  { id: 17, title: "Sede corporativa Endesa (Madrid)", image: "https://www.prestoiberica.com/wp-content/uploads/2023/10/oficinas-endesa-400x284.jpg", category: "Centro de oficinas" },
  { id: 18, title: "Parque temático Puy du Fou (Toledo)", image: "https://www.prestoiberica.com/wp-content/uploads/2023/10/Toledo_Puy_du_Fou-400x284.jpg", category: "Centros de gran tránsito" },
  { id: 19, title: "Hospital Virgen de la Luz (Cuenca)", image: "https://www.prestoiberica.com/wp-content/uploads/2023/10/hspitall-virgen-de-la-luz-400x284.jpg", category: "Centros sanitarios" },
  { id: 20, title: "Hospital Universitario de Salamanca", image: "https://www.prestoiberica.com/wp-content/uploads/2023/10/Hospital-universitario-salamanca-400x284.png", category: "Centros sanitarios" },
  { id: 21, title: "Hospital de Torrecárdenas (Almería)", image: "https://www.prestoiberica.com/wp-content/uploads/2023/10/torrecardenas-400x284.jpg", category: "Centros sanitarios" },
  { id: 22, title: "Fábrica SEAT Martorell", image: "https://www.prestoiberica.com/wp-content/uploads/2023/10/Sede-seat-martorell-400x284.jpg", category: "Centro de oficinas" },
  { id: 23, title: "Estadio Abanca Balaídos (Pontevedra)", image: "https://www.prestoiberica.com/wp-content/uploads/2023/10/estadio-abanca-balaidos-400x284.jpg", category: "Centros deportivos" },
  { id: 24, title: "Estadio Camp Nou (Barcelona)", image: "https://www.prestoiberica.com/wp-content/uploads/2023/10/estadio-camp-nou-400x284.jpg", category: "Centros deportivos" },
  { id: 25, title: "Ciudad Deportiva Sevilla FC (Sevilla)", image: "https://www.prestoiberica.com/wp-content/uploads/2023/10/ciudad-deportiva-sevilla-fc-400x284.jpg", category: "Centros deportivos" },
  { id: 26, title: "Circuito de Montmeló (Barcelona)", image: "https://www.prestoiberica.com/wp-content/uploads/2023/10/circuito-montmelo-motor-400x284.jpg", category: "Centros deportivos" },
  { id: 27, title: "Colegio de los Salesianos (Navarra)", image: "https://www.prestoiberica.com/wp-content/uploads/2023/10/salesianos-pamplona-400x284.png", category: "Centros educativos" },
  { id: 28, title: "Centros deportivos Mcfit (toda España)", image: "https://www.prestoiberica.com/wp-content/uploads/2023/10/mcfit-gimnasio-400x284.jpeg", category: "Centros deportivos" },
  { id: 29, title: "Centros deportivos Viva Gym (toda España)", image: "https://www.prestoiberica.com/wp-content/uploads/2023/10/viva-gym-gimnadsio-400x284.jpeg", category: "Centros deportivos" },
  { id: 30, title: "Centros deportivos Dreamfit (toda España)", image: "https://www.prestoiberica.com/wp-content/uploads/2023/10/centro_dreamfit-400x284.jpg", category: "Centros deportivos" },
  { id: 31, title: "Tiendas Primark (toda España)", image: "https://www.prestoiberica.com/wp-content/uploads/2023/10/primark-400x284.jpg", category: "Centros de gran tránsito" },
  { id: 32, title: "Centros Enjoy Wellness (toda España)", image: "https://www.prestoiberica.com/wp-content/uploads/2023/10/enjoy-oviedo-400x284.jpg", category: "Centros deportivos" },
  { id: 33, title: "Centro Comercial Nevada (Granada)", image: "https://www.prestoiberica.com/wp-content/uploads/2023/10/cc-nevada-400x284.jpg", category: "Centros de gran tránsito" },
  { id: 34, title: "Centro Comercial Las Arenas (Las Palmas)", image: "https://www.prestoiberica.com/wp-content/uploads/2023/10/cc-las-arenas-las-palmas-400x284.jpg", category: "Centros de gran tránsito" },
  { id: 35, title: "Centro Comercial La Cañada (Málaga)", image: "https://www.prestoiberica.com/wp-content/uploads/2023/10/CC-la-canada-malaga-400x284.jpg", category: "Centros de gran tránsito" },
  { id: 36, title: "Camping Delfín Verde (Gerona)", image: "https://www.prestoiberica.com/wp-content/uploads/2023/10/el-delfin-verde-camping-1-400x284.jpg", category: "Centros hoteleros" },
  { id: 37, title: "Aeropuerto de Tenerife Sur", image: "https://www.prestoiberica.com/wp-content/uploads/2023/10/aeropuerto-tenerife-sur-400x284.jpg", category: "Centros de gran tránsito" },
  { id: 38, title: "Aeropuerto de Málaga", image: "https://www.prestoiberica.com/wp-content/uploads/2023/10/Aeropuerto-De-Malaga-Costa-del-Sol-AGP-400x284.jpg", category: "Centros de gran tránsito" },
  { id: 39, title: "Ciudad de la Justicia (Barcelona)", image: ciudadJusticia, category: "Centros de alta seguridad" },
  { id: 40, title: "Centro Comercial La Gavia (Madrid)", image: ccLaGavia, category: "Centros de gran tránsito" },
  { id: 41, title: "Complejo deportivo Futbol City – Five (Valencia)", image: cityFive, category: "Centros deportivos" },
  { id: 42, title: "Universidad de Murcia – Campus El Espinardo", image: "https://www.prestoiberica.com/wp-content/uploads/2017/06/universidad-del-espinardo-murcia-new-400x284.jpg", category: "Centros educativos" },
  { id: 43, title: "Hotel Balneario de Caldea (Andorra)", image: caldeaAndorra, category: "Centros hoteleros" },

  // === GRIFERÍAS GALINDO (únicos) ===
  { id: 44, title: "Hotel Soho Puerto de Santa María (Cádiz)", image: "https://www.griferiasgalindo.com/wp-content/uploads/2023/11/415230505-hotel-soho-cadiz-400x284.jpg", category: "Centros hoteleros" },
  { id: 45, title: "Hotel Punta Prima (Menorca)", image: "https://www.griferiasgalindo.com/wp-content/uploads/2023/11/general-view-hotelpuntaprimamenorca-400x284.jpg", category: "Centros hoteleros" },
  { id: 46, title: "Hotel Tropicana Manacor (Mallorca)", image: "https://www.griferiasgalindo.com/wp-content/uploads/2023/11/Iberostar_Cala_Domingos_-_All_Inclusive-Manacor-Hotel_outdoor_area-14-781799-400x284.jpg", category: "Centros hoteleros" },
  { id: 47, title: "Hotel Saaj (Las Palmas)", image: "https://www.griferiasgalindo.com/wp-content/uploads/2023/11/hotel-saaj-laspalmas-400x284.jpg", category: "Centros hoteleros" },
  { id: 48, title: "Hotel Althay (Fuerteventura)", image: "https://www.griferiasgalindo.com/wp-content/uploads/2023/11/hotel-althayfuerteventura-400x284.jpg", category: "Centros hoteleros" },
  { id: 49, title: "Hotel Perla de Levante (Murcia)", image: "https://www.griferiasgalindo.com/wp-content/uploads/2023/11/L_120120_perladelevante-400x284.jpg", category: "Centros hoteleros" },
  { id: 50, title: "Hotel Camino Real (Málaga)", image: "https://www.griferiasgalindo.com/wp-content/uploads/2023/11/hotel-caminoreal-torremolinos-kuBC-U2134331110487rD-575x323@Diario-Sur-400x284.webp", category: "Centros hoteleros" },
  { id: 51, title: "Hotel Camiral PGA (Gerona)", image: "https://www.griferiasgalindo.com/wp-content/uploads/2023/11/t-pga-catalunya-hotel-camiral-gallery-12660-400x284.jpg", category: "Centros hoteleros" },
  { id: 52, title: "Residencia de estudiantes Valeo (Sevilla)", image: "https://www.griferiasgalindo.com/wp-content/uploads/2023/11/WhatsApp-Image-2022-01-28-at-10.37.53-1024x461-residenciaestudiantessevilla-400x284.jpeg", category: "Viviendas" },
  { id: 53, title: "Residencia de estudiantes Pirámide (Huesca)", image: "https://www.griferiasgalindo.com/wp-content/uploads/2023/11/05082019130816-residenciaestudiantesPiramideHuesca-400x284.jpg", category: "Viviendas" },
  { id: 54, title: "Residencia de estudiantes Life Salamanca", image: "https://www.griferiasgalindo.com/wp-content/uploads/2023/11/Life-salamanca-400x284.jpg", category: "Viviendas" },
  { id: 55, title: "Clínica Mutualia Bilbao (Vizcaya)", image: "https://www.griferiasgalindo.com/wp-content/uploads/2023/11/entrada-clinicamutualia-400x284.jpg", category: "Centros sanitarios" },
  { id: 56, title: "Hospital de Don Benito (Cáceres)", image: "https://www.griferiasgalindo.com/wp-content/uploads/2023/11/Hospital-Don-Benito-Villanueva-400x284.jpg", category: "Centros sanitarios" },
  { id: 57, title: "Hospital de Cuenca", image: "https://www.griferiasgalindo.com/wp-content/uploads/2023/11/hspitall-virgen-de-la-luz-400x284.jpg", category: "Centros sanitarios" },
  { id: 58, title: "Hotel Riberies (Lérida)", image: hotelRiberies, category: "Centros hoteleros" },
  { id: 59, title: "Hotel Rey don Jaime (Castelldefels)", image: hotelReyDonJaime, category: "Centros hoteleros" },
  { id: 60, title: "Hotel Alfa (Barcelona)", image: hotelAlfa, category: "Centros hoteleros" },
  { id: 61, title: "Hotel Vincci La Rábida (Sevilla)", image: "https://www.griferiasgalindo.com/wp-content/uploads/2021/05/hotel-vincci-sevilla-400x284.jpg", category: "Centros hoteleros" },
  { id: 62, title: "Hotel Urquinaona (Barcelona)", image: "https://www.griferiasgalindo.com/wp-content/uploads/2021/05/hotel-urquinaona-400x284.jpg", category: "Centros hoteleros" },
  { id: 63, title: "Hotel Boutique Des Pins (Bedoin, France)", image: hotelDesPins, category: "Centros hoteleros" },
  { id: 64, title: "Hotel Jazz (Barcelona)", image: hotelJazz, category: "Centros hoteleros" },
  { id: 65, title: "Finca Las Marías", image: "https://www.griferiasgalindo.com/wp-content/uploads/2021/05/Captura-de-pantalla-2018-06-18-a-las-11.56.09-400x284.png", category: "Viviendas" },

  // === PRESTO EQUIP (únicos) ===
  { id: 66, title: "Hotel Canopy by Hilton (Madrid)", image: "https://www.prestoequip.com/wp-content/uploads/2023/11/484102683-hotelcanopybyhiltonmadrid-400x284.jpg", category: "Centros hoteleros" },
  { id: 67, title: "Residencia de ancianos Cabrerizos (Salamanca)", image: "https://www.prestoequip.com/wp-content/uploads/2023/11/teso-compressed-cabrerizos-400x266.jpg", category: "Residencias" },
  { id: 68, title: "Centro residencial Taliarte (Las Palmas)", image: "https://www.prestoequip.com/wp-content/uploads/2023/11/img_residenciataliarteprotesta_240512_1_Medium-compressed.jpg", category: "Residencias" },
  { id: 69, title: "Residencia de ancianos Orpea Pamplona (Navarra)", image: "https://www.prestoequip.com/wp-content/uploads/2023/11/ORPEA-PAMPLONA-vista-01-e1579867946133-400x284.jpg", category: "Residencias" },
  { id: 70, title: "Residencias de ancianos Domusvi (toda España)", image: "https://www.prestoequip.com/wp-content/uploads/2023/11/domusvi_albufera_rcia_cd-400x284.jpg", category: "Residencias" },
  { id: 71, title: "Campus de Vicálvaro de la URJC (Madrid)", image: "https://www.prestoequip.com/wp-content/uploads/2018/01/unnamed-400x284.jpg", category: "Centros educativos" },
  { id: 72, title: "Residencias del Grupo Geriatros", image: geriatros, category: "Residencias" },
  { id: 73, title: "Hospital Virgen de la Paloma (Madrid)", image: hospitalVirgenPaloma, category: "Centros sanitarios" },
  { id: 74, title: "Hotel Dome (Madrid)", image: hotelDome, category: "Centros hoteleros" },
  { id: 75, title: "El Corte Inglés (Varios centros)", image: elCorteIngles, category: "Centros de gran tránsito" },
  { id: 76, title: "Residencia de la Santísima Trinidad (Ávila)", image: "https://www.prestoequip.com/wp-content/uploads/2018/01/residencia-sotillo-400x284.jpg", category: "Residencias" },
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
