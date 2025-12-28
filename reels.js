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

/* Touch swipe smooth scroll */
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

/* Like system */
document.querySelectorAll(".like-btn").forEach((btn, index) => {
  const countSpan = btn.querySelector("span");
  let likes = localStorage.getItem("like_" + index) || 0;
  countSpan.innerText = likes;

  btn.addEventListener("click", () => {
    likes++;
    localStorage.setItem("like_" + index, likes);
    countSpan.innerText = likes;
  });
});

/* Share system */
document.querySelectorAll(".share-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    if (navigator.share) {
      navigator.share({
        title: "ANIVOX Reels",
        url: window.location.href
      });
    } else {
      alert("Share not supported on this device");
    }
  });
});
