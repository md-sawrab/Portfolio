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

// Hamburger menu toggle
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (toTopButton) {
  toTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const animateCounter = (element) => {
  const target = Number(element.dataset.count || 0);
  const duration = 1000;
  const startTime = performance.now();

  const update = (currentTime) => {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const value = Math.round(target * progress);
    element.textContent = `${value}+`;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  };

  requestAnimationFrame(update);
};

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("show");

      entry.target.querySelectorAll("[data-count]").forEach((counter) => {
        if (!counter.dataset.animated) {
          counter.dataset.animated = "true";
          animateCounter(counter);
        }
      });

      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal, .main-board").forEach((element) => {
  revealObserver.observe(element);
});

counters.forEach((counter) => {
  counter.textContent = "0+";
});
