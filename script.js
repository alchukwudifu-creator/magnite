function toggleCard(card) {
  card.classList.toggle("active");
}
/*
========================================
MOBILE FLIP CARDS
========================================
*/

document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".flip-card");

  cards.forEach(card => {

    // Tap to flip

    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });

  });

  // Auto-flip when card enters viewport

  const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if(entry.isIntersecting){

        entry.target.classList.add("flipped");
observer.unobserve(entry.target);

      }

    });

  }, {
    threshold:0.6
  });

  cards.forEach(card => {
    observer.observe(card);
  });

});