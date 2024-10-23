let logInToggle = document.getElementById('login-btn');
let signInToggle = document.getElementById('reg-btn');
let highlight = document.getElementById('highlight');
let login = document.getElementById('login');
let reigster = document.getElementById('reigster');

logInToggle.addEventListener('click', () => {
  highlight.style.left = '0px';
  reigster.style.left = '40rem';
  login.style.left = '3rem';
});

signInToggle.addEventListener('click', () => {
  highlight.style.left = '12.5rem';
  login.style.left = '-60rem';
  reigster.style.left = '3rem';
});






