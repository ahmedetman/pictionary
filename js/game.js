// js/game.js

let timerInterval = null;
let remainingSeconds = 60;
let isTimerRunning = false;
let challengeDiceEnabled = false; // Challenge dice hidden by default
let currentSelectedColor = null; // Track the currently selected color

const challengeDiceOptions = [
    { id: 1, symbol: '🙈', description: { ar: 'ارسم وعيناك مغمضتان', en: 'Draw with eyes closed' }, isChallenge: true },
    { id: 2, symbol: '〰️', description: { ar: 'ارسم بخط واحد متصل (بدون رفع القلم)', en: 'Draw in one continuous line (no lifting pen)' }, isChallenge: true },
    { id: 3, symbol: '✌️', description: { ar: 'إرسم الكلمتين من نفس النوع', en: 'Draw the category word from the 2 side' }, isChallenge: true },
    { id: 4, symbol: '👋', description: { ar: 'ارسم بيدك الأخرى (الغير معتادة)', en: 'Draw with your other (non-dominant) hand' }, isChallenge: true },
    { id: 5, symbol: '✅', description: { ar: 'لا يوجد تحدي', en: 'No challenge' }, isChallenge: false },
    { id: 6, symbol: '✅', description: { ar: 'لا يوجد تحدي', en: 'No challenge' }, isChallenge: false },
];

let currentGameCardWordObjects = null;
let currentChallenge = null;

// Available colors that can be selected
const availableColors = ['yellow', 'blue', 'orange', 'red', 'green'];

function initGame() {
    console.log("Game Initializing...");
    stopGameTimer();
    remainingSeconds = 60;
    currentGameCardWordObjects = null;
    currentSelectedColor = null;
    uiElements.rollDiceBtn.disabled = true;
    
    // Initialize challenge dice setting
    challengeDiceEnabled = false;
    if (uiElements.challengeDiceToggle) {
        uiElements.challengeDiceToggle.checked = challengeDiceEnabled;
    }
    
    console.log("Game Initialized.");
}

function toggleChallengeDice() {
    challengeDiceEnabled = !challengeDiceEnabled;
    console.log(`Challenge dice ${challengeDiceEnabled ? 'enabled' : 'disabled'}`);
    
    // Update UI to show/hide challenge dice
    updateChallengeDiceVisibility();
    
    // Clear challenge description if disabled
    if (!challengeDiceEnabled) {
        updateChallengeDescription('');
        currentChallenge = null;
    }
}

function startGameTimer() {
    if (isTimerRunning) {
        console.log("Timer already running.");
        return;
    }
    
    if (!currentGameCardWordObjects) {
        console.warn("Cannot start timer without a card drawn.");
        return;
    }

    console.log("Starting timer...");
    isTimerRunning = true;
    remainingSeconds = 60;
    updateTimerDisplay(remainingSeconds);
    playSound('timer-tick-sound');
    
    uiElements.rollDiceBtn.disabled = true;
    console.log("Timer started. Dice button disabled.");

    timerInterval = setInterval(() => {
        remainingSeconds--;
        updateTimerDisplay(remainingSeconds);
        playSound('timer-tick-sound');
        if (remainingSeconds <= 0) {
            console.log("Timer ended.");
            stopGameTimer();
            showTimerEndAlert();
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
    stopGameTimer();
    remainingSeconds = 60;
    updateTimerDisplay(remainingSeconds);

    currentGameCardWordObjects = getCardData();
    currentSelectedColor = null; // Reset color selection

    if (currentGameCardWordObjects) {
        console.log("Card data received, enabling dice button.");
        updateCardFaces(currentGameCardWordObjects);
        uiElements.rollDiceBtn.disabled = false;
    } else {
        console.warn("Could not get card data. Dice button remains disabled.");
        updateCardFaces(null);
        uiElements.rollDiceBtn.disabled = true;
    }
}

function changeCard() {
    console.log("Change card requested.");
    playSound('alert-sound');
    drawNextCard();
    
}

function selectRandomColor() {
    if (!currentGameCardWordObjects) {
        console.warn("No card data available for color selection.");
        return null;
    }

    // Get all colors present on the current card (both front and back)
    const cardColors = new Set();
    
    // Add colors from front face
    if (currentGameCardWordObjects.front) {
        currentGameCardWordObjects.front.forEach(wordObj => {
            if (wordObj && wordObj.colorType) {
                cardColors.add(wordObj.colorType);
            }
        });
    }
    
    // Add colors from back face
    if (currentGameCardWordObjects.back) {
        currentGameCardWordObjects.back.forEach(wordObj => {
            if (wordObj && wordObj.colorType) {
                cardColors.add(wordObj.colorType);
            }
        });
    }

    const availableCardColors = Array.from(cardColors);
    
    if (availableCardColors.length === 0) {
        console.warn("No colors found on current card.");
        return null;
    }

    // Select random color from available colors on the card
    const randomIndex = Math.floor(Math.random() * availableCardColors.length);
    const selectedColor = availableCardColors[randomIndex];
    
    console.log(`Selected random color: ${selectedColor} from available colors:`, availableCardColors);
    return selectedColor;
}

function rollDice() {
    if (uiElements.rollDiceBtn.disabled) {
        console.log("Attempted to roll dice while disabled.");
        return;
    }

    console.log("Rolling dice...");
    const standardResult = Math.floor(Math.random() * 6) + 1;

    // Handle challenge dice
    let challengeSymbol = '';
    let challengeDescriptionText = '';
    
    if (challengeDiceEnabled) {
        const challengeRollIndex = Math.floor(Math.random() * 6);
        currentChallenge = challengeDiceOptions[challengeRollIndex];
        challengeSymbol = currentChallenge.symbol;
        
        const lang = gameData.settings.currentLanguage;
        challengeDescriptionText = currentChallenge.description[lang] || currentChallenge.description['en'];
    } else {
        currentChallenge = null;
        challengeSymbol = '🚫'; // Disabled symbol
        challengeDescriptionText = '';
    }

    // Select random color
    currentSelectedColor = selectRandomColor();

    console.log(`Dice Results - Standard: ${standardResult}, Challenge: ${challengeSymbol}, Selected Color: ${currentSelectedColor}`);

    // Update UI
    updateDiceDisplay(standardResult, challengeSymbol);
    updateChallengeDescription(challengeDescriptionText);
    
    // Apply color selection visual effects
    applyColorSelectionEffects(currentSelectedColor);

    uiElements.rollDiceBtn.disabled = true;
    console.log("Dice rolled. Dice button disabled.");
}

function applyColorSelectionEffects(selectedColor) {
    if (!selectedColor) {
        // Clear all effects
        document.querySelectorAll('.card-word-item').forEach(item => {
            item.classList.remove('active', 'inactive');
        });
        return;
    }

    // Apply visual effects to card items
    document.querySelectorAll('.card-word-item').forEach(item => {
        const itemColor = item.dataset.color;
        
        if (itemColor === selectedColor) {
            item.classList.add('active');
            item.classList.remove('inactive');
        } else {
            item.classList.add('inactive');
            item.classList.remove('active');
        }
    });
}

// Getter functions for external access
function getCurrentSelectedColor() {
    return currentSelectedColor;
}

function isChallengeDiceEnabled() {
    return challengeDiceEnabled;
}

function getCurrentChallenge() {
    return currentChallenge;
}