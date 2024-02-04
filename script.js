// we got a div called container and want to create a grid inside 16x16 made of other divs

// use loop to go 16 width and then 16 height for every width


const container = document.querySelector(".container");
const palette = document.querySelector(".palette");

let colorPicked = "black"

let className = 0;
function classNames() {
    for(let i = 1; i <= 10; i++) {
        className += 1;
        return className;
    }
}

for(let a = 1; a <= 10; a++) {
    const colorField = document.createElement("div");
    colorField.id = `color-${classNames()}`;
    palette.appendChild(colorField);
}

for(let i = 1; i <= 16; i++) {
    const squareW = document.createElement("div");
    squareW.className = "W";
    container.appendChild(squareW);
    for(let j = 1; j <= 16; j++){
        const squareH = document.createElement("div");
        squareH.className = "H";
        squareW.appendChild(squareH);

        squareH.addEventListener("mouseover", () => {
            squareH.style.backgroundColor = colorPicked;
            squareH.style.borderColor = colorPicked;
        });
    }
}
