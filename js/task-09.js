function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const mgButton = document.querySelector(".change-color")
const colorText = document.querySelector(".color")
const body = document.querySelector("body")

function changeColor() {
  body.style.background = getRandomHexColor();
  colorText.textContent = getRandomHexColor()
}
mgButton.addEventListener("click",changeColor)