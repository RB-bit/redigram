const locales = document.getElementById('locales')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()

document.addEventListener("DOMContentLoaded", () =>{
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('vinotecas-promo-1.json')
        const data = await res.json()
        // console.log(data)
        pintarVinotecas(data)
    } catch (error) {
        console.log(error)
    }
}

const pintarVinotecas = data => {
    data.forEach(vinoteca => {
        // console.log(vinoteca)
        templateCard.querySelector('h5').textContent = vinoteca.vinoteca
        templateCard.querySelector('p').textContent = vinoteca.direccion
        templateCard.querySelector('img').setAttribute("src", vinoteca.thumbnailUrl)
        templateCard.querySelector('a').setAttribute("href", vinoteca.ir)

        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    locales.appendChild(fragment)
}