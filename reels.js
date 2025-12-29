const videos = document.querySelectorAll("video");
const reels = document.querySelectorAll(".reel");

/* Intersection observer – active reel */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const reel = entry.target;
      const video = reel.querySelector("video");

      if (entry.isIntersecting) {
        reel.classList.add("active");
        video.play().catch(() => {});
      } else {
        reel.classList.remove("active");
        video.pause();
      }
    });
  },
  { threshold: 0.6 }
);

reels.forEach(reel => observer.observe(reel));

/* Tap to play / pause + unmute */
videos.forEach(video => {
  let hintShown = false;

  video.addEventListener("click", () => {
    if (video.paused) {
      video.muted = false;
      video.play();

      if (!hintShown) {
        const hint = document.createElement("div");
        hint.className = "tap-hint";
        hint.innerText = "🔊 Sound On";
        video.parentElement.appendChild(hint);
        hintShown = true;
        setTimeout(() => hint.remove(), 2000);
      }
    } else {
      video.pause();
    }
  });
});

/* Like system */
document.querySelectorAll(".like-btn").forEach((btn, index) => {
  const span = btn.querySelector("span");
  let likes = localStorage.getItem("like_" + index) || 0;
  span.innerText = likes;

  btn.addEventListener("click", e => {
    e.stopPropagation();
    likes++;
    localStorage.setItem("like_" + index, likes);
    span.innerText = likes;
    btn.classList.add("liked");
    setTimeout(() => btn.classList.remove("liked"), 400);
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
