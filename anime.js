const cards = document.querySelectorAll('.anime-card');

cards.forEach(card => {
  card.addEventListener('click', () => {

    card.style.transform = "scale(0.95)";
    card.style.boxShadow = "0 0 60px rgba(155,92,255,0.9)";

    setTimeout(() => {
      window.location.href = "anime-view.html";
      window.location.href = "home.html";
    }, 300);

  });
});
