'use strict';

const bookings = [];

// SETTING DEFAULT PARAMETER 
const createBooking =  function (flightNum, numPassengers = 1, price = 200 * numPassengers) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 3);
createBooking('LH123', 3, 300);
createBooking('LH123', undefined, 300);

// HOW PASSING ARGUMENT WORKS - VALUES VS. REFERENCE
const flight =  'LH324';
const stephen = {
  name: 'Stephen Obayuwana',
  passport: 6289637486,
}

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH882',
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 6289637486){
    console.log('Check In');
  } else {
    console.log('Wrong Passport');
  }
}

checkIn(flight, stephen);
console.log(flight);
console.log(stephen);


const newPassport = function(person) {
  person.passport = Math.trunc(Math.random() * 6525763838613);
}

newPassport(stephen);
checkIn(flight, stephen);

// FIRST CLASS AND HIGHER ORDER FUNCTION

// First class function is just a feature in a programming language
// Functions are treated as values

// Higher order function is a function that receives 
// another function as an argument or a function that 
// returns another function

// FUNCTION THAT ACCEPTS OTHER FUNCTION AS INPUTS
const oneWord = function(str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher Order Function
const transformer = function(str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best', upperFirstWord);

transformer('JavaScript is the best', oneWord);

const high5 = function() {
  console.log('👋👋');
};

document.body.addEventListener('click', high5);


// FUNCTIONS RETURNING A FUNCTION
const greet =  function(greeting) {
  return function(name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet(`Hey 👋`);
console.log(greeterHey);

greeterHey(`Stephen`);
greeterHey(`Obayuwana`);

// Using arrow function
const greet1 = (greeting) => (name)  => console.log(`${greeting} ${name}`);

const greeterHey1 = greet1('Hello 👋');
greeterHey1('Stephen');


// THE CALL AND APPLY METHOD
const murtala = {
  airline: 'Murtala Muhammed Airline',
  iataCode: 'MMD',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
  },
};

murtala.book(562, 'Stephen Obayuwana');
murtala.book(825, 'John Obayuwana');
console.log(murtala);

const steve = {
  name: 'St. Stephen Airline',
  iataCode: 'STP',
  bookings: [],
}

const book =  murtala.book;

// Call Method
book.call(steve, 625, 'Favour Obayuwana');
console.log(steve);

// Apply Method
const flightData = [638, 'Osas Obayuwana'];
book.apply(steve, flightData);
console.log(steve);


const apapa = {
  name: 'Apapa Airline',
  iataCode: 'APP',
  bookings: [],
}

const ojota = {
  name: 'Ojota Airline',
  iataCode: 'OJO',
  bookings: [],
}

const ikpoba = {
  name: 'Ikpoba Okha Airline',
  iataCode: 'IKP',
  bookings: [],
}

// Using the Bind Method
const apapaAirline = book.bind(apapa);
const ojotaAirline = book.bind(ojota);
const ikpobaAirline = book.bind(ikpoba);

apapaAirline(663, 'Helen Obayuwana');
ojotaAirline(6295, 'Charity Obayuwana');
ikpobaAirline(18393, 'Andrew Obayuwana');

// With Even Listeners

murtala.planes = 300;
murtala.buyPlane =  function() {
  this.planes++;
  console.log(this.planes)
}

document.querySelector('.buy').addEventListener('click', murtala.buyPlane.bind(murtala));

// Partial application
// pre set parameters
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);
console.log(addVat(100));
console.log(addVat(23));

const addTax1 = (rate, value) => value + value * rate;
console.log(addTax1(0.23, 100));

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

  1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
    1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
          What is your favourite programming language?
          0: JavaScript
          1: Python
          2: Rust
          3: C++
          (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)

  2. Call this method whenever the user clicks the "Answer poll" button.

  3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 

  4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

  HINT: Use many of the tools you learned about in this and the last section 😉

  BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

  BONUS TEST DATA 1: [5, 2, 3]
  BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

  GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const promptAnswer = Number(prompt(`${this.question} \n${this.options.join('\n')} \n(Write option number)`));

    // if(typeof promptAnswer === 'number'  && promptAnswer < this.answers.length) {
    //   this.answers[promptAnswer]++;
    // };

    typeof promptAnswer === 'number'  && promptAnswer < this.answers.length && this.answers[promptAnswer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if(type === 'array'){
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

// // poll.registerNewAnswer();

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({answers: [5, 2, 3]})
// poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]})

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]


// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
(function() {
  console.log('Hello World');
  console.log('This function is immediately called once the page loads...');
} ());

// CLOSURES
const secureBooking = function () {
  let passengerCount = 0;
  return function() {
    passengerCount++
    console.log(`${passengerCount} passengers`);
  };
};

const booker =  secureBooking();

booker();
booker();
booker();


let f;
const g =  function() {
  const a = 4;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 10;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

h();
f();

console.dir(f);



// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);


///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function(){
    header.style.color = 'blue';
  })

})();






