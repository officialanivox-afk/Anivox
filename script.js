const portal = document.getElementById("portal");
const button = document.querySelector(".enter-btn");
const screen = document.querySelector(".screen");

function enterWorld() {
  screen.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = "world.html";
  }, 700);
}

portal.addEventListener("click", enterWorld);
button.addEventListener("click", enterWorld);
