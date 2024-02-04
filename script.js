// we got a div called container and want to create a grid inside 16x16 made of other divs

// use loop to go 16 width and then 16 height for every width


const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");

for(let i = 1; i <= 16; i++) {
    const squareW = document.createElement("div");
    squareW.className = "W";
    container1.appendChild(squareW);
    for(let j = 1; j <= 16; j++){
        const squareH = document.createElement("div");
        squareH.className = "H";
        squareW.appendChild(squareH);
    }
}