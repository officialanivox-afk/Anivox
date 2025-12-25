function setRole() {
  const roleScreen = document.getElementById("role-screen");
  const world = document.getElementById("world");

  // hide role screen
  roleScreen.style.display = "none";

  // show world
  world.style.display = "block";
  world.style.opacity = "1";

  // trigger sound
  const soundBtn = document.getElementById("soundBtn");
  if (soundBtn) soundBtn.click();
}
