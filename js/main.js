function crearCards(arr, contenedor) {
    const cardsContainer = document.querySelector(contenedor)
    arr.forEach(params => {
        cardsContainer.innerHTML += `
      <div class="info-cards">
        <div class="title-card" class="info-cards">
          <h3 class="category">${params.category}</h3>
        </div>
        <img src="${params.image}" alt="imagen del evento" class="img-card">
        <h4>${params.name}</h4>
        <p class="description">
          ${params.description}
        </p>
        <div class="pie">
          <a class="more">
            More information
          </a>
        </div>
      </div>
    `
    })
}

let upComing = []
let pasEvents = []

function filtrarData(arr, dato) {
    upComing = []
    pasEvents = []
    arr.forEach((items) => {
        if (items.date > dato) {
            upComing.push(items)
        } else {
            pasEvents.push(items)
        }
    })
}