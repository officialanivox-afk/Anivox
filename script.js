function enterWorld() {
  document.getElementById("portal").style.display = "none";
  document.getElementById("world").classList.remove("hidden");

  // future ke liye base
  localStorage.setItem("enteredAnivox", "true");
}
