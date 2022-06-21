function makeGrid(size) {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("divs");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "blue";
    board.insertAdjacentElement("beforeend", square);
  }
}

function populateBoard(input) {
  if (input >= 2 && input <= 100) {
    makeGrid(input);
  } else {
    console.log("Invalid Grid Size");
  }
}
