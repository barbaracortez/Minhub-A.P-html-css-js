
function goBack() {
  console.log('../html/details.html')
}

function goNext() {
  window.location.replace("../html/upcoming-events.html");
}

crearCards(data.events, "#cardsContainer" )

data.events.forEach((event) => {
  const cardHTML = Card(event)
  $cardsContainer.innerHTML += cardHTML
})