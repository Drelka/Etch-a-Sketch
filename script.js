
const container = document.querySelector(".container");
const palette = document.querySelector(".palette");
const generateBtn = document.querySelector("#generate");
const input = document.querySelector("#input");

let numberOfGrids = 0;
let colorPicked = "pink";

function setNumberOfGrids() {
        let inputValue = Math.floor(input.value);
    if(inputValue > 100 || inputValue < 1) {
        alert("Number of squares per side is from 1 to 100.");
    } else {
        numberOfGrids = +inputValue;
        makeGrid();
    }    
}

generateBtn.addEventListener("click", () => {
    if(numberOfGrids == 0){
        setNumberOfGrids();
    } else {
        container.innerHTML = "";
        setNumberOfGrids();
    }
});    

function makeGrid() {
    for(let i = 1; i <= numberOfGrids; i++) {
        const squareW = document.createElement("div");
        squareW.className = "width";
        container.appendChild(squareW);
        for(let j = 1; j <= numberOfGrids; j++){
            const squareH = document.createElement("div");
            squareH.className = "squares";
            squareW.appendChild(squareH);
            squareH.addEventListener("mouseover", () => {
                if (colorPicked != document.querySelector("#color-10")) {
                    squareH.style.backgroundColor = colorPicked;
                    squareH.style.borderColor = colorPicked;
                } else {
                    squareH.style.backgroundColor = colorPicked;
                    squareH.style.borderColor = colorPicked;
                    // for (let i = 0; i < 10; i++) {
                    //     let x = 0.1;
                    //     if (colorPicked.charAt(colorPicked.length -3) !== ".") {
                    //         colorPicked += colorPicked.slice(0, -2) + `${x})`;
                    //     } else if (colorPicked.charAt(colorPicked.length -3) === ".") {
                    //         colorPicked += colorPicked.slice(0, -4) + `${x})`;
                    //         if (colorPicked.charAt(colorPicked.length -4) == "1") {
                    //             break;
                    //         };
                    //     }
                    // }
                }
        });
        }
    }
}

function random255(){
    return Math.floor(Math.random() * 255 + 1);
}
function randomColor(){
    return colorPicked = `rgba(${random255()}, ${random255()}, ${random255()}, 1)`;
}

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
const random = document.querySelector("#color-10");

const rndm = document.createElement("div");

darkslateblue.style.backgroundColor = "darkslateblue";
royalblue.style.backgroundColor = "royalblue";
deeppink.style.backgroundColor = "deeppink";
yellow.style.backgroundColor = "yellow";
springgreen.style.backgroundColor = "springgreen";
bisque.style.backgroundColor = "bisque";
aquamarine.style.backgroundColor = "aquamarine";
chartreuse.style.backgroundColor = "chartreuse";
orangered.style.backgroundColor = "orangered";

random.appendChild(rndm);
rndm.textContent =  "Rndm";
random.style.cssText = "display: flex;"
                     + "align-items: center;"
                     + "justify-content: center;"
                     + "color: yellow;"
                     + "background-color: grey;"
                     + "border: double blue 5px";

darkslateblue.addEventListener("click", () => {colorPicked = darkslateblue.style.backgroundColor;});
royalblue.addEventListener("click", () => {colorPicked = royalblue.style.backgroundColor;});
deeppink.addEventListener("click", () => {colorPicked = deeppink.style.backgroundColor;});
yellow.addEventListener("click", () => {colorPicked = yellow.style.backgroundColor;});
springgreen.addEventListener("click", () => {colorPicked = springgreen.style.backgroundColor;});
bisque.addEventListener("click", () => {colorPicked = bisque.style.backgroundColor;});
aquamarine.addEventListener("click", () => {colorPicked = aquamarine.style.backgroundColor;});
chartreuse.addEventListener("click", () => {colorPicked = chartreuse.style.backgroundColor;});
orangered.addEventListener("click", () => {colorPicked = orangered.style.backgroundColor;});
random.addEventListener("click", () => {
    colorPicked = randomColor();
});
