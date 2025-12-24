const world = document.getElementById("world");
const text = document.getElementById("mainText");

const messages = [
  "You are not late.",
  "You are exactly where you should be.",
  "This place reacts to you.",
  "Stay as long as you want."
];

let index = 0;

world.addEventListener("touchmove", (e) => {
  const x = e.touches[0].clientX;
  const y = e.touches[0].clientY;

  world.style.backgroundPosition = `${x / 30}px ${y / 30}px`;
});

world.addEventListener("click", () => {
  text.innerText = messages[index % messages.length];
  index++;

  world.animate([
    { transform: "scale(1)" },
    { transform: "scale(1.03)" },
    { transform: "scale(1)" }
  ], {
    duration: 1200,
    easing: "ease-in-out"
  });
});
