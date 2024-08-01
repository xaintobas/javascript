'use strict';
//////////////////////////////////
// JavaScript DOM Manipulation

// Generate random number from 1 - 20
let randomNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = randomNumber; 

// Score
let score = 20;
let highScore = 0;

// Event Handling for the button click - Get user input - Guess number 
document.querySelector('.check').addEventListener('click', function(){
  const guessNumber = Number(document.querySelector('.guess').value);

  // Compare guess number to the random number
  if (!guessNumber) {
    document.querySelector('.message').textContent = 'Please enter a number';
  } else if (guessNumber === randomNumber) {
    document.querySelector('.number').style.width = '30rem'; 
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.message').textContent = 'You guessed it right!';
    document.querySelector('.number').textContent = randomNumber;
    
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

  } else if(guessNumber !== randomNumber) {
    
  } else if (guessNumber > randomNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'Your guess was too high!';
    } else {
      document.querySelector('.message').textContent = 'Your lost the game!';
      document.querySelector('.score').textContent = score;
    }
  } else if (guessNumber < randomNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'Your guess was too low!';
    } else {
      document.querySelector('.message').textContent = 'Your lost the game!';
      document.querySelector('.score').textContent = score;
    }
  }
})

document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem'; 
  
})



// Compare guess number to the random number
// if (!guessNumber) {
//   document.querySelector('.message').textContent = 'Please enter a number';
// } else if (guessNumber === randomNumber) {
//   document.querySelector('.number').style.width = '30rem'; 
//   document.querySelector('body').style.backgroundColor = 'green';
//   document.querySelector('.message').textContent = 'You guessed it right!';
//   document.querySelector('.number').textContent = randomNumber;
  
//   if (score > highScore) {
//     highScore = score;
//     document.querySelector('.highscore').textContent = highScore;
//   }

// } else if (guessNumber > randomNumber) {
//   if (score > 1) {
//     score--;
//     document.querySelector('.score').textContent = score;
//     document.querySelector('.message').textContent = 'Your guess was too high!';
//   } else {
//     document.querySelector('.message').textContent = 'Your lost the game!';
//     document.querySelector('.score').textContent = score;
//   }
// } else if (guessNumber < randomNumber) {
//   if (score > 1) {
//     score--;
//     document.querySelector('.score').textContent = score;
//     document.querySelector('.message').textContent = 'Your guess was too low!';
//   } else {
//     document.querySelector('.message').textContent = 'Your lost the game!';
//     document.querySelector('.score').textContent = score;
//   }
// }