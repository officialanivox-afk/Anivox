const realmName = document.getElementById('realmName');
const traceBtn = document.getElementById('traceBtn');

const creator = document.getElementById('creator');
const whisperInput = document.getElementById('whisperInput');
const distort = document.getElementById('distort');
const save = document.getElementById('save');
const cancel = document.getElementById('cancel');
const baseVideo = document.getElementById('baseVideo');

const realms = ["Realm • Drift", "Realm • Echo", "Realm • Neon", "Realm • Void"];
let realm = 0;

/* REALM SWIPE */
let startX = 0;
document.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
}, { passive: true });

document.addEventListener('touchend', e => {
  const diff = e.changedTouches[0].clientX - startX;
  if (Math.abs(diff) > 60) {
    realm = (realm + (diff > 0 ? 1 : -1) + realms.length) % realms.length;
    realmName.textContent = realms[realm];
  }
}, { passive: true });

traceBtn.onclick = () => creator.classList.add('show');
cancel.onclick = () => creator.classList.remove('show');

distort.oninput = () => {
  const v = distort.value;
  baseVideo.style.filter = `hue-rotate(${v}deg) blur(${v/40}px)`;
};

save.onclick = () => {
  const text = whisperInput.value.trim();
  if (!text) return;

  const s = document.createElement('section');
  s.className = 'scene';
  s.innerHTML = `<p class="whisper">${text}</p>`;
  document.getElementById('flow').appendChild(s);

  whisperInput.value = '';
  distort.value = 0;
  creator.classList.remove('show');
};
