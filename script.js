//Important Query Selectors
const body = document.querySelector("body");

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

