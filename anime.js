const cards = document.querySelectorAll('.anime-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.add('pulse');

    setTimeout(() => {
      card.classList.remove('pulse');
      alert("⚔️ Anime page coming soon...");
    }, 300);
  });
});
