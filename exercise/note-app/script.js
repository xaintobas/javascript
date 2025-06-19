'use-strict';

// const createNoteBtn = document.getElementById('create-note');
// const noteContainer = document.getElementById('note-container');
// let notes = document.querySelectorAll('.input-box');
// // let deleteNoteBtn = document.querySelectorAll('.btn-delete');

// function loadNotes() {
//   noteContainer.innerHTML = localStorage.getItem('ourNotes');
// }

// loadNotes();

// function saveNotes() {
//   localStorage.setItem('ourNotes', noteContainer.innerHTML);
// };

// createNoteBtn.addEventListener('click', () => {
//   let inputEl = document.createElement('p');
//   let imgEl = document.createElement('img');

//   inputEl.className = 'input-box';
//   inputEl.setAttribute('contenteditable', 'true');
//   imgEl.src = 'images/delete.png'

//   noteContainer.appendChild(inputEl).appendChild(imgEl);

// });

// noteContainer.addEventListener('click', (element) => {
//   if (element.target.tagName === 'IMG'){
//     element.target.parentElement.remove();
//     saveNotes();
//   }else if (element.target.tagName === 'P'){
//     notes = document.querySelectorAll('.input-box');
//     notes.forEach((note) => {
//       note.onkeyup = () => {
//         saveNotes();
//       }
//     })
//   }
// });


const createNoteBtn = document.getElementById('create-note');
const noteContainer = document.getElementById('note-container');
let notes = document.querySelectorAll('.input-box');

function showNotes() {
  noteContainer.innerHTML = localStorage.getItem('notes');
}
showNotes();
function updateNotes() {
  localStorage.setItem('notes', noteContainer.innerHTML);
}

createNoteBtn.addEventListener('click', () => {
  let inputEl = document.createElement('p');
  let imgEl = document.createElement('img');
  inputEl.className = 'input-box';
  inputEl.setAttribute('contenteditable', 'true');
  imgEl.src = 'images/delete.png';
  noteContainer.appendChild(inputEl).appendChild(imgEl);
});

noteContainer.addEventListener('click', (element) => {
  if (element.target.tagName === 'IMG'){
    element.target.parentElement.remove();
    updateNotes();
  } else if (element.target.tagName === 'P') {
    notes = document.querySelectorAll('.input-box');
    notes.forEach((note, index) => {
      note.onkeyup = () => {
        updateNotes();
      }
    });
  }
}); 





