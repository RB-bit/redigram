const locales = document.getElementById('locales')
const deli = document.getElementById('deli')
const templateCard = document.getElementById('template-card').content
const delivery = document.getElementById('delivery').content
const fragment = document.createDocumentFragment()
//Filtro por Barrio
const selectBarrio = document.getElementById('selectBarrio')

let vinotecasVinscelto = [
  //Zona Centro
  {
    id: 1,
    vinoteca: "Verde Mar",
    direccion: "Dorrego 1455",
    ir: "https://goo.gl/maps/axhSixeP3ANYH2cf6",
    barrio: "Zona Centro",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/verdemar.png"
  },
  {
    id: 2,
    vinoteca: "De Buena Madera",
    direccion: "Italia 954",
    ir: "https://goo.gl/maps/PdZsZPX2HeZZjatBA",
    barrio: "Zona Centro",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/debuenamadera.png"
  },
  {
    id: 3,
    vinoteca: "Ruta 40",
    direccion: "Buenos Aires 1490",
    ir: "https://goo.gl/maps/BKQsxgeHZuexmoAW8",
    barrio: "Zona Centro",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/random4"
  },
  {
    id: 4,
    vinoteca: "La Gourmetería",
    direccion: "Tucumán 1322",
    ir: "https://goo.gl/maps/6Qz9wDMjX8bU8dAq7",
    barrio: "Zona Centro",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/lagourmeteria"
  },
  {
    id: 5,
    vinoteca: "El Camino",
    direccion: "Moreno 1039",
    ir: "https://g.page/el-camino-vinoteca?share",
    barrio: "Zona Centro",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/elcamino.png"
  },
  //Zona Macro Centro
  {
    id: 6,
    vinoteca: "Vino y se quedó",
    direccion: "Cafferata 1419",
    ir: "https://goo.gl/maps/SQatrb96NNtCZe3w7",
    barrio: "Zona Macro Centro",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/vinoysequedo"
  },
  {
    id: 7,
    vinoteca: "ADN Autoservicio",
    direccion: "Iriondo 1498",
    ir: "https://goo.gl/maps/ZhQWFubtSZxxeKF17",
    barrio: "Zona Macro Centro",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/adn-autoservicio"
  },
  //Zona Norte
  {
    id: 8,
    vinoteca: "Plaza Mayor Wines",
    direccion: "Martín Fierro 476",
    ir: "https://goo.gl/maps/NQEjbygGKyJMPCWa8",
    barrio: "Zona Norte",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/random4"
  },
  //Zona Sur
  {
    id: 9,
    vinoteca: "La Botiga - Mercado Urbano",
    direccion: "Regimiento 11, 868",
    ir: "https://goo.gl/maps/WBcSLNmPHj6Zv7qH6",
    barrio: "Zona Sur",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/random4"
  },
  //Zona Oeste
  {
    id: 10,
    vinoteca: "Vinoteca Battista",
    direccion: "Mendoza 5890",
    ir: "https://g.page/vinoteca-battista?share",
    barrio: "Zona Oeste",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/batista"
  },
  //Zona Funes y Fisherton
  {
    id: 11,
    vinoteca: "MyM Distribuidora",
    direccion: "Mitre 2599 - Funes",
    ir: "https://goo.gl/maps/gh9LDqSjwkfCk6Uu5",
    barrio: "Zona Funes y Fisherton",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/random3.png"
  },
  {
    id: 12,
    vinoteca: "Autoservicio Arlequín",
    direccion: "Córdoba 1984, Funes",
    ir: "https://goo.gl/maps/C1gXXDPNspRMcvkY8",
    barrio: "Zona Funes y Fisherton",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/arlequin"
  },
  {
    id: 13,
    vinoteca: "Casa Prada",
    direccion: "Shopping Fisherton Plaza local 43",
    ir: "https://goo.gl/maps/NWzZDV1EndumUU5q9",
    barrio: "Zona Funes y Fisherton",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/prada.png"
  },
  {  
    id: 14,
    vinoteca: "Perfect Wines",
    direccion: "Alfonsín y Las Ranas, Funes, Santa Fe",
    ir: "https://goo.gl/maps/NcQmgsmeyXv4HyqV9",
    barrio: "Zona Funes y Fisherton",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/random3.png"
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
  // Zona Santa Teresa

  //Zona Parana
  {
    id: 17,
    vinoteca: "El Palacio",
    direccion: "Gral. Pascual Echague 814 - Paraná",
    ir: "https://goo.gl/maps/UBYeewHiq7KT2pXL9",
    barrio: "Zona Parana",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/random2.jpeg"
  },
  //Zona Santa Fe
  {
    id: 18,
    vinoteca: "Don Juan Jacinto",
    direccion: "25 de mayo 3601 - Santa Fe",
    ir: "https://goo.gl/maps/YWvGh1k8cA8CR6zT7",
    barrio: "Zona Santa Fe",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/donjuanjacinto2"
  },
  {
    id: 19,
    vinoteca: "Don Juan Jacinto",
    direccion: "Aristóbulo del Valle 6342 - Santa Fe",
    ir: "https://goo.gl/maps/bLxz4psyonqq7xMJ9",
    barrio: "Zona Santa Fe",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/donjuanjacinto1"
  },
  {
    id: 20,
    vinoteca: "Exquisitos Placeres",
    direccion: "Balcarce 1576 - Santa Fe",
    ir: "https://goo.gl/maps/pVU8Mw6Bfx6J9NzAA",
    barrio: "Zona Santa Fe",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/exquisitosplaceres"
  },
  {
    id: 21,
    vinoteca: "Vinopolis",
    direccion: "Santiago del Estero 3166 - Santa Fe",
    ir: "https://goo.gl/maps/8fyBbC1XE6zpQtWL7",
    barrio: "Zona Santa Fe",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/vinopolis"
  },
  {
    id: 22,
    vinoteca: "Vinoteca Filomena",
    direccion: "San Lorenzo 3021 - Santa Fe",
    ir: "https://goo.gl/maps/N2dUEMQG2ifRVeYz7",
    barrio: "Zona Santa Fe",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/filomena"
  },
  //Zona Santo Tomé
  {
    id: 23,
    vinoteca: "Entre Copas - Almacén de Vinos",
    direccion: "Macias 2092 - Santo Tomé",
    ir: "https://goo.gl/maps/NabVLXmqtG6bFsVi9",
    barrio: "Zona Santo Tome",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/entrecopassantotome"
  },
  //Zona Rafaela
  {
    id: 24,
    vinoteca: "Los Cortesanos",
    direccion: "Alvear 281, Rafaela",
    ir: "https://g.page/LosCortesanos?share",
    barrio: "Zona Rafaela",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/loscortesanos"
  },
  //Zona Roldán

  //Zona Esperanza
  {
    id: 25,
    vinoteca: "Los Cortesanos",
    direccion: "Aarón Castellanos 1802, Esperanza",
    ir: "https://g.page/VinotecaLosCortesanos?share",
    barrio: "Zona Esperanza",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/loscortesanosesperanza"
  },
  //Villa Gdor Galvez
  {
    id: 26,
    vinoteca: "Vinoteca As de Copas",
    direccion: "Rivadavia 1635 - Villa Gobernador Gálvez",
    ir: "https://goo.gl/maps/kqJqPPxSnqBWge5WA",
    barrio: "Zona Villa Gobernador Galvez",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/random4"
  },
  //Zona Entre Rios
  {
    id: 27,
    vinoteca: "Dionisio Vinos & Afines",
    direccion: "Ramírez, Entre Rios - Eva Perón 531",
    ir: "https://goo.gl/maps/CRKXkWXrLNnwCEbx9",
    barrio: "Zona Entre Rios",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/random1.jpg"
  },
  //Casilda
  {
    id: 28,
    vinoteca: "Dionisio Vinos & Afines",
    direccion: "San Juan 2747 - Casilda",
    ir: "https://goo.gl/maps/aZh3gp2fPpDtGReM7",
    barrio: "Zona Casilda",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/random1.jpg"
  },
  //Zona Gualeguaychú
  {
    id: 29,
    vinoteca: "El Bebedero",
    direccion: "Av. del Valle y 3 de febrero, Gualeguaychú",
    ir: "https://goo.gl/maps/Y1q2cT23epEvf5qj8",
    barrio: "Zona Gualeguaychu",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/elbebedero.png"
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
  {
    id: 31,
    vinoteca: "La Champagnería",
    direccion: "Delivery en Rosario",
    contactar: "https://www.instagram.com/la_champaneria/?hl=es",
    barrio: "Zona Delivery",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/random6"
  },
  {
    id: 32,
    vinoteca: "La Botellería",
    direccion: "Delivery en Rosario",
    contactar: "https://www.somoslabotilleria.com.ar/",
    barrio: "Zona Delivery",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/random5"
  },
]

selectBarrio.addEventListener('change', () => {
  //console.log(selectBarrio.value)
  switch (selectBarrio.value) {
    case "Todas las vinotecas":
      pintarVinotecas(vinotecasVinscelto);
      break;
    case "Zona Centro":
      pintarVinotecas(vinotecasVinscelto.filter((el) => el.barrio === 'Zona Centro'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Macro Centro":
      pintarVinotecas(vinotecasVinscelto.filter((el) => el.barrio === 'Zona Macro Centro'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Norte":
      pintarVinotecas(vinotecasVinscelto.filter((el) => el.barrio === 'Zona Norte'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Sur":
      pintarVinotecas(vinotecasVinscelto.filter((el) => el.barrio === 'Zona Sur'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Oeste":
      pintarVinotecas(vinotecasVinscelto.filter((el) => el.barrio === 'Zona Oeste'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Funes y Fisherton":
      pintarVinotecas(vinotecasVinscelto.filter((el) => el.barrio === 'Zona Funes y Fisherton'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona San Lorenzo":
      pintarVinotecas(vinotecasVinscelto.filter((el) => el.barrio === 'Zona San Lorenzo'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Villa Constitucion":
      pintarVinotecas(vinotecasVinscelto.filter((el) => el.barrio === 'Zona Villa Constitucion'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Santa Fe":
      pintarVinotecas(vinotecasVinscelto.filter((el) => el.barrio === 'Zona Santa Fe'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
      
    case "Zona Villa Gobernador Galvez":
      pintarVinotecas(vinotecasVinscelto.filter((el) => el.barrio === 'Zona Villa Gobernador Galvez'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Santo Tome":
      pintarVinotecas(vinotecasVinscelto.filter((el) => el.barrio === 'Zona Santo Tome'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Parana":
      pintarVinotecas(vinotecasVinscelto.filter((el) => el.barrio === 'Zona Parana'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Santa Teresa":
      pintarVinotecas(vinotecasVinscelto.filter((el) => el.barrio === 'Zona Santa Teresa'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Rafaela":
      pintarVinotecas(vinotecasVinscelto.filter((el) => el.barrio === 'Zona Rafaela'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Las Rosas":
      pintarVinotecas(vinotecasVinscelto.filter((el) => el.barrio === 'Zona Las Rosas'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Roldan":
      pintarVinotecas(vinotecasVinscelto.filter((el) => el.barrio === 'Zona Roldan'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Esperanza":
      pintarVinotecas(vinotecasVinscelto.filter((el) => el.barrio === 'Zona Esperanza'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Entre Rios":
      pintarVinotecas(vinotecasVinscelto.filter((el) => el.barrio === 'Zona Entre Rios'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Gualeguaychu":
      pintarVinotecas(vinotecasVinscelto.filter((el) => el.barrio === 'Zona Gualeguaychu'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Venado Tuerto":
      pintarVinotecas(vinotecasVinscelto.filter((el) => el.barrio === 'Zona Venado Tuerto'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Casilda":
      pintarVinotecas(vinotecasVinscelto.filter((el) => el.barrio === 'Zona Casilda'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Delivery":
      Delivery(vinotecasDelivery.filter((el) => el.barrio === 'Zona Delivery'));
      pintarVinotecas(vinotecasVinscelto.filter((el) => el.barrio === ''));
      break;
  }
})

pintarVinotecas(vinotecasVinscelto)
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