// Menu mobile
const toggle = document.querySelector(".nav__toggle");
const menu = document.querySelector("#nav-menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Fermer le menu après clic
  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Année auto
document.querySelector("#year").textContent = new Date().getFullYear();

// Formulaire (demo front)
const form = document.querySelector("#contact-form");
const status = document.querySelector("#form-status");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (status) status.textContent = "Message prêt (demo). Branche un backend ou Formspree/Netlify Forms.";
    form.reset();
  });
}

// Accordéon : optionnel (ferme les autres)
document.querySelectorAll("[data-accordion]").forEach((acc) => {
  const details = acc.querySelectorAll("details");
  details.forEach((d) => {
    d.addEventListener("toggle", () => {
      if (d.open) details.forEach((other) => other !== d && (other.open = false));
    });
  });
});