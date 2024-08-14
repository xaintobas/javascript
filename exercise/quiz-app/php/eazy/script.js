'use strict';

// GET THE HTML ELEMENTS
const totalQuestionsEl = document.querySelector('.totalQuestions');
const questionEl = document.querySelector('.question');
let answersEl = document.querySelector('.options');
// const btnTestEl = document.querySelector('.btnTest');
const btnSubmitEl = document.querySelector('.btn-submit');
const btnNextEl = document.querySelector('.btn-next');
const labelEl = document.querySelector('.answer-option');
const resultEl = document.querySelector('.result');
const quizEl = document.querySelector('.quiz');
const quizScoreEl = document.querySelector('.yourScore');
const tickCorrectEl = document.querySelector('.tickCorrect');
const tickInCorrectEl = document.querySelector('.tickInCorrect');
const btnRestartQuizEl = document.querySelector('.btn-restart');

let currentQuestionIndex = 0;
let score = 0;

// CREATE THE LIST OF QUESTIONS
const quizQuestions = [
  {
    question: 'What does PHP stand for?',
    answers: [
      'A) Personal Home Page',
      'B) Private Home Page',
      'C) PHP: Hypertext Preprocessor',
      'D) Personal Hypertext Processor'
    ], 
    correctAnswer: 2
  },
  {
    question: 'Which symbol is used to concatenate strings in PHP?',
    answers: [
      'A) . (dot)',
      'B) + (plus)',
      'C) & (ampersand)',
      'D) % (percent)'
    ], 
    correctAnswer: 0
  },
  {
    question: 'Which of the following is a correct way to start a PHP block of code?',
    answers: [
      'A) < ?php ... ?>',
      'B) < php ... />',
      'C) < script> ... < /script>',
      'D) {php} ... {/php}'
    ], 
    correctAnswer: 0
  },
  {
    question: 'How do you create a variable in PHP?',
    answers: [
      'A) var $varName;',
      'B) $varName = value;',
      'C) var varName = value;',
      'D) dim $varName = value;'
    ], 
    correctAnswer: 1
  },
  {
    question: 'What is the correct way to end a PHP statement?',
    answers: [
      'A) . (dot)',
      'B) ; (semicolon)',
      'C) : (colon)',
      'D) , (comma)'
    ], 
    correctAnswer: 1
  },
];

const restartQuiz = function () {
  currentQuestionIndex = 0;
  score = 0;
  btnNextEl.textContent = 'Next Question';
  displayQuetions(currentQuestionIndex);
  quizEl.classList.remove('hidden'); 
  resultEl.classList.add('hidden'); 
  btnSubmitEl.classList.remove('hidden');
  btnNextEl.classList.add('hidden');
} 

// RESTART QUIZ
btnRestartQuizEl.addEventListener('click', restartQuiz)

// DISPLAY QUESTIONS
const displayQuetions = function (quizQuestionsIndex) {
  // GET THE QUESTIONS ANSWERED OF TOTAL QUESTIONS
  const totalQuestions = quizQuestions.length;
  const totalAnsweredQuestions = quizQuestionsIndex + 1;

  totalQuestionsEl.textContent = `Question ${totalAnsweredQuestions} of ${totalQuestions}`;
  
  // GET THE CURRENT QUESTION FROM THE ARRAY
  const currentQuestion = quizQuestions[quizQuestionsIndex].question;
  questionEl.textContent = currentQuestion;

  // CLEAR THE PREVIOUS OPTIONS
  answersEl.innerHTML = '';

  // LOOP THROUGH ALL THE ANSWER OPTIONS
  for(let i = 0; i < quizQuestions[quizQuestionsIndex].answers.length; i++) {
    let answersHTML = `
    <label for="option${i}" class="answer-option"> 

      <span><input id="option${i}" type="radio" name="option" value="${i}">${quizQuestions[quizQuestionsIndex].answers[i]}</span> 
      <span class="tickCorrect hidden"><img src="../../img/icon-correct.svg" alt=""></span>
      <span class="tickInCorrect hidden"><img src="../../img/icon-incorrect.svg" alt=""></span>
        
    </label>
    ` ;
    answersEl.innerHTML += answersHTML;     
  }
}

// FUNCTION TO CHECK FOR CORRECT ANSWER
const checkAnswer = function (quizQuestionsIndex) {
  // CHECK FOR SELECTED OPTION
  const selectedOption = document.querySelector('input[name="option"]:checked');

  // IF YOU DID NOT SELECT AN ANSWER
  if (!selectedOption) {
    alert('Please pick an option');
    return; 
  }

  const radioBtnLst =  document.querySelectorAll('input[name="option"]');
  const correctAnswer = quizQuestions[quizQuestionsIndex].correctAnswer;
  const selectedOptionLabel =  document.querySelector(`label[for="option${selectedOption.value}"]`);
  const correctAnswerLabel =  document.querySelector(`label[for="option${correctAnswer}"]`);

  console.log(selectedOption);
  
  // IF YOU HAVE SELECTED AN ANSWER
  if (selectedOption){
    // CHECK IF CORRECT ANSWER MATCH WITH SELECTED ANSWER
    if (correctAnswer === Number(selectedOption.value)){
      score++;
      correctAnswerLabel.style.borderColor = 'rgb(88, 154, 88)';
      correctAnswerLabel.querySelector('.tickCorrect').classList.remove('hidden');
    } else {
      correctAnswerLabel.style.borderColor = 'rgb(88, 154, 88)';
      selectedOptionLabel.style.borderColor = 'rgb(207, 13, 13)';
      selectedOptionLabel.querySelector('.tickInCorrect').classList.remove('hidden');
      correctAnswerLabel.querySelector('.tickCorrect').classList.remove('hidden');
    }

    for (let i = 0; i < radioBtnLst.length; i++){
      radioBtnLst[i].disabled = true;
    }

    btnSubmitEl.classList.add('hidden');
    btnNextEl.classList.remove('hidden');
  } 
}

const moveToNextQuestion = function () {
  currentQuestionIndex++;  
  if (currentQuestionIndex < quizQuestions.length) {
    if (currentQuestionIndex === quizQuestions.length - 1) {
      btnNextEl.textContent = 'View Result';
    }
    displayQuetions(currentQuestionIndex);
    btnSubmitEl.classList.remove('hidden');
    btnNextEl.classList.add('hidden');
  } else {
    quizEl.classList.add('hidden'); 
    resultEl.classList.remove('hidden'); 
    console.log('Quiz Completed');
    quizScoreEl.textContent = `You got ${score} correct. Out of ${quizQuestions.length}`;
  }
}

btnSubmitEl.addEventListener('click', function () {
  checkAnswer(currentQuestionIndex)
});

btnNextEl.addEventListener('click', function () {
   moveToNextQuestion() 
});

displayQuetions(currentQuestionIndex);

