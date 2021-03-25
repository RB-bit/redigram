const locales = document.getElementById('locales')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()
//Filtro por Barrio
const selectBarrio = document.getElementById('selectBarrio')

let vinotecasCasarena = [
    {
      id: 1,
      vinoteca: "Queseria sin un vino",
      direccion: "Pte. Roca 1518",
      ir:"https://goo.gl/maps/5ryrFkjuSeP9CKvr5",
      barrio:"Zona Centro",
      bodega: "casarena",
      thumbnailUrl: "img/vinotecas/casarena/queseria.png"
    },
    {
      id: 2,
      vinoteca: "El Caballero del Vino",
      direccion: "Necochea 1426",
      ir:"https://goo.gl/maps/Qadx8enCCce1Lzkz7",
      barrio:"Zona Centro",
      bodega: "casarena",
      thumbnailUrl: "img/vinotecas/casarena/ElCaballero.png"
    },
    {
      id: 3,
      vinoteca: "La Fiambretta",
      direccion: "Laprida 1301 esq. 3 de febrero ",
      ir:"https://goo.gl/maps/guPuoTyQECR5jRvq6",
      barrio:"Zona Centro",
      bodega: "casarena",
      thumbnailUrl: "img/vinotecas/casarena/LaFiabrettaLaprida.png"
    },
    {
      id: 4,
      vinoteca: "La Fiambretta - Mendoza esq. Italia",
      direccion: "Mendoza esq. Italia",
      ir:"https://g.page/lafiambretta?share",
      barrio:"Zona Centro",
      bodega: "casarena",
      thumbnailUrl: "img/vinotecas/casarena/LaFiabrettaMendoza.png"
    },
    {
      id: 5,
      vinoteca: "Vinoteca Baco",
      direccion: "9 de julio 786",
      ir:"https://goo.gl/maps/rFHySHexuniuLbtt7",
      barrio:"Zona Centro",
      bodega: "casarena",
      thumbnailUrl: "img/vinotecas/casarena/vinotecaBaco.png"
    },
    {
        id: 6,
        vinoteca: "La Barrica",
        direccion:"Urquiza 1187",
        ir:"https://g.page/LaBarricaVineria?share",
        barrio:"Zona Centro",
        bodega: "casarena",
        thumbnailUrl: "img/vinotecas/casarena/labarrica.png"
    },
    {
      id: 7,
      vinoteca: "La Casa de los Vinos",
      direccion: "San Lorenzo esq. Pte. Roca",
      ir:"https://goo.gl/maps/rFHySHexuniuLbtt7",
      barrio:"Zona Centro",
      bodega: "casarena",
      thumbnailUrl: "img/vinotecas/casarena/LaCasaDeLosVinos.png"
    },
    {
      id: 8,
      vinoteca: "Vinoteca Ruta 40",
      direccion: "Buenos Aires 1490",
      ir:"https://goo.gl/maps/2LLCRJQ8m7Z2bGoX9",
      barrio:"Zona Centro",
      bodega: "casarena",
      thumbnailUrl: "img/vinotecas/casarena/vinotecaruta40.jpeg"
    },
    {
      id: 9,
      vinoteca: "La Botillería",
      direccion: "Dorrego 349 2b",
      ir:"https://goo.gl/maps/rf5MgSG9Q5zb8Q217",
      barrio:"Zona Centro",
      bodega: "casarena",
      thumbnailUrl: "img/vinotecas/casarena/labotilleria.jpg"
    },
    {
      id:10,
      vinoteca: "Vinoteca Maestro",
      direccion: "Suipacha 381",
      ir:"https://goo.gl/maps/2mEqDMipT45Kaa4SA",
      barrio:"Zona Macro-Centro",
      bodega: "casarena",
      thumbnailUrl: "img/vinotecas/casarena/vinotecamaestro.jpg"
    }
  ]

selectBarrio.addEventListener('change', ()=>{
    //console.log(selectBarrio.value)
    switch(selectBarrio.value) {
        case "Todas las vinotecas":
            pintarVinotecas(vinotecasCasarena);
            break;
        case "Zona Centro":
            pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Centro'));
            break;
        case "Zona Macro-Centro":
                pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Macro-Centro'));
                break;
    }
})

  pintarVinotecas(vinotecasCasarena)

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
