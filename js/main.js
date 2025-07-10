// js/main.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded.");

    loadData();
    initGame();
    initializeUI(); // Calls the updated UI init

    console.log("Setting up event listeners...");

    // --- Standard Controls ---
    uiElements.startTimerBtn.addEventListener('click', startGameTimer);
    uiElements.changeCardBtn.addEventListener('click', changeCard);
    uiElements.rollDiceBtn.addEventListener('click', rollDice);
    
    // --- Challenge Dice Toggle ---
    if (uiElements.challengeDiceToggle) {
        uiElements.challengeDiceToggle.addEventListener('change', toggleChallengeDice);
    }

    // --- Modal Controls (remain the same) ---
    uiElements.editDataBtn.addEventListener('click', () => {
        populateEditModal();
        toggleModal(true);
    });
    uiElements.modalCloseBtn.addEventListener('click', () => {
        toggleModal(false);
    });
    uiElements.editModal.addEventListener('click', (event) => {
        if (event.target === uiElements.editModal) {
            toggleModal(false);
        }
    });

    // --- Language Switcher (remains largely the same) ---
    uiElements.languageSwitcher.addEventListener('change', (event) => {
        const selectedLang = event.target.value;
        if (setLanguage(selectedLang)) { // Update language setting in data.js
            updateUILanguage(); // Update buttons, static text

            // Update placeholder text if visible (no card drawn yet)
            if (uiElements.cardPlaceholder.style.display !== 'none') {
                uiElements.cardPlaceholder.textContent = getUIText('cardPlaceholder');
            }

            // --- Instead of drawing a new card, re-render the existing one ---
            if (currentGameCardWordObjects) { // Check if a card is currently displayed
                console.log("Language switched, re-rendering current card faces.");
                updateCardFaces(currentGameCardWordObjects); // Tell UI to update with stored objects
            } else {
                console.log("Language switched, but no card is currently displayed.");
            }
            // --- Removed: drawNextCard(); ---

            // Update modal if open
            if (uiElements.editModal.style.display === 'block') {
                populateEditModal();
            }
        }
    });

    // --- NEW: Flip Card Listeners ---
    uiElements.flipCorners.forEach(corner => {
        corner.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent potential parent clicks
            flipCard(); // Call the UI function to flip
        });
    });


    // --- NEW: Listener for Actions Inside the Modal ---
    uiElements.modalFormContent.addEventListener('click', (event) => {
        const target = event.target;
        const action = target.dataset.action;

        if (!action) return; // Not an action button/element

        const categoryId = target.dataset.categoryId || target.closest('[data-category-id]')?.dataset.categoryId;
        const wordId = target.dataset.wordId || target.closest('[data-word-id]')?.dataset.wordId;

        // --- Category Actions ---
        if (action === 'delete-category') {
            if (confirm(`Are you sure you want to delete category ${categoryId}? This will delete all its words.`)) {
                if (removeCategory(categoryId)) { // Call data.js function
                    populateEditModal(); // Refresh modal content
                }
            }
        } else if (action === 'edit-category-start') {
            hideEditWordForm(categoryId, null); // Hide any open word edit forms in this category
            hideEditCategoryForm(null); // Hide any other open category edit forms
            showEditCategoryForm(categoryId); // Show the edit form for this category
        } else if (action === 'edit-category-cancel') {
            hideEditCategoryForm(categoryId);
        }

        // --- Word Actions ---
        else if (action === 'delete-word') {
            if (confirm(`Are you sure you want to delete word ${wordId} from category ${categoryId}?`)) {
                if (removeWord(categoryId, wordId)) { // Call data.js function
                    populateEditModal(); // Refresh modal
                }
            }
        } else if (action === 'edit-word-start') {
            hideEditWordForm(categoryId, null); // Hide any other open word edit forms
            hideEditCategoryForm(categoryId); // Hide category edit form if open
            showEditWordForm(categoryId, wordId); // Show edit form for this word
        } else if (action === 'edit-word-cancel') {
            hideEditWordForm(categoryId, wordId);
        }
    });

    // --- Listener for Form Submissions Inside the Modal ---
    uiElements.modalFormContent.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default browser submission
        const form = event.target;
        const action = form.querySelector('[data-action]')?.dataset.action || event.submitter?.dataset.action; // Get action from button

        if (!action) return;

        const categoryId = form.querySelector('[data-category-id]')?.dataset.categoryId || event.submitter?.dataset.categoryId;
        const wordId = form.querySelector('[data-word-id]')?.dataset.wordId || event.submitter?.dataset.wordId;


        // --- Add Category Submission ---
        if (action === 'add-category-submit') {
            const nameObject = {};
            form.querySelectorAll('.language-inputs input[data-lang]').forEach(input => {
                nameObject[input.dataset.lang] = input.value.trim();
            });
            const colorType = form.querySelector('select').value;
            if (addCategory(nameObject, colorType)) {
                populateEditModal(); // Refresh on success
            }
        }
        // --- Save Edited Category ---
        else if (action === 'edit-category-save') {
            const nameObject = {};
            form.querySelectorAll('.language-inputs input[data-lang]').forEach(input => {
                nameObject[input.dataset.lang] = input.value.trim();
            });
            const colorType = form.querySelector('select').value;
            const catIdToEdit = event.submitter.dataset.categoryId; // Get ID from button
            if (editCategory(catIdToEdit, nameObject, colorType)) {
                populateEditModal(); // Refresh on success
            }
        }
        // --- Add Word Submission ---
        else if (action === 'add-word-submit') {
            const textObject = {};
            form.querySelectorAll('.language-inputs input[data-lang]').forEach(input => {
                textObject[input.dataset.lang] = input.value.trim();
            });
            const allPlay = form.querySelector('.add-word-allplay').checked;
            const difficulty = form.querySelector('.add-word-difficulty').value;
            const catIdForWord = form.querySelector('.add-word-category-id').value; // Get category ID from hidden input or button data

            if (addWord(catIdForWord, textObject, allPlay, difficulty)) {
                populateEditModal(); // Refresh on success (will collapse the <details>)
            }
        }
        // --- Save Edited Word ---
        else if (action === 'edit-word-save') {
            const textObject = {};
            form.querySelectorAll('.language-inputs input[data-lang]').forEach(input => {
                textObject[input.dataset.lang] = input.value.trim();
            });
            const allPlay = form.querySelector('.edit-word-allplay').checked;
            const difficulty = form.querySelector('.edit-word-difficulty').value;
            const wordIdToEdit = event.submitter.dataset.wordId;
            const catIdForWord = event.submitter.dataset.categoryId;

            if (editWord(catIdForWord, wordIdToEdit, textObject, allPlay, difficulty)) {
                populateEditModal(); // Refresh on success
            }
        }

    });


    console.log("Application ready.");
});