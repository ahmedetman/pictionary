// js/ui.js

const uiElements = {
    cardContainer: document.querySelector('.card-container'),
    cardFlipper: document.getElementById('card-flipper'),
    cardFrontWords: document.querySelectorAll('.card-front .card-word-item .word-text'),
    cardBackWords: document.querySelectorAll('.card-back .card-word-item .word-text'),
    cardFrontItems: document.querySelectorAll('.card-front .card-word-item'), // To set color class if needed
    cardBackItems: document.querySelectorAll('.card-back .card-word-item'),   // To set color class if needed
    flipCorners: document.querySelectorAll('.flip-corner'),
    cardPlaceholder: document.getElementById('card-placeholder'),
    gameContainer: document.querySelector('.game-container'),
    timerDisplay: document.getElementById('timer-display'),
    standardDice: document.getElementById('standard-dice'),
    challengeDice: document.getElementById('challenge-dice'),
    rollDiceBtn: document.getElementById('roll-dice-btn'),
    startTimerBtn: document.getElementById('start-timer-btn'),
    changeCardBtn: document.getElementById('change-card-btn'),
    editDataBtn: document.getElementById('edit-data-btn'),
    languageSwitcher: document.getElementById('language-switcher'),
    editModal: document.getElementById('edit-modal'),
    editModalTitle: document.getElementById('edit-modal-title'),
    modalFormContent: document.getElementById('modal-form-content'),
    modalCloseBtn: document.querySelector('.modal .close-btn'),
    alertSound: document.getElementById('alert-sound'),
    timerEndSound: document.getElementById('timer-end-sound'),
    challengeDescription: document.getElementById('challenge-description'),
    gameTitle: document.getElementById('game-title'),
    cardFrontTitle: document.getElementById('card-front-title'),
    cardBackTitle: document.getElementById('card-back-title'),
};

function updateCardFaces(cardWordObjects) {
    // Get the current language setting
    const currentLang = gameData.settings?.currentLanguage || 'ar'; // Default to 'ar'

    if (cardWordObjects && cardWordObjects.front && cardWordObjects.back) {
        console.log(`Updating card faces for language: ${currentLang}`);

        // Update Front Face based on current language
        cardWordObjects.front.forEach((wordObj, index) => {
            if (uiElements.cardFrontWords[index]) {
                // Extract text for the current language, fallback to 'en' or '???'
                const wordText = wordObj?.text?.[currentLang] || wordObj?.text?.['en'] || '???';
                uiElements.cardFrontWords[index].textContent = wordText;

                // Ensure data-color attribute is set (based on the object's colorType)
                if(uiElements.cardFrontItems[index] && wordObj?.colorType) {
                    uiElements.cardFrontItems[index].dataset.color = wordObj.colorType;
                }
            }
        });

        // Update Back Face based on current language
        cardWordObjects.back.forEach((wordObj, index) => {
            if (uiElements.cardBackWords[index]) {
                // Extract text for the current language, fallback to 'en' or '???'
                const wordText = wordObj?.text?.[currentLang] || wordObj?.text?.['en'] || '???';
                uiElements.cardBackWords[index].textContent = wordText;

                // Ensure data-color attribute is set
                if(uiElements.cardBackItems[index] && wordObj?.colorType) {
                    uiElements.cardBackItems[index].dataset.color = wordObj.colorType;
                }
            }
        });

        uiElements.cardFlipper.style.display = 'block'; // Show flipper
        uiElements.cardPlaceholder.style.display = 'none'; // Hide placeholder

    } else {
        // No card data, show placeholder
        console.log("No card data provided, showing placeholder.");
        uiElements.cardFlipper.style.display = 'none';
        uiElements.cardPlaceholder.textContent = getUIText('cardPlaceholder');
        uiElements.cardPlaceholder.style.display = 'block';
    }
    // Don't reset flip here - keep the current flip state when just translating
    // resetCardFlip();
}

// --- NEW Function to Flip Card ---
function flipCard() {
    uiElements.cardFlipper.classList.toggle('is-flipped');
    console.log("Card flipped. Is flipped:", uiElements.cardFlipper.classList.contains('is-flipped'));
}

// --- NEW Function to Reset Flip ---
function resetCardFlip() {
    uiElements.cardFlipper.classList.remove('is-flipped');
}

function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function updateTimerDisplay(seconds) {
    uiElements.timerDisplay.textContent = formatTime(seconds);
    uiElements.timerDisplay.classList.remove('timer-alert'); // Remove alert class if present
}

function updateDiceDisplay(standardResult, challengeSymbol) { // Changed second param
    [uiElements.standardDice, uiElements.challengeDice].forEach(dice => {
        dice.classList.add('dice-rolling');
        dice.onanimationend = () => {
            dice.classList.remove('dice-rolling');
            dice.onanimationend = null;
        };
    });

    setTimeout(() => {
        uiElements.standardDice.textContent = standardResult ?? '?';
        uiElements.challengeDice.textContent = challengeSymbol ?? '?'; // Display the symbol
    }, 100);
}

function updateChallengeDescription(text) {
    if (uiElements.challengeDescription) {
        uiElements.challengeDescription.textContent = text || ''; // Set text or clear
    }
}

function playSound(soundId) {
    const soundElement = document.getElementById(soundId);
    if (soundElement) {
        soundElement.currentTime = 0; // Rewind to start
        soundElement.play().catch(error => console.warn(`Audio play failed for ${soundId}:`, error));
    } else {
        console.warn(`Sound element not found: ${soundId}`);
    }
}

/**
 * Stops the audio playback for the element with the given ID and rewinds it.
 * @param {string} soundId The ID of the <audio> element to stop.
 */
function stopSound(soundId) {
    const soundElement = document.getElementById(soundId);

    // Check if the element exists and has the 'pause' method (confirming it's likely audio/video)
    if (soundElement && typeof soundElement.pause === 'function') {
        try {
            // Only try to pause if it's not already paused
            if (!soundElement.paused) {
                soundElement.pause();
            }
            soundElement.currentTime = 0; // Rewind to the beginning
            console.log(`Sound stopped and rewound: ${soundId}`);
        } catch (error) {
            console.error(`Error stopping/rewinding sound ${soundId}:`, error);
        }
    } else {
        // You might not always want a warning if you try to stop a sound that doesn't exist or isn't playing
        // console.warn(`Attempted to stop non-existent or non-audio element: ${soundId}`);
    }
}
function toggleModal(show) {
    uiElements.editModal.style.display = show ? 'block' : 'none';
}

function updateUILanguage() {
    const lang = gameData.settings.currentLanguage;
    const dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.documentElement.lang = lang;
    document.documentElement.dir = dir;

    // Update button texts etc.
    uiElements.startTimerBtn.textContent = getUIText('startGame');
    uiElements.changeCardBtn.textContent = getUIText('changeCard');
    uiElements.editDataBtn.textContent = getUIText('editData');
    uiElements.rollDiceBtn.textContent = getUIText('rollDice');
    uiElements.editModalTitle.textContent = getUIText('editModalTitle');
    uiElements.gameTitle.textContent = getUIText('gameTitle');
    uiElements.cardFrontTitle.textContent = getUIText('cardFrontTitle');
    uiElements.cardBackTitle.textContent = getUIText('cardBackTitle');
    // Update placeholder if no card is currently shown
    if (uiElements.cardPlaceholder.style.display !== 'none') {
         uiElements.cardPlaceholder.textContent = getUIText('cardPlaceholder');
    }

     // Update language switcher selection
    if(uiElements.languageSwitcher) uiElements.languageSwitcher.value = lang;

    console.log(`UI language updated to ${lang} (${dir})`);
}

function showTimerEndAlert() {
    playSound('timer-end-sound');
    stopSound('timer-tick-sound');
    uiElements.timerDisplay.classList.add('timer-alert');
    // Optionally show a brief message
    // alert(getUIText('timesUp'));
}

// Initial setup for elements that need text from data
function initializeUI() {
    updateUILanguage();
    updateTimerDisplay(60);
    updateDiceDisplay('?', '?'); // Initial dice state
    updateCardFaces(null);
    uiElements.cardFlipper.style.height = uiElements.cardFlipper.style.minHeight || '0px';
    updateChallengeDescription(''); // Clear challenge description initially
}

// --- Generate HTML for Language Inputs ---
function generateLanguageInputs(baseId, values = {}) {
    let inputsHTML = '';
    const languages = gameData.settings?.availableLanguages || ['ar', 'en']; // Fallback
    languages.forEach(lang => {
        const value = values[lang] || '';
        inputsHTML += `
            <label for="${baseId}-${lang}">${lang.toUpperCase()}:</label>
            <input type="text" id="${baseId}-${lang}" data-lang="${lang}" value="${value}" required placeholder="Text in ${lang}">
        `;
    });
    return `<div class="language-inputs">${inputsHTML}</div>`;
}

// --- Generate HTML for Color Select ---
function generateColorSelect(baseId, selectedValue = '') {
    let optionsHTML = '<option value="">-- Select Color --</option>';
    for (const [key, value] of Object.entries(COLOR_TYPES)) {
        const selected = value === selectedValue ? 'selected' : '';
        // Use key (e.g., YELLOW) for display, value (e.g., 'yellow') for the option value
        optionsHTML += `<option value="${value}" ${selected}>${key}</option>`;
    }
    return `
        <label for="${baseId}-color">Color Type:</label>
        <select id="${baseId}-color" required>
            ${optionsHTML}
        </select>
     `;
}

// --- Populate Edit Modal ---
function populateEditModal() {
    if (!gameData || !gameData.categories) {
        uiElements.modalFormContent.innerHTML = '<p>Error: Game data not loaded.</p>';
        return;
    }

    const lang = gameData.settings.currentLanguage;
    let modalHTML = '';

    // --- Add New Category Form ---
    modalHTML += `
        <div class="modal-section add-category-section">
            <h4>Add New Category</h4>
            <form id="add-category-form">
                ${generateLanguageInputs('add-cat-name')}
                ${generateColorSelect('add-cat-color')}
                <button type="submit" data-action="add-category-submit">Add Category</button>
            </form>
        </div>
        <hr>
    `;

    // --- List Existing Categories ---
    gameData.categories.forEach(category => {
        const categoryName = category.name[lang] || category.name['en'] || '???';

        modalHTML += `
            <div class="modal-section category-section" data-category-id="${category.id}">
                <div class="category-header">
                    <h5 style="border-left: 5px solid var(--color-${category.colorType}, #ccc); padding-left: 8px;">
                        ${categoryName} (${category.colorType})
                    </h5>
                    <div class="category-actions">
                        <button data-action="edit-category-start" data-category-id="${category.id}">Edit</button>
                        <button data-action="delete-category" data-category-id="${category.id}" class="danger-btn">Delete</button>
                    </div>
                </div>

                <!-- Placeholder for Edit Category Form -->
                <div class="edit-category-form-container" style="display: none;"></div>

                <ul class="word-list">`;

        // --- List Words within Category ---
        if (category.words && category.words.length > 0) {
            category.words.forEach(word => {
                const wordText = word.text[lang] || word.text['en'] || '???';
                modalHTML += `
                    <li class="word-item" data-word-id="${word.id}" data-category-id="${category.id}">
                        <span>${wordText} (AllPlay: ${word.allPlay ? 'Yes' : 'No'}, Diff: ${word.difficulty})</span>
                        <div class="word-actions">
                            <button data-action="edit-word-start" data-word-id="${word.id}" data-category-id="${category.id}">Edit</button>
                            <button data-action="delete-word" data-word-id="${word.id}" data-category-id="${category.id}" class="danger-btn">Delete</button>
                        </div>
                         <!-- Placeholder for Edit Word Form -->
                        <div class="edit-word-form-container" style="display: none;"></div>
                    </li>`;
            });
        } else {
            modalHTML += '<li>No words in this category yet.</li>';
        }
        modalHTML += `</ul>`;

        // --- Add New Word Form (within Category) ---
        modalHTML += `
                <div class="add-word-section">
                    <details>
                        <summary>Add New Word to "${categoryName}"</summary>
                        <form class="add-word-form">
                            ${generateLanguageInputs(`add-word-${category.id}-text`)}
                            <label>
                                <input type="checkbox" class="add-word-allplay"> All Play
                            </label>
                            <label>
                                Difficulty: <input type="number" class="add-word-difficulty" value="1" min="1" max="5">
                            </label>
                            <input type="hidden" class="add-word-category-id" value="${category.id}">
                            <button type="submit" data-action="add-word-submit" data-category-id="${category.id}">Add Word</button>
                        </form>
                    </details>
                </div>`;

        modalHTML += `</div> <hr>`; // End category-section
    });

    uiElements.modalFormContent.innerHTML = modalHTML;

    // Add some basic styling for the modal content if needed in style.css
    // e.g., .modal-section, .category-header, .word-list, .word-item, etc.
}


// Add this helper if you need to show edit forms inline
function showEditCategoryForm(categoryId) {
    const category = findCategoryById(categoryId); // Use data.js helper
    const container = document.querySelector(`.category-section[data-category-id="${categoryId}"] .edit-category-form-container`);
    const header = document.querySelector(`.category-section[data-category-id="${categoryId}"] .category-header`);

    if (!category || !container || !header) return;

    const formHTML = `
        <form class="edit-category-form">
            <h6>Editing Category: ${category.name[gameData.settings.currentLanguage] || ''}</h6>
            ${generateLanguageInputs(`edit-cat-${categoryId}-name`, category.name)}
            ${generateColorSelect(`edit-cat-${categoryId}-color`, category.colorType)}
            <button type="submit" data-action="edit-category-save" data-category-id="${categoryId}">Save Changes</button>
            <button type="button" data-action="edit-category-cancel" data-category-id="${categoryId}">Cancel</button>
        </form>
    `;
    container.innerHTML = formHTML;
    container.style.display = 'block';
    header.style.display = 'none'; // Hide header while editing
}

function hideEditCategoryForm(categoryId) {
    const container = document.querySelector(`.category-section[data-category-id="${categoryId}"] .edit-category-form-container`);
    const header = document.querySelector(`.category-section[data-category-id="${categoryId}"] .category-header`);
    if (container) {
        container.style.display = 'none';
        container.innerHTML = ''; // Clear form
    }
    if(header) {
        header.style.display = ''; // Show header again
    }
}

function showEditWordForm(categoryId, wordId) {
    const category = findCategoryById(categoryId);
    const word = findWordById(category, wordId);
    const container = document.querySelector(`.word-item[data-word-id="${wordId}"] .edit-word-form-container`);
    const wordDisplay = document.querySelector(`.word-item[data-word-id="${wordId}"] > span`); // The text part
    const wordActions = document.querySelector(`.word-item[data-word-id="${wordId}"] > .word-actions`); // The button part

    if (!word || !container || !wordDisplay || !wordActions) return;

    const formHTML = `
        <form class="edit-word-form">
            <h6>Editing Word</h6>
             ${generateLanguageInputs(`edit-word-${wordId}-text`, word.text)}
             <label>
                 <input type="checkbox" class="edit-word-allplay" ${word.allPlay ? 'checked' : ''}> All Play
             </label>
             <label>
                 Difficulty: <input type="number" class="edit-word-difficulty" value="${word.difficulty}" min="1" max="5">
             </label>
             <button type="submit" data-action="edit-word-save" data-word-id="${wordId}" data-category-id="${categoryId}">Save Changes</button>
             <button type="button" data-action="edit-word-cancel" data-word-id="${wordId}" data-category-id="${categoryId}">Cancel</button>
         </form>
    `;
    container.innerHTML = formHTML;
    container.style.display = 'block';
    wordDisplay.style.display = 'none'; // Hide static text
    wordActions.style.display = 'none'; // Hide action buttons
}

function hideEditWordForm(categoryId, wordId) {
    const container = document.querySelector(`.word-item[data-word-id="${wordId}"] .edit-word-form-container`);
    const wordDisplay = document.querySelector(`.word-item[data-word-id="${wordId}"] > span`);
    const wordActions = document.querySelector(`.word-item[data-word-id="${wordId}"] > .word-actions`);

    if (container) {
        container.style.display = 'none';
        container.innerHTML = '';
    }
    if (wordDisplay) wordDisplay.style.display = '';
    if (wordActions) wordActions.style.display = '';
}