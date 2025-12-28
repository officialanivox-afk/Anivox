const videos = document.querySelectorAll("video");

/* Auto play / pause on scroll */
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

videos.forEach(video => {
  observer.observe(video);

  /* 🔥 TAP TO PLAY / PAUSE + UNMUTE */
  video.addEventListener("click", () => {
    if (video.paused) {
      video.muted = false;   // unmute on tap
      video.play();
    } else {
      video.pause();
    }
  });
});

/* Mobile swipe smooth scroll */
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

  btn.addEventListener("click", e => {
    e.stopPropagation(); // ❗ video tap block na ho
    likes++;
    localStorage.setItem("like_" + index, likes);
    countSpan.innerText = likes;
  });
});

/* Share */
document.querySelectorAll(".share-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: "ANIVOX Reels",
        url: window.location.href
      });
    }
  });
});
