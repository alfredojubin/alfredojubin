// ---------------------------------------------------------------------
// Nav toggle (mobile)
// ---------------------------------------------------------------------
function initNav() {
  const toggle = document.querySelector(".nav__toggle");
  const links = document.querySelector(".nav__links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

// ---------------------------------------------------------------------
// Language toggle: keep the current project (?id=...) when switching to EN
// ---------------------------------------------------------------------
function initLangToggle() {
  const link = document.querySelector(".nav__lang");
  if (!link) return;
  link.href += window.location.search;
}

// ---------------------------------------------------------------------
// Scroll reveal
// ---------------------------------------------------------------------
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  items.forEach((el) => io.observe(el));
}

// ---------------------------------------------------------------------
// Home: render project cards from PROJECTS (data.js)
// ---------------------------------------------------------------------
function renderProjectCards() {
  const grid = document.querySelector("[data-project-grid]");
  if (!grid || typeof PROJECTS === "undefined") return;

  const cards = PROJECTS.slice()
    .sort((a, b) => a.order - b.order)
    .map(
      (p) => `
      <a class="card reveal" href="project.html?id=${p.id}">
        <div class="card__media">
          <img src="${p.cover}" alt="Imagen destacada del proyecto ${p.title}" loading="lazy" width="1200" height="800">
        </div>
        <div class="card__body">
          <span class="eyebrow card__category">${p.category}</span>
          <h3>${p.title}</h3>
          <p>${p.summary}</p>
        </div>
      </a>`
    )
    .join("");

  grid.innerHTML = cards;
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initLangToggle();
  renderProjectCards();
  initReveal();
});
