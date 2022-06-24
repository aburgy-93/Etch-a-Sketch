let color = "black";
let click = true;

function makeGrid(size) {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "white";
    square.style.border = "solid 1px";
    board.insertAdjacentElement("beforeend", square);
    square.addEventListener("mouseover", colorSquare);
  }

  let gridSize = document.querySelector(".grid-size");
  gridSize.textContent = `${size} x ${size}`;
}

// Toggle grid
// function toggleGrid(){

// }

function colorSquare() {
  if (click) {
    if (color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}

// function colorBackground() {
//   this.style.backgroundColor = color;
// }

function changeColor(choice) {
  color = choice;
}

// function changeBackgroundColor(choice) {
//   color = choice;
// }
// change the user input and use diff var than color?

function boardReset() {
  let board = document.querySelector(".board");
  let square = board.querySelectorAll("div");
  square.forEach((div) => (div.style.backgroundColor = "white"));
}

function populateBoard(input) {
  if (input >= 2 && input <= 100) {
    makeGrid(input);
  } else {
    console.log("Invalid Grid Size");
  }
}

document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.tagName != "BUTTON") {
    click = !click;
    if (click) {
      document.querySelector(".mode").textContent = "Mode: Coloring";
    } else {
      document.querySelector(".mode").textContent = "Mode: Not Coloring";
    }
  }
});
