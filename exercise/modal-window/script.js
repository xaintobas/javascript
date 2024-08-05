'use strict';

// Getting the HTML Elements
const modal = document.querySelector('.modal');
const overlay =  document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

// Function to Open Modal
const openModal = function() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

// Function to Close Modal
const closeModal =  function() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

// Loop through all 3 buttons  
for (let i = 0; i < btnShowModal.length; i++) {
  // Call the openModal function on Button click
  btnShowModal[i].addEventListener('click', openModal)
}

// Call the closeModal function on Button click
overlay.addEventListener('click', closeModal);
btnCloseModal.addEventListener('click', closeModal)

