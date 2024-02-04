
const container = document.querySelector(".container");
const palette = document.querySelector(".palette");

let colorPicked = "white"

let idName = 0;
function idNames() {
    for(let i = 1; i <= 10; i++) {
        idName += 1;
        return idName;
    }
}

for(let a = 1; a <= 10; a++) {
    const colorField = document.createElement("div");
    colorField.className = "colors";
    colorField.id = `color-${idNames()}`;
    palette.appendChild(colorField);
}

const darkslateblue = document.querySelector("#color-1");
const royalblue = document.querySelector("#color-2");
const deeppink = document.querySelector("#color-3");
const yellow = document.querySelector("#color-4");
const springgreen = document.querySelector("#color-5");
const bisque = document.querySelector("#color-6");
const aquamarine = document.querySelector("#color-7");
const chartreuse = document.querySelector("#color-8");
const orangered = document.querySelector("#color-9");
const white = document.querySelector("#color-10");

darkslateblue.style.backgroundColor = "darkslateblue";
royalblue.style.backgroundColor = "royalblue";
deeppink.style.backgroundColor = "deeppink";
yellow.style.backgroundColor = "yellow";
springgreen.style.backgroundColor = "springgreen";
bisque.style.backgroundColor = "bisque";
aquamarine.style.backgroundColor = "aquamarine";
chartreuse.style.backgroundColor = "chartreuse";
orangered.style.backgroundColor = "orangered";
white.style.backgroundColor = "white";

darkslateblue.addEventListener("click", () => {colorPicked = darkslateblue.style.backgroundColor});
royalblue.addEventListener("click", () => {colorPicked = royalblue.style.backgroundColor});
deeppink.addEventListener("click", () => {colorPicked = deeppink.style.backgroundColor});
yellow.addEventListener("click", () => {colorPicked = yellow.style.backgroundColor});
springgreen.addEventListener("click", () => {colorPicked = springgreen.style.backgroundColor});
bisque.addEventListener("click", () => {colorPicked = bisque.style.backgroundColor});
aquamarine.addEventListener("click", () => {colorPicked = aquamarine.style.backgroundColor});
chartreuse.addEventListener("click", () => {colorPicked = chartreuse.style.backgroundColor});
orangered.addEventListener("click", () => {colorPicked = orangered.style.backgroundColor});
white.addEventListener("click", () => {colorPicked = white.style.backgroundColor});


for(let i = 1; i <= 16; i++) {
    const squareW = document.createElement("div");
    container.appendChild(squareW);
    for(let j = 1; j <= 16; j++){
        const squareH = document.createElement("div");
        squareH.className = "squares";
        squareW.appendChild(squareH);

        squareH.addEventListener("mouseover", () => {
            squareH.style.backgroundColor = colorPicked;
            squareH.style.borderColor = colorPicked;
        });
    }
}
