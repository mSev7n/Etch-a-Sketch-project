console.log("script loaded");

let gridSize = prompt("Enter number of squares per side");
gridSize = parseInt(gridSize);

const container = document.querySelector(".container");
container.innerHTML = ""; // Clear container if reused
container.style.width = "480px"; // Or any fixed value you like
container.style.height = "480px";

const squareSize = 480 / gridSize;

for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "black";
    });
    container.appendChild(square);
}
