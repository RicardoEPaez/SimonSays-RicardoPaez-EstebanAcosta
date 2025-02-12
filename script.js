// counter reference
const counterNumber = document.getElementById("count");

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

// Color buttons pressed functions
 if (Byellow) {
    Byellow.addEventListener("click", () => {
        yellowAudio.play();
    })
 }

 if (Bred) {
    Bred.addEventListener("click", () => {
        redAudio.play();
    })
 }

 if (Bblue) {
    Bblue.addEventListener("click", () => {
        blueAudio.play();
    })
 }

 if (Bgreen) {
    Bgreen.addEventListener("click", () => {
        greenAudio.play();
    })
 }