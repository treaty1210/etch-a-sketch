//Important Query Selectors
const body = document.querySelector("body");
const html = document.querySelector("html");


//Container Div
const container = document.createElement("div");
    container.classList.add("container");
    body.appendChild(container);

//Grid
for (i = 0; i < 256; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    container.appendChild(grid);
};

//Hover effect to change color
const box = document.querySelectorAll(".grid");
box.forEach(grid => {
    grid.addEventListener("mouseover", () => {
    grid.style.backgroundColor = "aquamarine";
    }) 
});
