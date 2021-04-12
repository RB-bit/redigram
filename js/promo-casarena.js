const locales = document.getElementById('locales')
const deli = document.getElementById('deli')
const templateCard = document.getElementById('template-card').content
const delivery = document.getElementById('delivery').content
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
      vinoteca: "Don Baco - Casa de Vinos",
      direccion: "9 de julio 768",
      ir:"https://g.page/don-baco-casa-de-vinos?share",
      barrio:"Zona Centro",
      bodega: "casarena",
      thumbnailUrl: "img/vinotecas/casarena/vinotecabaco"
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
    {
      id: 11,
      vinoteca: "Orígenes Tienda Gourmet",
      direccion: "Moreno 137 BIS",
      ir:"https://goo.gl/maps/BVc8D1ReqjJCmC247",
      barrio:"Zona Centro",
      bodega: "casarena",
      thumbnailUrl: "img/vinotecas/casarena/origenes"
    },
    // Macro-Centro
    {
      id:12,
      vinoteca: "Vinoteca Maestro",
      direccion: "Suipacha 381",
      ir:"https://goo.gl/maps/2mEqDMipT45Kaa4SA",
      barrio:"Zona Macro-Centro",
      bodega: "casarena",
      thumbnailUrl: "img/vinotecas/casarena/vinotecamaestro.jpg"
    },
    {
      id:13,
      vinoteca: "La Toscana",
      direccion: "Mendoza 3563",
      ir:"https://goo.gl/maps/tTHX2FGRAr8n3eW66",
      barrio:"Zona Macro-Centro",
      bodega: "casarena",
      thumbnailUrl: "img/vinotecas/casarena/latoscana"
      },
    // Zona Sur
    {
    id:14,
    vinoteca: "El Tonel",
    direccion: "Ayacucho 5321",
    ir:"https://goo.gl/maps/DpZLPxtVQxx8ZcpMA",
    barrio:"Zona Sur",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/eltonel"
    },
    // Zona Funes y Fisherton
    {
    id:15,
    vinoteca: "Lo de Tere",
    direccion: "Av. Real 9576 - Fisherton",
    ir:"https://goo.gl/maps/g1cT8axbfJZKGNdG7",
    barrio:"Zona Fisherton",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/random4"
    },
    // Zona Villa Constitucion
    {
    id:16,
    vinoteca: "Entre Copas",
    direccion: "Dorrego 1101 - Villa Constitución",
    ir:"https://g.page/entrecopasenoteca?share",
    barrio:"Zona Villa Constitucion",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/entrecopas"
    },
    // Zona San Lorenzo
    {
    id:17,
    vinoteca: "Campos",
    direccion: "Belgrano 776 - San Lorenzo",
    ir:"https://goo.gl/maps/yjed3Pvx3cMbFtK26",
    barrio:"Zona San Lorenzo",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/vinoteca-campos"
    },
    //Zona Parana
    {
    id:18,
    vinoteca: "El Palacio",
    direccion: "Gral. Pascual Echague 814 - Paraná",
    ir:"https://goo.gl/maps/UBYeewHiq7KT2pXL9",
    barrio:"Zona Parana",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/random2.jpeg"
    },
    //Zona Santa Fe
    {
    id:19,
    vinoteca: "Don Juan Jacinto",
    direccion: "Aristóbulo del Valle 6342 - Santa Fe",
    ir:"https://goo.gl/maps/bLxz4psyonqq7xMJ9",
    barrio:"Zona Santa Fe",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/donjuanjacinto1"
    },
    {
    id:20,
    vinoteca: "Don Juan Jacinto",
    direccion: "25 de mayo 3601 - Santa Fe",
    ir:"https://goo.gl/maps/YWvGh1k8cA8CR6zT7",
    barrio:"Zona Santa Fe",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/donjuanjacinto2"
    },
    {
    id:21,
    vinoteca: "La Cueva de Francia",
    direccion: "Francia 3490 - Santa Fe",
    ir:"https://goo.gl/maps/q4eMXN8UEwyswmdo8",
    barrio:"Zona Santa Fe",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/lacueva"
    },
    {
      id:22,
      vinoteca: "Exquisitos Placeres",
      direccion: "Balcarce 1576 - Santa Fe",
      ir:"https://goo.gl/maps/pVU8Mw6Bfx6J9NzAA",
      barrio:"Zona Santa Fe",
      bodega: "casarena",
      thumbnailUrl: "img/vinotecas/casarena/exquisitosplaceres"
    },
    //Zona Santo Tomé
    {
    id:23,
    vinoteca: "Entre Copas - Almacén de Vinos",
    direccion: "Macias 2092 - Santo Tomé",
    ir:"https://goo.gl/maps/NabVLXmqtG6bFsVi9",
    barrio:"Zona Santo Tome",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/entrecopassantotome"
    }
  ]

let  vinotecasDelivery = [
  {
    id:26,
    vinoteca: "Cepa Negra",
    direccion: "Delivery en Rosario, Fisherton, Funes y Roldán",
    contactar:"https://bit.ly/373LoKa",
    barrio:"Zona Delivery",
    bodega: "canale",
    thumbnailUrl: "img/vinotecas/canale/random2.jpeg"
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
          Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
          break;
        case "Zona Macro-Centro":
          pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Macro-Centro'));
          Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
          break;
        case "Zona Sur":
          pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Sur'));
          Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
          break;
        case "Zona Fisherton":
          pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Fisherton'));
          Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
          break;
        case "Zona Villa Constitucion":
          pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Villa Constitucion'));
          Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
          break;
        case "Zona Parana":
          pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Parana'));
          Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
          break;
        case "Zona San Lorenzo":
          pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona San Lorenzo'));
          Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
          break;
        case "Zona Santa Fe":
          pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Santa Fe'));
          Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
          break;
        case "Zona Santo Tome":
          pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Santo Tome'));
          Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
          break;
        case "Zona Delivery":
          Delivery(vinotecasDelivery.filter((el) => el.barrio === 'Zona Delivery'));
          pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === ''));
          break;
        
  }
})

  pintarVinotecas(vinotecasCasarena)
  Delivery(vinotecasDelivery)

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

function Delivery(array){
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
