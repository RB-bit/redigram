const locales = document.getElementById('locales')
const templateCard = document.getElementById('template-card').content
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

  // Zona macro Centro
  {
    id: 6,
    vinoteca: "Vino y se quedó",
    direccion: "Cafferata 1419",
    ir: "https://goo.gl/maps/SQatrb96NNtCZe3w7",
    barrio: "Zona Macro Centro",
    bodega: "lagarde",
    thumbnailUrl: "img/vinotecas/canale/vinoysequedo"
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
  //Máximo Paz
  {
    id: 7,
    vinoteca: "Vinoteca Peyrano",
    direccion: "Falucho 730",
    ir: "https://goo.gl/maps/NkBxVVmx31brpWFk7",
    barrio: "Zona Peyrano",
    bodega: "lagarde",
    thumbnailUrl: "img/vinotecas/rime/random2.jpeg"
  },

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
  }
})

pintarVinotecas(vinotecasLagarde)

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