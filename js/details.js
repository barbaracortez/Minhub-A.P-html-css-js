function goBack() {
    window.location.replace("../html/stats.html")
}

function goNext() {
    window.location.replace("../html/home.html");
}

const params = new URLSearchParams(location.search);
console.log(params)
const id = params.get("id");
console.log(id)
const descripcion = data.events.find(cards => cards._id == id)
console.log(descripcion)

const div = document.querySelector (".info-cards") 
div.innerHTML= `
    <div class="info-cards">
    <div class="title-card" class="info-cards">
        <h3 class="category">${descripcion.category}</h3>
        </div>
        <img src="${descripcion.image}" alt="imagen del evento" class="img-card">
        <h4>${descripcion.name}</h4>
        <p class="description">
          ${descripcion.description}
        </p>
        <div class="pie">
         
        </div>
      </div>
    `
