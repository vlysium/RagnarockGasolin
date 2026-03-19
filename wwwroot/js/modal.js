document.addEventListener("DOMContentLoaded", function() {
  const hasSeenPopup = localStorage.getItem("hasSeenWelcomePopup");

  if (!hasSeenPopup) {
    // 1. initialiserer Bootstrap modalen
    const modalElement = document.getElementById("myModal");
    const myModal = new bootstrap.Modal(modalElement);
    
    // 2. viser vores modal
    myModal.show();

    // 3. indsætter timer, så den forsvinder af sig selv
    // setTimeout(function() {
    //   myModal.hide();
    // }, 30000);

    // 4. Mark as seen so it doesn't pop up on every refresh
    localStorage.setItem("hasSeenWelcomePopup", "true");
  }
});