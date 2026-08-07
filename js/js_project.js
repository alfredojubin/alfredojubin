function getProjectIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id") || window.__PREVIEW_PROJECT_ID__ || null;
}

function renderProject() {
  const root = document.querySelector("[data-project-root]");
  if (!root || typeof PROJECTS === "undefined") return;

  const ordered = PROJECTS.slice().sort((a, b) => a.order - b.order);
  const id = getProjectIdFromUrl();
  const project = ordered.find((p) => p.id === id) || ordered[0];
  const index = ordered.findIndex((p) => p.id === project.id);
  const prev = ordered[(index - 1 + ordered.length) % ordered.length];
  const next = ordered[(index + 1) % ordered.length];

  document.title = `${project.title} — Alfredo Jubín`;

  const processHtml = project.process
    .map(
      (step) => `
      <div class="process-step">
        <h4>${step.title}</h4>
        <p>${step.text}</p>
      </div>`
    )
    .join("");

  const resultsHtml = project.results.map((r) => `<li>${r}</li>`).join("");

  const galleryHtml = project.gallery
    .map(
      (g) => `
      <figure>
        <img src="${g.src}" alt="${g.alt}" loading="lazy">
        <figcaption>${g.alt}</figcaption>
      </figure>`
    )
    .join("");

  const gallerySection = project.gallery && project.gallery.length
    ? `
      <section aria-labelledby="galeria-h" class="reveal">
        <h2 id="galeria-h" style="font-size:1.5rem;margin-bottom:1rem;">Gallery</h2>
        <div class="gallery" style="--gallery-cols:${project.galleryColumns || 3}">${galleryHtml}</div>
      </section>`
    : "";

  const caseStudySection = project.caseStudy
    ? `
      <section aria-labelledby="casestudy-h" class="reveal" style="margin-bottom:3rem;">
        <h2 id="casestudy-h" style="font-size:1.5rem;margin-bottom:1rem;">Full case study</h2>
        <button type="button" class="case-study-trigger" data-open-case-study>
          <img src="${project.caseStudy.thumb}" alt="" role="presentation" loading="lazy">
          <span class="case-study-trigger__label">
            <span class="case-study-trigger__title">View the full case study</span>
            <span class="case-study-trigger__hint">Opens the complete document at full size</span>
          </span>
        </button>
        <dialog class="case-study-dialog" aria-label="${project.caseStudy.alt}">
          <div class="case-study-dialog__closebar">
            <button type="button" class="case-study-dialog__close" data-close-case-study autofocus aria-label="Close case study">✕</button>
          </div>
          <img src="${project.caseStudy.full}" alt="${project.caseStudy.alt}">
        </dialog>
      </section>`
    : "";

  const heroMedia = project.heroVideo
    ? `<video src="${project.heroVideo}" poster="${project.heroPoster || ""}" autoplay loop muted playsinline aria-label="Motion design reel for the ${project.title} project"></video>`
    : `<img src="${project.heroImage || project.cover}" alt="Main image for the ${project.title} project">`;

  root.innerHTML = `
    <div class="container project-hero">
      <a class="project-hero__back" href="index.html">← Back to portfolio</a>
      <p class="eyebrow">${project.category}</p>
      <h1>${project.title}</h1>
    </div>

    <div class="container">
      <div class="project-hero__image${project.heroBorder === false ? " project-hero__image--no-border" : ""}">
        ${heroMedia}
      </div>

      <dl class="project-meta">
        <div><dt>Client / context</dt><dd>${project.client}</dd></div>
        <div><dt>Role</dt><dd>${project.role}</dd></div>
        <div><dt>Year</dt><dd>${project.year}</dd></div>
      </dl>

      <section class="project-block reveal" aria-labelledby="problema-h">
        <h2 id="problema-h">The <em>problem</em></h2>
        <p>${project.problem}</p>
      </section>

      <section class="project-block reveal" aria-labelledby="proceso-h" style="max-width:76ch">
        <h2 id="proceso-h">The <em>process</em></h2>
        <div class="process-rail">${processHtml}</div>
      </section>

      <section class="project-block reveal" aria-labelledby="solucion-h">
        <h2 id="solucion-h">The <em>solution</em></h2>
        <p>${project.solution}</p>
      </section>

      <section class="project-block reveal" aria-labelledby="resultados-h">
        <h2 id="resultados-h">Results</h2>
        <ul class="results-list">${resultsHtml}</ul>
      </section>

      ${gallerySection}
      ${caseStudySection}

      <nav class="project-nav" aria-label="Navigate between projects">
        <a href="index.html">Back to home</a>
        <a class="btn-primary" href="project.html?id=${next.id}">Next project: ${next.title} →</a>
      </nav>
    </div>
  `;

  const csTrigger = root.querySelector("[data-open-case-study]");
  const csDialog = root.querySelector(".case-study-dialog");
  if (csTrigger && csDialog) {
    csTrigger.addEventListener("click", () => csDialog.showModal());
    const csClose = csDialog.querySelector("[data-close-case-study]");
    if (csClose) csClose.addEventListener("click", () => csDialog.close());
    csDialog.addEventListener("click", (e) => {
      if (e.target === csDialog) csDialog.close();
    });
  }

  if (typeof initReveal === "function") initReveal();
}

document.addEventListener("DOMContentLoaded", renderProject);
