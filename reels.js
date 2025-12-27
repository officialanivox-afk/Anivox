const videos = document.querySelectorAll("video");

/* Auto play / pause */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const video = entry.target;
      if (entry.isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  },
  { threshold: 0.6 }
);

videos.forEach(video => observer.observe(video));

/* Mobile swipe smoothness */
let startY = 0;
const container = document.querySelector(".reels-container");

container.addEventListener("touchstart", e => {
  startY = e.touches[0].clientY;
});

container.addEventListener("touchend", e => {
  const endY = e.changedTouches[0].clientY;
  const diff = startY - endY;

  if (diff > 50) {
    container.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  }
  if (diff < -50) {
    container.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
  }
});
