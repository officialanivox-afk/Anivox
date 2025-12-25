const audio = document.getElementById("bgSound");

function enter() {
  // force unlock audio
  audio.muted = true;
  audio.play().then(() => {
    audio.pause();
    audio.currentTime = 0;
    audio.muted = false;
    audio.play();
  }).catch(err => {
    console.log("Audio error:", err);
  });

  document.getElementById("role-screen").style.display = "none";
}
function setRole() {
  // hide role screen
  document.getElementById("role-screen").style.display = "none";

  // optional: start sound if available
  const soundBtn = document.getElementById("soundBtn");
  if (soundBtn) {
    soundBtn.click(); // auto trigger sound enable
  }
}
