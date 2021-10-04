const container = document.querySelector(".container");
const resetButton = document.querySelector(".reset-btn");
const div = document.createElement("div");
let newClone = div.cloneNode(true);

for (let i = 1; i <= 16 * 16; i++) {
  let newClone = div.cloneNode(true);
  container.appendChild(newClone);
  newClone.className = "grid";
}

resetButton.addEventListener("click", () => {
  allDivs.forEach((grid) => {
    grid.classList.remove("active");
  });
});

const allDivs = document.querySelectorAll(".grid");

allDivs.forEach((grid) => {
  grid.addEventListener("mouseover", function (e) {
    e.target.classList.add("active");
  });
});
