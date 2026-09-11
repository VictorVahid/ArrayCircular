const cards = document.querySelectorAll(".card");
const total = cards.length;
let current = 0;

function renderizar() {
  cards.forEach((card) => (card.className = "card"));

  let idxAtual = current;
  let idxFrente = (current + 1) % total;
  let idxTras = (current - 1 + total) % total;

  cards[idxAtual].classList.add("active");
  cards[idxFrente].classList.add("neighbor");
  cards[idxTras].classList.add("neighbor");
}

document.getElementById("next").addEventListener("click", () => {
  current = (current + 1) % total;
  renderizar();
});

document.getElementById("prev").addEventListener("click", () => {
  current = (current - 1 + total) % total;
  renderizar();
});

renderizar();
