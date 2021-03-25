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
    direccion: "Dorrego 349 2b",
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
      direccion: "Pasco 1509",
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
    direccion: "Shopping aeropuerto local 43",
    ir:"https://goo.gl/maps/NWzZDV1EndumUU5q9",
    barrio:"Zona Funes y Fisherton",
    bodega: "canale",
    thumbnailUrl: "img/vinotecas/canale/prada.png"
    },
    //Zona Otros
    {
    id:15,
    vinoteca: "Quicho",
    direccion: "Belgrano 164 - Villa Constitución",
    ir:"https://goo.gl/maps/AfCs4MDRdMi7ekjb8",
    barrio:"Zona Otros",
    bodega: "canale",
    thumbnailUrl: "img/vinotecas/canale/random1.jpg"
    },
    {
    id:16,
    vinoteca: "Cerveteca",
    direccion: "Sarmiento 846 - Santa Teresa",
    ir:"https://goo.gl/maps/i2ay6TzT4En7MY9BA",
    barrio:"Zona Otros",
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
        case "Zona Otros":
            pintarVinotecas(vinotecasCanale.filter((el) => el.barrio === 'Zona Otros'));
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