document.getElementById("create").addEventListener("click", (event) => {
  const action = event.target.getAttribute("data-action");
  const amount = document.getElementById("inputId").value;
  if (action === "create") {
    createBoxes(amount);
  }
});

document.getElementById("destroy").addEventListener("click", (event) => {
  const action = event.target.getAttribute("data-action");
  if (action === "destroy") {
    destroyBoxes();
  }
});

function createBoxes(amount) {
  const container = document.getElementById("boxes");
  container.innerHTML = "";
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const newElement = document.createElement("div");
    newElement.className = "box";
    newElement.style.width = size + "px";
    newElement.style.height = size + "px";
    newElement.style.backgroundColor = getRandomHexColor();
    container.appendChild(newElement);
    size += 10;
  }
}

function destroyBoxes() {
  document.getElementById("boxes").innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
