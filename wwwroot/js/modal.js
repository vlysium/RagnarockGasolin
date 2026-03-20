document.addEventListener("DOMContentLoaded", function() {
  const hasSeenPopup = localStorage.getItem("has-seen-welcome-popup");

  if (!hasSeenPopup) {
    // 1. initialiserer Bootstrap modalen
    const modalElement = document.getElementById("modal");
    const modal = new bootstrap.Modal(modalElement);
    
    // 2. viser vores modal
    modal.show();

    // 3. indsætter timer, så den forsvinder af sig selv
    // setTimeout(function() {
    //   myModal.hide();
    // }, 30000);

    // 4. Mark as seen so it doesn't pop up on every refresh
    localStorage.setItem("has-seen-welcome-popup", "true");
  }
});