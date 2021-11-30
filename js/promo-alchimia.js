const locales = document.getElementById('locales')
const deli = document.getElementById('deli')
const templateCard = document.getElementById('template-card').content
const delivery = document.getElementById('delivery').content
const fragment = document.createDocumentFragment()
//Filtro por Barrio
const selectBarrio = document.getElementById('selectBarrio')


let vinotecasAlchimia = [
  {
    id: 1,
    vinoteca: "La Fiambretta",
    direccion: "Laprida 1301 esq. 3 de febrero ",
    ir: "https://goo.gl/maps/guPuoTyQECR5jRvq6",
    barrio: "Zona Centro",
    bodega: "lagarde",
    thumbnailUrl: "img/vinotecas/rime/LaFiabrettaLaprida.png"
  },
  {
    id: 2,
    vinoteca: "La Fiambretta - Mendoza esq. Italia",
    direccion: "Mendoza esq. Italia",
    ir: "https://g.page/lafiambretta?share",
    barrio: "Zona Centro",
    bodega: "lagarde",
    thumbnailUrl: "img/vinotecas/amalaya/LaFiabrettaMendoza.png"
  },
  {
    id: 3,
    vinoteca: "Vinoteca 314",
    direccion: "Balcarce 314",
    ir: "https://goo.gl/maps/K9JAjmrG1PxbEzM57",
    barrio: "Zona Centro",
    bodega: "rime",
    thumbnailUrl: "img/vinotecas/rime/balcarce314.png"
  },
  {
    id: 4,
    vinoteca: "La Vinoteca",
    direccion: "Tucumán 1462",
    ir: "https://goo.gl/maps/iN7gGhwnRRfiUhQq5",
    barrio: "Zona Centro",
    bodega: "rime",
    thumbnailUrl: "img/vinotecas/rime/lavinoteca.png"
  },
  {
    id: 5,
    vinoteca: "Maylea",
    direccion: "9 de Julio 768",
    ir: "https://g.page/don-baco-casa-de-vinos?share",
    barrio: "Zona Centro",
    bodega: "rime",
    thumbnailUrl: "img/vinotecas/rime/random4"
  },
  {
    id: 6,
    vinoteca: "El Caballero del Vino",
    direccion: "Necochea 1426",
    ir: "https://goo.gl/maps/Qadx8enCCce1Lzkz7",
    barrio: "Zona Centro",
    bodega: "rime",
    thumbnailUrl: "img/vinotecas/casarena/ElCaballero.png"
  },
  {
    id: 7,
    vinoteca: "El Viduño",
    direccion: "Mendoza esquina Maipú",
    ir: "https://g.page/vinotecaelviduno?share",
    barrio: "Zona Centro",
    bodega: "rime",
    thumbnailUrl: "img/vinotecas/amalaya/elvidunio.png"
  },
  //Zona Macro Centro
  {
    id: 8,
    vinoteca: "Vintage",
    direccion: "9 de Julio 2940",
    ir: "https://g.page/vintagevinoteca?share",
    barrio: "Zona Macro Centro",
    bodega: "rime",
    thumbnailUrl: "img/vinotecas/rime/random5.png"
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
  //Villa Constitucion
  {
    id: 47,
    vinoteca: "Entre Copas",
    direccion: "Dorrego 1101 - Villa Constitución",
    ir: "https://g.page/entrecopasenoteca?share",
    barrio: "Zona Villa Constitucion",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/entrecopas"
  },
  //Zona Roldán
  {
    id: 3,
    vinoteca: "Fortaleza",
    direccion: "Favaloro 2686, Roldán",
    ir: "https://g.page/FortalezaVinos?share",
    barrio: "Zona Roldan",
    bodega: "rime",
    thumbnailUrl: "img/vinotecas/rime/fortaleza.png"
  },
  //Zona Entre Rios
  {
    id: 4,
    vinoteca: "Vinoteca Porto Vino",
    direccion: "Viale, Entre Rios - 25 de Mayo 36",
    ir: "https://goo.gl/maps/SmpEoFvgbVdrirf48",
    barrio: "Zona Entre Rios",
    bodega: "rime",
    thumbnailUrl: "img/vinotecas/rime/entrerios/random4"
  },
  //Zona Santa Fe
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
  // Las Rosas
  {
    id: 70,
    vinoteca: "Los Cocos",
    direccion: "Belgrano 765, Las Rosas",
    ir: "https://goo.gl/maps/u1QpNe1U7S8MF8kK7",
    barrio: "Zona Las Rosas",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/random2.jpeg"
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
  //Máximo Paz
  {
    id: 7,
    vinoteca: "Que placer que vino",
    direccion: "Maipú 997",
    ir: "https://goo.gl/maps/Khuf15arPRaM9i267",
    barrio: "Zona Maximo Paz",
    bodega: "lagarde",
    thumbnailUrl: "img/vinotecas/rime/random4"
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
  }
]

selectBarrio.addEventListener('change', () => {
  //console.log(selectBarrio.value)
  switch (selectBarrio.value) {
    case "Todas las vinotecas":
      pintarVinotecas(vinotecasAlchimia);
      break;
    case "Zona Centro":
      pintarVinotecas(vinotecasAlchimia.filter((el) => el.barrio === 'Zona Centro'));
      break;
    case "Zona Sur":
      pintarVinotecas(vinotecasAlchimia.filter((el) => el.barrio === 'Zona Sur'));
      break;
    case "Zona Macro Centro":
      pintarVinotecas(vinotecasAlchimia.filter((el) => el.barrio === 'Zona Macro Centro'));
      break;
    case "Zona Granadero Baigorria":
      pintarVinotecas(vinotecasAlchimia.filter((el) => el.barrio === 'Zona Granadero Baigorria'));
      break;
    case "Zona Funes y Fisherton":
      pintarVinotecas(vinotecasAlchimia.filter((el) => el.barrio === 'Zona Funes y Fisherton'));
      break;
    case "Zona Villa Constitucion":
      pintarVinotecas(vinotecasAlchimia.filter((el) => el.barrio === 'Zona Villa Constitucion'));
      break;
    case "Zona Parana":
      pintarVinotecas(vinotecasAlchimia.filter((el) => el.barrio === 'Zona Parana'));
      break;
    case "Zona San Lorenzo":
      pintarVinotecas(vinotecasAlchimia.filter((el) => el.barrio === 'Zona San Lorenzo'));
      break;
    case "Zona Santa Fe":
      pintarVinotecas(vinotecasAlchimia.filter((el) => el.barrio === 'Zona Santa Fe'));
      break;
    case "Zona Santo Tome":
      pintarVinotecas(vinotecasAlchimia.filter((el) => el.barrio === 'Zona Santo Tome'));
      break;
    case "Zona Roldan":
      pintarVinotecas(vinotecasAlchimia.filter((el) => el.barrio === 'Zona Roldan'));
      break;
    case "Zona Rafaela":
      pintarVinotecas(vinotecasAlchimia.filter((el) => el.barrio === 'Zona Rafaela'));
      break;
    case "Zona Esperanza":
      pintarVinotecas(vinotecasAlchimia.filter((el) => el.barrio === 'Zona Esperanza'));
      break;
    case "Zona Entre Rios":
      pintarVinotecas(vinotecasAlchimia.filter((el) => el.barrio === 'Zona Entre Rios'));
      break;
    case "Zona Santa Teresa":
      pintarVinotecas(vinotecasAlchimia.filter((el) => el.barrio === 'Zona Santa Teresa'));
      break;
    case "Zona San Nicolas":
      pintarVinotecas(vinotecasAlchimia.filter((el) => el.barrio === 'Zona San Nicolas'));
      break;
    case "Zona Las Rosas":
      pintarVinotecas(vinotecasAlchimia.filter((el) => el.barrio === 'Zona Las Rosas'));
      break;
    case "Zona Maximo Paz":
      pintarVinotecas(vinotecasAlchimia.filter((el) => el.barrio === 'Zona Maximo Paz'));
      break;
    case "Zona Delivery":
      Delivery(vinotecasDelivery.filter((el) => el.barrio === 'Zona Delivery'));
      pintarVinotecas(vinotecasAlchimia.filter((el) => el.barrio === ''));
      break;
  }
})

pintarVinotecas(vinotecasAlchimia)
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