const musicButtons = document.querySelectorAll(".music-button");
const audioFiles = document.querySelectorAll(".audio-file");

musicButtons.forEach(button => button.addEventListener("click", () => {
  const audioId = button.dataset.id;
  const audioFile = document.getElementById(audioId);

  if (audioFile.paused) {
    // pause all other audios
    audioFiles.forEach(audio => audio.pause());
    musicButtons.forEach(button => button.classList.remove("playing"));

    audioFile.play();
    button.classList.add("playing");
  } else {
    audioFile.pause();
    button.classList.remove("playing");
  }
}));




// const songs = ['kvindeMin', 'rabalder', 'langebro', 'hvaGoerViNu', 'thisIsMyLife'];
// songs.forEach(s=>{
//   const audio = document.getElementById(s)
//       if (audio.paused) {
//       audio.play();
//     } else {
//       audio.pause();
//     }})
