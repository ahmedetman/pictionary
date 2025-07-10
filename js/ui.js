// js/ui.js

const uiElements = {
    cardContainer: document.querySelector('.card-container'),
    cardFlipper: document.getElementById('card-flipper'),
    cardFrontWords: document.querySelectorAll('.card-front .card-word-item .word-text'),
    cardBackWords: document.querySelectorAll('.card-back .card-word-item .word-text'),
    cardFrontItems: document.querySelectorAll('.card-front .card-word-item'),
    cardBackItems: document.querySelectorAll('.card-back .card-word-item'),
    flipCorners: document.querySelectorAll('.flip-corner'),
    cardPlaceholder: document.getElementById('card-placeholder'),
    gameContainer: document.querySelector('.game-container'),
    timerDisplay: document.getElementById('timer-display'),
    standardDice: document.getElementById('standard-dice'),
    challengeDice: document.getElementById('challenge-dice'),
    challengeDiceContainer: document.querySelector('.challenge-dice-container'),
    challengeDiceToggle: document.getElementById('challenge-dice-toggle'),
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
    colorSelection: document.getElementById('color-selection'),
    selectedColorIndicator: document.getElementById('selected-color-indicator'),
};

function updateCardFaces(cardWordObjects) {
    const currentLang = gameData.settings?.currentLanguage || 'ar';

    if (cardWordObjects && cardWordObjects.front && cardWordObjects.back) {
        console.log(`Updating card faces for language: ${currentLang}`);

        // Update Front Face
        cardWordObjects.front.forEach((wordObj, index) => {
            if (uiElements.cardFrontWords[index]) {
                const wordText = wordObj?.text?.[currentLang] || wordObj?.text?.['en'] || '???';
                uiElements.cardFrontWords[index].textContent = wordText;

                if(uiElements.cardFrontItems[index] && wordObj?.colorType) {
                    uiElements.cardFrontItems[index].dataset.color = wordObj.colorType;
                }
            }
        });

        // Update Back Face
        cardWordObjects.back.forEach((wordObj, index) => {
            if (uiElements.cardBackWords[index]) {
                const wordText = wordObj?.text?.[currentLang] || wordObj?.text?.['en'] || '???';
                uiElements.cardBackWords[index].textContent = wordText;

                if(uiElements.cardBackItems[index] && wordObj?.colorType) {
                    uiElements.cardBackItems[index].dataset.color = wordObj.colorType;
                }
            }
        });

        uiElements.cardFlipper.style.display = 'block';
        uiElements.cardPlaceholder.style.display = 'none';

    } else {
        console.log("No card data provided, showing placeholder.");
        uiElements.cardFlipper.style.display = 'none';
        uiElements.cardPlaceholder.textContent = getUIText('cardPlaceholder');
        uiElements.cardPlaceholder.style.display = 'block';
    }
}

function flipCard() {
    uiElements.cardFlipper.classList.toggle('is-flipped');
    console.log("Card flipped. Is flipped:", uiElements.cardFlipper.classList.contains('is-flipped'));
}

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
    uiElements.timerDisplay.classList.remove('timer-alert');
}

function updateDiceDisplay(standardResult, challengeSymbol) {
    [uiElements.standardDice, uiElements.challengeDice].forEach(dice => {
        if (dice) {
            dice.classList.add('dice-rolling');
            dice.onanimationend = () => {
                dice.classList.remove('dice-rolling');
                dice.onanimationend = null;
            };
        }
    });

    setTimeout(() => {
        uiElements.standardDice.textContent = standardResult ?? '?';
        if (uiElements.challengeDice) {
            uiElements.challengeDice.textContent = challengeSymbol ?? '?';
        }
    }, 100);
}

function updateChallengeDescription(text) {
    if (uiElements.challengeDescription) {
        uiElements.challengeDescription.textContent = text || '';
    }
}

function updateColorSelection(selectedColor) {
    if (!uiElements.colorSelection || !uiElements.selectedColorIndicator) {
        return;
    }

    if (selectedColor) {
        // Show the color selection area
        uiElements.colorSelection.style.display = 'block';
        
        // Update the indicator
        const colorNames = {
            yellow: { ar: 'أصفر', en: 'Yellow' },
            blue: { ar: 'أزرق', en: 'Blue' },
            orange: { ar: 'برتقالي', en: 'Orange' },
            red: { ar: 'أحمر', en: 'Red' },
            green: { ar: 'أخضر', en: 'Green' }
        };

        const lang = gameData.settings?.currentLanguage || 'ar';
        const colorName = colorNames[selectedColor]?.[lang] || selectedColor;
        
        uiElements.selectedColorIndicator.textContent = colorName;
        uiElements.selectedColorIndicator.className = `selected-color-indicator card-word-item`;
        uiElements.selectedColorIndicator.dataset.color = selectedColor;
    } else {
        // Hide the color selection area
        uiElements.colorSelection.style.display = 'none';
    }
}

function updateChallengeDiceVisibility() {
    if (uiElements.challengeDiceContainer) {
        if (challengeDiceEnabled) {
            uiElements.challengeDiceContainer.style.opacity = '1';
            uiElements.challengeDiceContainer.style.pointerEvents = 'auto';
        } else {
            uiElements.challengeDiceContainer.style.opacity = '0.5';
            uiElements.challengeDiceContainer.style.pointerEvents = 'none';
        }
    }
}

function playSound(soundId) {
    const soundElement = document.getElementById(soundId);
    if (soundElement) {
        soundElement.currentTime = 0;
        soundElement.play().catch(error => console.warn(`Audio play failed for ${soundId}:`, error));
    } else {
        console.warn(`Sound element not found: ${soundId}`);
    }
}

function stopSound(soundId) {
    const soundElement = document.getElementById(soundId);

    if (soundElement && typeof soundElement.pause === 'function') {
        try {
            if (!soundElement.paused) {
                soundElement.pause();
            }
            soundElement.currentTime = 0;
            console.log(`Sound stopped and rewound: ${soundId}`);
        } catch (error) {
            console.error(`Error stopping/rewinding sound ${soundId}:`, error);
        }
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

    // Update button texts
    uiElements.startTimerBtn.textContent = getUIText('startGame');
    uiElements.changeCardBtn.textContent = getUIText('changeCard');
    uiElements.editDataBtn.textContent = getUIText('editData');
    uiElements.rollDiceBtn.textContent = getUIText('rollDice');
    uiElements.editModalTitle.textContent = getUIText('editModalTitle');
    uiElements.gameTitle.textContent = getUIText('gameTitle');
    uiElements.cardFrontTitle.textContent = getUIText('cardFrontTitle');
    uiElements.cardBackTitle.textContent = getUIText('cardBackTitle');
    
    // Update color selection title
    if (uiElements.colorSelection) {
        const colorTitle = uiElements.colorSelection.querySelector('h4');
        if (colorTitle) {
            colorTitle.textContent = getUIText('selectedColor') || (lang === 'ar' ? 'اللون المحدد:' : 'Selected Color:');
        }
    }
    
    // Update challenge toggle label
    const challengeToggleLabel = document.querySelector('.challenge-toggle label');
    if (challengeToggleLabel) {
        challengeToggleLabel.textContent = getUIText('challengeDice') || (lang === 'ar' ? 'تحدي النرد' : 'Challenge Dice');
    }

    if (uiElements.cardPlaceholder.style.display !== 'none') {
         uiElements.cardPlaceholder.textContent = getUIText('cardPlaceholder');
    }

    if(uiElements.languageSwitcher) uiElements.languageSwitcher.value = lang;

    console.log(`UI language updated to ${lang} (${dir})`);
}

function showTimerEndAlert() {
    playSound('timer-end-sound');
    stopSound('timer-tick-sound');
    uiElements.timerDisplay.classList.add('timer-alert');
}

function initializeUI() {
    updateUILanguage();
    updateTimerDisplay(60);
    updateDiceDisplay('?', '?');
    updateCardFaces(null);
    updateColorSelection(null);
    updateChallengeDiceVisibility();
    uiElements.cardFlipper.style.height = uiElements.cardFlipper.style.minHeight || '0px';
    updateChallengeDescription('');
}

// Generate HTML for Language Inputs
function generateLanguageInputs(baseId, values = {}) {
    let inputsHTML = '';
    const languages = gameData.settings?.availableLanguages || ['ar', 'en'];
    languages.forEach(lang => {
        const value = values[lang] || '';
        inputsHTML += `
            <label for="${baseId}-${lang}">${lang.toUpperCase()}:</label>
            <input type="text" id="${baseId}-${lang}" data-lang="${lang}" value="${value}" required placeholder="Text in ${lang}">
        `;
    });
    return `<div class="language-inputs">${inputsHTML}</div>`;
}

// Generate HTML for Color Select
function generateColorSelect(baseId, selectedValue = '') {
    let optionsHTML = '<option value="">-- Select Color --</option>';
    for (const [key, value] of Object.entries(COLOR_TYPES)) {
        const selected = value === selectedValue ? 'selected' : '';
        optionsHTML += `<option value="${value}" ${selected}>${key}</option>`;
    }
    return `
        <label for="${baseId}-color">Color Type:</label>
        <select id="${baseId}-color" required>
            ${optionsHTML}
        </select>
     `;
}

// Populate Edit Modal
function populateEditModal() {
    if (!gameData || !gameData.categories) {
        uiElements.modalFormContent.innerHTML = '<p>Error: Game data not loaded.</p>';
        return;
    }

    const lang = gameData.settings.currentLanguage;
    let modalHTML = '';

    // Add New Category Form
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

    // List Existing Categories
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

                <div class="edit-category-form-container" style="display: none;"></div>

                <ul class="word-list">`;

        // List Words within Category
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
                         <div class="edit-word-form-container" style="display: none;"></div>
                    </li>`;
            });
        } else {
            modalHTML += '<li>No words in this category yet.</li>';
        }
        modalHTML += `</ul>`;

        // Add New Word Form
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

        modalHTML += `</div> <hr>`;
    });

    uiElements.modalFormContent.innerHTML = modalHTML;
}

function showEditCategoryForm(categoryId) {
    const category = findCategoryById(categoryId);
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
    header.style.display = 'none';
}

function hideEditCategoryForm(categoryId) {
    const container = document.querySelector(`.category-section[data-category-id="${categoryId}"] .edit-category-form-container`);
    const header = document.querySelector(`.category-section[data-category-id="${categoryId}"] .category-header`);
    if (container) {
        container.style.display = 'none';
        container.innerHTML = '';
    }
    if(header) {
        header.style.display = '';
    }
}

function showEditWordForm(categoryId, wordId) {
    const category = findCategoryById(categoryId);
    const word = findWordById(category, wordId);
    const container = document.querySelector(`.word-item[data-word-id="${wordId}"] .edit-word-form-container`);
    const wordDisplay = document.querySelector(`.word-item[data-word-id="${wordId}"] > span`);
    const wordActions = document.querySelector(`.word-item[data-word-id="${wordId}"] > .word-actions`);

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
    wordDisplay.style.display = 'none';
    wordActions.style.display = 'none';
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