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

let currentQuestionIndex = 0;
let score = 0;

// CREATE THE LIST OF QUESTIONS
const quizQuestions = [
  {
    question: '1. 1 + 1 = ? What is the output of the following code? What is the output of the following code?What is the output of the following code?What is the output of the following code? ',
    answers: [
      'A) 2',
      'B) 1',
      'C) 4',
      'D) 3'
    ], 
    correctAnswer: 0
  },

  {
    question: '2. 5 + 5 = ?',
    answers: [
      'A) 12',
      'B) 13',
      'C) 10',
      'D) 7'
    ], 
    correctAnswer: 2
  },
  
  {
    question: '3. 6 + 3 = ?',
    answers: [
      'A) 9',
      'B) 12',
      'C) 10',
      'D) 8'
    ], 
    correctAnswer: 0
  },

  {
    question: '4. 7 + 7 = ?',
    answers: [
      'A) 22',
      'B) 13',
      'C) 16',
      'D) 14'
    ], 
    correctAnswer: 3
  },

  {
    question: '5.  10 + 7 = ?',
    answers: [
      'A) 20',
      'B) 15',
      'C) 17',
      'D) 12'
    ], 
    correctAnswer: 2
  },
];

const saveSelectedAnswers = function () {
  selectedAnswers.push(document.querySelector('input[name="answer"]:checked').value);
  console.log(selectedAnswers);
} 

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
  const radioBtnLst =  document.querySelectorAll('input[name="option"]');
  const correctAnswer = quizQuestions[quizQuestionsIndex].correctAnswer;
  const selectedOptionLabel =  document.querySelector(`label[for="option${selectedOption.value}"]`);
  const correctAnswerLabel =  document.querySelector(`label[for="option${correctAnswer}"]`);

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

  // IF YOU DID NOT SELECT AN ANSWER
  } else {
    alert('Please pick an option');
  }
}

const moveToNextQuestion = function () {
  if (currentQuestionIndex < quizQuestions.length) {
    displayQuetions(currentQuestionIndex);
    btnSubmitEl.classList.remove('hidden');
    btnNextEl.classList.add('hidden');
  } else {
    btnNextEl.textContent = 'View Result';
    quizEl.classList.add('hidden'); 
    resultEl.classList.remove('hidden'); 
    console.log('Quiz Completed');
    quizScoreEl.textContent = `You got ${score} correct. Out of ${quizQuestions.length}`;
  }
}

btnSubmitEl.addEventListener('click', function () {
  checkAnswer(currentQuestionIndex)
  currentQuestionIndex++;
  
  if (currentQuestionIndex <= quizQuestions.length) {
    console.log(currentQuestionIndex, 'Length', quizQuestions.length);
  } else {
    console.log('Result');
  }
  
});

btnNextEl.addEventListener('click', function () {
   moveToNextQuestion() 
});


displayQuetions(currentQuestionIndex);

