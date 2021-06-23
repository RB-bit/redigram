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
  //Zona Macro Centro
  {
    id: 2,
    vinoteca: "Vino y se quedó",
    direccion: "Cafferata 1419",
    ir: "https://goo.gl/maps/SQatrb96NNtCZe3w7",
    barrio: "Zona Macro Centro",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/vinoysequedo"
  },
  {
    id: 20,
    vinoteca: "Ruta 40",
    direccion: "Buenos Aires 1490",
    ir: "https://goo.gl/maps/BKQsxgeHZuexmoAW8",
    barrio: "Zona Macro Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/random4"
  },
  //Zona Norte

  //Zona Sur
  {
    id: 3,
    vinoteca: "La Botiga - Mercado Urbano",
    direccion: "Regimiento 11, 868",
    ir: "https://goo.gl/maps/WBcSLNmPHj6Zv7qH6",
    barrio: "Zona Sur",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/random4"
  },
  //Zona Oeste

  //Zona Funes y Fisherton
  {
    id: 4,
    vinoteca: "MyM Distribuidora",
    direccion: "Mitre 2599 - Funes",
    ir: "https://goo.gl/maps/gh9LDqSjwkfCk6Uu5",
    barrio: "Zona Funes y Fisherton",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/random3.png"
  },
  {
    id: 5,
    vinoteca: "Autoservicio Arlequín",
    direccion: "Córdoba 1984, Funes",
    ir: "https://goo.gl/maps/C1gXXDPNspRMcvkY8",
    barrio: "Zona Funes y Fisherton",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/arlequin"
  },
  //Zona Villa Constitucion
  {
    id: 6,
    vinoteca: "Dionisio",
    direccion: "San Martín 715, Villa Constitución",
    ir: "https://goo.gl/maps/XT1HtKEK4mU6McbA7",
    barrio: "Zona Villa Constitucion",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/dionisio.png"
  },
  {
    id: 7,
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
    id: 37,
    vinoteca: "El Palacio",
    direccion: "Gral. Pascual Echague 814 - Paraná",
    ir: "https://goo.gl/maps/UBYeewHiq7KT2pXL9",
    barrio: "Zona Parana",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/random2.jpeg"
  },
  //Zona Santa Fe
  {
    id: 8,
    vinoteca: "Don Juan Jacinto",
    direccion: "25 de mayo 3601 - Santa Fe",
    ir: "https://goo.gl/maps/YWvGh1k8cA8CR6zT7",
    barrio: "Zona Santa Fe",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/donjuanjacinto2"
  },
  {
    id: 9,
    vinoteca: "Don Juan Jacinto",
    direccion: "Aristóbulo del Valle 6342 - Santa Fe",
    ir: "https://goo.gl/maps/bLxz4psyonqq7xMJ9",
    barrio: "Zona Santa Fe",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/donjuanjacinto1"
  },
  {
    id: 10,
    vinoteca: "Exquisitos Placeres",
    direccion: "Balcarce 1576 - Santa Fe",
    ir: "https://goo.gl/maps/pVU8Mw6Bfx6J9NzAA",
    barrio: "Zona Santa Fe",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/exquisitosplaceres"
  },
  {
    id: 11,
    vinoteca: "Vinopolis",
    direccion: "Santiago del Estero 3166 - Santa Fe",
    ir: "https://goo.gl/maps/8fyBbC1XE6zpQtWL7",
    barrio: "Zona Santa Fe",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/vinopolis"
  },
  {
    id: 12,
    vinoteca: "Vinoteca Filomena",
    direccion: "San Lorenzo 3021 - Santa Fe",
    ir: "https://goo.gl/maps/N2dUEMQG2ifRVeYz7",
    barrio: "Zona Santa Fe",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/filomena"
  },
  //Zona Santo Tomé
  {
    id: 11,
    vinoteca: "Entre Copas - Almacén de Vinos",
    direccion: "Macias 2092 - Santo Tomé",
    ir: "https://goo.gl/maps/NabVLXmqtG6bFsVi9",
    barrio: "Zona Santo Tome",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/entrecopassantotome"
  },
  //Zona Rafaela
  {
    id:12,
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
    id: 13,
    vinoteca: "Los Cortesanos",
    direccion: "Aarón Castellanos 1802, Esperanza",
    ir: "https://g.page/VinotecaLosCortesanos?share",
    barrio: "Zona Esperanza",
    bodega: "vinscelto",
    thumbnailUrl: "img/vinotecas/vinscelto/loscortesanosesperanza"
  },
  //Zona Entre Rios

  //Zona Gualeguaychú
  {
    id: 14,
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
    id: 22,
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