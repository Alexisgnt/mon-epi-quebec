// Petites touches JS pour le blog EPI

// Année dynamique dans le footer
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Nombre de jours écoulés depuis une date donnée (si l'élément existe)
const startEl = document.querySelector("[data-days-since]");
if (startEl) {
  const start = new Date(startEl.getAttribute("data-days-since"));
  const today = new Date();
  const diffDays = Math.max(0, Math.floor((today - start) / (1000 * 60 * 60 * 24)));
  startEl.textContent = `J+${diffDays}`;
}

// --- Thème clair / sombre ---
const THEME_KEY = "epi-blog-theme";
const toggleBtn = document.getElementById("themeToggle");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  if (toggleBtn) toggleBtn.textContent = theme === "dark" ? "☀️" : "🌙";
}

const savedTheme = localStorage.getItem(THEME_KEY);
const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(savedTheme || (prefersDark ? "dark" : "light"));

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
  });
}

// --- Barre de progression de lecture (pages articles) ---
const progressBar = document.querySelector(".progress-bar");
if (progressBar) {
  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, pct))}%`;
  };
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();
}

// --- Apparition douce au scroll ---
const revealTargets = document.querySelectorAll("figure, .article-card, .day-block, .callout, .intro");
revealTargets.forEach((el) => el.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );
  revealTargets.forEach((el) => observer.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add("is-visible"));
}
