const openPopUpButton = document.getElementById("popUp-open-button");
const closePopUpButton = document.getElementById("popUp-close-button");
const overlay = document.getElementById("overlay");
const popUp = document.getElementById("popUp");

openPopUpButton.addEventListener("click", () => {
  openPopUp();
});
closePopUpButton.addEventListener("click", () => {
  closePopUp();
});

overlay.addEventListener("click", () => {
  closePopUp();
});

function openPopUp() {
  popUp.classList.add("active");
  overlay.classList.add("active");
}
function closePopUp() {
  popUp.classList.remove("active");
  overlay.classList.remove("active");
}
