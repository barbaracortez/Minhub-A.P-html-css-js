let urlAPI = "https://mindhub-xj03.onrender.com/api/amazing"

fetch(urlAPI)
  .then(response => (response.json()
    .then(data => {
      console.log(data)

      let events = data.events
      console.log(events)
      createCards(events)

    })));


function createCards(arr) {
  /* arrEvents.forEach(items => {
    console.log(items._id)
  }) */

  let contenedor = document.querySelector('.container-cards')
  contenedor.innerHTML = ""

  arr.forEach(element => {

    contenedor.innerHTML += `
    <div class="info-cards">
    <div class="title-card" class="info-cards">
        <h3 class="category">${element.category}</h3>
        </div>
        <img src="${element.image}" alt="imagen del evento" class="img-card">
        <h4>${element.name}</h4>
        <p class="description">
          ${element.description}
        </p>
         <div class="pie">
           <a class = "more-link" href = '../html/details.html?id=${element._id}>More information </a> 
        </div>
      </div>
    `;
    //contenedor = appendChild(div)
  })
}