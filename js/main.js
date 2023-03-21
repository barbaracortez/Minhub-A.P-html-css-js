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
          <a class="more-link"
          href = '../html/details.html?id=${params._id}' >
            More information
          </a>
        </div>
      </div>
    `
    })
}


function removeCards(contenedor) {
    const cardsContainer = document.querySelector(contenedor)
    cardsContainer.innerHTML = ``
}

let upComing = []
let pasEvents = []

let filteredEventsByCategory = []

function filtrarData(arr, dato) {
    arr.forEach((items) => {
        if (items.date > dato) {
            upComing.push(items)
        } else {
            pasEvents.push(items)
        }
    })
}

function getEventsByCategory(event) {
    if (event.target.checked) {
        const eventsToAdd = data.events
            .filter((amazingEvent) => amazingEvent.category === event.target.value)
            .filter((amazingEvent) => !filteredEventsByCategory.some((e) => e.category === amazingEvent.category));

        filteredEventsByCategory = [...filteredEventsByCategory, ...eventsToAdd];
    } else {
        filteredEventsByCategory = filteredEventsByCategory.filter((amazingEvent) => amazingEvent.category !== event.target.value)
    }

    removeCards("#cardsContainer");
    crearCards(filteredEventsByCategory, "#cardsContainer");

    if (filteredEventsByCategory.length === 0) {
        crearCards(data.events, "#cardsContainer");
    }
}

const botonBuscar = document.querySelector('#buscar');
/* botonBuscar.addEventListener('click', (e) => {
    e.preventDefault();
    const valorBusqueda = document.getElementById('busqueda').value;
    console.log('Valor de búsqueda:', valorBusqueda);

    const eventsToAdd = data.events
        .filter((amazingEvent) => amazingEvent.category.toLowerCase() === valorBusqueda.toLowerCase())
        .filter((amazingEvent) => !filteredEventsByCategory.some((e) => e.category === amazingEvent.category));

    filteredEventsByCategory = eventsToAdd;

    removeCards("#cardsContainer");
    crearCards(filteredEventsByCategory, "#cardsContainer");

    if (valorBusqueda === "") {
        removeCards("#cardsContainer");
        crearCards(data.events, "#cardsContainer");
    }
}); */