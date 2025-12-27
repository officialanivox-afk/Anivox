function enterWorld() {
  document.body.style.transition = "1s";
  document.body.style.background = "#000";

  setTimeout(() => {
    window.location.href = "home.html";
  }, 800);
}
