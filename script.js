// counter reference
const ScoreCount = document.getElementById("count");
let Score = 0;

//reference to each color button and color buttons class
const Byellow = document.getElementById("yellow");
const Bred = document.getElementById("red");
const Bblue = document.getElementById("blue");
const Bgreen = document.getElementById("green");

const Bcolors = document.querySelectorAll(".simon");

//reference to audio files
const blueAudio = new Audio("Blue.wav");
const greenAudio = new Audio("Green.wav");
const redAudio = new Audio("Red.wav");
const yellowAudio = new Audio("Yellow.wav");
const loseAudio = new Audio("Lose.wav");

//Game lists and variables declarations
let colorsSequence = [];
let colorOptions = [1, 2, 3, 4];
let index = 0;
let userSequence = [];
let round = 0;

// random function
const rand = () => Math.floor(Math.random() * colorOptions.length);

// Color buttons sequence demonstration functions
function playYellow() {
    yellowAudio.play();
    Byellow.style.backgroundColor = "#faffb1";
    setTimeout(() => {
        Byellow.style.backgroundColor = "";
    }, 500);
}

function playRed() {
    redAudio.play();
    Bred.style.backgroundColor = "#ff7b7b";
    setTimeout(() => {
        Bred.style.backgroundColor = "";
    }, 500);
}

function playGreen() {
    greenAudio.play();
    Bgreen.style.backgroundColor = "#8dfe84";
    setTimeout(() => {
        Bgreen.style.backgroundColor = "";
    }, 500);
}

function playBlue() {
    blueAudio.play();
    Bblue.style.backgroundColor = "#8ea2fc";
    setTimeout(() => {
        Bblue.style.backgroundColor = "";
    }, 500);
}

// Color buttons pressed functions
if (Byellow) {
    Byellow.addEventListener("click", () => {
        yellowAudio.play();
        isColor(4);
    });
}

if (Bred) {
    Bred.addEventListener("click", () => {
        redAudio.play();
        isColor(1);
    });
}

if (Bblue) {
    Bblue.addEventListener("click", () => {
        blueAudio.play();
        isColor(3);
    });
}

if (Bgreen) {
    Bgreen.addEventListener("click", () => {
        greenAudio.play();
        isColor(2);
    });
}

//logical functions
function addColor() {
    let nextColor;
    do {
        nextColor = colorOptions[rand()];
    } while (colorsSequence.length > 0 && nextColor === colorsSequence[colorsSequence.length - 1]);
    colorsSequence.push(nextColor);
    playSequence();
}

function isColor(answer) {
    if (answer != colorsSequence[index]) {
        Score = 0;
        ScoreCount.textContent = "0";
        showGameOver();
    } else {
        index += 1;
        if (index === colorsSequence.length) {
            Score += 1;
            ScoreCount.textContent = `${Score}`;
            addColor();
            index = 0;
        }
    }
}

function playSequence() {
    let i = 0;
    const interval = setInterval(() => {
        if (i >= colorsSequence.length) {
            clearInterval(interval);
            return;
        }
        const color = colorsSequence[i];
        switch (color) {
            case 1:
                playRed();
                break;
            case 2:
                playGreen();
                break;
            case 3:
                playBlue();
                break;
            case 4:
                playYellow();
                break;
        }
        i++;
    }, 1000);
}

function startGame() {
    const mainMenu = document.getElementById("main-menu");
    const gameSection = document.getElementById("game-section");
    if (mainMenu && gameSection) {
        mainMenu.classList.add("hidden");
        gameSection.classList.remove("hidden");
    }
    colorsSequence = [];
    userSequence = [];
    index = 0;
    round = 0;
    Score = 0;
    ScoreCount.textContent = "0";
    addColor();
}

// Function to show game over screen
function showGameOver() {
    const gameOverScreen = document.getElementById("game-over");
    const finalScore = document.getElementById("final-score");
    const gameSection = document.getElementById("game-section");
    if (gameOverScreen && finalScore && gameSection) {
        finalScore.textContent = Score;
        gameOverScreen.classList.remove("hidden");
        gameSection.classList.add("hidden");
    }
}

// Function to restart the game
function restartGame() {
    const gameOverScreen = document.getElementById("game-over");
    const gameSection = document.getElementById("game-section");
    if (gameOverScreen && gameSection) {
        gameOverScreen.classList.add("hidden");
        gameSection.classList.remove("hidden");
    }
    startGame();
}

// Start the game when the start button is clicked
const startButton = document.getElementById("startButton");
if (startButton) {
    startButton.addEventListener("click", startGame);
}

// Restart the game when the retry button is clicked
const retryButton = document.getElementById("retry-btn");
if (retryButton) {
    retryButton.addEventListener("click", restartGame);
}

// Restart the game when the restart button is clicked
const restartButton = document.getElementById("restart-btn");
if (restartButton) {
    restartButton.addEventListener("click", restartGame);
}