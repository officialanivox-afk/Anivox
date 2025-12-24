function setRole(role) {
  localStorage.setItem("anivox_role", role);
  window.location.href = "realm.html";
}
setTimeout(() => {
  const msg = document.createElement("div");
  msg.innerText = "Welcome to ANIVOX 🌌";
  msg.style.position = "fixed";
  msg.style.bottom = "20px";
  msg.style.left = "50%";
  msg.style.transform = "translateX(-50%)";
  msg.style.opacity = "0.7";
  document.body.appendChild(msg);
}, 2000);
