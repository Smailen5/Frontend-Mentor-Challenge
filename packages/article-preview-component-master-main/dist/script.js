const shareButton = document.getElementById("share");
const footerUser = document.getElementById("footerUser");
const footerShare = document.getElementById("footerShare");
const shareButtonSecondary = document.getElementById("shareSecondary");

shareButton.addEventListener("click", () => {
  console.log("clicked");
  footerUser.classList.add("invisible");
  footerShare.classList.toggle("hidden");
  footerShare.classList.add("start-0");
  removeClassOnScreenWidth("start-0", 1024);
});

shareButtonSecondary.addEventListener("click", () => {
  console.log("clicked secondary");
  footerShare.classList.add("hidden");
  footerUser.classList.remove("invisible");
});

function removeClassOnScreenWidth(className, screenWidth) {
  // Se la larghezza dello schermo è maggiore della quantità specificata, rimuovi la classe
  if (window.innerWidth > screenWidth) {
    // Rimuovi la classe specificata a questo elemento
    footerShare.classList.remove(className);
  }
}

function addClassOnScreenWidth(className, screenWidth) {
  if (window.innerWidth > screenWidth) {
    shareButton.classList.add(className);
  }
}

// Richiamo la funzione al caricamento della pagina, se lo schermo e piu grande di 1024px esegue la funzione
window.onload = () => {
  addClassOnScreenWidth("animate-pulse", 1024);
};
