const quizQuestionsEl = document.querySelector('.quiz-questions');
const questionNumbersEl = document.querySelector('.questionNumbers');
const questionEl = document.querySelector('.question');
const answersGroupEl = document.querySelector('.options');
const btnSubmitEl = document.querySelector('.btn-submit');
const btnNextEl = document.querySelector('.btn-next');
const quizScoreEl = document.querySelector('.quiz-score');
const btnRestartEl = document.querySelector('.btn-restart');

const score = 0;
let questionIndex = 0;

// Create the questions

const quizQuestions = [
  {
    question: '1. 1 + 1 = ?',
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

const loadQuestions = function () {
  questionEl.textContent = quizQuestions[questionIndex].question;
  let optionsHTML = '';
  for(let i = 0; i < quizQuestions[questionIndex].answers.length; i++) {
    optionsHTML = `<label for="option${i}">
        <input type="radio" name="option" id="option${i}" value="${i}">
        ${quizQuestions[questionIndex].answers[i]}
    </label>`;
    answersGroupEl.innerHTML += optionsHTML;
    console.log(quizQuestions[questionIndex].answers[i], i);
  }
}

btnSubmitEl.addEventListener('click', function () {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  const radioBtnLst =  document.querySelectorAll('input[name="option"]');
  const correctAnswer =  quizQuestions[questionIndex].correctAnswer;
  const selectedOptionLabel =  document.querySelector(`label[for="option${selectedOption.value}"]`);
  const correctAnswerLabel =  document.querySelector(`label[for="option${correctAnswer}"]`);

  if (selectedOption) {
    
    if (Number(selectedOption.value) === quizQuestions[questionIndex].correctAnswer) {
      console.log('Correct')
      correctAnswerLabel.style.backgroundColor = 'green';
    } else {
      console.log('Wrong');
      correctAnswerLabel.style.backgroundColor = 'green';
      selectedOptionLabel.style.backgroundColor = 'red';
    }
    for (let i = 0; i < radioBtnLst.length; i++){
      radioBtnLst[i].disabled = true;
    }
    btnSubmitEl.classList.add('hidden');
    btnNextEl.classList.remove('hidden');

  } else {
    alert('Select an option first');
  }
})

loadQuestions();