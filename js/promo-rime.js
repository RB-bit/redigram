const locales = document.getElementById('locales')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()
//Filtro por Barrio
const selectBarrio = document.getElementById('selectBarrio')

let vinotecasRime = [
    {
      id: 1,
      vinoteca: "Los Vinos de Stella",
      direccion: "Galería Córdoba - Córdoba 1080 local N° 18",
      ir:"https://goo.gl/maps/1NVPFS9obN71ZoNAA",
      barrio:"Zona Centro",
      bodega: "rime",
      thumbnailUrl: "img/vinotecas/rime/losvinosdestella.png"
    },
    {
      id: 2,
      vinoteca: "Chateau Du Vin",
      direccion: "Local 3, Complejo Tifón Baigorria - Julio Argentino Roca 650, Granadero Baigorria",
      ir:"https://goo.gl/maps/Wdd2A9htPVdAk1BT9",
      barrio:"Zona Granadero Baigorria",
      bodega: "rime",
      thumbnailUrl: "img/vinotecas/rime/chateau.png"
    },
    {
      id: 3,
      vinoteca: "La Fiambretta",
      direccion: "Laprida 1301 esq. 3 de febrero ",
      ir:"https://goo.gl/maps/guPuoTyQECR5jRvq6",
      barrio:"Zona Centro",
      bodega: "rime",
      thumbnailUrl: "img/vinotecas/rime/LaFiabrettaLaprida.png"
    },
    {
      id: 4,
      vinoteca: "Anubis",
      direccion: "Zeballos 1013",
      ir:"https://goo.gl/maps/SvovFA69sPT23V2Q9",
      barrio:"Zona Centro",
      bodega: "rime",
      thumbnailUrl: "img/vinotecas/rime/anubis.png"
    },
    {
      id: 5,
      vinoteca: "Vinoteca Baco",
      direccion: "9 de julio 786",
      ir:"https://goo.gl/maps/rFHySHexuniuLbtt7",
      barrio:"Zona Centro",
      bodega: "rime",
      thumbnailUrl: "img/vinotecas/rime/vinotecaBaco.png"
    }
  ]

selectBarrio.addEventListener('change', ()=>{
    //console.log(selectBarrio.value)
    switch(selectBarrio.value) {
        case "Todas las vinotecas":
            pintarVinotecas(vinotecasRime);
            break;
        case "Zona Centro":
            pintarVinotecas(vinotecasRime.filter((el) => el.barrio === 'Zona Centro'));
            break;
        case "Zona Granadero Baigorria":
                pintarVinotecas(vinotecasRime.filter((el) => el.barrio === 'Zona Granadero Baigorria'));
                break;
    }
})

  pintarVinotecas(vinotecasRime)

function pintarVinotecas(array){
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