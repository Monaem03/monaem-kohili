const modal = document.querySelector("#modal");
const video = modal.querySelector("video");
const closeBtn = modal.querySelector("button");

document.querySelectorAll(".vcard").forEach(card => {
  card.onclick = () => {
    const src = card.dataset.src;

    video.src = src;
    video.load();

    modal.classList.add("open");

    video.play().catch(() => {
      console.log("Play button চাপো");
    });
  };
});

closeBtn.onclick = () => {
  video.pause();
  video.removeAttribute("src");
  video.load();
  modal.classList.remove("open");
};

modal.onclick = e => {
  if (e.target === modal) {
    video.pause();
    video.removeAttribute("src");
    video.load();
    modal.classList.remove("open");
  }
};