let container = document.querySelector(".container");
let boardSize = 700;

const colors = [
    "#FF073A",  // Neon Red
    "#FF61A6",  // Neon Pink
    "#FF6FFF",  // Neon Fuchsia
    "#FF00FF",  // Neon Magenta
    "#FF66CC",  // Neon Hot Pink
    "#FF9933",  // Neon Orange
    "#FFD300",  // Neon Yellow
    "#CCFF00",  // Neon Chartreuse
    "#66FF00",  // Neon Lime Green
    "#00FFCC"   // Neon Cyan
];

function random(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}


function generateGrid(size) {
  if (size < 0) return;
  for (let i = 0; i < size ** 2; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.style.width = 700 / size + "px"
    square.style.height = 700 / size + "px"
    square.style.backgroundColor = colors[random(0, 10)]
    square.style.boxShadow = `0 0 50px 5px ${square.style.backgroundColor}`
    container.append(square);
  }
}

container.addEventListener('mouseover', (e) => {
  let target = e.target;
  if (target.classList.contains('square')) {
    target.classList.add("hovered");
  }
});
container.addEventListener('mouseout', (e) => {
  let target = e.target;
  if (target.classList.contains('square')) {
    target.classList.remove("hovered");
  }
});

generateGrid(16);

let regenerateButton = document.querySelector(".regenerate");
regenerateButton.addEventListener('click', () => {
  let newSize = parseInt(prompt("Please enter desired a x a size:"));
  if (newSize > 100 || newSize <= 0 || isNaN(newSize)) {
    alert("Please enter a valid size.");
  } else {
    let currentSquares = container.querySelectorAll('.square');
    currentSquares.forEach((el) => el.remove());
    generateGrid(newSize);
  }
})
