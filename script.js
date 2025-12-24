const world = document.getElementById('world');
const flow = document.getElementById('flow');
const realmName = document.getElementById('realmName');

let startX=0, startY=0;
let yOffset = 0;
let realm = 0;

const realms = [
  "Realm • Drift",
  "Realm • Echo",
  "Realm • Neon",
  "Realm • Void"
];

function clamp(v,min,max){return Math.min(max,Math.max(min,v));}

world.addEventListener('touchstart', e=>{
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
},{passive:true});

world.addEventListener('touchmove', e=>{
  const x = e.touches[0].clientX;
  const y = e.touches[0].clientY;

  const dx = x - startX;
  const dy = y - startY;

  // Vertical = DEPTH FLOW
  yOffset = clamp(yOffset - dy, 0, flow.scrollHeight - innerHeight);
  flow.style.transform = `translateY(${-yOffset}px)`;

  // Parallax response
  world.style.transform =
    `rotateX(${(-dy/50)}deg) rotateY(${(dx/50)}deg)`;

  startX = x; startY = y;
},{passive:true});

world.addEventListener('touchend', e=>{
  // Horizontal swipe = REALM SHIFT
  const endX = e.changedTouches[0].clientX;
  const diffX = endX - startX;

  if(Math.abs(diffX) > 60){
    realm = (realm + (diffX>0?1:-1) + realms.length) % realms.length;
    realmName.textContent = realms[realm];
    world.classList.remove('realm-shift');
    void world.offsetWidth;
    world.classList.add('realm-shift');
  }

  world.style.transform = `rotateX(0deg) rotateY(0deg)`;
},{passive:true});
