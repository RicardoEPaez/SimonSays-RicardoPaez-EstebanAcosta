// counter reference
const ScoreCount = document.getElementById("count");
let Score = 0;

//reference to each color button and color buttons class
const Byellow = document.getElementById("yellow");
const Bred = document.getElementById("red");
const Bblue = document.getElementById("blue");
const Bgreen = document.getElementById("green");

const Bcolors = document.querySelectorAll("simon");

//reference to audio files
const blueAudio = new Audio("Blue.wav");
const greenAudio = new Audio("Green.wav");
const redAudio = new Audio("Red.wav")
const yellowAudio = new Audio("Yellow.wav");
const loseAudio = new Audio("Lose.wav");

//Game lists and variables declarations
let colorsSecuence = [];
let colorOptions = [1, 2, 3, 4];
let index = 0;
let answer = 0;

// random function
const rand = Math.floor(Math.random() * colorOptions.lenght);

// Color buttons secuence demostration functions
function playYellow(){
    yellowAudio.play();
    Byellow.style.backgroundColor = "#faffb1";
    setTimeout(Byellow.style.backgroundColor = "#faffb1", 1000);
}

function playRed() {
    yellowAudio.play();
    Bred.style.backgroundColor = "#ff7b7b";
    setTimeout(1000);
}

function playGreen() {
    yellowAudio.play();
    Bgreen.style.backgroundColor = "#8dfe84";
    setTimeout(1000);
}

function playBlue() {
    yellowAudio.play();
    Bblue.style.backgroundColor = "#8ea2fc";
    setTimeout(1000);
}

// Color buttons pressed functions
 if (Byellow) {
    Byellow.addEventListener("click", () => {
        yellowAudio.play();
        isColor(1);
    })
 }

 if (Bred) {
    Bred.addEventListener("click", () => {
        redAudio.play();
        isColor(2);
    })
 }

 if (Bblue) {
    Bblue.addEventListener("click", () => {
        blueAudio.play();
        isColor(3);
    })
 }

 if (Bgreen) {
    Bgreen.addEventListener("click", () => {
        greenAudio.play();
        isColor(4);
    })
 }

 //logical functions
 function addColor() {
    colorsSecuence.push(colorOptions[rand]);
    playSecuence();
 }

 function isColor(answer){
    if (answer != colorSecuence[index]) {
        Score = X;
        ScoreCount.textContent = "0";
        //falta pantalla de perdida
    } else {
        Score += 1;
        ScoreCount.textContent = `{Score}`;
        index += 1;
        if (index = colorSecuence.leght) {
            addColor();
            index = 0;
        }
    }
 }

 function playSecuence() {
    for (i of colorsSecuence) {
        if (colorSecuence[i] == 1){
            playYellow();
        } else if (colorSecuence[i] == 2) {
            playRed();
        } else if (colorSecuence[i] == 3) {
            playBlue();
        } else {
            playGreen();
        }
    }
 }

 export function startGame() {
    colorSecuence = [];
    addColor();
 }