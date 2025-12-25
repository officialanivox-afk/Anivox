/* ===== REALMS ===== */
const realms = [
  { name:"Realm • Drift", bg1:"#00ffd5", bg2:"#5b7cff", accent:"#5b7cff" },
  { name:"Realm • Echo",  bg1:"#ff7ad9", bg2:"#7a5cff", accent:"#ff7ad9" },
  { name:"Realm • Neon",  bg1:"#7bff00", bg2:"#00ffd5", accent:"#7bff00" },
  { name:"Realm • Void",  bg1:"#000000", bg2:"#1a1a1a", accent:"#888888" }
];

let realm = 0;
let startX = 0;

/* ===== AUDIO ===== */
let audio = null;
let soundEnabled = false;

const soundBtn = document.getElementById("soundBtn");

/* ENABLE SOUND */
soundBtn.onclick = async () => {
  if (!audio) {
    audio = new Audio("sound.mp3");
    audio.loop = true;
    audio.volume = 0.3;
  }
  try { await audio.play(); soundEnabled=true; soundBtn.innerText="🔊 ON"; }
  catch { alert("Tap again to enable sound"); }
};

/* ===== DOM ===== */
const realmName = document.getElementById("realmName");
const traceBtn = document.getElementById("traceBtn");
const creator = document.getElementById("creator");
const whisperInput = document.getElementById("whisperInput");
const distort = document.getElementById("distort");
const save = document.getElementById("save");
const cancel = document.getElementById("cancel");
const baseVideo = document.getElementById("baseVideo");

/* APPLY REALM */
function applyRealm(i) {
  const r = realms[i];
  realmName.textContent = r.name;
  document.documentElement.style.setProperty("--bg1", r.bg1);
  document.documentElement.style.setProperty("--bg2", r.bg2);
  document.documentElement.style.setProperty("--accent", r.accent);
}

/* INITIAL */
applyRealm(0);

/* SWIPE REALMS */
document.addEventListener("touchstart", e => startX = e.touches[0].clientX, {passive:true});
document.addEventListener("touchend", e => {
  const diff = e.changedTouches[0].clientX - startX;
  if(Math.abs(diff)>60){
    realm = (realm + (diff>0?1:-1) + realms.length)%realms.length;
    applyRealm(realm);
  }
},{passive:true});

/* CREATOR */
traceBtn.onclick = () => creator.classList.add("show");
cancel.onclick = () => creator.classList.remove("show");
distort.oninput = () => {
  baseVideo.style.filter =
    `hue-rotate(${distort.value}deg) saturate(${100+distort.value}%) blur(${distort.value/40}px)`;
};
save.onclick = () => {
  const text = whisperInput.value.trim();
  if(!text) return;
  const s = document.createElement("section");
  s.className='scene';
  s.innerHTML=`<p class="whisper">${text}</p>`;
  document.getElementById('flow').appendChild(s);
  whisperInput.value=''; distort.value=0; creator.classList.remove('show');
};
