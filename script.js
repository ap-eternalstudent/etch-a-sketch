const container = document.querySelector(".container");
const resetButton = document.querySelector(".reset-btn");
const styleSheet = document.styleSheets[0];

const grid5 = document.querySelector("#grid5");
const grid10 = document.querySelector("#grid10");
const grid15 = document.querySelector("#grid15");
const grid25 = document.querySelector("#grid25");

const div = document.createElement("div");
// let newClone = div.cloneNode(true);

function printGrid(number) {
  let gridSize = 100 / number;
  // select .grid class with js and plug in
  styleSheet.cssRules[1].style.width = `${gridSize}%`;
  styleSheet.cssRules[1].style.paddingBottom = `${gridSize}%`;
  for (let i = 1; i <= number * number; i++) {
    let newClone = div.cloneNode(true);
    container.appendChild(newClone);
    newClone.className = "grid";
  }
}

grid5.addEventListener("click", function () {
  printGrid(0);
  printGrid(5);
});
grid10.addEventListener("click", function () {
  printGrid(0);
  printGrid(10);
});
grid15.addEventListener("click", function () {
  printGrid(0);
  printGrid(15);
});
grid25.addEventListener("click", function () {
  printGrid(0);
  printGrid(25);
});
printGrid(7);
const allDivs = document.querySelectorAll(".grid");

resetButton.addEventListener("click", () => {
  allDivs.forEach((grid) => {
    grid.classList.remove("active");
  });
});

allDivs.forEach((grid) => {
  grid.addEventListener("mouseover", function (e) {
    e.target.classList.add("active");
  });
});
