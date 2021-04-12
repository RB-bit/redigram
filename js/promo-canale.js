const locales = document.getElementById('locales')
const deli = document.getElementById('deli')
const templateCard = document.getElementById('template-card').content
const delivery = document.getElementById('delivery').content
const fragment = document.createDocumentFragment()
//Filtro por Barrio
const selectBarrio = document.getElementById('selectBarrio')

 let vinotecasCanale = [
   //Zona Centro
   {
     id: 1,
     vinoteca: "Queseria sin un vino",
     direccion: "Pte. Roca 1518",
     ir:"https://goo.gl/maps/5ryrFkjuSeP9CKvr5",
     barrio:"Zona Centro",
     bodega: "canale",
     thumbnailUrl: "img/vinotecas/canale/queseria.png"
   },
   {
   id: 2,
   vinoteca: "La Botillería",
   direccion: "Dorrego 349 - Piso 2 Depto B",
   ir:"https://goo.gl/maps/rf5MgSG9Q5zb8Q217",
   barrio:"Zona Centro",
   bodega: "canale",
   thumbnailUrl: "img/vinotecas/canale/labotilleria.jpg"
   },
   {
     id: 3,
     vinoteca: "La Fiambretta",
     direccion: "Laprida 1301 esq. 3 de febrero ",
     ir:"https://goo.gl/maps/guPuoTyQECR5jRvq6",
     barrio:"Zona Centro",
     bodega: "canale",
     thumbnailUrl: "img/vinotecas/canale/LaFiabrettaLaprida.png"
   },
   {
     id: 4,
     vinoteca: "La Fiambretta - Mendoza esq. Italia",
     direccion: "Mendoza esq. Italia",
     ir:"https://g.page/lafiambretta?share",
     barrio:"Zona Centro",
     bodega: "canale",
     thumbnailUrl: "img/vinotecas/canale/LaFiabrettaMendoza.png"
   },
   {
     id: 5,
     vinoteca: "De Buena Madera",
     direccion: "Italia 954",
     ir:"https://goo.gl/maps/PdZsZPX2HeZZjatBA",
     barrio:"Zona Centro",
     bodega: "canale",
     thumbnailUrl: "img/vinotecas/canale/debuenamadera.png"
   },
   {
       id: 6,
       vinoteca: "El Camino",
       direccion:"Moreno 1039",
       ir:"https://g.page/el-camino-vinoteca?share",
       barrio:"Zona Centro",
       bodega: "canale",
       thumbnailUrl: "img/vinotecas/canale/elcamino.png"
   },
   {
    id:7,
    vinoteca: "Vinoteca Terruño",
    direccion: "Catamarca 1640",
    ir:"https://goo.gl/maps/wpZjMtmQM4QLzVsY9",
    barrio:"Zona Centro",
    bodega: "canale",
    thumbnailUrl: "img/vinotecas/canale/teruno"
  },
   //Zona Macro Centro
   {
     id: 8,
     vinoteca: "Rosario Vinos Exclusivos",
     direccion: "Pasco 1501",
     ir:"https://goo.gl/maps/2KxPH9C6UvVK2kt26",
     barrio:"Zona Macro Centro",
     bodega: "canale",
     thumbnailUrl: "img/vinotecas/canale/vinosexclusivos.png"
   },
   {
     id: 9,
     vinoteca: "Eleven Copas",
     direccion: "Corientes 1919",
     ir:"https://g.page/eleven-copas?share",
     barrio:"Zona Macro Centro",
     bodega: "canale",
     thumbnailUrl: "img/vinotecas/canale/elevencopas.png"
   },
   {
     id: 10,
     vinoteca: "Rincón Fonseca",
     direccion: "España 1921",
     ir:"https://goo.gl/maps/CdPt7acFywSBe69w9",
     barrio:"Zona Macro Centro",
     bodega: "canale",
     thumbnailUrl: "img/vinotecas/canale/rinconfonseca.png"
   },
   {
    id:11,
    vinoteca: "Eleven Wines",
    direccion: "Ov. Lagos 522",
    ir:"https://g.page/vinoteca-eleven-wines?share",
    barrio:"Zona Macro Centro",
    bodega: "canale",
    thumbnailUrl: "img/vinotecas/canale/elevenwines"
  },
  {
    id:12,
    vinoteca: "La Toscana",
    direccion: "Mendoza 3563",
    ir:"https://goo.gl/maps/tTHX2FGRAr8n3eW66",
    barrio:"Zona Macro Centro",
    bodega: "canale",
    thumbnailUrl: "img/vinotecas/canale/latoscana"
    },
   //Zona Norte
   {
     id:13,
     vinoteca: "Don Eliseo",
     direccion: "Gorriti 415",
     ir:"https://goo.gl/maps/NVi1DHrQb5RcXAum8",
     barrio:"Zona Norte",
     bodega: "canale",
     thumbnailUrl: "img/vinotecas/canale/doneliseo.png"
   },
   //Zona Sur
   {
   id:14,
   vinoteca: "Fiambrería Amenabar",
   direccion: "Rueda 2165",
   ir:"https://goo.gl/maps/JuyyaFftSMTZw8KF8",
   barrio:"Zona Sur",
   bodega: "canale",
   thumbnailUrl: "img/vinotecas/canale/amenabar.png"
   },
   //Zona Oeste
   {
   id:15,
   vinoteca: "Francesca Delicatessen",
   direccion: "Mendoza 5503",
   ir:"https://goo.gl/maps/QAQiT1nvESwMLCXL6",
   barrio:"Zona Oeste",
   bodega: "canale",
   thumbnailUrl: "img/vinotecas/canale/francesca.png"
   },
   //Zona Funes y Fisherton
   {
   id:16,
   vinoteca: "Mundo Vino",
   direccion: "Córdoba 1820, Funes",
   ir:"https://goo.gl/maps/U2cLWVX17Xn2SLyZ6",
   barrio:"Zona Funes y Fisherton",
   bodega: "canale",
   thumbnailUrl: "img/vinotecas/canale/mundovino.png"
   },
   {
   id:17,
   vinoteca: "Casa Prada",
   direccion: "Shopping Fisherton Plaza local 43",
   ir:"https://goo.gl/maps/NWzZDV1EndumUU5q9",
   barrio:"Zona Funes y Fisherton",
   bodega: "canale",
   thumbnailUrl: "img/vinotecas/canale/prada.png"
   },
   {
   id:18,
   vinoteca: "MyM Distribuidora",
   direccion: "Mitre 2599 - Funes",
   ir:"https://goo.gl/maps/gh9LDqSjwkfCk6Uu5",
   barrio:"Zona Funes y Fisherton",
   bodega: "canale",
   thumbnailUrl: "img/vinotecas/canale/random3.png"
   },
   {
   id:19,
   vinoteca: "Lo de Tere",
   direccion: "Av. Real 9576 - Fisherton",
   ir:"https://goo.gl/maps/g1cT8axbfJZKGNdG7",
   barrio:"Zona Funes y Fisherton",
   bodega: "canale",
   thumbnailUrl: "img/vinotecas/canale/random4"
   },
   //Zona Villa Constitución
   {
   id:20,
   vinoteca: "Quicho",
   direccion: "Belgrano 164 - Villa Constitución",
   ir:"https://goo.gl/maps/AfCs4MDRdMi7ekjb8",
   barrio:"Zona Villa Constitucion",
   bodega: "canale",
   thumbnailUrl: "img/vinotecas/canale/random1.jpg"
   },
   {
   id:21,
   vinoteca: "Entre Copas",
   direccion: "Dorrego 1101 - Villa Constitución",
   ir:"https://g.page/entrecopasenoteca?share",
   barrio:"Zona Villa Constitucion",
   bodega: "canale",
   thumbnailUrl: "img/vinotecas/canale/entrecopas"
   },
   // Zona Santa Teresa
   {
   id:22,
   vinoteca: "Cerveteca",
   direccion: "Sarmiento 846 - Santa Teresa",
   ir:"https://goo.gl/maps/i2ay6TzT4En7MY9BA",
   barrio:"Zona Santa Teresa",
   bodega: "canale",
   thumbnailUrl: "img/vinotecas/canale/random2.jpeg"
   },
   //Zona San Lorenzo
   {
   id:23,
   vinoteca: "Campos",
   direccion: "Belgrano 776 - San Lorenzo",
   ir:"https://goo.gl/maps/yjed3Pvx3cMbFtK26",
   barrio:"Zona San Lorenzo",
   bodega: "canale",
   thumbnailUrl: "img/vinotecas/canale/vinoteca-campos"
   },
   //Zona Parana
   {
   id:24,
   vinoteca: "El Palacio",
   direccion: "Gral. Pascual Echague 814 - Paraná",
   ir:"https://goo.gl/maps/UBYeewHiq7KT2pXL9",
   barrio:"Zona Parana",
   bodega: "canale",
   thumbnailUrl: "img/vinotecas/canale/random2.jpeg"
   },
   //Zona Santa Fe
   {
   id:25,
   vinoteca: "Don Juan Jacinto",
   direccion: "Aristóbulo del Valle 6342 - Santa Fe",
   ir:"https://goo.gl/maps/bLxz4psyonqq7xMJ9",
   barrio:"Zona Santa Fe",
   bodega: "canale",
   thumbnailUrl: "img/vinotecas/canale/donjuanjacinto1"
   },
   {
   id:26,
   vinoteca: "Don Juan Jacinto",
   direccion: "25 de mayo 3601 - Santa Fe",
   ir:"https://goo.gl/maps/YWvGh1k8cA8CR6zT7",
   barrio:"Zona Santa Fe",
   bodega: "canale",
   thumbnailUrl: "img/vinotecas/canale/donjuanjacinto2"
   },
   {
   id:27,
   vinoteca: "Exquisitos Placeres",
   direccion: "Balcarce 1576 - Santa Fe",
   ir:"https://goo.gl/maps/pVU8Mw6Bfx6J9NzAA",
   barrio:"Zona Santa Fe",
   bodega: "canale",
   thumbnailUrl: "img/vinotecas/canale/exquisitosplaceres"
   },
       //Zona Santo Tomé
   {
   id:28,
   vinoteca: "Entre Copas - Almacén de Vinos",
   direccion: "Macias 2092 - Santo Tomé",
   ir:"https://goo.gl/maps/NabVLXmqtG6bFsVi9",
   barrio:"Zona Santo Tome",
   bodega: "canale",
   thumbnailUrl: "img/vinotecas/canale/entrecopassantotome"
   }
 ]

let  vinotecasDelivery = [
  {
    id:29,
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
          pintarVinotecas(vinotecasCanale);
          break;
      case "Zona Centro":
          pintarVinotecas(vinotecasCanale.filter((el) => el.barrio === 'Zona Centro'));
          Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
          break;
      case "Zona Macro Centro":
          pintarVinotecas(vinotecasCanale.filter((el) => el.barrio === 'Zona Macro Centro'));
          Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
          break;
      case "Zona Norte":
          pintarVinotecas(vinotecasCanale.filter((el) => el.barrio === 'Zona Norte'));
          Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
          break;        
      case "Zona Sur":
          pintarVinotecas(vinotecasCanale.filter((el) => el.barrio === 'Zona Sur'));
          Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
          break;
      case "Zona Oeste":
          pintarVinotecas(vinotecasCanale.filter((el) => el.barrio === 'Zona Oeste'));
          Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
          break;
      case "Zona Funes y Fisherton":
          pintarVinotecas(vinotecasCanale.filter((el) => el.barrio === 'Zona Funes y Fisherton'));
          Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
          break;
      case "Zona San Lorenzo":
          pintarVinotecas(vinotecasCanale.filter((el) => el.barrio === 'Zona San Lorenzo'));
          Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
          break;
      case "Zona Villa Constitucion":
        pintarVinotecas(vinotecasCanale.filter((el) => el.barrio === 'Zona Villa Constitucion'));
        Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
          break;
      case "Zona Santa Fe":
        pintarVinotecas(vinotecasCanale.filter((el) => el.barrio === 'Zona Santa Fe'));
        Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
        break;
      case "Zona Santo Tome":
        pintarVinotecas(vinotecasCanale.filter((el) => el.barrio === 'Zona Santo Tome'));
        Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
        break;
      case "Zona Parana":
        pintarVinotecas(vinotecasCanale.filter((el) => el.barrio === 'Zona Parana'));
        Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
        break;
      case "Zona Santa Teresa":
        pintarVinotecas(vinotecasCanale.filter((el) => el.barrio === 'Zona Santa Teresa'));
        Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
        break;
      case "Zona Delivery":
        Delivery(vinotecasDelivery.filter((el) => el.barrio === 'Zona Delivery'));
        pintarVinotecas(vinotecasCanale.filter((el) => el.barrio === ''));
        break;
      }
})

  pintarVinotecas(vinotecasCanale)
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