
document.addEventListener('DOMContentLoaded', () => {
    const mainMenuSection = document.getElementById('main-menu');
    const gameSection = document.getElementById('game-section');
    const playerForm = document.getElementById('player-form');
    const menuBtn = document.getElementById('menu-btn'); // Get the "Menú" button
    const restartBtn = document.getElementById('restart-btn');
    const retryBtn = document.getElementById('retry-btn');
    const gameOverSection = document.getElementById('game-over');

    const startAudio = new Audio("Start.wav");

    // --- "Jugar" Button Logic (from Main Menu) ---
    playerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission (page reload)

        // 1. Hide the Main Menu Section
        mainMenuSection.classList.add('hidden');
        // 2. Show the Game Section
        gameSection.classList.remove('hidden');

        //3. Play start sound
        startAudio.play();

        // 4. Start the Game Logic (Call your game initialization function)
        startGame();

        // 5. Get and display player name (optional)
        const playerNameInput = document.getElementById('player-name');
        const playerName = playerNameInput.value.trim();
        document.getElementById('current-player').textContent = playerName || 'Anónimo'; // Use player name or 'Anónimo' if empty
    });

    // --- "Menú" Button Logic (from Game Section) ---
    if (menuBtn) { // Ensure menuBtn exists before adding listener
        menuBtn.addEventListener('click', () => {
            // 1. Hide the Game Section
            gameSection.classList.add('hidden');
            // 2. Show the Main Menu Section
            mainMenuSection.classList.remove('hidden');

            // 3. Reset Game Display (if needed when returning to menu)
            resetGameDisplay();
        });
    }

    // --- "Reiniciar" Button Logic (from Game Section) ---
    if (restartBtn) {
        restartBtn.addEventListener('click', () => {
            // 1. Optionally reset the game display
            resetGameDisplay();
            // 2. Restart the Game Logic
            startGame();
            // Note: No screen transition needed, stays in game section
        });
    }

    // --- "Reintentar" Button Logic (from Game Over Section) ---
    if (retryBtn) {
        retryBtn.addEventListener('click', () => {
            // 1. Hide the Game Over Section
            gameOverSection.classList.add('hidden');
            // 2. Show the Game Section
            gameSection.classList.remove('hidden');
            // 3. Optionally reset the game display
            resetGameDisplay();
            // 4. Restart the Game Logic
            startGame();
        });
    }
})
