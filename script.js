function setRole(role) {
  localStorage.setItem("anivox_role", role);
  window.location.href = "realm.html";
}

// DOM Elements
const world = document.getElementById('world');
const flow = document.getElementById('flow');
const realmName = document.getElementById('realmName');
const traceBtn = document.getElementById('traceBtn');

const creator = document.getElementById('creator');
const whisperInput = document.getElementById('whisperInput');
const distort = document.getElementById('distort');
const save = document.getElementById('save');
const cancel = document.getElementById('cancel');
const baseVideo = document.getElementById('baseVideo');

// Scroll / Touch Variables
let startX = 0, startY = 0, yOffset = 0, realm = 0;
const realms = ["Realm • Drift", "Realm • Echo", "Realm • Neon", "Realm • Void"];
const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
let ticking = false;

// FLOW + REALM (Smooth touch scroll)
world.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
}, { passive: true });

world.addEventListener('touchmove', e => {
  const x = e.touches[0].clientX;
  const y = e.touches[0].clientY;
  const dx = x - startX;
  const dy = y - startY;

  yOffset = clamp(yOffset - dy, 0, flow.scrollHeight - window.innerHeight);

  if (!ticking) {
    window.requestAnimationFrame(() => {
      flow.style.transform = `translateY(${-yOffset}px)`;
      world.style.transform = `rotateX(${(-dy/50)}deg) rotateY(${(dx/50)}deg)`;
      ticking = false;
    });
    ticking = true;
  }

  startX = x;
  startY = y;
}, { passive: true });

world.addEventListener('touchend', e => {
  const endX = e.changedTouches[0].clientX;
  const diffX = endX - startX;
  if (Math.abs(diffX) > 60) {
    realm = (realm + (diffX > 0 ? 1 : -1) + realms.length) % realms.length;
    realmName.textContent = realms[realm];
  }
  world.style.transform = `rotateX(0deg) rotateY(0deg)`;
}, { passive: true });

// CREATOR OVERLAY
traceBtn.onclick = () => creator.classList.add('show');
cancel.onclick = () => creator.classList.remove('show');

distort.oninput = () => {
  const v = distort.value;
  baseVideo.style.filter = `hue-rotate(${v}deg) saturate(${100 + v}%) blur(${v/40}px)`;
};

save.onclick = () => {
  const text = whisperInput.value.trim();
  if (text) {
    const s = document.createElement('section');
    s.className = 'scene';
    s.innerHTML = `<p class="whisper">${text}</p>`;
    flow.appendChild(s);
  }
  creator.classList.remove('show');
  whisperInput.value = '';
  distort.value = 0;
};

// Optional: Welcome message
setTimeout(() => {
  const msg = document.createElement("div");
  msg.innerText = "Welcome to ANIVOX 🌌";
  msg.style.position = "fixed";
  msg.style.bottom = "20px";
  msg.style.left = "50%";
  msg.style.transform = "translateX(-50%)";
  msg.style.opacity = "0.7";
  msg.style.color = "#fff";
  document.body.appendChild(msg);
}, 2000);
