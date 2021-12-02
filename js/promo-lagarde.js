const locales = document.getElementById('locales')
const templateCard = document.getElementById('template-card').content
const delivery = document.getElementById('delivery').content
const fragment = document.createDocumentFragment()
//Filtro por Barrio
const selectBarrio = document.getElementById('selectBarrio')


let vinotecasLagarde = [
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
    vinoteca: "Queseria sin un vino",
    direccion: "Pte. Roca 1518",
    ir: "https://goo.gl/maps/5ryrFkjuSeP9CKvr5",
    barrio: "Zona Centro",
    bodega: "lagarde",
    thumbnailUrl: "img/vinotecas/rime/queseria.png"
  },
  {
    id: 4,
    vinoteca: "Azores Mercado",
    direccion: "Salta 1591",
    ir: "https://goo.gl/maps/CtFYSMoJJnwTif5M8",
    barrio: "Zona Centro",
    bodega: "lagarde",
    thumbnailUrl: "img/vinotecas/rime/azores.png"
  },
  {
    id: 5,
    vinoteca: "Rizoma del Vino",
    direccion: "Moreno 1585",
    ir: "https://goo.gl/maps/zmaiSJPSY4S7Du6a6",
    barrio: "Zona Centro",
    bodega: "lagarde",
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
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/elvidunio.png"
  },
  {
    id: 8,
    vinoteca: "El Camino",
    direccion: "Moreno 1039",
    ir: "https://g.page/el-camino-vinoteca?share",
    barrio: "Zona Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/elcamino.png"
  },
  // Zona macro Centro
  {
    id: 9,
    vinoteca: "Vino y se quedó",
    direccion: "Cafferata 1419",
    ir: "https://goo.gl/maps/SQatrb96NNtCZe3w7",
    barrio: "Zona Macro Centro",
    bodega: "lagarde",
    thumbnailUrl: "img/vinotecas/canale/vinoysequedo"
  },
  {
    id: 10,
    vinoteca: "Vintage",
    direccion: "9 de Julio 2940",
    ir: "https://g.page/vintagevinoteca?share",
    barrio: "Zona Macro Centro",
    bodega: "rime",
    thumbnailUrl: "img/vinotecas/rime/random5.png"
  },
  {
    id: 11,
    vinoteca: "Etiqueta Negra",
    direccion: "Viamonte 661",
    ir: "https://goo.gl/maps/ijYxWkvTZMkTH2Pf8",
    barrio: "Zona Macro Centro",
    bodega: "amalaya",
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
    id: 13,
    vinoteca: "Formaggio",
    direccion: "San Luis 2702",
    ir: "https://goo.gl/maps/kxF32zWHB5p47T498",
    barrio: "Zona Macro Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/rime/formaggio.png"
  },
  //Rosario Zona Sur
  {
    id: 14,
    vinoteca: "Cepas del Sur",
    direccion: "San Martin 2963",
    ir: "https://goo.gl/maps/kxF32zWHB5p47T498",
    barrio: "Zona Sur",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/rime/formaggio.png"
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
  {
    id: 48,
    vinoteca: "Dionisio",
    direccion: "San Martín 715",
    ir: "https://goo.gl/maps/gujdCNVUpqbBASXs7",
    barrio: "Zona Villa Constitucion",
    bodega: "canale",
    thumbnailUrl: "img/vinotecas/canale/random1.jpg"
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
  //Peyrano
  {
    id: 7,
    vinoteca: "Vinoteca Peyrano",
    direccion: "Falucho 730",
    ir: "https://goo.gl/maps/NkBxVVmx31brpWFk7",
    barrio: "Zona Peyrano",
    bodega: "lagarde",
    thumbnailUrl: "img/vinotecas/rime/random2.jpeg"
  },
  //Casilda
  {
    id: 7,
    vinoteca: "Vinería Nueva Roma",
    direccion: "Buenos Aires 2923",
    ir: "https://goo.gl/maps/NkBxVVmx31brpWFk7",
    barrio: "Zona Casilda",
    bodega: "lagarde",
    thumbnailUrl: "img/vinotecas/rime/random2.jpeg"
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
    id: 62,
    vinoteca: "Wines La Cava",
    direccion: "Azcuenaga 1294 - Venado Tuerto",
    ir: "",
    barrio: "Zona Venado Tuerto",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/rime/wineslacava.png"
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
  {
    id: 58,
    vinoteca: "Sabores del Sol",
    direccion: "Moreno 348, Rafaela",
    ir: "https://goo.gl/maps/hZ7agPFKUcGNkg2q7",
    barrio: "Zona Rafaela",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/rime/saboresdelsol.png"
  },
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
    id: 59,
    vinoteca: "El Bebedero",
    direccion: "A. del valle 5381, Gualeguaychu",
    ir: "https://goo.gl/maps/CUN2jm7fpQbPBti79",
    barrio: "Zona Gualeguaychu",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/loscortesanosesperanza"
  },
    //Zona Entre Rios
  {
    id: 59,
    vinoteca: "Bodeguita del medio",
    direccion: "San Martin 1068,  El Ortondo",
    ir: "https://goo.gl/maps/vi33E5mgHTfRXt2j9",
    barrio: "Zona El Ortondo",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/random4"
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
      pintarVinotecas(vinotecasLagarde);
      break;
    case "Zona Centro":
      pintarVinotecas(vinotecasLagarde.filter((el) => el.barrio === 'Zona Centro'));
      break;
    case "Zona Sur":
      pintarVinotecas(vinotecasLagarde.filter((el) => el.barrio === 'Zona Sur'));
      break;
    case "Zona Macro Centro":
      pintarVinotecas(vinotecasLagarde.filter((el) => el.barrio === 'Zona Macro Centro'));
      break;
    case "Zona Granadero Baigorria":
      pintarVinotecas(vinotecasLagarde.filter((el) => el.barrio === 'Zona Granadero Baigorria'));
      break;
    case "Zona Funes y Fisherton":
      pintarVinotecas(vinotecasLagarde.filter((el) => el.barrio === 'Zona Funes y Fisherton'));
      break;
    case "Zona Villa Constitucion":
      pintarVinotecas(vinotecasLagarde.filter((el) => el.barrio === 'Zona Villa Constitucion'));
      break;
    case "Zona Parana":
      pintarVinotecas(vinotecasLagarde.filter((el) => el.barrio === 'Zona Parana'));
      break;
    case "Zona San Lorenzo":
      pintarVinotecas(vinotecasLagarde.filter((el) => el.barrio === 'Zona San Lorenzo'));
      break;
    case "Zona Santa Fe":
      pintarVinotecas(vinotecasLagarde.filter((el) => el.barrio === 'Zona Santa Fe'));
      break;
    case "Zona Santo Tome":
      pintarVinotecas(vinotecasLagarde.filter((el) => el.barrio === 'Zona Santo Tome'));
      break;
    case "Zona Roldan":
      pintarVinotecas(vinotecasLagarde.filter((el) => el.barrio === 'Zona Roldan'));
      break;
    case "Zona Rafaela":
      pintarVinotecas(vinotecasLagarde.filter((el) => el.barrio === 'Zona Rafaela'));
      break;
    case "Zona Esperanza":
      pintarVinotecas(vinotecasLagarde.filter((el) => el.barrio === 'Zona Esperanza'));
      break;
    case "Zona Entre Rios":
      pintarVinotecas(vinotecasLagarde.filter((el) => el.barrio === 'Zona Entre Rios'));
      break;
    case "Zona Santa Teresa":
      pintarVinotecas(vinotecasLagarde.filter((el) => el.barrio === 'Zona Santa Teresa'));
      break;
    case "Zona San Nicolas":
      pintarVinotecas(vinotecasLagarde.filter((el) => el.barrio === 'Zona San Nicolas'));
      break;
    case "Zona Maximo Paz":
      pintarVinotecas(vinotecasLagarde.filter((el) => el.barrio === 'Zona Maximo Paz'));
      break;
    case "Zona Peyrano":
      pintarVinotecas(vinotecasLagarde.filter((el) => el.barrio === 'Zona Peyrano'));
      break;
    case "Zona Casilda":
      pintarVinotecas(vinotecasLagarde.filter((el) => el.barrio === 'Zona Casilda'));
      break;
    case "Zona Reconquista":
      pintarVinotecas(vinotecasLagarde.filter((el) => el.barrio === 'Zona Reconquista'));
      break;
    case "Zona Venado Tuerto":
      pintarVinotecas(vinotecasLagarde.filter((el) => el.barrio === 'Zona Venado Tuerto'));
      break;
    case "Zona Las Rosas":
      pintarVinotecas(vinotecasLagarde.filter((el) => el.barrio === 'Zona Las Rosas'));
      break;
    case "Zona Peyrano":
      pintarVinotecas(vinotecasLagarde.filter((el) => el.barrio === 'Zona Peyrano'));
      break;
    case "Zona El Ortondo":
      pintarVinotecas(vinotecasLagarde.filter((el) => el.barrio === 'Zona El Ortondo'));
      break;
    case "Zona Delivery":
      Delivery(vinotecasDelivery.filter((el) => el.barrio === 'Zona Delivery'));
      pintarVinotecas(vinotecasLagarde.filter((el) => el.barrio === ''));
      break;
  }
})

pintarVinotecas(vinotecasLagarde)
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
    delivery.querySelector('h5').textContent = vinotecaDeli.vinoteca
    delivery.querySelector('p').textContent = vinotecaDeli.direccion
    delivery.querySelector('img').setAttribute("src", vinotecaDeli.thumbnailUrl)
    delivery.querySelector('a').setAttribute("href", vinotecaDeli.ir)

    const clone = delivery.cloneNode(true)
    fragment.appendChild(clone)
  })
  deli.appendChild(fragment)
}