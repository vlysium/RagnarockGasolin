const musicButtons = document.querySelectorAll(".music-button");

musicButtons.forEach(button => button.addEventListener("click", () => {
  const audioId = button.dataset.id;
  const audioFile = document.getElementById(audioId);

  if (audioFile.paused) {
    audioFile.play();
    button.classList.add("playing");
  } else {
    audioFile.pause();
    button.classList.remove("playing");
  }
}));