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
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and  ${oranges} oranges`;
  return juice;
}

const appleJuice = console.log(fruitProcessor(1, 3));
const appleOrangeJuice = console.log(fruitProcessor(3, 6));










