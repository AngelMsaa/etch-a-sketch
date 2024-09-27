const body = document.querySelector("body");
const sizeButton = document.createElement("button");
const container = document.createElement("div")

sizeButton.textContent = "Set size"
container.classList.add("flexDiv")
body.appendChild(container)

function printGrid(size) {
    // Remove existing grid if it
    const existingGrid = document.getElementById("grid");
    if (existingGrid) {
        container.removeChild(existingGrid);
    }

    const grid = document.createElement("div");
    grid.setAttribute("id", "grid");

    for (let i = 0; i < (size * size); i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.id = i;

        const cellSize = 90 / size;
        cell.style.flexBasis = `${cellSize}vmin`;

        grid.appendChild(cell);
    }
    container.appendChild(grid);
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.addEventListener("mouseenter", () => cellHover(cell)));
}

container.appendChild(sizeButton);

sizeButton.addEventListener("click", () => {
    let size = prompt("Enter grid size (Max 100)");
    if (size && size > 0 && size <= 100) {
        printGrid(size);
    } else {
        alert("Please enter a valid size between 1 and 100.");
    }
});

function cellHover(cell) {
    // cell.classList.add("hover")
    let colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    cell.style.backgroundColor = randomColor;
}

window.addEventListener("load", () => {
    printGrid(16); // Default grid size
});
