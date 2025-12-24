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

let startX=0, startY=0, yOffset=0;

/* FLOW SCROLL + SWIPE */
world.addEventListener('touchstart', e => {
  startX=e.touches[0].clientX;
  startY=e.touches[0].clientY;
},{passive:true});

world.addEventListener('touchmove', e => {
  const x=e.touches[0].clientX, y=e.touches[0].clientY;
  const dx=x-startX, dy=y-startY;
  yOffset= Math.min(Math.max(yOffset-dy,0), flow.scrollHeight-window.innerHeight);
  flow.style.transform=`translateY(${-yOffset}px)`;
  world.style.transform=`rotateX(${-dy/50}deg) rotateY(${dx/50}deg)`;
  startX=x; startY=y;
},{passive:true});

world.addEventListener('touchend', e => {
  world.style.transform=`rotateX(0deg) rotateY(0deg)`;
});

/* CREATOR */
traceBtn.onclick=()=>creator.classList.add('show');
cancel.onclick=()=>creator.classList.remove('show');
save.onclick=()=>{
  const text=whisperInput.value.trim();
  if(text){
    const s=document.createElement('section');
    s.className='scene';
    s.innerHTML=`<p class="whisper">${text}</p>`;
    flow.appendChild(s);
  }
  creator.classList.remove('show');
  whisperInput.value=''; distort.value=0;
};
distort.oninput=()=>{ baseVideo.style.filter=`hue-rotate(${distort.value}deg) saturate(${100+distort.value}%) blur(${distort.value/40}px)` }
