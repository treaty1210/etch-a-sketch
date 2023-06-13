//Important Query Selectors
const body = document.querySelector("body");
const html = document.querySelector("html");


//Container Div
const container = document.createElement("div");
    container.classList.add("container");
    body.appendChild(container);

//Grid: create function to work with button and different lengths
function createGrid(gridSize) {
    //Div that will be used to reset grid
    const removeGrid = document.createElement("div")
    removeGrid.classList.add("removeGrid")

    for (i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("grid-row");
        //this will create squares in the rows
        for (s = 0; s < gridSize; s++) {
            const widthAndHeight = 1000 / gridSize;
            const grid = document.createElement("div");
            grid.classList.add("grid")
                grid.style.width = `${widthAndHeight}px`;
                grid.style.height = `${widthAndHeight}px`;
            //Random color function
            function randomColor() {
                let colorOne = Math.floor(Math.random() * 256);
                let colorTwo = Math.floor(Math.random() * 256);
                let colorThree = Math.floor(Math.random() * 256);
                return (`rgb(${colorOne}, ${colorTwo}, ${colorThree})`) 
            }
            //Move hover effect eventlistener here
            grid.addEventListener("mouseover", () => {
                grid.style.backgroundColor = randomColor();
                }) 
            row.appendChild(grid);
        } 
        removeGrid.appendChild(row);
    } 
    container.appendChild(removeGrid);
};

//Needs to be here or removeGrid div will not be created leading to null value
createGrid(0);

//Button
const button = document.querySelector("button");
button.addEventListener("click", () => {
    let newSize = Number(prompt("Choose a number to get new grid size. (E.g. 5 creates a 5x5 box.)"));

    if (newSize > 100) {
        newSize = Number(prompt("Please choose a number less than 100."));
    }
    //Should remove any existing grid from page
    const removeGrid = document.querySelector(".removeGrid");
    removeGrid.remove();
    //Runs function after removing existing grid to create blank grid
    createGrid(newSize);
});

//Hover effect to change color
// const box = document.querySelectorAll(".grid");
// box.forEach(grid => {
//     grid.addEventListener("mouseover", () => {
//     grid.style.backgroundColor = "aquamarine";
//     }) 
// });
