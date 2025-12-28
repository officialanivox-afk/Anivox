function enterWorld() {
  document.body.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = "home.html";
  }, 500);
}
