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
      vinoteca: "Don Baco - Casa de Vinos",
      direccion: "9 de julio 768",
      ir:"https://g.page/don-baco-casa-de-vinos?share",
      barrio:"Zona Centro",
      bodega: "casarena",
      thumbnailUrl: "img/vinotecas/casarena/vinotecaBaco"
    },
    {
      id: 6,
      vinoteca: "Queseria sin un vino",
      direccion: "Pte. Roca 1518",
      ir:"https://goo.gl/maps/5ryrFkjuSeP9CKvr5",
      barrio:"Zona Centro",
      bodega: "rime",
      thumbnailUrl: "img/vinotecas/rime/queseria.png"
    },
    {
      id:7,
      vinoteca: "Del Lito Vinos",
      direccion: "3 de Febrero 1133",
      ir:"https://g.page/del-lito-vinoteca?share",
      barrio:"Zona Centro",
      bodega: "rime",
      thumbnailUrl: "img/vinotecas/rime/dellito"
    },
    {
      id:8,
      vinoteca: "El Caballero del Vino",
      direccion: "Necochea 1426",
      ir:"https://goo.gl/maps/staixWv31C1ESW1t8",
      barrio:"Zona Centro",
      bodega: "rime",
      thumbnailUrl: "img/vinotecas/rime/elcaballero"
    },
    {
      id:9,
      vinoteca: "La Gourmetería",
      direccion: "Tucumán 1322",
      ir:"https://goo.gl/maps/6Qz9wDMjX8bU8dAq7",
      barrio:"Zona Centro",
      bodega: "rime",
      thumbnailUrl: "img/vinotecas/rime/lagourmeteria"
    },
    // Zona macro Centro
    {
      id:10,
      vinoteca: "Etiqueta Negra",
      direccion: "Viamonte 661",
      ir:"https://goo.gl/maps/ijYxWkvTZMkTH2Pf8",
      barrio:"Zona Macro Centro",
      bodega: "rime",
      thumbnailUrl: "img/vinotecas/rime/random4"
    },
    // Zona Funes y Fisherton
    {
    id:11,
    vinoteca: "Lo de Tere",
    direccion: "Av. Real 9576 - Fisherton",
    ir:"https://goo.gl/maps/g1cT8axbfJZKGNdG7",
    barrio:"Zona Funes y Fisherton",
    bodega: "rime",
    thumbnailUrl: "img/vinotecas/rime/random4"
    },
    {
    id:21,
    vinoteca: "Autoservicio Arlequín",
    direccion: "Córdoba 1984, Funes",
    ir:"https://goo.gl/maps/C1gXXDPNspRMcvkY8",
    barrio:"Zona Funes y Fisherton",
    bodega: "rime",
    thumbnailUrl: "img/vinotecas/rime/arlequin"
    },
    // Zona Villa Constitucion
    {
    id:13,
    vinoteca: "Entre Copas",
    direccion: "Dorrego 1101 - Villa Constitución",
    ir:"https://g.page/entrecopasenoteca?share",
    barrio:"Zona Villa Constitucion",
    bodega: "rime",
    thumbnailUrl: "img/vinotecas/rime/entrecopas"
    },
    // Zona San Lorenzo
    {
    id:14,
    vinoteca: "Campos",
    direccion: "Belgrano 776 - San Lorenzo",
    ir:"https://goo.gl/maps/yjed3Pvx3cMbFtK26",
    barrio:"Zona San Lorenzo",
    bodega: "rime",
    thumbnailUrl: "img/vinotecas/rime/vinoteca-campos"
    },
    //Zona Parana
    {
    id:15,
    vinoteca: "El Palacio",
    direccion: "Gral. Pascual Echague 814 - Paraná",
    ir:"https://goo.gl/maps/UBYeewHiq7KT2pXL9",
    barrio:"Zona Parana",
    bodega: "rime",
    thumbnailUrl: "img/vinotecas/rime/random2.jpeg"
    },
    //Zona Santa Fe
    {
    id:13,
    vinoteca: "Don Juan Jacinto",
    direccion: "Aristóbulo del Valle 6342 - Santa Fe",
    ir:"https://goo.gl/maps/bLxz4psyonqq7xMJ9",
    barrio:"Zona Santa Fe",
    bodega: "rime",
    thumbnailUrl: "img/vinotecas/rime/donjuanjacinto1"
    },
    {
    id:14,
    vinoteca: "Don Juan Jacinto",
    direccion: "25 de mayo 3601 - Santa Fe",
    ir:"https://goo.gl/maps/YWvGh1k8cA8CR6zT7",
    barrio:"Zona Santa Fe",
    bodega: "rime",
    thumbnailUrl: "img/vinotecas/rime/donjuanjacinto2"
    },
    {
    id:15,
    vinoteca: "Exquisitos Placeres",
    direccion: "Balcarce 1576 - Santa Fe",
    ir:"https://goo.gl/maps/pVU8Mw6Bfx6J9NzAA",
    barrio:"Zona Santa Fe",
    bodega: "rime",
    thumbnailUrl: "img/vinotecas/rime/exquisitosplaceres"
    },
    {
    id:16,
    vinoteca: "La Cueva de Francia",
    direccion: "Francia 3490 - Santa Fe",
    ir:"https://goo.gl/maps/q4eMXN8UEwyswmdo8",
    barrio:"Zona Santa Fe",
    bodega: "rime",
    thumbnailUrl: "img/vinotecas/rime/lacueva"
    },
    //Zona Santo Tomé
    {
      id:17,
      vinoteca: "Entre Copas - Almacén de Vinos",
      direccion: "Macias 2092 - Santo Tomé",
      ir:"https://goo.gl/maps/NabVLXmqtG6bFsVi9",
      barrio:"Zona Santo Tome",
      bodega: "rime",
      thumbnailUrl: "img/vinotecas/rime/entrecopassantotome"
    },
    //Zona Roldán
    {
      id:18,
      vinoteca: "Que buena idea",
      direccion: "Independencia 234, Roldán",
      ir:"https://goo.gl/maps/8gseR4nMqT6qhMoB8",
      barrio:"Zona Roldan",
      bodega: "rime",
      thumbnailUrl: "img/vinotecas/rime/quebuenaidea"
      },
        //Zona Rafaela
    {
      id:19,
      vinoteca: "Los Cortesanos",
      direccion: "Alvear 281, Rafaela",
      ir:"https://g.page/LosCortesanos?share",
      barrio:"Zona Rafaela",
      bodega: "rime",
      thumbnailUrl: "img/vinotecas/rime/loscortesanos"
      },
    //Zona Esperanza
      {
        id:20,
        vinoteca: "Los Cortesanos",
        direccion: "Aarón Castellanos 1802, Esperanza",
        ir:"https://g.page/VinotecaLosCortesanos?share",
        barrio:"Zona Esperanza",
        bodega: "rime",
        thumbnailUrl: "img/vinotecas/rime/loscortesanosesperanza"
        },
          //Zona Entre Rios
    {
      id:21,
      vinoteca: "Senza Colpa",
      direccion: "Villa Elisa, Entre Rios - Uquiza 1782",
      ir:"https://goo.gl/maps/Xj4RobFQzpTzygm6A",
      barrio:"Zona Entre Rios",
      bodega: "rime",
      thumbnailUrl: "img/vinotecas/rime/random4"
      },
      {
      id:22,
      vinoteca: "Vinoteca Brenda",
      direccion: "Villa Elisa, Entre Rios - Estrada 844",
      ir:"https://g.page/distribuidorayvinotecabrenda?share",
      barrio:"Zona Entre Rios",
      bodega: "rime",
      thumbnailUrl: "img/vinotecas/rime/entrerios/brenda"
      },
      {
      id:23,
      vinoteca: "Dioniso Vinos & Afines",
      direccion: "Ramírez, Entre Rios - Eva Perón 531",
      ir:"https://goo.gl/maps/CRKXkWXrLNnwCEbx9",
      barrio:"Zona Entre Rios",
      bodega: "rime",
      thumbnailUrl: "img/vinotecas/rime/entrerios/random1.jpg"
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
        case "Zona Macro Centro":
            pintarVinotecas(vinotecasRime.filter((el) => el.barrio === 'Zona Macro Centro'));
            break;          
        case "Zona Granadero Baigorria":
            pintarVinotecas(vinotecasRime.filter((el) => el.barrio === 'Zona Granadero Baigorria'));
            break;
        case "Zona Funes y Fisherton":
          pintarVinotecas(vinotecasRime.filter((el) => el.barrio === 'Zona Funes y Fisherton'));
          break;
        case "Zona Villa Constitucion":
          pintarVinotecas(vinotecasRime.filter((el) => el.barrio === 'Zona Villa Constitucion'));
          break;
        case "Zona Parana":
          pintarVinotecas(vinotecasRime.filter((el) => el.barrio === 'Zona Parana'));
          break;
        case "Zona San Lorenzo":
          pintarVinotecas(vinotecasRime.filter((el) => el.barrio === 'Zona San Lorenzo'));
          break;
        case "Zona Santa Fe":
          pintarVinotecas(vinotecasRime.filter((el) => el.barrio === 'Zona Santa Fe'));
          break;
        case "Zona Santo Tome":
          pintarVinotecas(vinotecasRime.filter((el) => el.barrio === 'Zona Santo Tome'));
          break;
        case "Zona Roldan":
          pintarVinotecas(vinotecasRime.filter((el) => el.barrio === 'Zona Roldan'));
          break;
        case "Zona Rafaela":
          pintarVinotecas(vinotecasRime.filter((el) => el.barrio === 'Zona Rafaela'));
          break;
        case "Zona Esperanza":
          pintarVinotecas(vinotecasRime.filter((el) => el.barrio === 'Zona Esperanza'));
          break;
        case "Zona Entre Rios":
          pintarVinotecas(vinotecasRime.filter((el) => el.barrio === 'Zona Entre Rios'));
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