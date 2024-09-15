'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

///////////////////////////////////////
// Working With Strings - Part 1

const airline = 'St. Stephen Travel Airline';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B435'[0]);

console.log(airline.length);
console.log('D324'.length);

console.log(airline.indexOf('S'));
console.log(airline.lastIndexOf('S'));
console.log(airline.indexOf('Stephen'));

console.log(airline.slice(4));
console.log(airline.slice(4, 22));

console.log(airline.slice(0, airline.lastIndexOf(' ')));

console.log(airline.slice(0, airline.lastIndexOf('T')));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');


///////////////////////////////////////
// Working With Strings - Part 2

const airlineTwo = 'St. Stephen Travel Airline';
console.log(airlineTwo.toLowerCase());
console.log(airlineTwo.toUpperCase());

// Fix capitalization
const fixCapitalization = function (passenger) {
  const passengerLower = passenger.toLowerCase();
  const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
  console.log(passengerCorrect);
}

fixCapitalization('sTEpheN');
fixCapitalization('obaYuwANA');

// Comparison betweeen two emails
const checkEmail = function (email1, email2) {
  const normalizedEmail1 = email1.toLowerCase().trim();
  const normalizedEmail2 = email2.toLowerCase().trim();
  console.log(normalizedEmail1 === normalizedEmail2);
}

checkEmail('stephen@gmail.com', '  Stephen@Gmail.Com  ');

// Replacing part of strings
const priceNG = '₦28,345.97';
const priceUS = priceNG.replace('₦', '$')
console.log(priceUS);

const announcement = 'All passengers come to bording door 23. Bording door 23!!';

const modifiedAnnouncement1 = announcement.replace(/door/g, 'gate');

const modifiedAnnouncement2 = announcement.replaceAll('door', 'gate');

console.log(modifiedAnnouncement1);
console.log(modifiedAnnouncement2);

// Methods that returns Booleans 
const myName = 'Stephen Obayuwana';
console.log(myName.includes('Stephen')); // True
console.log(myName.includes('John')); // False
console.log(myName.startsWith('Ste')); // True

if (myName.startsWith('Step') && myName.endsWith('wana')) {
  console.log(myName);
}

// Practice Exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('gun') || baggage.includes('knife')) {
    console.log('You are not allowed onboard')
  } else {
    console.log('Welcome on board');
  }
}

checkBaggage('I have a socks and food'); // Welcome on board
checkBaggage('I have a Gun for protection'); // Welcome on board
checkBaggage('I have a laptop, food and pocket KNIFE'); //Welcome on board

///////////////////////////////////////
// Working With Strings - Part 3
// Split and Join
const splitName = 'Stephen+Obayuwana';
console.log(splitName.split('+')); //  ['Stephen', 'Obayuwana']

const [firstName, lastName] = 'Stephen Obayuwana'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); // Mr. Stephen OBAYUWANA

const capitalizeName = function (name) {
  const nameArray = name.split(' ');
  const namesUpper = [];

  for (const n of nameArray) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // console.log(n[0]);
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
}

capitalizeName('stephen obayuwana');
capitalizeName('john imafidon obayuwana');
capitalizeName('chief omorodion stephen obayuwana');

// Padding a String
const stringStatus = 'I need to get Rich!!';
console.log(stringStatus.padStart(30, '*'));

const maskCreditCard = function (number) {
  const str = number + ''; // str = String(number);
  const lastDigits = str.slice(-4);
  console.log(lastDigits.padStart(str.length, '*'));
}

maskCreditCard(23487273);
maskCreditCard('43378463864647384');
maskCreditCard('334859493847755774747');

// Repeat
const statusMessage = 'I love JavaScript!!';
console.log(statusMessage.repeat(5));

console.log('===Working With Strings - Part 2===');


///////////////////////////////////////
// Enhanced Object Literals
const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const openingHour = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'St. Stephen Restaurant',
  location: 'Benin-City, Edo State, Nigeria',
  categories: ['Nigerian', 'African', 'Vegetarian'],
  starterMenu: ['Akara', 'Moi Moi', 'Pepper Soup', 'Bole and Stew'],
  mainMenu: ['Pounded Yam & Egusi Soup', 'Fufu & Ogbono', 'Jollof Rice'],

  openingHour,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    )
  },

  orderFriedRice: function (ing1, ing2, ing3) {
    console.log(`Here is your deliciouse Fried Rice with ${ing1}, ${ing2}, and ${ing3}`);
  }

};

///////////////////////////////////////

if (restaurant.openingHour && restaurant.openingHour.Mon) console.log(restaurant.openingHour.Mon.open);

// Optional Chaining (?.)
console.log(restaurant.openingHour.Mon?.open)
console.log(restaurant.openingHour?.Mon?.open)

// EXAMPLES
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHour[day]?.open ?? 'Closed';
  console.log(`On ${day} we open at ${open}`);
}

// Optional Chaining on Methods (?.)
console.log(restaurant.order?.(0, 1) ?? 'Method Does Not Exist');
console.log(restaurant.orderRice?.(0, 1) ?? 'Method Does Not Exist');

// Optional Chaining on Arrays (?.)
const users = [
  {
    name: 'Stephen',
    email: 'stephen@gmail.com'
  }
]
console.log(users[0]?.name ?? 'Users array is empty');




///////////////////////////////////////
// The for-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
let [players1, players2] = game.players;

// 2. 
let [gk, ...fieldPlayers] = players1;

// 3.
const allPlayers = [...players1, ...players2];

// 4. 
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// 5. 
const { team1, x: draw, team2 } = game.odds;

// 6. 
const printGoals = function (...playerNames) {
  console.log(`${playerNames.length} Goals were scored!!`);
  for (let i = 0; i < playerNames.length; i++) {
    console.log(`${playerNames[i]}`);
  }
}

printGoals(...game.scored);

// 7. 
// const winner = team1 > team2 ? 'Team 1 Wins' : 'Team 2 Wins';

team1 < team2 && console.log('Team 1 might win');
team1 > team2 && console.log('Team 2 might win');

console.log(team1, draw, team2);


///////////////////////////////////////
// Coding Challenge #2
/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// 1.

for (let i = 0; i < game.scored.length; i++) {
  console.log(`Goal ${i + 1}: ${game.scored[i]}`);
}

// 2.

let odds = Object.values(game.odds);
let average = 0;

for (const odd of odds) {
  average += odd;
}

average /= odds.length;

console.log(average);


// 3.

for (const [team, odd] of Object.entries(game.odds)) {
  const teamString = team === 'x' ? 'Draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamString}, ${odd}`);
}

// Bonus..

const scores = {};

for (const player of game.scored) {
  scores[player] ? scores[player]++ : scores[player] = 1;
  console.log(player);
}
console.log(scores);



///////////////////////////////////////
// Maps: Fundamentals
console.log('=====Maps: Fundamentals=====');

const rest = new Map(); // Create a map
rest.set('name', 'St. Stephen Restaurant'); // Add value to map
rest.set(1, 'Benin-City, Nigeria'); // Add value to map
rest.set(2, 'FCT Abuja, Nigeria'); // Add value to map

rest.set('categories', ['Nigerian', 'African', 'Vegetarian'])
  .set('open', 8)
  .set('close', 23)
  .set(true, 'We are open!')
  .set(false, 'We are closed!'); // Chaining

console.log(rest.get('name')); // Read data from the map using Get method // .get(key);
console.log(rest.get(false)); // The datatype of the key matters

const time = 10;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));

rest.delete(2);
// rest.clear();
// rest.set([1, 2], 'Using array as map key');
const mapArr = [1, 2];
rest.set(mapArr, 'Using array as map key');
console.log(rest.get(mapArr));
console.log(rest.size);


const question = new Map([
  ['question', 'What is the best programming language'],
  [1, 'C#'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Your answer is correct'],
  [false, 'Your answer is incorrect'],
])

// Convert objects to map
console.log(Object.entries(openingHour));
const hoursMap = new Map(Object.entries(openingHour));
console.log(hoursMap);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
// const answer =  Number(prompt('What is your answer?'));
// console.log(answer);
const answer = 3;
console.log(question.get(answer === question.get('correct')));

// Convert Map to array
const mapArray = [...question];
console.log([...mapArray.keys()]);
console.log([...mapArray.values()]);


console.log('=====End Maps: Fundamentals=====');

///////////////////////////////////////
// Javascript Sets
console.log('=====SETS=====');

const ordersSet = new Set(['Fried Rice', 'Pounded Yam', 'Jollof Rice', 'Beans and Yam']);
console.log(ordersSet);
console.log(ordersSet.size); // Output: 4
console.log(ordersSet.has('Fried Rice')); // Output: true
console.log(ordersSet.has('Fried Plantain')); // Output: false
ordersSet.add('Yam and Egg'); // Add new element 
ordersSet.add('Yam and Egg'); // Add new element 

console.log(ordersSet); // Include 5 elements (set elements is unique)

// ordersSet.clear(); // Delete all items

ordersSet.delete('Fried Rice'); // Delete item
console.log(ordersSet); // Include 4 elements

for (const order of ordersSet) console.log(order);

// EXAMPLE
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Waiter', 'Chef'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

// OR

const newStaffUnique = new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Waiter', 'Chef']);
console.log(newStaffUnique);


console.log('=====SETS=====');




///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64); // Delete the yellow card at 64mins
console.log(gameEvents);

// 3. 
const gameTime = [...gameEvents.keys()].pop(); // Get the last key in the map

console.log(`An event happened, on average, every ${gameTime / gameEvents.size} minutes`);

// 4.
for (const [min, event] of [...gameEvents]) {
  const half = min < 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}





console.log('=======OBJECT DESTRUCTURING=========');
// OBJECT DESTRUCTURING
const { name, openingHours, mainMenu } = restaurant;
console.log(name, openingHours, mainMenu);

const { name: restaurantName, openingHours: hours, mainMenu: foodMenu } = restaurant;
console.log(restaurantName, hours, foodMenu);

console.log('=======ARRAY DESTRUCTURING=========');
// ARRAY DESTRUCTURING
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main]; // SWITCHING VARIABLES
console.log(main, secondary);

console.log(restaurant.order(1, 2));

const [starter, mainCourse] = restaurant.order(1, 2);
console.log(starter, mainCourse);

const nextedArray = [1, 2, 3, [8, 9, 10]];
const [a, b, c, d] = nextedArray;
console.log(a, b, c, d);

const [i, j, k, [l, m, n]] = nextedArray;
console.log(i, j, k, l, m, n);

console.log('=======SPREAD OPERATOR=========');
// SPREAD OPERATOR
const arr = [7, 8, 9];
const spreadArray = [1, 2, 3, ...arr]; // ADD TO AN ARRAY

const newMenu = [...restaurant.mainMenu, 'Fried Rice', 'Banga Soup and Starch']; // ADD TO AN ARRAY
const mainMenuCopy = [...restaurant.mainMenu]; // COPY ARRAY
const combinedArray = [...restaurant.starterMenu, ...restaurant.mainMenu] // JOIN 2 ARRAY

const str = 'Stephen';
const letters = [...str] // SPREAD OPERATOR ON A STRING  ['S', 't', 'e', 'p', 'h', 'e', 'n']

const ingridents = ['Chicken', 'Plantain', 'Moi-Moi'];
restaurant.orderFriedRice(...ingridents); // SPREAD OPERATOR TO PASS VALUE TO A FUNCTION

// COPYING AN OBJECT USING THE SPREAD OPERATOR
const newRestaurant = { yearFouded: 1995, ...restaurant, founder: 'Stephen Obayuwana' };
const restaurantCopy = { ...newRestaurant };
restaurantCopy.founder = 'John Obayuwana';

console.log(newRestaurant);
console.log(restaurantCopy);

console.log('=======REST OPERATOR=========');
// REST OPERATOR



///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const textArea = document.querySelector('textarea').value;
  console.log(textArea.split('_'));
});






