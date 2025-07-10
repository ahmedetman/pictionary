// js/game.js

let timerInterval = null;
let remainingSeconds = 60;
let isTimerRunning = false;
const challengeDiceOptions = [
    // Note: IDs match potential dice face numbers (1-6)
    { id: 1, symbol: '🙈', description: { ar: 'ارسم وعيناك مغمضتان', en: 'Draw with eyes closed' }, isChallenge: true },
    { id: 2, symbol: '〰️', description: { ar: 'ارسم بخط واحد متصل (بدون رفع القلم)', en: 'Draw in one continuous line (no lifting pen)' }, isChallenge: true },
    { id: 3, symbol: '✌️', description: { ar: 'إرسم الكلمتين من نفس النوع', en: 'Draw the category word from  the 2 side' }, isChallenge: true }, // Clarified description slightly
    { id: 4, symbol: '👋', description: { ar: 'ارسم بيدك الأخرى (الغير معتادة)', en: 'Draw with your other (non-dominant) hand' }, isChallenge: true },
    { id: 5, symbol: '✅', description: { ar: 'لا يوجد تحدي', en: 'No challenge' }, isChallenge: false },
    { id: 6, symbol: '✅', description: { ar: 'لا يوجد تحدي', en: 'No challenge' }, isChallenge: false },
];
let currentGameCardWordObjects = null; // Store the whole card data { front: [], back: [] }
let currentChallenge = null;
function initGame() {
    console.log("Game Initializing...");
    stopGameTimer();
    remainingSeconds = 60;
    currentGameCardWordObjects = null; // Reset card data
    // --- Disable Dice Button on Init ---
    uiElements.rollDiceBtn.disabled = true;
    // initializeUI called from main.js
    console.log("Game Initialized.");
}

function startGameTimer() {
    if (isTimerRunning) {
        console.log("Timer already running.");
        return;
    }
    // --- Check if there's even a card to time for ---
    if (!currentGameCardWordObjects) {
        console.warn("Cannot start timer without a card drawn.");
        // Optionally provide user feedback here (e.g., brief message)
        return;
    }

    console.log("Starting timer...");
    isTimerRunning = true;
    remainingSeconds = 60; // Reset timer
    updateTimerDisplay(remainingSeconds); // Update display immediately
    playSound('timer-tick-sound');
    // --- DISABLE Dice Button WHEN TIMER STARTS ---
    uiElements.rollDiceBtn.disabled = true;
    console.log("Timer started. Dice button disabled.");
    // ------------------------------------------

    timerInterval = setInterval(() => {
        remainingSeconds--;
        updateTimerDisplay(remainingSeconds);
        playSound('timer-tick-sound');
        if (remainingSeconds <= 0) {
            console.log("Timer ended.");
            stopGameTimer();
            showTimerEndAlert(); // Visual/Audio alert
            // Dice button remains disabled until next card draw
        }
    }, 1000);
}

function stopGameTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
        console.log("Timer stopped.");
        stopSound('timer-tick-sound');
    }
    isTimerRunning = false;
}

function drawNextCard() {
    console.log("Drawing next card...");
    stopGameTimer(); // Stop timer if running
    remainingSeconds = 60;
    updateTimerDisplay(remainingSeconds);

    currentGameCardWordObjects = getCardData();

    if (currentGameCardWordObjects) {
        console.log("Card data received, enabling dice button.");
        updateCardFaces(currentGameCardWordObjects);
        // --- This line enables the button again on new card ---
        uiElements.rollDiceBtn.disabled = false;
    } else {
        console.warn("Could not get card data. Dice button remains disabled.");
        updateCardFaces(null); // Show placeholder
        uiElements.rollDiceBtn.disabled = true; // Ensure disabled on failure
    }
}

function changeCard() {
    console.log("Change card requested.");
    playSound('alert-sound');
    drawNextCard(); // drawNextCard will handle enabling the dice button
}

function rollDice() {
    // --- Check if button is disabled (redundant check, but safe) ---
    if (uiElements.rollDiceBtn.disabled) {
        console.log("Attempted to roll dice while disabled.");
        return;
    }

    console.log("Rolling dice...");
    const standardResult = Math.floor(Math.random() * 6) + 1;

    // --- Challenge Dice Logic ---
    const challengeRollIndex = Math.floor(Math.random() * 6); // Index 0-5
    currentChallenge = challengeDiceOptions[challengeRollIndex]; // Get the challenge object
    const challengeSymbol = currentChallenge.symbol;
    // --- End Challenge Logic ---

    console.log(`Dice Results - Standard: ${standardResult}, Challenge: ${challengeSymbol}`);

    // --- Update UI ---
    updateDiceDisplay(standardResult, challengeSymbol); // Pass symbol to UI

    // Get description in current language
    const lang = gameData.settings.currentLanguage; // Access global gameData
    const challengeDescriptionText = currentChallenge.description[lang] || currentChallenge.description['en'];

    updateChallengeDescription(challengeDescriptionText); // Update the description text
    // --- Disable Dice Button AFTER Rolling ---
    uiElements.rollDiceBtn.disabled = true;
    console.log("Dice rolled. Dice button disabled.");

    // TODO: Future - Implement logic based on standardResult (e.g., category selection)
}