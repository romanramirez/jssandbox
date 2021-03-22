'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsShowModal = document.querySelectorAll('.show-modal');

// Open modal window function
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Closes modal window function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//On clicking, opens modal window
for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', openModal);
}

// On clicking, close modal window.
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

////////////// Keyboard Events ///////////////
// Keyboard events are usually global events

// Here we are adding an event listener for the event 'keydown'
// We are also assigning an arbitrary value to the function ('e').
// We are then using e.key to pull the key property out of the event object.
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // We only want to execute the closeModal function if the modal is visible
    // We can use the if statement to check if the modal window is open.
    // We do this with this if statement that checks whether or not the 'hidden' class is contained in the modal class list.
    // Here we actually do need to run this function
    closeModal();
  }
});
