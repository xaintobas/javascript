// GET THE HTML ELEMENTS
const questionEl = document.querySelector('.question');
const answersEl = document.querySelector('.options');
const btnTestEl = document.querySelector('.btnTest');

// CREATE THE LIST OF QUESTIONS
const questions = [
  {
    question: '1. What is the correct way to declare a variable in Java?',
    answers: [
      'A) int number = 5;',
      'B) var number = 5;',
      'C) number = 5;',
      'D) int number: 5;'
    ], 
    correctAnswer: 0
  },

  {
    question: '2. Which method is used to print something to the console in Java?',
    answers: [
      'A) System.out.write();',
      'B) System.console();',
      'C) System.out.println();',
      'D) System.print();'
    ], 
    correctAnswer: 2
  },
  
  {
    question: '3. Which keyword is used to create a new object in Java?',
    answers: [
      'A) new',
      'B) create',
      'C) object',
      'D) make'
    ], 
    correctAnswer: 0
  },

  {
    question: '4. Which of the following is the correct way to start the main method in Java?',
    answers: [
      'A) public static void main()',
      'B) public void main(String[] args)',
      'C) public static main(String[] args)',
      'D) public static void main(String[] args)'
    ], 
    correctAnswer: 3
  },

  {
    question: '5. What is the size of an int in Java?',
    answers: [
      'A) 8 bytes',
      'B) 2 bytes',
      'C) 4 bytes',
      'D) 16 bytes'
    ], 
    correctAnswer: 2
  },
];

btnTestEl.addEventListener('click', function(){
  questionEl.textContent = `Hello`;
console.log(questionEl);

  for(i = 0; i < questions.length; i++){
    // questionEl.textContent = `${questionEl}.textContent`;
    // questionEl.textContent = questions.question
    questionEl.textContent = `${questions[i].question}`;
  }
})





