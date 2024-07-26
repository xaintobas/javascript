'use strict';

///////////////////////////////////////
// Activating Strict Mode

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;


///////////////////////////////////////
// Functions
function logger() {
  console.log('My name is Stephen');
}

// calling / running / invoking function
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and  ${oranges} oranges`;
  return juice;
}

const appleJuice = console.log(fruitProcessor(1, 3));
const appleOrangeJuice = console.log(fruitProcessor(3, 6));


/////////////////////////////////////
// Function Decleration
function calcAge1(birthyear) {
  return 2024 - birthyear;
}

const age1 = calcAge1(1996);
console.log(age1);


////////////////////////////////////
// Function Expression
const calcAge2 = function (birthyear) {
  return 2024 - birthyear;
}

const age2 = calcAge2(1996);
console.log(age2);





