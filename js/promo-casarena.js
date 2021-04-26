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
    {
      id:12,
      vinoteca: "La Gourmetería",
      direccion: "Tucumán 1322",
      ir:"https://goo.gl/maps/6Qz9wDMjX8bU8dAq7",
      barrio:"Zona Centro",
      bodega: "casarena",
      thumbnailUrl: "img/vinotecas/casarena/lagourmeteria"
    },
    {
      id:10,
      vinoteca: "Vinoteca Campos",
      direccion: "Tucumán 1754",
      ir:"https://goo.gl/maps/qqCsjrsd6Q7qMnrt9",
      barrio:"Zona Centro",
      bodega: "casarena",
      thumbnailUrl: "img/vinotecas/casarena/random4"
    },
    {
      id:10,
      vinoteca: "Vinoteca Inspira",
      direccion: "Bv. Oroño 1096",
      ir:"https://g.page/inspira-vinoteca?share",
      barrio:"Zona Centro",
      bodega: "casarena",
      thumbnailUrl: "img/vinotecas/casarena/inspira"
    },
    // Macro-Centro
    {
      id:13,
      vinoteca: "Vinoteca Maestro",
      direccion: "Suipacha 381",
      ir:"https://goo.gl/maps/2mEqDMipT45Kaa4SA",
      barrio:"Zona Macro-Centro",
      bodega: "casarena",
      thumbnailUrl: "img/vinotecas/casarena/vinotecamaestro.jpg"
    },
    {
      id:14,
      vinoteca: "Benny - Almacén Gourmet",
      direccion: "San Luis 2644",
      ir:"https://goo.gl/maps/yzeTGeBb2WmXKd1fA",
      barrio:"Zona Macro-Centro",
      bodega: "casarena",
      thumbnailUrl: "img/vinotecas/casarena/benny"
      },
    // Zona Sur
    {
    id:15,
    vinoteca: "El Tonel",
    direccion: "Ayacucho 5321",
    ir:"https://goo.gl/maps/DpZLPxtVQxx8ZcpMA",
    barrio:"Zona Sur",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/eltonel"
    },
    {
    id:16,
    vinoteca: "La Toscana",
    direccion: "Mendoza 3563",
    ir:"https://goo.gl/maps/tTHX2FGRAr8n3eW66",
    barrio:"Zona Sur",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/latoscana"
    },
    // Zona Norte
    {
      id:17,
      vinoteca: "Don Eliseo",
      direccion: "Gorriti 415",
      ir:"https://goo.gl/maps/NVi1DHrQb5RcXAum8",
      barrio:"Zona Norte",
      bodega: "casarena",
      thumbnailUrl: "img/vinotecas/casarena/doneliseo.png"
    },
    // Zona Oeste
    {
      id:18,
      vinoteca: "Vinoteca Draks",
      direccion: "Avellaneda esquina San Juan",
      ir:"https://goo.gl/maps/gPZXBQM6eVB78hpN8",
      barrio:"Zona Oeste",
      bodega: "casarena",
      thumbnailUrl: "img/vinotecas/casarena/draks"
    },
    // Zona Funes y Fisherton
    {
    id:19,
    vinoteca: "Lo de Tere",
    direccion: "Av. Real 9576 - Fisherton",
    ir:"https://goo.gl/maps/g1cT8axbfJZKGNdG7",
    barrio:"Zona Funes y Fisherton",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/random4"
    },
    {
    id:20,
    vinoteca: "Restaurant San Sebastián",
    direccion: "Club House, barrio en Funes",
    ir:"https://goo.gl/maps/JiWcAuzYMwVxk2Cf9",
    barrio:"Zona Funes y Fisherton",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/sansebastian"
    },
    {
    id:21,
    vinoteca: "Autoservicio Arlequín",
    direccion: "Córdoba 1984, Funes",
    ir:"https://goo.gl/maps/C1gXXDPNspRMcvkY8",
    barrio:"Zona Funes y Fisherton",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/arlequin"
    },
    {         
    id:22,
    vinoteca: "Casa Prada",
    direccion: "Shopping Fisherton Plaza local 43",
    ir:"https://goo.gl/maps/NWzZDV1EndumUU5q9",
    barrio:"Zona Funes y Fisherton",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/prada.png"
    },
    // Zona Villa Constitucion
    {
    id:23,
    vinoteca: "Entre Copas",
    direccion: "Dorrego 1101 - Villa Constitución",
    ir:"https://g.page/entrecopasenoteca?share",
    barrio:"Zona Villa Constitucion",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/entrecopas"
    },
    // Zona San Lorenzo
    {
    id:24,
    vinoteca: "Campos",
    direccion: "Belgrano 776 - San Lorenzo",
    ir:"https://goo.gl/maps/yjed3Pvx3cMbFtK26",
    barrio:"Zona San Lorenzo",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/vinoteca-campos"
    },
    //Zona Parana
    {
    id:25,
    vinoteca: "El Palacio",
    direccion: "Gral. Pascual Echague 814 - Paraná",
    ir:"https://goo.gl/maps/UBYeewHiq7KT2pXL9",
    barrio:"Zona Parana",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/random2.jpeg"
    },
    //Zona Santa Fe
    {
    id:26,
    vinoteca: "Don Juan Jacinto",
    direccion: "Aristóbulo del Valle 6342 - Santa Fe",
    ir:"https://goo.gl/maps/bLxz4psyonqq7xMJ9",
    barrio:"Zona Santa Fe",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/donjuanjacinto1"
    },
    {
    id:27,
    vinoteca: "Don Juan Jacinto",
    direccion: "25 de mayo 3601 - Santa Fe",
    ir:"https://goo.gl/maps/YWvGh1k8cA8CR6zT7",
    barrio:"Zona Santa Fe",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/donjuanjacinto2"
    },
    {
    id:28,
    vinoteca: "La Cueva de Francia",
    direccion: "Francia 3490 - Santa Fe",
    ir:"https://goo.gl/maps/q4eMXN8UEwyswmdo8",
    barrio:"Zona Santa Fe",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/lacueva"
    },
    {
      id:29,
      vinoteca: "Exquisitos Placeres",
      direccion: "Balcarce 1576 - Santa Fe",
      ir:"https://goo.gl/maps/pVU8Mw6Bfx6J9NzAA",
      barrio:"Zona Santa Fe",
      bodega: "casarena",
      thumbnailUrl: "img/vinotecas/casarena/exquisitosplaceres"
    },
    //Zona Santo Tomé
    {
    id:30,
    vinoteca: "Entre Copas - Almacén de Vinos",
    direccion: "Macias 2092 - Santo Tomé",
    ir:"https://goo.gl/maps/NabVLXmqtG6bFsVi9",
    barrio:"Zona Santo Tome",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/entrecopassantotome"
    },
      //Zona Roldán
    {
    id:31,
    vinoteca: "Que buena idea",
    direccion: "Independencia 234, Roldán",
    ir:"https://goo.gl/maps/8gseR4nMqT6qhMoB8",
    barrio:"Zona Roldan",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/quebuenaidea"
    },
      //Zona Rafaela
  {
    id:32,
    vinoteca: "Los Cortesanos",
    direccion: "Alvear 281, Rafaela",
    ir:"https://g.page/LosCortesanos?share",
    barrio:"Zona Rafaela",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/loscortesanos"
    },
  //Zona Esperanza
    {
      id:35,
      vinoteca: "Los Cortesanos",
      direccion: "Aarón Castellanos 1802, Esperanza",
      ir:"https://g.page/VinotecaLosCortesanos?share",
      barrio:"Zona Esperanza",
      bodega: "casarena",
      thumbnailUrl: "img/vinotecas/casarena/loscortesanosesperanza"
      },
       //Zona Entre Rios
  {
    id:36,
    vinoteca: "Senza Colpa",
    direccion: "Villa Elisa, Entre Rios - Uquiza 1782",
    ir:"https://goo.gl/maps/Xj4RobFQzpTzygm6A",
    barrio:"Zona Entre Rios",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/random4"
    },
    {
    id:37,
    vinoteca: "Vinoteca Brenda",
    direccion: "Villa Elisa, Entre Rios - Estrada 844",
    ir:"https://g.page/distribuidorayvinotecabrenda?share",
    barrio:"Zona Entre Rios",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/entrerios/brenda"
    },
    {
    id:38,
    vinoteca: "Vinoteca de Victoria",
    direccion: "Victoria, Entre Rios - Sarmiento 552",
    ir:"https://goo.gl/maps/aB1YUDf2STaNTFJT9",
    barrio:"Zona Entre Rios",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/entrerios/victoria"
    },
    {
    id:39,
    vinoteca: "Dioniso Vinos & Afines",
    direccion: "Ramírez, Entre Rios - Eva Perón 531",
    ir:"https://goo.gl/maps/CRKXkWXrLNnwCEbx9",
    barrio:"Zona Entre Rios",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/random1.jpg"
    },
    {
    id:40,
    vinoteca: "La Bodega",
    direccion: "Gualeguaychú, Entre Rios - Aristóbulo del Valle 1265",
    ir:"https://goo.gl/maps/L2mprhdFYsQXHmEA8",
    barrio:"Zona Entre Rios",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/entrerios/labodega"
    },
    //Zona Las Parejas
    {
    id:41,
    vinoteca: "Vinoteca ArcoIris",
    direccion: "Calle 10 num. 1134 - Las Parejas",
    ir:"https://goo.gl/maps/8M1aCsCvoMseXFHL8",
    barrio:"Zona Las Parejas",
    bodega: "casarena",
    thumbnailUrl: "img/vinotecas/casarena/random1.jpg"
    },
    //Zona Vilal gdor galvez
    {
      id:42,
      vinoteca: "Vinoteca As de Copas",
      direccion: "Rivadavia 1635 - Villa Gobernador Gálvez",
      ir:"https://goo.gl/maps/kqJqPPxSnqBWge5WA",
      barrio:"Zona Villa Gobernador Galvez",
      bodega: "casarena",
      thumbnailUrl: "img/vinotecas/casarena/random4"
      },
          //Zona Venado Tuerto
    {
      id:43,
      vinoteca: "Mundo Bebidas",
      direccion: "San Martin 1045 - Venado Tuerto",
      ir:"https://goo.gl/maps/i9YKW9AaYd3A3fcy6",
      barrio:"Zona Venado Tuerto",
      bodega: "casarena",
      thumbnailUrl: "img/vinotecas/casarena/random2.jpeg"
      },
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
        case "Zona Norte":
          pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Norte'));
          Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
          break;
        case "Zona Oeste":
          pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Oeste'));
          Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
          break;
        case "Zona Funes y Fisherton":
          pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Funes y Fisherton'));
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
        case "Zona Roldan":
          pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Roldan'));
          Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
          break;
        case "Zona Rafaela":
          pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Rafaela'));
          Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
          break;
        case "Zona Esperanza":
          pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Esperanza'));
          Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
          break;
        case "Zona Entre Rios":
          pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Entre Rios'));
          Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
          break;
        case "Zona Las Parejas":
          pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Las Parejas'));
          Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
          break;
        case "Zona Villa Gobernador Galvez":
          pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Villa Gobernador Galvez'));
          Delivery(vinotecasDelivery.filter((el) => el.barrio === ''));
          break;
        case "Zona Venado Tuerto":
          pintarVinotecas(vinotecasCasarena.filter((el) => el.barrio === 'Zona Venado Tuerto'));
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
