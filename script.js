console.log("script loaded");

const container = document.querySelector(".container");
const button = document.querySelector("#button");

function createGrid(gridSize)
{
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
            if (i % 2 == 0)
            {
                square.style.backgroundColor = "black";
            }else square.style.backgroundColor = "blue";
        });
        container.appendChild(square);
    }
}

button.addEventListener("click", () => {
    

    let shouldLoop = true;
    while(shouldLoop)
    {
        let gridSize = prompt("Enter number of squares per side");
        gridSize = parseInt(gridSize);

        if((gridSize < 1) || (gridSize > 100))
        {
            alert("Enter a number less than 100");
        }
        else {
            createGrid(gridSize);
            shouldLoop = false;
        }
    }
})