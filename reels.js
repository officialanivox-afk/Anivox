const videos = document.querySelectorAll("video");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      const video = entry.target;

      if (entry.isIntersecting) {
        video.play().catch(() => {}); // autoplay block avoid
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  },
  { threshold: 0.7 } // 70% visible trigger
);

videos.forEach(video => observer.observe(video));

// Optional: swipe support for mobile
let startY = 0;
let endY = 0;
const container = document.querySelector(".reels-container");

container.addEventListener("touchstart", (e) => startY = e.touches[0].clientY);
container.addEventListener("touchend", (e) => {
  endY = e.changedTouches[0].clientY;
  const delta = endY - startY;

  if (delta > 50) {
    container.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
  } else if (delta < -50) {
    container.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  }
});
