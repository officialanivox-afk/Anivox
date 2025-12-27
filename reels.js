const videos = document.querySelectorAll("video");
const container = document.querySelector(".reels-container");

let currentIndex = 0;

// Play first video on load
videos[currentIndex].play().catch(()=>{});

// IntersectionObserver for auto pause/play
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const video = entry.target;
      if(entry.isIntersecting){video.play().catch(()=>{});}
      else{video.pause(); video.currentTime=0;}
    });
  },
  {threshold:0.7}
);
videos.forEach(video => observer.observe(video));

// Infinite swipe support
let startY=0, endY=0;
container.addEventListener("touchstart", e => startY=e.touches[0].clientY);
container.addEventListener("touchend", e => {
  endY = e.changedTouches[0].clientY;
  const delta = endY - startY;
  
  if(delta>50){ // swipe down
    fadeToPrev();
  } else if(delta<-50){ // swipe up
    fadeToNext();
  }
});

function fadeToNext(){
  videos[currentIndex].classList.add('fade-out');
  videos[currentIndex].pause();
  videos[currentIndex].currentTime=0;
  
  currentIndex = (currentIndex + 1) % videos.length;
  videos[currentIndex].classList.remove('fade-out');
  videos[currentIndex].classList.add('fade-in');
  videos[currentIndex].play().catch(()=>{});
  setTimeout(()=>videos[currentIndex].classList.remove('fade-in'), 500);
}

function fadeToPrev(){
  videos[currentIndex].classList.add('fade-out');
  videos[currentIndex].pause();
  videos[currentIndex].currentTime=0;
  
  currentIndex = (currentIndex - 1 + videos.length) % videos.length;
  videos[currentIndex].classList.remove('fade-out');
  videos[currentIndex].classList.add('fade-in');
  videos[currentIndex].play().catch(()=>{});
  setTimeout(()=>videos[currentIndex].classList.remove('fade-in'), 500);
    }
