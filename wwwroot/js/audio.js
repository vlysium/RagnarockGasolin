  const audio = document.getElementById('kvindeMin');
  
  function toggleMusic() {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }