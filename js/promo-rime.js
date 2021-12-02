const locales = document.getElementById('locales')
const deli = document.getElementById('deli')
const templateCard = document.getElementById('template-card').content
const delivery = document.getElementById('delivery').content
const fragment = document.createDocumentFragment()
//Filtro por Barrio
const selectBarrio = document.getElementById('selectBarrio')

let vinotecasRime = [
  //Rosario Centro
  {
    id: 1,
    vinoteca: "Los Vinos de Stella",
    direccion: "Galería Córdoba - Córdoba 1080 local N° 18",
    ir: "https://goo.gl/maps/1NVPFS9obN71ZoNAA",
    barrio: "Zona Centro",
    bodega: "rime",
    thumbnailUrl: "img/vinotecas/rime/losvinosdestella.png"
  },
  {
    id: 2,
    vinoteca: "La Fiambretta",
    direccion: "Laprida 1301 esq. 3 de febrero ",
    ir: "https://goo.gl/maps/guPuoTyQECR5jRvq6",
    barrio: "Zona Centro",
    bodega: "rime",
    thumbnailUrl: "img/vinotecas/rime/LaFiabrettaLaprida.png"
  },
  {
    id: 3,
    vinoteca: "La Fiambretta - Mendoza esq. Italia",
    direccion: "Mendoza esq. Italia",
    ir: "https://g.page/lafiambretta?share",
    barrio: "Zona Centro",
    bodega: "rime",
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
    id: 10,
    vinoteca: "Langosco",
    direccion: "Córdoba 1725",
    ir: "https://g.page/LANGOSCO-VINOS?share",
    barrio: "Zona Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/langosco"
  },
  {
    id: 8,
    vinoteca: "Vinoteca Ruta 40",
    direccion: "Buenos Aires 1490",
    ir: "https://goo.gl/maps/2LLCRJQ8m7Z2bGoX9",
    barrio: "Zona Centro",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/vinotecaruta40.jpeg"
  },
  {
    id: 6,
    vinoteca: "La Barrica",
    direccion: "Urquiza 1187",
    ir: "https://g.page/LaBarricaVineria?share",
    barrio: "Zona Centro",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/labarrica.png"
  },
  {
    id: 6,
    vinoteca: "Club de Sabores",
    direccion: "Buenos Aires 996",
    ir: "https://goo.gl/maps/GEMaKzo568oEd7x68",
    barrio: "Zona Centro",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/random4"
  },
  {
    id: 6,
    vinoteca: "Casa Burns",
    direccion: "Moreno 873 - Local 7",
    ir: "https://goo.gl/maps/xvrLXBcwt6H7vPhM6",
    barrio: "Zona Centro",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/rime/random2.jpeg"
  },
  // Zona macro Centro
  {
    id: 9,
    vinoteca: "Rincón Fonseca",
    direccion: "España 1921",
    ir: "https://goo.gl/maps/CdPt7acFywSBe69w9",
    barrio: "Zona Macro Centro",
    bodega: "rime",
    thumbnailUrl: "img/vinotecas/canale/rinconfonseca.png"
  },
  {
    id: 10,
    vinoteca: "Vino y se quedó",
    direccion: "Cafferata 1419",
    ir: "https://goo.gl/maps/SQatrb96NNtCZe3w7",
    barrio: "Zona Macro Centro",
    bodega: "rime",
    thumbnailUrl: "img/vinotecas/canale/vinoysequedo"
  },
  {
    id: 11,
    vinoteca: "Etiqueta Negra",
    direccion: "Viamonte 661",
    ir: "https://goo.gl/maps/ijYxWkvTZMkTH2Pf8",
    barrio: "Zona Macro Centro",
    bodega: "rime",
    thumbnailUrl: "img/vinotecas/amalaya/random4"
  },
  {
    id: 12,
    vinoteca: "El Gran Tonel",
    direccion: "Mendoza 3674",
    ir: "https://goo.gl/maps/kxF32zWHB5p47T498",
    barrio: "Zona Macro Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/rime/elgrantonel.png"
  },
  {
    id: 18,
    vinoteca: "Mediterráneo",
    direccion: "Cafferata 356",
    ir: "https://goo.gl/maps/oAPTesEy1HATS8jZ7",
    barrio: "Zona Macro Centro",
    bodega: "canale",
    thumbnailUrl: "img/vinotecas/canale/mediterraneo"
  },
  //Zona Sur
  {
    id: 45,
    vinoteca: "Catas de Garaje",
    direccion: "Arijón 1375",
    ir: "https://g.page/catasdegarage?share",
    barrio: "Zona Sur",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/catasdegaraje"
  },
  {
    id: 20,
    vinoteca: "Fiambrería Amenabar",
    direccion: "Rueda 2165",
    ir: "https://goo.gl/maps/JuyyaFftSMTZw8KF8",
    barrio: "Zona Sur",
    bodega: "canale",
    thumbnailUrl: "img/vinotecas/canale/amenabar.png"
  },
  //Zona Norte
  {
    id: 20,
    vinoteca: "Puro Vino",
    direccion: "Baigorria 601",
    ir: "https://goo.gl/maps/4cW4tiv5AatEAZ819",
    barrio: "Zona Norte",
    bodega: "canale",
    thumbnailUrl: "img/vinotecas/rime/purovino.png"
  },
  //Granadero Baigorria
  {
    id: 12,
    vinoteca: "Chateau Du Vin",
    direccion: "Local 3, Complejo Tifón Baigorria - Julio Argentino Roca 650, Granadero Baigorria",
    ir: "https://goo.gl/maps/Wdd2A9htPVdAk1BT9",
    barrio: "Zona Granadero Baigorria",
    bodega: "rime",
    thumbnailUrl: "img/vinotecas/rime/chateau.png"
  },
  ,
  // Rafaela
  {
    id: 58,
    vinoteca: "Los Cortesanos",
    direccion: "Alvear 281, Rafaela",
    ir: "https://g.page/LosCortesanos?share",
    barrio: "Zona Rafaela",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/loscortesanos"
  },
  {
    id: 58,
    vinoteca: "Sabores del Sol",
    direccion: "Moreno 348, Rafaela",
    ir: "https://goo.gl/maps/hZ7agPFKUcGNkg2q7",
    barrio: "Zona Rafaela",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/rime/saboresdelsol.png"
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
  //Santa Fe
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
  //Zona Santo Tomé
    {
      id: 34,
      vinoteca: "Entre Copas - Almacén de Vinos",
      direccion: "Macias 2092 - Santo Tomé",
      ir: "https://goo.gl/maps/NabVLXmqtG6bFsVi9",
      barrio: "Zona Santo Tome",
      bodega: "casarena",
      thumbnailUrl: "img/vinotecas/casarena/entrecopassantotome"
  },
   //Santa Teresa
   {
    id: 34,
    vinoteca: "Cerveteca",
    direccion: "San Martin 846",
    ir: "https://goo.gl/maps/i2ay6TzT4En7MY9BA",
    barrio: "Zona Santa Teresa",
    bodega: "canale",
    thumbnailUrl: "img/vinotecas/canale/random2.jpeg"
  },
    //Reconquista
    {
      id: 7,
      vinoteca: "La Cava",
      direccion: "Ituzaingo 1547",
      ir: "https://goo.gl/maps/RsW64ugCJohNYZqi8",
      barrio: "Zona Reconquista",
      bodega: "lagarde",
      thumbnailUrl: "img/vinotecas/rime/lacava.png"
    },
      //Zona Villa Constitucion
  {
    id: 15,
    vinoteca: "Dionisio",
    direccion: "San Martín 715, Villa Constitución",
    ir: "https://goo.gl/maps/XT1HtKEK4mU6McbA7",
    barrio: "Zona Villa Constitucion",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/dionisio.png"
  },
  {
    id: 16,
    vinoteca: "Entre Copas",
    direccion: "Dorrego 1101 - Villa Constitución",
    ir: "https://g.page/entrecopasenoteca?share",
    barrio: "Zona Villa Constitucion",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/entrecopas"
  },
  //Funes y Fisherton
  {
    id: 26,
    vinoteca: "Casa Prada",
    direccion: "Shopping Fisherton Plaza local 43",
    ir: "https://goo.gl/maps/NWzZDV1EndumUU5q9",
    barrio: "Zona Funes y Fisherton",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/prada.png"
  },
  {
    id: 52,
    vinoteca: "MyM Distribuidora",
    direccion: "Mitre 2599 - Funes",
    ir: "https://goo.gl/maps/gh9LDqSjwkfCk6Uu5",
    barrio: "Zona Funes y Fisherton",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/random3.png"
  },
  //Roldan
  {
    id: 43,
    vinoteca: "Que buena idea",
    direccion: "Independencia 234, Roldán",
    ir: "https://goo.gl/maps/8gseR4nMqT6qhMoB8",
    barrio: "Zona Roldan",
    bodega: "canale",
    thumbnailUrl: "img/vinotecas/canale/quebuenaidea"
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
  //Esperanza
  {
    id: 59,
    vinoteca: "Los Cortesanos",
    direccion: "Aarón Castellanos 1802, Esperanza",
    ir: "https://g.page/VinotecaLosCortesanos?share",
    barrio: "Zona Esperanza",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/loscortesanosesperanza"
  },
  //entre Rios
  {
    id: 59,
    vinoteca: "El Bebedero",
    direccion: "A. del valle 5381, Gualeguaychu",
    ir: "https://goo.gl/maps/CUN2jm7fpQbPBti79",
    barrio: "Zona Entre Rios",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/loscortesanosesperanza"
  },
  {
    id: 59,
    vinoteca: "Vineyar",
    direccion: "San Martinb 1320, Lucas Gonzales",
    ir: "https://goo.gl/maps/jKxXKkuYBEm5fhcZ7",
    barrio: "Zona Entre Rios",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/rime/random2.jpeg"
  },
  {
    id: 59,
    vinoteca: "Viejo Tonel",
    direccion: "Chajarí, Entre Rios",
    ir: "https://goo.gl/maps/yimk43qPuP1VP4Q57",
    barrio: "Zona Entre Rios",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/rime/random4"
  },
  {
    id: 59,
    vinoteca: "Compañía de Vinos",
    direccion: "San Luis 1222, Concordia,Entre Ríos",
    ir: "https://goo.gl/maps/tCZCFesyWHLFW4zn7",
    barrio: "Zona Entre Rios",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/rime/companiadevinos.png"
  },
  {
    id: 59,
    vinoteca: "Herederos",
    direccion: "Los Jacarandaes 175, Oro Verde, Entre Ríos",
    ir: "https://goo.gl/maps/HMqFHy4ZL8cPLRLw7",
    barrio: "Zona Entre Rios",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/rime/random5.png"
  },
  // Las Parejas
  {
    id: 44,
    vinoteca: "Vinoteca ArcoIris",
    direccion: "Calle 10 num. 1134 - Las Parejas",
    ir: "https://goo.gl/maps/8M1aCsCvoMseXFHL8",
    barrio: "Zona Las Parejas",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/random1.jpg"
  },
  //Paraná
  {
    id: 68,
    vinoteca: "Garay",
    direccion: "Buenos Aires 481, Paraná",
    ir: "https://goo.gl/maps/nWcDDD1TiNwk6MQc7",
    barrio: "Zona Parana",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/random2.jpeg"
  },
  //Firmat
  {
    id: 68,
    vinoteca: "Dos Cepas",
    direccion: "San Martín 1594, Firmat",
    ir: "https://goo.gl/maps/pJy5p9cw9hKEAgx27",
    barrio: "Zona Parana",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/random5.png"
  },
]

let vinotecasDelivery = [
  {
    id: 30,
    vinoteca: "Lo de Tere",
    direccion: "Delivery en Fisherton y Centro Rosario",
    contactar: "https://instagram.com/teresita_roveri?utm_medium=copy_link",
    barrio: "Zona Delivery",
    bodega: "mythic",
    thumbnailUrl: "img/vinotecas/mythic/random1.jpg"
  },
]

selectBarrio.addEventListener('change', () => {
  //console.log(selectBarrio.value)
  switch (selectBarrio.value) {
    case "Todas las vinotecas":
      pintarVinotecas(vinotecasRime);
      break;
    case "Zona Centro":
      pintarVinotecas(vinotecasRime.filter((el) => el.barrio === 'Zona Centro'));
      break;
    case "Zona Sur":
      pintarVinotecas(vinotecasRime.filter((el) => el.barrio === 'Zona Sur'));
      break;
    case "Zona Norte":
      pintarVinotecas(vinotecasRime.filter((el) => el.barrio === 'Zona Norte'));
      break;
    case "Zona Macro Centro":
      pintarVinotecas(vinotecasRime.filter((el) => el.barrio === 'Zona Macro Centro'));
      break;
    case "Zona Granadero Baigorria":
      pintarVinotecas(vinotecasRime.filter((el) => el.barrio === 'Zona Granadero Baigorria'));
      break;
    case "Zona Funes y Fisherton":
      pintarVinotecas(vinotecasRime.filter((el) => el.barrio === 'Zona Funes y Fisherton'));
      break;
    case "Zona Villa Constitucion":
      pintarVinotecas(vinotecasRime.filter((el) => el.barrio === 'Zona Villa Constitucion'));
      break;
    case "Zona Parana":
      pintarVinotecas(vinotecasRime.filter((el) => el.barrio === 'Zona Parana'));
      break;
    case "Zona San Lorenzo":
      pintarVinotecas(vinotecasRime.filter((el) => el.barrio === 'Zona San Lorenzo'));
      break;
    case "Zona Santa Fe":
      pintarVinotecas(vinotecasRime.filter((el) => el.barrio === 'Zona Santa Fe'));
      break;
    case "Zona Santo Tome":
      pintarVinotecas(vinotecasRime.filter((el) => el.barrio === 'Zona Santo Tome'));
      break;
    case "Zona Roldan":
      pintarVinotecas(vinotecasRime.filter((el) => el.barrio === 'Zona Roldan'));
      break;
    case "Zona Rafaela":
      pintarVinotecas(vinotecasRime.filter((el) => el.barrio === 'Zona Rafaela'));
      break;
    case "Zona Esperanza":
      pintarVinotecas(vinotecasRime.filter((el) => el.barrio === 'Zona Esperanza'));
      break;
    case "Zona Entre Rios":
      pintarVinotecas(vinotecasRime.filter((el) => el.barrio === 'Zona Entre Rios'));
      break;
    case "Zona Santa Teresa":
      pintarVinotecas(vinotecasRime.filter((el) => el.barrio === 'Zona Santa Teresa'));
      break;
    case "Zona San Nicolas":
      pintarVinotecas(vinotecasRime.filter((el) => el.barrio === 'Zona San Nicolas'));
      break;
    case "Zona Las Rosas":
      pintarVinotecas(vinotecasRime.filter((el) => el.barrio === 'Zona Las Rosas'));
      break;
    case "Zona Las Parejas":
      pintarVinotecas(vinotecasRime.filter((el) => el.barrio === 'Zona Las Parejas'));
      break;
    case "Zona Reconquista":
      pintarVinotecas(vinotecasRime.filter((el) => el.barrio === 'Zona Reconquista'));
      break;
    case "Zona Firmat":
      pintarVinotecas(vinotecasRime.filter((el) => el.barrio === 'Zona Firmat'));
      break;
    case "Zona Delivery":
      Delivery(vinotecasDelivery.filter((el) => el.barrio === 'Zona Delivery'));
      pintarVinotecas(vinotecasRime.filter((el) => el.barrio === ''));
      break;
  }
})

pintarVinotecas(vinotecasRime)
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