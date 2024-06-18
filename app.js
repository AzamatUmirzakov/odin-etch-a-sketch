let container = document.querySelector(".container");
let boardSize = 700;

function generateGrid(size) {
  if (size < 0) return;
  for (let i = 0; i < size ** 2; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.style.width = 700 / size + "px"
    square.style.height = 700 / size + "px"
    container.append(square);
  }
}

generateGrid(16);
