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
      ir:"https://g.page/lacasadelosvinosrosario?share",
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
      direccion: "Dorrego 349 - Piso 2 Depto B",
      ir:"https://goo.gl/maps/rf5MgSG9Q5zb8Q217",
      barrio:"Zona Centro",
      bodega: "casarena",
      thumbnailUrl: "img/vinotecas/casarena/labotilleria.jpg"
    },
    {
      id: 10,
      vinoteca: "Cavanova",
      direccion: "1ero de Mayo 1349",
      ir:"https://goo.gl/maps/56CRma3jRG7tmEBL6",
      barrio:"Zona Centro",
      bodega: "casarena",
      thumbnailUrl: "img/vinotecas/casarena/cavanova.png"
    },
    // Macro-Centro
    {
      id:11,
      vinoteca: "Vinoteca Maestro",
      direccion: "Suipacha 381",
      ir:"https://goo.gl/maps/2mEqDMipT45Kaa4SA",
      barrio:"Zona Macro-Centro",
      bodega: "casarena",
      thumbnailUrl: "img/vinotecas/casarena/vinotecamaestro.jpg"
    },
    // Zona Sur
    {
    id:12,
    vinoteca: "El Tonel",
    direccion: "Ayacucho 5321",
    ir:"https://goo.gl/maps/DpZLPxtVQxx8ZcpMA",
    barrio:"Zona Sur",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/eltonel"
    },
    // Zona Funes y Fisherton
    {
    id:13,
    vinoteca: "Lo de Tere",
    direccion: "Av. Real 9576 - Fisherton",
    ir:"https://goo.gl/maps/g1cT8axbfJZKGNdG7",
    barrio:"Zona Fisherton",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/random4"
    },
    // Zona Villa Constitucion
    {
    id:14,
    vinoteca: "Entre Copas",
    direccion: "Dorrego 1101 - Villa Constitución",
    ir:"https://g.page/entrecopasenoteca?share",
    barrio:"Zona Villa Constitucion",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/entrecopas"
    },
    // Zona San Lorenzo
    {
    id:15,
    vinoteca: "Campos",
    direccion: "Belgrano 776 - San Lorenzo",
    ir:"https://goo.gl/maps/yjed3Pvx3cMbFtK26",
    barrio:"Zona San Lorenzo",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/vinoteca-campos"
    },
    //Zona Parana
    {
    id:16,
    vinoteca: "El Palacio",
    direccion: "Gral. Pascual Echague 814 - Paraná",
    ir:"https://goo.gl/maps/UBYeewHiq7KT2pXL9",
    barrio:"Zona Parana",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/random2.jpeg"
    },
    //Zona Santa Fe
    {
    id:17,
    vinoteca: "Don Juan Jacinto",
    direccion: "Aristóbulo del Valle 6342 - Santa Fe",
    ir:"https://goo.gl/maps/bLxz4psyonqq7xMJ9",
    barrio:"Zona Santa Fe",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/donjuanjacinto1"
    },
    {
    id:18,
    vinoteca: "Don Juan Jacinto",
    direccion: "25 de mayo 3601 - Santa Fe",
    ir:"https://goo.gl/maps/YWvGh1k8cA8CR6zT7",
    barrio:"Zona Santa Fe",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/donjuanjacinto2"
    },
    {
    id:19,
    vinoteca: "La Cueva de Francia",
    direccion: "Francia 3490 - Santa Fe",
    ir:"https://goo.gl/maps/q4eMXN8UEwyswmdo8",
    barrio:"Zona Santa Fe",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/lacueva"
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
        case "Zona Sur":
          pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Sur'));
          break;
        case "Zona Fisherton":
          pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Fisherton'));
          break;
        case "Zona Villa Constitucion":
          pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Villa Constitucion'));
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
