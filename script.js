const cards = document.querySelectorAll(".card");
const total = cards.length;
let current = 0;

function renderizar() {
  // Limpa a classe de todos os cards deixando apenas o padrão
  cards.forEach((card) => (card.className = "card"));

  // Aplica as fórmulas matemáticas do array circular
  let idxAtual = current;
  let idxFrente = (current + 1) % total;
  let idxTras = (current - 1 + total) % total;

  // Distribui as classes baseando-se no cálculo do índice
  cards[idxAtual].classList.add("active");
  cards[idxFrente].classList.add("neighbor");
  cards[idxTras].classList.add("neighbor");
}

// Ouvintes de clique isolados e definitivos
document.getElementById("next").addEventListener("click", () => {
  current = (current + 1) % total;
  renderizar();
});

document.getElementById("prev").addEventListener("click", () => {
  current = (current - 1 + total) % total;
  renderizar();
});

// Executa a primeira renderização na tela
renderizar();
