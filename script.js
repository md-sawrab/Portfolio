const yearNode = document.getElementById("year");
const toTopButton = document.getElementById("toTop");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (toTopButton) {
  toTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const revealTargets = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.16 }
);

revealTargets.forEach((target) => observer.observe(target));
