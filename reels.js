document.querySelectorAll("video").forEach(video => {
  video.addEventListener("click", () => {
    video.muted = !video.muted;
  });
});
