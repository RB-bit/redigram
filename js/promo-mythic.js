const locales = document.getElementById('locales')
const deli = document.getElementById('deli')
const templateCard = document.getElementById('template-card').content
const delivery = document.getElementById('delivery').content
const fragment = document.createDocumentFragment()
//Filtro por Barrio
const selectBarrio = document.getElementById('selectBarrio')

let vinotecasMythic = [
  //Zona Centro

  //Zona Macro Centro

  //Zona Norte

  //Zona Sur
  {
    id: 1,
    vinoteca: "Vinos y Copas",
    direccion: "Virasoro 2001",
    ir: "https://goo.gl/maps/Fr8idJrCnoudyLnGA",
    barrio: "Zona Sur",
    bodega: "myhic",
    thumbnailUrl: "img/vinotecas/mythic/vinosycopas.png"
  },
  //Zona Oeste

  //Zona Funes y Fisherton

  //Zona Villa Constitución

  // Zona Santa Teresa

  //Zona Parana

  //Zona Santa Fe
  {
    id: 2,
    vinoteca: "Don Juan Jacinto",
    direccion: "25 de mayo 3601 - Santa Fe",
    ir: "https://goo.gl/maps/YWvGh1k8cA8CR6zT7",
    barrio: "Zona Santa Fe",
    bodega: "mythic",
    thumbnailUrl: "img/vinotecas/mythic/donjuanjacinto2"
  },
  //Zona Santo Tomé

  //Zona Rafaela
  {
    id: 3,
    vinoteca: "Los Cortesanos",
    direccion: "Alvear 281, Rafaela",
    ir: "https://g.page/LosCortesanos?share",
    barrio: "Zona Rafaela",
    bodega: "mythic",
    thumbnailUrl: "img/vinotecas/mythic/loscortesanos"
  },
  //Zona Roldán

  //Zona Esperanza

  //Zona Entre Rios

]

let vinotecasDelivery = [
  // {
  //   id: 52,
  //   vinoteca: "Cepa Negra",
  //   direccion: "Delivery en Rosario, Fisherton, Funes y Roldán",
  //   contactar: "https://bit.ly/373LoKa",
  //   barrio: "Zona Delivery",
  //   bodega: "mythic",
  //   thumbnailUrl: "img/vinotecas/mythic/random2.jpeg"
  // },
  // {
  //   id: 53,
  //   vinoteca: "Crimac",
  //   direccion: "Compra on-line y Delivery en Rosario",
  //   ir: "https://www.mercadovinos.com.ar/",
  //   barrio: "Zona Delivery",
  //   bodega: "mythic",
  //   thumbnailUrl: "img/vinotecas/mythic/random1.jpg"
  // },
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