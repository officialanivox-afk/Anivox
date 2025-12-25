function setRole() {
  const audio = document.getElementById("bgSound");

  // FORCE sound after user click
  audio.muted = false;
  audio.currentTime = 0;

  audio.play().then(() => {
    console.log("Sound playing");
  }).catch(err => {
    console.log("Sound blocked:", err);
  });

  // Hide role screen
  document.getElementById("role-screen").style.display = "none";
}
