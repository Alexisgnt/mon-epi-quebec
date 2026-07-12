// Petites touches JS pour le blog EPI

// Année dynamique dans le footer
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Nombre de jours écoulés depuis le début du stage (affiché si l'élément existe)
const startEl = document.querySelector("[data-days-since]");
if (startEl) {
  const start = new Date(startEl.getAttribute("data-days-since"));
  const today = new Date();
  const diffDays = Math.max(0, Math.floor((today - start) / (1000 * 60 * 60 * 24)));
  startEl.textContent = `J+${diffDays}`;
}
