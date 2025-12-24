function enterWorld() {
  document.querySelector('.safe-text').innerText = "Breathe. You’re inside.";
  document.querySelector('.enter-btn').style.opacity = "0";
  document.querySelector('.enter-btn').style.pointerEvents = "none";

  setTimeout(() => {
    document.querySelector('.safe-text').innerText =
      "Nothing is expected from you.";
  }, 2000);

  setTimeout(() => {
    document.querySelector('.safe-text').innerText =
      "Explore when you feel ready.";
  }, 4500);
}
