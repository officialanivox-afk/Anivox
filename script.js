const enterBtn = document.getElementById("enterBtn");
const portal = document.getElementById("portal-screen");
const world = document.getElementById("world");

enterBtn.addEventListener("click", () => {
  portal.style.opacity = "0";
  portal.style.transform = "scale(1.2)";
  setTimeout(() => {
    portal.style.display = "none";
    world.classList.remove("hidden");
  }, 900);
});
