const btnCreateNote = document.getElementById('create-note');
const noteContainer = document.querySelector('.note-container');
let noteBod = document.querySelectorAll('.note-body');
let themeIcon = document.getElementById('theme-icon')

let now = new Date();
let dates = now.toLocaleDateString('en-us', {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

let timer = now.toLocaleTimeString('en-us', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
})

let fullDate = `${dates}, ${timer}`;

function showNotes(){
  noteContainer.innerHTML = localStorage.getItem('notes');
}

showNotes();

function saveNotes() {
  localStorage.setItem('notes', noteContainer.innerHTML);
}

btnCreateNote.addEventListener('click', function(){
  let noteItem = document.createElement('div');
  let noteDate = document.createElement('span');
  let noteBody = document.createElement('div');
  let deleteIcon = document.createElement('img');

  noteItem.className = 'note-item';
  noteDate.className = 'date-time';
  noteBody.className = 'note-body';
  deleteIcon.className = 'delete-icon';

  noteBody.setAttribute('contenteditable', 'true');
  deleteIcon.src = 'img/delete.png';

  noteDate.innerHTML = fullDate;

  noteContainer.appendChild(noteItem);
  noteItem.appendChild(noteDate);
  noteItem.appendChild(noteBody);
  noteItem.appendChild(deleteIcon);
  saveNotes();
}); 

noteContainer.addEventListener('click', (e) => {
  if(e.target.className === 'delete-icon'){
    e.target.parentElement.remove();
    saveNotes();
  } else if(e.target.className === 'note-body') {
    noteBod = document.querySelectorAll('.note-body');
    noteBod.forEach(note => {
      note.onkeyup = () => {
        saveNotes(); 
      }
    })
  }
});

themeIcon.addEventListener('click', function(){
  document.body.classList.toggle('light-mode');
  if (document.body.classList.contains('light-mode')){
    themeIcon.src = 'img/moon.png';
  } else {
    themeIcon.src = 'img/sun.png';
  }
});
