'use strict';

// Getting the HTML Elements
const modal = document.querySelector('.modal');
const overlay =  document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

// Function for Open Modal
const openModal = function() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

// Function for Close Modal
const closeModal =  function() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

// Loop through all 3 buttons
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModal)
}


overlay.addEventListener('click', closeModal);
btnCloseModal.addEventListener('click', closeModal)

