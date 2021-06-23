const locales = document.getElementById('locales')
const deli = document.getElementById('deli')
const templateCard = document.getElementById('template-card').content
const delivery = document.getElementById('delivery').content
const fragment = document.createDocumentFragment()
//Filtro por Barrio
const selectBarrio = document.getElementById('selectBarrio')

let vinotecasMythic = [
  //Zona Centro
  {
    id: 1,
    vinoteca: "Queseria sin un vino",
    direccion: "Pte. Roca 1518",
    ir: "https://goo.gl/maps/5ryrFkjuSeP9CKvr5",
    barrio: "Zona Centro",
    bodega: "mythic",
    thumbnailUrl: "img/vinotecas/mythic/queseria.png"
  },
  {
    id: 2,
    vinoteca: "El Camino",
    direccion: "Moreno 1039",
    ir: "https://g.page/el-camino-vinoteca?share",
    barrio: "Zona Centro",
    bodega: "mythic",
    thumbnailUrl: "img/vinotecas/mythic/elcamino.png"
  },
  {
    id: 3,
    vinoteca: "La Gourmetería",
    direccion: "Tucumán 1322",
    ir: "https://goo.gl/maps/6Qz9wDMjX8bU8dAq7",
    barrio: "Zona Centro",
    bodega: "mythic",
    thumbnailUrl: "img/vinotecas/mythic/lagourmeteria"
  },
  {
    id: 4,
    vinoteca: "Vinoteca Campos",
    direccion: "Tucumán 1754",
    ir: "https://goo.gl/maps/qqCsjrsd6Q7qMnrt9",
    barrio: "Zona Centro",
    bodega: "mythic",
    thumbnailUrl: "img/vinotecas/mythic/random4"
  },
  {
    id: 5,
    vinoteca: "Vin  Rouge",
    direccion: "Mendoza 319",
    ir: "https://g.page/vinrougevinoteca?share",
    barrio: "Zona Centro",
    bodega: "mythic",
    thumbnailUrl: "img/vinotecas/mythic/vinrouge"
  },
  {
    id: 6,
    vinoteca: "Uva Selecta",
    direccion: "Corrientes 314 - Local 2",
    ir: "https://goo.gl/maps/2TsWJueThchZ9Utp9",
    barrio: "Zona Centro",
    bodega: "mythic",
    thumbnailUrl: "img/vinotecas/mythic/random1.jpg"
  },
  //Zona Macro Centro
  {
    id: 7,
    vinoteca: "Etiqueta Negra",
    direccion: "Viamonte 661",
    ir: "https://goo.gl/maps/ijYxWkvTZMkTH2Pf8",
    barrio: "Zona Macro Centro",
    bodega: "mythic",
    thumbnailUrl: "img/vinotecas/mythic/random4"
  },
  {
    id: 8,
    vinoteca: "Vinicius",
    direccion: "Mitre esquina Cochabamba ",
    ir: "https://g.page/vinotecavinicius?share",
    barrio: "Zona Macro Centro",
    bodega: "mythic",
    thumbnailUrl: "img/vinotecas/mythic/vinicius"
  },
  {
    id: 9,
    vinoteca: "Ruta 40",
    direccion: "Buenos Aires 1490",
    ir: "https://goo.gl/maps/BKQsxgeHZuexmoAW8",
    barrio: "Zona Macro Centro",
    bodega: "mythic",
    thumbnailUrl: "img/vinotecas/mythic/random4"
  },
  {
    id: 10,
    vinoteca: "Eleven Wines",
    direccion: "Ov. Lagos 522",
    ir: "https://g.page/vinoteca-eleven-wines?share",
    barrio: "Zona Macro Centro",
    bodega: "mythic",
    thumbnailUrl: "img/vinotecas/mythic/elevenwines"
  },
  //Zona Norte

  //Zona Sur
  {
    id: 6,
    vinoteca: "Vinos y Copas",
    direccion: "Virasoro 2001",
    ir: "https://goo.gl/maps/Fr8idJrCnoudyLnGA",
    barrio: "Zona Sur",
    bodega: "myhic",
    thumbnailUrl: "img/vinotecas/mythic/vinosycopas.png"
  },
  //Zona Oeste

  //Zona Funes y Fisherton
  {
    id: 25,
    vinoteca: "Epicueros",
    direccion: "Miguel Galindo esquina Lennox",
    ir: "https://goo.gl/maps/qEKRE6XnAqTe2mcZ9",
    barrio: "Zona Funes y Fisherton",
    bodega: "mythic",
    thumbnailUrl: "img/vinotecas/mythic/random1.jpg"
  },
  //Zona Villa Constitución
  {
    id: 7,
    vinoteca: "Entre Copas",
    direccion: "Dorrego 1101 - Villa Constitución",
    ir: "https://g.page/entrecopasenoteca?share",
    barrio: "Zona Villa Constitucion",
    bodega: "mythic",
    thumbnailUrl: "img/vinotecas/mythic/entrecopas"
  },
  // San Lorenzo
  {
    id: 8,
    vinoteca: "Campos",
    direccion: "Belgrano 776 - San Lorenzo",
    ir: "https://goo.gl/maps/yjed3Pvx3cMbFtK26",
    barrio: "Zona San Lorenzo",
    bodega: "mythic",
    thumbnailUrl: "img/vinotecas/mythic/vinoteca-campos"
  },
  // Zona Santa Teresa

  //Zona Parana
  {
    id: 37,
    vinoteca: "El Palacio",
    direccion: "Gral. Pascual Echague 814 - Paraná",
    ir: "https://goo.gl/maps/UBYeewHiq7KT2pXL9",
    barrio: "Zona Parana",
    bodega: "mythic",
    thumbnailUrl: "img/vinotecas/mythic/random2.jpeg"
  },
  //Zona Santa Fe
  {
    id: 9,
    vinoteca: "Don Juan Jacinto",
    direccion: "25 de mayo 3601 - Santa Fe",
    ir: "https://goo.gl/maps/YWvGh1k8cA8CR6zT7",
    barrio: "Zona Santa Fe",
    bodega: "mythic",
    thumbnailUrl: "img/vinotecas/mythic/donjuanjacinto2"
  },
  {
    id: 10,
    vinoteca: "Don Juan Jacinto",
    direccion: "Aristóbulo del Valle 6342 - Santa Fe",
    ir: "https://goo.gl/maps/bLxz4psyonqq7xMJ9",
    barrio: "Zona Santa Fe",
    bodega: "mythic",
    thumbnailUrl: "img/vinotecas/mythic/donjuanjacinto1"
  },
  {
    id: 11,
    vinoteca: "Exquisitos Placeres",
    direccion: "Balcarce 1576 - Santa Fe",
    ir: "https://goo.gl/maps/pVU8Mw6Bfx6J9NzAA",
    barrio: "Zona Santa Fe",
    bodega: "mythic",
    thumbnailUrl: "img/vinotecas/mythic/exquisitosplaceres"
  },
  {
    id: 12,
    vinoteca: "Vinopolis",
    direccion: "Santiago del Estero 3166 - Santa Fe",
    ir: "https://goo.gl/maps/8fyBbC1XE6zpQtWL7",
    barrio: "Zona Santa Fe",
    bodega: "mythic",
    thumbnailUrl: "img/vinotecas/mythic/vinopolis"
  },
  {
    id: 13,
    vinoteca: "Vinoteca Filomena",
    direccion: "San Lorenzo 3021 - Santa Fe",
    ir: "https://goo.gl/maps/N2dUEMQG2ifRVeYz7",
    barrio: "Zona Santa Fe",
    bodega: "mythic",
    thumbnailUrl: "img/vinotecas/mythic/filomena"
  },
  //Zona Santo Tomé
  {
    id: 12,
    vinoteca: "Entre Copas - Almacén de Vinos",
    direccion: "Macias 2092 - Santo Tomé",
    ir: "https://goo.gl/maps/NabVLXmqtG6bFsVi9",
    barrio: "Zona Santo Tome",
    bodega: "mythic",
    thumbnailUrl: "img/vinotecas/mythic/entrecopassantotome"
  },
  //Zona Rafaela
  {
    id: 13,
    vinoteca: "Los Cortesanos",
    direccion: "Alvear 281, Rafaela",
    ir: "https://g.page/LosCortesanos?share",
    barrio: "Zona Rafaela",
    bodega: "mythic",
    thumbnailUrl: "img/vinotecas/mythic/loscortesanos"
  },
  //Zona Roldán

  //Zona Esperanza
  {
    id: 14,
    vinoteca: "Los Cortesanos",
    direccion: "Aarón Castellanos 1802, Esperanza",
    ir: "https://g.page/VinotecaLosCortesanos?share",
    barrio: "Zona Esperanza",
    bodega: "mythic",
    thumbnailUrl: "img/vinotecas/mythic/loscortesanosesperanza"
  },
  //Zona Entre Rios
  //Cañada de Gomez
  {
    id: 15,
    vinoteca: "Los Toneles",
    direccion: "Ocampo 961, Cañada de Gomez",
    ir: "https://g.page/lostonelesalmacendevinos?share",
    barrio: "Zona Canada de Gomez",
    bodega: "mythic",
    thumbnailUrl: "img/vinotecas/mythic/lostoneles"
  },
    //Galvez
    {
      id: 27,
      vinoteca: "Terroir",
      direccion: "Nazareno Rossi 868, Gálvez",
      ir: "https://goo.gl/maps/knwLs7avFKDAFsw28",
      barrio: "Zona Galvez",
      bodega: "amalaya",
      thumbnailUrl: "img/vinotecas/amalaya/random2.jpeg"
    },
]

let vinotecasDelivery = [
  {
    id: 22,
    vinoteca: "Vinoteca Campos",
    direccion: "Delivery en Fisherton y Funes",
    contactar: "https://www.vinotecacampos.com.ar/la-vinoteca/",
    barrio: "Zona Delivery",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/random1.jpg"
  },
]

selectBarrio.addEventListener('change', () => {
  //console.log(selectBarrio.value)
  switch (selectBarrio.value) {
    case "Todas las vinotecas":
      pintarVinotecas(vinotecasMythic);
      break;
    case "Zona Centro":
      pintarVinotecas(vinotecasMythic.filter((el) => el.barrio === 'Zona Centro'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Macro Centro":
      pintarVinotecas(vinotecasMythic.filter((el) => el.barrio === 'Zona Macro Centro'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Norte":
      pintarVinotecas(vinotecasMythic.filter((el) => el.barrio === 'Zona Norte'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Sur":
      pintarVinotecas(vinotecasMythic.filter((el) => el.barrio === 'Zona Sur'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Oeste":
      pintarVinotecas(vinotecasMythic.filter((el) => el.barrio === 'Zona Oeste'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Funes y Fisherton":
      pintarVinotecas(vinotecasMythic.filter((el) => el.barrio === 'Zona Funes y Fisherton'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona San Lorenzo":
      pintarVinotecas(vinotecasMythic.filter((el) => el.barrio === 'Zona San Lorenzo'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Villa Constitucion":
      pintarVinotecas(vinotecasMythic.filter((el) => el.barrio === 'Zona Villa Constitucion'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Santa Fe":
      pintarVinotecas(vinotecasMythic.filter((el) => el.barrio === 'Zona Santa Fe'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Santo Tome":
      pintarVinotecas(vinotecasMythic.filter((el) => el.barrio === 'Zona Santo Tome'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Parana":
      pintarVinotecas(vinotecasMythic.filter((el) => el.barrio === 'Zona Parana'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Santa Teresa":
      pintarVinotecas(vinotecasMythic.filter((el) => el.barrio === 'Zona Santa Teresa'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Rafaela":
      pintarVinotecas(vinotecasMythic.filter((el) => el.barrio === 'Zona Rafaela'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Las Rosas":
      pintarVinotecas(vinotecasMythic.filter((el) => el.barrio === 'Zona Las Rosas'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Roldan":
      pintarVinotecas(vinotecasMythic.filter((el) => el.barrio === 'Zona Roldan'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Esperanza":
      pintarVinotecas(vinotecasMythic.filter((el) => el.barrio === 'Zona Esperanza'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Entre Rios":
      pintarVinotecas(vinotecasMythic.filter((el) => el.barrio === 'Zona Entre Rios'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Canada de Gomez":
      pintarVinotecas(vinotecasMythic.filter((el) => el.barrio === 'Zona Canada de Gomez'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Galvez":
      pintarVinotecas(vinotecasMythic.filter((el) => el.barrio === 'Zona Galvez'));
      Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
      break;
    case "Zona Delivery":
      Delivery(vinotecasDelivery.filter((el) => el.barrio === 'Zona Delivery'));
      pintarVinotecas(vinotecasMythic.filter((el) => el.barrio === ''));
      break;
  }
})

pintarVinotecas(vinotecasMythic)
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