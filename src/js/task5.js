const button = document.querySelector(".change-color");
const output = document.querySelector(".color");
const body=document.querySelector("body");
button.addEventListener("click", function () {
  const randomcolor = getRandomHexColor();
  body.style.backgroundColor = randomcolor;
  output.textContent = randomcolor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
