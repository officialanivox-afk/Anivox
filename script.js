const btn = document.getElementById("enterWorld");
const portal = document.getElementById("portal");

btn.addEventListener("click", () => {
  portal.classList.add("active");

  document.body.style.transition = "transform 0.8s ease";
  document.body.style.transform = "scale(1.15)";

  setTimeout(() => {
    window.location.href = "world.html";
  }, 1000);
});
