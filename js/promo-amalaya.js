const locales = document.getElementById('locales')
const deli = document.getElementById('deli')
const templateCard = document.getElementById('template-card').content
const delivery = document.getElementById('delivery').content
const fragment = document.createDocumentFragment()

//Filtro por Barrio
const selectBarrio = document.getElementById('selectBarrio')

let vinotecasAmalaya = [
  //Zona Centro
  {
    id: 1,
    vinoteca: "Queseria sin un vino",
    direccion: "Pte. Roca 1518",
    ir: "https://goo.gl/maps/5ryrFkjuSeP9CKvr5",
    barrio: "Zona Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/queseria.png"
  },
  {
    id: 2,
    vinoteca: "La Fiambretta",
    direccion: "Laprida 1301 esq. 3 de febrero ",
    ir: "https://goo.gl/maps/guPuoTyQECR5jRvq6",
    barrio: "Zona Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/LaFiabrettaLaprida.png"
  },
  {
      id: 3,
      vinoteca: "Rolón",
      direccion: "Francia esq. Zeballos",
      ir: "https://goo.gl/maps/5x48qFayMFQwCvz47",
      barrio: "Zona Centro",
      bodega: "amalaya",
      thumbnailUrl: "img/vinotecas/amalaya/random5.png"
    },
  {
    id: 4,
    vinoteca: "La Fiambretta - Mendoza esq. Italia",
    direccion: "Mendoza esq. Italia",
    ir: "https://g.page/lafiambretta?share",
    barrio: "Zona Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/LaFiabrettaMendoza.png"
  },
  {
    id: 5,
    vinoteca: "El Camino",
    direccion: "Moreno 1039",
    ir: "https://g.page/el-camino-vinoteca?share",
    barrio: "Zona Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/elcamino.png"
  },
  {
    id: 6,
    vinoteca: "De Buena Madera",
    direccion: "Italia 954",
    ir: "https://goo.gl/maps/PdZsZPX2HeZZjatBA",
    barrio: "Zona Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/debuenamadera.png"
  },
  {
    id: 7,
    vinoteca: "La Gourmetería",
    direccion: "Tucumán 1322",
    ir: "https://goo.gl/maps/6Qz9wDMjX8bU8dAq7",
    barrio: "Zona Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/lagourmeteria"
  },
  {
    id: 8,
    vinoteca: "Vinoteca Campos",
    direccion: "Tucumán 1754",
    ir: "https://goo.gl/maps/qqCsjrsd6Q7qMnrt9",
    barrio: "Zona Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/random4"
  },
  {
    id: 9,
    vinoteca: "La Casa de los Vinos",
    direccion: "San Lorenzo esq. Pte. Roca",
    ir: "https://g.page/lacasadelosvinosrosario?share",
    barrio: "Zona Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/LaCasaDeLosVinos.png"
  },
  {
    id: 10,
    vinoteca: "Langosco",
    direccion: "Córdoba 1725",
    ir: "https://g.page/LANGOSCO-VINOS?share",
    barrio: "Zona Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/langosco"
  },
  {
    id: 11,
    vinoteca: "Positano Vinos",
    direccion: "Rioja 1629",
    ir: "https://g.page/PositanoVinos?share",
    barrio: "Zona Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/positano-rioja.png"
  },
  {
    id: 12,
    vinoteca: "Vin  Rouge",
    direccion: "Mendoza 319",
    ir: "https://g.page/vinrougevinoteca?share",
    barrio: "Zona Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/vinrouge"
  },
  {
    id: 13,
    vinoteca: "Cavanova",
    direccion: "1ero de Mayo 1349",
    ir: "https://goo.gl/maps/56CRma3jRG7tmEBL6",
    barrio: "Zona Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/cavanova.png"
  },
  {
    id: 14,
    vinoteca: "Locos por el Vino",
    direccion: "Pellegrini 1624",
    ir: "https://goo.gl/maps/GkhDHjCuu4nFwpXN8",
    barrio: "Zona Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/random4"
  },
  {
    id: 15,
    vinoteca: "Spazio Delicatessen",
    direccion: "Salta 1591",
    ir: "https://goo.gl/maps/yu2Y7HJGf25zRNJk9",
    barrio: "Zona Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/random1.jpg"
  },
  {
    id: 16,
    vinoteca: "Que Placer que Vino",
    direccion: "Maipú 997",
    ir: "https://goo.gl/maps/krQbWAzAp9NKuJSVA",
    barrio: "Zona Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/random2.jpeg"
  },
  {
    id: 17,
    vinoteca: "La Barrica",
    direccion: "Urquiza 1187",
    ir: "https://g.page/LaBarricaVineria?share",
    barrio: "Zona Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/labarrica.png"
  },
  {
    id: 18,
    vinoteca: "Placeres",
    direccion: "Moreno 499",
    ir: "https://goo.gl/maps/vRXWDCcKVWoJxirHA",
    barrio: "Zona Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/placeres"
  },
  {
    id: 19,
    vinoteca: "Vinicius",
    direccion: "Mitre esquina Cochabamba ",
    ir: "https://g.page/vinotecavinicius?share",
    barrio: "Zona Macro Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/vinicius"
  },
  {
    id: 20,
    vinoteca: "Don Baco - Casa de Vinos",
    direccion: "9 de julio 768",
    ir: "https://g.page/don-baco-casa-de-vinos?share",
    barrio: "Zona Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/vinotecabaco"
  },
  {
    id: 21,
    vinoteca: "De Copas - Wine Store",
    direccion: "9 de julio 768",
    ir: "https://g.page/don-baco-casa-de-vinos?share",
    barrio: "Zona Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/random1.jpg"
  },
  {
    id: 22,
    vinoteca: "555 Wines",
    direccion: "San Juan 555",
    ir: "https://goo.gl/maps/9BGNn4x6fPbjTuS28",
    barrio: "Zona Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/555wines"
  },
  {
    id: 23,
    vinoteca: "El Viduño",
    direccion: "Mendoza esquina Maipú",
    ir: "https://g.page/vinotecaelviduno?share",
    barrio: "Zona Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/elvidunio.png"
  },
  {
    id: 24,
    vinoteca: "Al Vino Vino",
    direccion: "Av. Pellegrini 591",
    ir: "https://g.page/al-vino-vino-rosario?share",
    barrio: "Zona Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/alvinovinopell.png"
  },
  {
    id: 25,
    vinoteca: "Al Vino Vino",
    direccion: "Urquiza 1010",
    ir: "https://goo.gl/maps/sdA9zcfVeyvfhKebA",
    barrio: "Zona Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/alvinovino"
  },
  //Zona Macro Centro
  {
    id: 26,
    vinoteca: "Mediterráneo",
    direccion: "Cafferata 356",
    ir: "https://goo.gl/maps/oAPTesEy1HATS8jZ7",
    barrio: "Zona Macro Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/mediterraneo"
  },
  {
    id: 27,
    vinoteca: "Eleven Copas",
    direccion: "Corientes 1919",
    ir: "https://g.page/eleven-copas?share",
    barrio: "Zona Macro Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/elevencopas.png"
  },
  {
    id: 28,
    vinoteca: "Etiqueta Negra",
    direccion: "Viamonte 661",
    ir: "https://goo.gl/maps/ijYxWkvTZMkTH2Pf8",
    barrio: "Zona Macro Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/random4"
  },
  {
    id: 29,
    vinoteca: "Vinicius",
    direccion: "Mitre esquina Cochabamba ",
    ir: "https://g.page/vinotecavinicius?share",
    barrio: "Zona Macro Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/vinicius"
  },
  {
    id: 30,
    vinoteca: "ADN Autoservicio",
    direccion: "Iriondo 1498",
    ir: "https://goo.gl/maps/ZhQWFubtSZxxeKF17",
    barrio: "Zona Macro Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/adn-autoservicio"
  },
  {
    id: 31,
    vinoteca: "Alfa Supermercados",
    direccion: "3 de Febrero 2480",
    ir: "https://g.page/alfasupermercados?share",
    barrio: "Zona Macro Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/alfa-supermercados-macro"
  },
  {
    id: 32,
    vinoteca: "Birra Birra",
    direccion: "Av. Francia 1499",
    ir: "https://goo.gl/maps/rLao7jbzig3KEU698",
    barrio: "Zona Macro Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/random2.jpeg"
  },
  {
    id: 33,
    vinoteca: "Don Giovanni",
    direccion: "Pichincha 120",
    ir: "https://goo.gl/maps/4eYSHkZ6FYzHF48JA",
    barrio: "Zona Macro Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/dongiovanni"
  },
  {
    id: 34,
    vinoteca: "Vinoteca Peyrano",
    direccion: "Falucho 730",
    ir: "https://goo.gl/maps/otDzJ6DPjmaEaw5PA",
    barrio: "Zona Macro Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/random4"
  },
  {
    id: 35,
    vinoteca: "Vinoteca Buenos Aires",
    direccion: "Buenos Aires 1920",
    ir: "https://goo.gl/maps/vUbYNHhhTFWvcEeM7",
    barrio: "Zona Macro Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/buenosaires"
  },
  {
    id: 36,
    vinoteca: "Agenor Deli & Vinos",
    direccion: "Salta 2922",
    ir: "https://g.page/AgenorDeli?share",
    barrio: "Zona Macro Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/agenor"
  },
  {
    id: 37,
    vinoteca: "Rosario Vinos Exclusivos",
    direccion: "Pasco 1501",
    ir: "https://goo.gl/maps/2KxPH9C6UvVK2kt26",
    barrio: "Zona Macro Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/vinosexclusivos.png"
  },
  //Zona Oeste
  {
    id: 34,
    vinoteca: "La Masía",
    direccion: "Av. Provincias Unidas 502",
    ir: "https://goo.gl/maps/32LzUBdkasSrMtZu8",
    barrio: "Zona Oeste",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/lamasia1"
  },
  {
    id: 35,
    vinoteca: "La Masía",
    direccion: "Av. Provincias Unidas 1254",
    ir: "https://goo.gl/maps/32LzUBdkasSrMtZu8",
    barrio: "Zona Oeste",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/lamasia1"
  },
  {
    id: 36,
    vinoteca: "La Masía",
    direccion: "Av. Pellegrini 6345",
    ir: "https://goo.gl/maps/3uS7NZ4a88Eo3DrL7",
    barrio: "Zona Oeste",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/lamasia2"
  },
  {
    id: 37,
    vinoteca: "La Masía",
    direccion: "Juan José Paso 7385",
    ir: "https://goo.gl/maps/KQhiH4zVLNvy4Grg6",
    barrio: "Zona Oeste",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/random1.jpg"
  },
  //Zona Sur
  {
    id: 38,
    vinoteca: "Supermercados Alfa",
    direccion: "Regimiento 11 y Castro Barros",
    ir: "https://goo.gl/maps/6ugEQW1hfqDh6QnC6",
    barrio: "Zona Sur",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/supermercadosalfa"
  },
  {
    id: 39,
    vinoteca: "Supermercados Alfa",
    direccion: "San Martín 4935",
    ir: "https://goo.gl/maps/K6sGCRfZg6fLHiid6",
    barrio: "Zona Sur",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/supermercadosalfa"
  },
  {
    id: 40,
    vinoteca: "Catas de Garaje",
    direccion: "Arijón 1375",
    ir: "https://g.page/catasdegarage?share",
    barrio: "Zona Sur",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/catasdegaraje"
  },
  {
    id: 41,
    vinoteca: "Cepas del Sur",
    direccion: "San Martín 2963",
    ir: "https://goo.gl/maps/7w4X2KxzAETrLj958",
    barrio: "Zona Sur",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/cepasdelsur"
  },
  {
    id: 42,
    vinoteca: "La Botiga",
    direccion: "Regimiento 11 - 818, Rosario",
    ir: "https://goo.gl/maps/bU255QoiKtUrJUvh8",
    barrio: "Zona Sur",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/random2.jpeg"
  },
  //Zona Funes y Fisherton
  {
    id: 43,
    vinoteca: "Positano Vinos",
    direccion: "Av. Eva Perón 7915",
    ir: "https://g.page/PositanoVinos-Fisherton?share",
    barrio: "Zona Funes y Fisherton",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/positanofisherton"
  },
  {
    id: 44,
    vinoteca: "Autoservicio Arlequín",
    direccion: "Córdoba 1984, Funes",
    ir: "https://goo.gl/maps/C1gXXDPNspRMcvkY8",
    barrio: "Zona Funes y Fisherton",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/arlequin"
  },
  // Zona Arroyo Seco
  {
    id: 45,
    vinoteca: "Lastorta",
    direccion: "Gral. Mitre 211",
    ir: "https://goo.gl/maps/xt3QQfsK1YAm22tM9",
    barrio: "Zona Arroyo Seco",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/entrecopas"
  },
  // Zona Totoras
  {
    id: 46,
    vinoteca: "La Vinoteca",
    direccion: "25 de Mayo 1396",
    ir: "https://goo.gl/maps/hdigwhbCdRGdMygk8",
    barrio: "Zona Totoras",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/lavinoteca"
  },
  //Zona Villa Constitución
  {
    id: 47,
    vinoteca: "Entre Copas",
    direccion: "Dorrego 1101 - Villa Constitución",
    ir: "https://g.page/entrecopasenoteca?share",
    barrio: "Zona Villa Constitucion",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/entrecopas"
  },
  //Zona San Lorenzo
  {
    id: 48,
    vinoteca: "Campos",
    direccion: "Belgrano 776 - San Lorenzo",
    ir: "https://goo.gl/maps/yjed3Pvx3cMbFtK26",
    barrio: "Zona San Lorenzo",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/vinoteca-campos"
  },
  //Zona Santa Fe

  {
    id: 50,
    vinoteca: "Don Juan Jacinto",
    direccion: "25 de mayo 3601 - Santa Fe",
    ir: "https://goo.gl/maps/YWvGh1k8cA8CR6zT7",
    barrio: "Zona Santa Fe",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/donjuanjacinto2"
  },
  {
    id: 51,
    vinoteca: "Don Juan Jacinto",
    direccion: "Aristóbulo del Valle 6342 - Santa Fe",
    ir: "https://goo.gl/maps/bLxz4psyonqq7xMJ9",
    barrio: "Zona Santa Fe",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/donjuanjacinto1"
  },
  {
    id: 52,
    vinoteca: "Exquisitos Placeres",
    direccion: "Balcarce 1576 - Santa Fe",
    ir: "https://goo.gl/maps/pVU8Mw6Bfx6J9NzAA",
    barrio: "Zona Santa Fe",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/exquisitosplaceres"
  },
  {
    id: 53,
    vinoteca: "La Cueva de Francia",
    direccion: "Francia 3490 - Santa Fe",
    ir: "https://goo.gl/maps/q4eMXN8UEwyswmdo8",
    barrio: "Zona Santa Fe",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/lacueva"
  },
  {
    id: 54,
    vinoteca: "Vinopolis",
    direccion: "Santiago del Estero 3166 - Santa Fe",
    ir: "https://goo.gl/maps/8fyBbC1XE6zpQtWL7",
    barrio: "Zona Santa Fe",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/vinopolis"
  },
  {
    id: 55,
    vinoteca: "Vinoteca Filomena",
    direccion: "San Lorenzo 3021 - Santa Fe",
    ir: "https://goo.gl/maps/N2dUEMQG2ifRVeYz7",
    barrio: "Zona Santa Fe",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/filomena"
  },
  //Zona Santo Tomé
  {
    id: 56,
    vinoteca: "Entre Copas - Almacén de Vinos",
    direccion: "Macias 2092 - Santo Tomé",
    ir: "https://goo.gl/maps/NabVLXmqtG6bFsVi9",
    barrio: "Zona Santo Tome",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/entrecopassantotome"
  },
  //Zona Rafaela
  {
    id: 58,
    vinoteca: "Los Cortesanos",
    direccion: "Alvear 281, Rafaela",
    ir: "https://g.page/LosCortesanos?share",
    barrio: "Zona Rafaela",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/loscortesanos"
  },
  //Zona Roldán

  //Zona Esperanza
  {
    id: 59,
    vinoteca: "Los Cortesanos",
    direccion: "Aarón Castellanos 1802, Esperanza",
    ir: "https://g.page/VinotecaLosCortesanos?share",
    barrio: "Zona Esperanza",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/loscortesanosesperanza"
  },
  //Zona Entre Rios
  {
    id: 60,
    vinoteca: "Vinoteca Porto Vino",
    direccion: "Viale, Entre Rios - 25 de Mayo",
    ir: "https://goo.gl/maps/SmpEoFvgbVdrirf48",
    barrio: "Zona Entre Rios",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/random4"
  },
  //Rufino
  {
    id: 61,
    vinoteca: "Distribuidora Sale Hermanos",
    direccion: "9 de julio 286 - Rufino",
    ir: "https://goo.gl/maps/SmpEoFvgbVdrirf48",
    barrio: "Zona Rufino",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/random4"
  },
  //Venado Tuerto
    
    {
      id: 62,
      vinoteca: "Mundo Bebidas",
      direccion: "San Martin 1045 - Venado Tuerto",
      ir: "https://goo.gl/maps/i9YKW9AaYd3A3fcy6",
      barrio: "Zona Venado Tuerto",
      bodega: "amalaya",
      thumbnailUrl: "img/vinotecas/amalaya/random2.jpeg"
    },
    {
      id: 63,
      vinoteca: "Dionisio",
      direccion: "San Martin esq. Mitre - Venado Tuerto",
      ir: "https://goo.gl/maps/BaPZXbQQtPcxyXEfA",
      barrio: "Zona Venado Tuerto",
      bodega: "amalaya",
      thumbnailUrl: "img/vinotecas/amalaya/random4"
    },
    {
      id: 64,
      vinoteca: "Dionisio",
      direccion: "Brown 799 - Venado Tuerto",
      ir: "https://goo.gl/maps/a3xHekrh6kAoFFNY6",
      barrio: "Zona Venado Tuerto",
      bodega: "amalaya",
      thumbnailUrl: "img/vinotecas/amalaya/random5"
    },
    {
      id: 65,
      vinoteca: "Terranova",
      direccion: "Moreno 302 - Venado Tuerto",
      ir: "https://goo.gl/maps/eQ4Vow6Y86ozWFDa8",
      barrio: "Zona Venado Tuerto",
      bodega: "amalaya",
      thumbnailUrl: "img/vinotecas/amalaya/random4"
    },
  //Galvez
  {
    id: 66,
    vinoteca: "Terroir",
    direccion: "Nazareno Rossi 868, Gálvez",
    ir: "https://goo.gl/maps/knwLs7avFKDAFsw28",
    barrio: "Zona Galvez",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/random2.jpeg"
  },
  //Paraná
  {
    id: 67,
    vinoteca: "El Palacio",
    direccion: "Gral. Pascual Echague 814 - Paraná",
    ir: "https://goo.gl/maps/UBYeewHiq7KT2pXL9",
    barrio: "Zona Parana",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/random2.jpeg"
  },
  {
    id: 68,
    vinoteca: "Garay",
    direccion: "Buenos Aires 481, Paraná",
    ir: "https://goo.gl/maps/nWcDDD1TiNwk6MQc7",
    barrio: "Zona Parana",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/random2.jpeg"
  },
  //Casilda
  {
    id: 69,
    vinoteca: "Dionisio Vinos & Afines",
    direccion: "San Juan 2747 - Casilda",
    ir: "https://goo.gl/maps/aZh3gp2fPpDtGReM7",
    barrio: "Zona Casilda",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/random1.jpg"
  },
  //Las Rosas
  {
    id: 70,
    vinoteca: "Los Cocos",
    direccion: "Belgrano 765, Las Rosas",
    ir: "https://goo.gl/maps/u1QpNe1U7S8MF8kK7",
    barrio: "Zona Las Rosas",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/random2.jpeg"
  },
  //San Nicolás
  {
    id: 71,
    vinoteca: "Vinoteca Ofelia",
    direccion: "Maipú 17, San Ncolás",
    ir: "https://goo.gl/maps/TqEpuBtqaLenjPdu7",
    barrio: "Zona San Nicolas",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/random2.jpeg"
  },
]

let vinotecasDelivery = [
  {
    id: 72,
    vinoteca: "Cepa Negra",
    direccion: "Delivery en Rosario, Fisherton, Funes y Roldán",
    contactar: "https://bit.ly/373LoKa",
    barrio: "Zona Delivery",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/random2.jpeg"
  },
  {
    id: 73,
    vinoteca: "Vinoteca Campos",
    direccion: "Delivery en Fisherton y Funes",
    contactar: "https://www.vinotecacampos.com.ar/la-vinoteca/",
    barrio: "Zona Delivery",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/random1.jpg"
  },
  {
    id: 74,
    vinoteca: "Lo de Tere",
    direccion: "Delivery en Fisherton y Centro Rosario",
    contactar: "https://instagram.com/teresita_roveri?utm_medium=copy_link",
    barrio: "Zona Delivery",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/random5"
  },
  {
    id: 75,
    vinoteca: "La Champagnería",
    direccion: "Delivery en Rosario",
    contactar: "https://www.instagram.com/la_champaneria/?hl=es",
    barrio: "Zona Delivery",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/random6"
  },
]

selectBarrio.addEventListener('change', () => {
  //console.log(selectBarrio.value)
  switch (selectBarrio.value) {
    case "Todas las vinotecas":
      pintarVinotecas(vinotecasAmalaya);
      break;
    case "Zona Centro":
      pintarVinotecas(vinotecasAmalaya.filter((el) => el.barrio === 'Zona Centro'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Macro Centro":
      pintarVinotecas(vinotecasAmalaya.filter((el) => el.barrio === 'Zona Macro Centro'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Norte":
      pintarVinotecas(vinotecasAmalaya.filter((el) => el.barrio === 'Zona Norte'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Sur":
      pintarVinotecas(vinotecasAmalaya.filter((el) => el.barrio === 'Zona Sur'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Oeste":
      pintarVinotecas(vinotecasAmalaya.filter((el) => el.barrio === 'Zona Oeste'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Funes y Fisherton":
      pintarVinotecas(vinotecasAmalaya.filter((el) => el.barrio === 'Zona Funes y Fisherton'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Arroyo Seco":
      pintarVinotecas(vinotecasAmalaya.filter((el) => el.barrio === 'Zona Arroyo Seco'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Totoras":
      pintarVinotecas(vinotecasAmalaya.filter((el) => el.barrio === 'Zona Totoras'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona San Lorenzo":
      pintarVinotecas(vinotecasAmalaya.filter((el) => el.barrio === 'Zona San Lorenzo'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Villa Constitucion":
      pintarVinotecas(vinotecasAmalaya.filter((el) => el.barrio === 'Zona Villa Constitucion'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Santa Fe":
      pintarVinotecas(vinotecasAmalaya.filter((el) => el.barrio === 'Zona Santa Fe'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Santo Tome":
      pintarVinotecas(vinotecasAmalaya.filter((el) => el.barrio === 'Zona Santo Tome'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Parana":
      pintarVinotecas(vinotecasAmalaya.filter((el) => el.barrio === 'Zona Parana'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Santa Teresa":
      pintarVinotecas(vinotecasAmalaya.filter((el) => el.barrio === 'Zona Santa Teresa'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Rafaela":
      pintarVinotecas(vinotecasAmalaya.filter((el) => el.barrio === 'Zona Rafaela'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Las Rosas":
      pintarVinotecas(vinotecasAmalaya.filter((el) => el.barrio === 'Zona Las Rosas'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Roldan":
      pintarVinotecas(vinotecasAmalaya.filter((el) => el.barrio === 'Zona Roldan'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Esperanza":
      pintarVinotecas(vinotecasAmalaya.filter((el) => el.barrio === 'Zona Esperanza'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Entre Rios":
      pintarVinotecas(vinotecasAmalaya.filter((el) => el.barrio === 'Zona Entre Rios'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Rufino":
      pintarVinotecas(vinotecasAmalaya.filter((el) => el.barrio === 'Zona Rufino'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Venado Tuerto":
      pintarVinotecas(vinotecasAmalaya.filter((el) => el.barrio === 'Zona Venado Tuerto'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Casilda":
      pintarVinotecas(vinotecasAmalaya.filter((el) => el.barrio === 'Zona Casilda'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Galvez":
      pintarVinotecas(vinotecasAmalaya.filter((el) => el.barrio === 'Zona Galvez'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona San Nicolas":
      pintarVinotecas(vinotecasAmalaya.filter((el) => el.barrio === 'Zona San Nicolas'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;   
    case "Zona Delivery":
      Delivery(vinotecasDelivery.filter((el) => el.barrio === 'Zona Delivery'));
      pintarVinotecas(vinotecasAmalaya.filter((el) => el.barrio === ''));
      break;
  }
})

pintarVinotecas(vinotecasAmalaya)
Delivery(vinotecasDelivery)

function pintarVinotecas(array) {
  locales.innerHTML = ''
  array.forEach(vinoteca => {
    //  console.log(vinoteca)
    templateCard.querySelector('h5').textContent = vinoteca.vinoteca
    templateCard.querySelector('p').textContent = vinoteca.direccion
    templateCard.querySelector('img').setAttribute("src", vinoteca.thumbnailUrl)
    templateCard.querySelector('a').setAttribute("href", vinoteca.ir)

    const clone = templateCard.cloneNode(true)
    fragment.appendChild(clone)
  })
  locales.appendChild(fragment)
}

function Delivery(array) {
  deli.innerHTML = ''
  array.forEach(vinotecaDeli => {
    console.log(vinotecaDeli)
    delivery.querySelector('h5').textContent = vinotecaDeli.vinoteca
    delivery.querySelector('p').textContent = vinotecaDeli.direccion
    delivery.querySelector('img').setAttribute("src", vinotecaDeli.thumbnailUrl)
    delivery.querySelector('a').setAttribute("href", vinotecaDeli.ir)

    const clone = delivery.cloneNode(true)
    fragment.appendChild(clone)
  })
  deli.appendChild(fragment)
}