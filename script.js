function toggleCard(card) {
  card.classList.toggle("active");
}

/*
========================================
MOBILE FLIP CARDS
========================================
*/

document.addEventListener("DOMContentLoaded", () => {
  const flipCards = document.querySelectorAll(".flip-card");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const mobile = window.matchMedia("(max-width: 900px)").matches;

  flipCards.forEach((card) => {
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-pressed", "false");

    const toggleFlip = () => {
      const flipped = card.classList.toggle("flipped");
      card.setAttribute("aria-pressed", String(flipped));
    };

    card.addEventListener("click", toggleFlip);

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleFlip();
      }
    });
  });

  if (mobile && !reducedMotion) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains("flipped")) {
          entry.target.classList.add("flipped");
          entry.target.setAttribute("aria-pressed", "true");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.65 });

    flipCards.forEach((card) => observer.observe(card));
  }
});