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


////////////////////////////////////
// Arrow Function
const calcAge3 = birthyear => 2024 - birthyear;
const age3 = calcAge3(1996);
console.log(age3);

const yearsUntilRetirement = birthyear => {
  const age = 2024 - birthyear;
  const retirement = 65 - age;
  return retirement;
}

console.log(yearsUntilRetirement(1995));

const yearsUntilRetirement1 = (birthyear, firstName) => {
  const age = 2024 - birthyear;
  const retirement = 65 - age;
  return `${firstName} reitres in ${retirement}`;
}

console.log(yearsUntilRetirement1(1996, 'Stephen'));

console.log(yearsUntilRetirement1(2001, 'Helen'));


///////////////////////////////////
// Functions calling other functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and  ${orangePieces} piece of orange`;
  return juice;
}

console.log(fruitProcessor(2, 4));


///////////////////////////////////////
// 

const calcAge = function(birthyear) {
  return 2024 - birthyear;
}

const yearsUntilRetirement2 = function (birthyear, firstName) {
  const age = calcAge(birthyear);
  const retirement = 65 - age;
  
  if (retirement > 0){
    console.log(`${firstName} reitres in ${retirement}`); 
  } else {
    console.log(`${firstName} is already reitred 🎉`);
  }
}

yearsUntilRetirement2(1996, 'Stephen');
yearsUntilRetirement2(1944, 'Helen');


////////////////////////////////////
// Intro to array 

const friends = ['Stephen', 'James', 'John'];
console.log(friends); // All array content
console.log(friends[0]); // Stephen
console.log(friends.length); // 3
console.log(friends[friends.length - 1]); // John
friends[2] = 'Peter'; // Replace John with Peter
 
friends.push('Peter'); // Push add elements to array end
friends.pop(); // removes element from the end

friends.unshift('James'); // Add element to the begining
friends.shift(); // removes element from the begining

console.log(friends); // All array contents

const firstName =  'Stephen';
// Add variable and array inside and array 
const stephen = [firstName, 'Obayuwana', 28, friends ]; 
console.log(stephen);

// Exercise 
const calculateAge = function (birthyear) {
  return 2024 - birthyear;
}

const years = [1990, 1967, 1980, 1987, 1996, 2006];
const age1990 = calculateAge(years[0]); //
const age1980 = calculateAge(years[2]);
const age1996 = calculateAge(years[4]);
console.log(age1980, age1990, age1996);

// Adding function call inside an array
const allAges = [calculateAge(years[0]), calculateAge(years[1]), calculateAge(years[2]), calculateAge(years[3]), calculateAge(years[4]), calculateAge(years[5])];

console.log(allAges);


////////////////////////////////////
// Intro to objects

