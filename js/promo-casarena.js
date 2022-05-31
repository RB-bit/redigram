const locales = document.getElementById('locales')
const deli = document.getElementById('deli')
const templateCard = document.getElementById('template-card').content
const delivery = document.getElementById('delivery').content
const fragment = document.createDocumentFragment()
//Filtro por Barrio
const selectBarrio = document.getElementById('selectBarrio')


let vinotecasCasarena = [
  //Rosario Centro

  {
    id: 1,
    vinoteca: "Queseria sin un vino",
    direccion: "Pte. Roca 1518",
    ir: "https://goo.gl/maps/5ryrFkjuSeP9CKvr5",
    barrio: "Zona Centro",
    bodega: "lagarde",
    thumbnailUrl: "img/vinotecas/rime/queseria.png"
  },
  {
    id: 2,
    vinoteca: "Vin Rouge",
    direccion: "Mendoza 233",
    ir: "https://g.page/vinrougevinoteca?share",
    barrio: "Zona Centro",
    bodega: "rime",
    thumbnailUrl: "img/vinotecas/rime/random4"
  },
  {
    id: 3,
    vinoteca: "De Buena Madera",
    direccion: "Italia 954",
    ir: "https://goo.gl/maps/PdZsZPX2HeZZjatBA",
    barrio: "Zona Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/debuenamadera.png"
  },
  {
    id: 4,
    vinoteca: "La Fiambretta - Mendoza esq. Italia",
    direccion: "Mendoza esq. Italia",
    ir: "https://g.page/lafiambretta?share",
    barrio: "Zona Centro",
    bodega: "rime",
    thumbnailUrl: "img/vinotecas/amalaya/LaFiabrettaMendoza.png"
  },
  {
    id: 5,
    vinoteca: "La Fiambretta",
    direccion: "Laprida 1301 esq. 3 de febrero ",
    ir: "https://goo.gl/maps/guPuoTyQECR5jRvq6",
    barrio: "Zona Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/LaFiabrettaLaprida.png"
  },
  {
    id: 5,
    vinoteca: "La Casa del Gin",
    direccion: "España 1111 ",
    ir: "https://goo.gl/maps/BKyUyTvM6Kr8jbPN6",
    barrio: "Zona Centro",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/random2.jpeg"
  },
  {
    id: 5,
    vinoteca: "La Vinoteca",
    direccion: "Tucumán 1462",
    ir: "https://goo.gl/maps/uhapfy7YJ4Hm1eU16",
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
  // Zona macro Centro
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
  //Rosario Zona Sur
  {
    id: 48,
    vinoteca: "Al Vino Vino",
    direccion: "San Martín 5201",
    ir: "https://goo.gl/maps/fJV5jxGSg1uBsAhD6",
    barrio: "Zona Sur",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/alvinovinosur"
  },
  {
    id: 49,
    vinoteca: "Al Vino Vino",
    direccion: "Mitre 2764",
    ir: "https://goo.gl/maps/UAnoNYGzfMzutTRJA",
    barrio: "Zona Sur",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/alvinovinosur2"
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
  //Santa Fe
  {
    id: 51,
    vinoteca: "Vinópolis",
    direccion: "Santiago del Estero 3166 - Local 2 Mercado Norte",
    ir: "https://goo.gl/maps/WQKiiUM3vcfdRejg9",
    barrio: "Zona Santa Fe",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/random1.jpg"
  },
  //Funes y Fisherton
  {
    id: 51,
    vinoteca: "Autoservicio Arlequín",
    direccion: "Córdoba 1984, Funes",
    ir: "https://goo.gl/maps/C1gXXDPNspRMcvkY8",
    barrio: "Zona Funes y Fisherton",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/arlequin"
  },
  //Zona Alvarez
  {
    id: 46,
    vinoteca: "Lo de Juan",
    direccion: "San Martín 203 - Alvarez, Santa Fe",
    ir: "https://goo.gl/maps/i9YKW9AaYd3A3fcy6",
    barrio: "Zona Alvarez",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/lodejuan.png"
  },
  //Zona Villa Gobernador Galvez
  {
    id: 46,
    vinoteca: "Vinoteca Terroir",
    direccion: "Dorrego 1218 - Villa Gobernador Gálvez, Santa Fe",
    ir: "https://goo.gl/maps/NjVPaJ2bgxCa7d947",
    barrio: "Zona Villa Gobernador Galvez",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/random2.jpeg"
  },

  //Zona Calchaquí
  {
    id: 46,
    vinoteca: "Supermercado Rorro",
    direccion: "Roque Sáenza Peña 915 - Calchaquí",
    ir: "https://goo.gl/maps/TBv3Uw3z69Nd5dGT9",
    barrio: "Zona Calchaqui",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/random1.jpg"
  },
//Zona Casilda
  {
    id: 47,
    vinoteca: "Casa de Baco",
    direccion: "Fray Luis Beltrán 2202, Casilda",
    ir: "https://goo.gl/maps/BkfXcv3WHcGenhpE9",
    barrio: "Zona Casilda",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/random4"
  },

  //Zona San Jorge
  {
    id: 47,
    vinoteca: "Tienda Tevita",
    direccion: "Irigoyen 1321, San Jorge",
    ir: "https://goo.gl/maps/qw8gQJriGD2pDnUT9",
    barrio: "Zona San Jorge",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/tevita.png"
  },
  //Zona Villa Cañas
  {
    id: 47,
    vinoteca: "Empatía Wines",
    direccion: "Calle 54 N°65 - entre Calle 53 y 51, Villa Cañas",
    ir: "https://goo.gl/maps/DNquctLqWXVbBH9MA",
    barrio: "Zona Villa Canias",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/empatia.png"
  },
]

let vinotecasDelivery = [
  {
    id: 75,
    vinoteca: "La Champagnería",
    direccion: "Delivery en Rosario",
    contactar: "https://www.instagram.com/la_champaneria/?hl=es",
    barrio: "Zona Delivery",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/random6"
  },
  {
    id: 52,
    vinoteca: "MyM Distribuidora",
    direccion: "Delivery en Rosario y Santa Fe",
    ir: "https://goo.gl/maps/gh9LDqSjwkfCk6Uu5",
    barrio: "Zona Delivery",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/random3.png"
  },
  {
    id: 52,
    vinoteca: "Pompei Wines",
    direccion: "Delivery en Rosario y Santa Fe",
    ir: "https://www.instagram.com/pompeiwines/",
    barrio: "Zona Delivery",
    bodega: "amalaya",
    thumbnailUrl: "img/vinotecas/amalaya/random4"
  },
]

selectBarrio.addEventListener('change', () => {
  //console.log(selectBarrio.value)
  switch (selectBarrio.value) {
    case "Todas las vinotecas":
      pintarVinotecas(vinotecasCasarena);
      break;
    case "Zona Centro":
      pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Centro'));
      break;
    case "Zona Sur":
      pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Sur'));
      break;
    case "Zona Norte":
      pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Norte'));
      break;
    case "Zona Macro Centro":
      pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Macro Centro'));
      break;
    case "Zona Granadero Baigorria":
      pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Granadero Baigorria'));
      break;
    case "Zona Funes y Fisherton":
      pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Funes y Fisherton'));
      break;
    case "Zona Villa Constitucion":
      pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Villa Constitucion'));
      break;
    case "Zona Villa Gobernador Galvez":
      pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Villa Gobernador Galvez'));
      break;
    case "Zona Villa Canias":
      pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Villa Canias'));
      break;
    case "Zona Parana":
      pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Parana'));
      break;
    case "Zona San Lorenzo":
      pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona San Lorenzo'));
      break;
    case "Zona Santa Fe":
      pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Santa Fe'));
      break;
    case "Zona Santo Tome":
      pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Santo Tome'));
      break;
    case "Zona Roldan":
      pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Roldan'));
      break;
    case "Zona Rafaela":
      pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Rafaela'));
      break;
    case "Zona Esperanza":
      pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Esperanza'));
      break;
    case "Zona Entre Rios":
      pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Entre Rios'));
      break;
    case "Zona Santa Teresa":
      pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Santa Teresa'));
      break;
    case "Zona San Nicolas":
      pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona San Nicolas'));
      break;
    case "Zona Las Rosas":
      pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Las Rosas'));
      break;
    case "Zona Las Parejas":
      pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Las Parejas'));
      break;
    case "Zona Reconquista":
      pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Reconquista'));
      break;
    case "Zona Firmat":
      pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Firmat'));
      break;
    case "Zona San Jorge":
      pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona San Jorge'));
      break;
    case "Zona Alvarez":
      pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Alvarez'));
      break;
    case "Zona Casilda":
      pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Casilda'));
      break;
    case "Zona Calchaqui":
      pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Calchaqui'));
      break;
    case "Zona Delivery":
      Delivery(vinotecasDelivery.filter((el) => el.barrio === 'Zona Delivery'));
      pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === ''));
      break;
  }
})

pintarVinotecas(vinotecasCasarena)
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