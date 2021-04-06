const locales = document.getElementById('locales')
const templateCard = document.getElementById('template-card').content
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
    //Zona Macro Centro
    {
      id: 7,
      vinoteca: "Rosario Vinos Exclusivos",
      direccion: "Pasco 1501",
      ir:"https://goo.gl/maps/2KxPH9C6UvVK2kt26",
      barrio:"Zona Macro Centro",
      bodega: "canale",
      thumbnailUrl: "img/vinotecas/canale/vinosexclusivos.png"
    },
    {
      id: 8,
      vinoteca: "Eleven Copas",
      direccion: "Corientes 1919",
      ir:"https://g.page/eleven-copas?share",
      barrio:"Zona Macro Centro",
      bodega: "canale",
      thumbnailUrl: "img/vinotecas/canale/elevencopas.png"
    },
    {
      id: 9,
      vinoteca: "Rincón Fonseca",
      direccion: "España 1921",
      ir:"https://goo.gl/maps/CdPt7acFywSBe69w9",
      barrio:"Zona Macro Centro",
      bodega: "canale",
      thumbnailUrl: "img/vinotecas/canale/rinconfonseca.png"
    },
    //Zona Norte
    {
      id:10,
      vinoteca: "Don Eliseo",
      direccion: "Gorriti 415",
      ir:"https://goo.gl/maps/NVi1DHrQb5RcXAum8",
      barrio:"Zona Norte",
      bodega: "canale",
      thumbnailUrl: "img/vinotecas/canale/doneliseo.png"
    },
    //Zona Sur
    {
    id:11,
    vinoteca: "Fiambrería Amenabar",
    direccion: "Rueda 2165",
    ir:"https://goo.gl/maps/JuyyaFftSMTZw8KF8",
    barrio:"Zona Sur",
    bodega: "canale",
    thumbnailUrl: "img/vinotecas/canale/amenabar.png"
    },
    //Zona Oeste
    {
    id:12,
    vinoteca: "Francesca Delicatessen",
    direccion: "Mendoza 5503",
    ir:"https://goo.gl/maps/QAQiT1nvESwMLCXL6",
    barrio:"Zona Oeste",
    bodega: "canale",
    thumbnailUrl: "img/vinotecas/canale/francesca.png"
    },
    //Zona Funes y Fisherton
    {
    id:13,
    vinoteca: "Mundo Vino",
    direccion: "Córdoba 1820, Funes",
    ir:"https://goo.gl/maps/U2cLWVX17Xn2SLyZ6",
    barrio:"Zona Funes y Fisherton",
    bodega: "canale",
    thumbnailUrl: "img/vinotecas/canale/mundovino.png"
    },
    {
    id:14,
    vinoteca: "Casa Prada",
    direccion: "Shopping Fisherton Plaza local 43",
    ir:"https://goo.gl/maps/NWzZDV1EndumUU5q9",
    barrio:"Zona Funes y Fisherton",
    bodega: "canale",
    thumbnailUrl: "img/vinotecas/canale/prada.png"
    },
    {
    id:15,
    vinoteca: "MyM Distribuidora",
    direccion: "Mitre 2599 - Funes",
    ir:"https://goo.gl/maps/gh9LDqSjwkfCk6Uu5",
    barrio:"Zona Funes y Fisherton",
    bodega: "canale",
    thumbnailUrl: "img/vinotecas/canale/random3.png"
    },
    {
    id:16,
    vinoteca: "Lo de Tere",
    direccion: "Av. Real 9576 - Fisherton",
    ir:"https://goo.gl/maps/g1cT8axbfJZKGNdG7",
    barrio:"Zona Funes y Fisherton",
    bodega: "canale",
    thumbnailUrl: "img/vinotecas/canale/random4"
    },
    //Zona Villa Constitución
    {
    id:17,
    vinoteca: "Quicho",
    direccion: "Belgrano 164 - Villa Constitución",
    ir:"https://goo.gl/maps/AfCs4MDRdMi7ekjb8",
    barrio:"Zona Villa Constitucion",
    bodega: "canale",
    thumbnailUrl: "img/vinotecas/canale/random1.jpg"
    },
    {
    id:18,
    vinoteca: "Entre Copas",
    direccion: "Dorrego 1101 - Villa Constitución",
    ir:"https://g.page/entrecopasenoteca?share",
    barrio:"Zona Villa Constitucion",
    bodega: "canale",
    thumbnailUrl: "img/vinotecas/canale/entrecopas"
    },
    // Zona Santa Teresa
    {
    id:19,
    vinoteca: "Cerveteca",
    direccion: "Sarmiento 846 - Santa Teresa",
    ir:"https://goo.gl/maps/i2ay6TzT4En7MY9BA",
    barrio:"Zona Santa Teresa",
    bodega: "canale",
    thumbnailUrl: "img/vinotecas/canale/random2.jpeg"
    },
    //Zona San Lorenzo
    {
    id:20,
    vinoteca: "Campos",
    direccion: "Belgrano 776 - San Lorenzo",
    ir:"https://goo.gl/maps/yjed3Pvx3cMbFtK26",
    barrio:"Zona San Lorenzo",
    bodega: "canale",
    thumbnailUrl: "img/vinotecas/canale/vinoteca-campos"
    },
    //Zona Parana
    {
    id:21,
    vinoteca: "El Palacio",
    direccion: "Gral. Pascual Echague 814 - Paraná",
    ir:"https://goo.gl/maps/UBYeewHiq7KT2pXL9",
    barrio:"Zona Parana",
    bodega: "canale",
    thumbnailUrl: "img/vinotecas/canale/random2.jpeg"
    },
    //Zona Santa Fe
    {
    id:22,
    vinoteca: "Don Juan Jacinto",
    direccion: "Aristóbulo del Valle 6342 - Santa Fe",
    ir:"https://goo.gl/maps/bLxz4psyonqq7xMJ9",
    barrio:"Zona Santa Fe",
    bodega: "canale",
    thumbnailUrl: "img/vinotecas/canale/donjuanjacinto1"
    },
    {
    id:23,
    vinoteca: "Don Juan Jacinto",
    direccion: "25 de mayo 3601 - Santa Fe",
    ir:"https://goo.gl/maps/YWvGh1k8cA8CR6zT7",
    barrio:"Zona Santa Fe",
    bodega: "canale",
    thumbnailUrl: "img/vinotecas/canale/donjuanjacinto2"
    },
  ]
selectBarrio.addEventListener('change', ()=>{
    //console.log(selectBarrio.value)
    switch(selectBarrio.value) {
        case "Todas las vinotecas":
            pintarVinotecas(vinotecasCanale);
            break;
        case "Zona Centro":
            pintarVinotecas(vinotecasCanale.filter((el) => el.barrio === 'Zona Centro'));
            break;
        case "Zona Macro Centro":
                pintarVinotecas(vinotecasCanale.filter((el) => el.barrio === 'Zona Macro Centro'));
                break;
        case "Zona Norte":
                pintarVinotecas(vinotecasCanale.filter((el) => el.barrio === 'Zona Norte'));
                break;        
        case "Zona Sur":
                pintarVinotecas(vinotecasCanale.filter((el) => el.barrio === 'Zona Sur'));
                break;
        case "Zona Oeste":
                pintarVinotecas(vinotecasCanale.filter((el) => el.barrio === 'Zona Oeste'));
                break;
        case "Zona Funes y Fisherton":
            pintarVinotecas(vinotecasCanale.filter((el) => el.barrio === 'Zona Funes y Fisherton'));
            break;
        case "Zona San Lorenzo":
            pintarVinotecas(vinotecasCanale.filter((el) => el.barrio === 'Zona San Lorenzo'));
            break;
        case "Zona Villa Constitucion":
          pintarVinotecas(vinotecasCanale.filter((el) => el.barrio === 'Zona Villa Constitucion'));
            break;
        case "Zona Santa Fe":
          pintarVinotecas(vinotecasCanale.filter((el) => el.barrio === 'Zona Santa Fe'));
          break;
        case "Zona Parana":
              pintarVinotecas(vinotecasCanale.filter((el) => el.barrio === 'Zona Parana'));
              break;
        case "Zona Santa Teresa":
          pintarVinotecas(vinotecasCanale.filter((el) => el.barrio === 'Zona Santa Teresa'));
          break;
    }
})

  pintarVinotecas(vinotecasCanale)

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