const enterBtn = document.getElementById("enterBtn");
const portal = document.getElementById("portal");
const world = document.getElementById("world");

enterBtn.addEventListener("click", () => {
  portal.style.opacity = "0";
  setTimeout(() => {
    portal.classList.add("hidden");
    world.classList.remove("hidden");
  }, 800);
});
