'use strict';

// Selecting HTML elements
const score0El = document.getElementById('score--0');
const score1El =  document.getElementById('score--1');
const diceEl = document.querySelector('.dice')
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const player0El =  document.querySelector('.player--0');
const player1El =  document.querySelector('.player--1');

// Default start for the game
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0

// Rolling dice functionality

btnRollDice.addEventListener('click', function() {
  // 1. Genate a random dice roll
  const dice =  Math.trunc(Math.random() * 6) + 1;

  // 2. Display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. Check for a rolled 1. If true, switch to next player
  if (dice !== 1){
    // Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    // Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
})


btnHold.addEventListener('click', function() {
  // Add current score to active player's score

  // Check score is >= 100
  // Finish the game

  // Switch to next player
})










