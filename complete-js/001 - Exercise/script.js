////////////////////////////////////
// JavaScript Fundamentals – Part 1
////////////////////////////////////
// Coding Challenge #1

/* Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀 */

console.log('Coding Challenge #1');

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const markBMI = massMark / (heightMark ** 2);
console.log(markBMI); 

const johnBMI = massJohn / (heightJohn * heightJohn);
console.log(johnBMI); 

const markHigherBMI = (markBMI > johnBMI);
console.log(markHigherBMI);

////////////////////////////////////
// Coding Challenge #2

/* Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀 */

console.log('');
console.log('Coding Challenge #2');

const massMark1 = 95;
const heightMark1 = 1.88;
const massJohn1 = 85;
const heightJohn1 = 1.76;

const markBMI1 = massMark1 / (heightMark1 ** 2);

const johnBMI1 = massJohn1 / (heightJohn1 * heightJohn1);

if (markBMI1 > johnBMI1){
  console.log(`Marks's BMI (${markBMI1}) is higher than John's BMI (${johnBMI1})`);
} else {
  console.log(`Marks's BMI (${markBMI1}) is lower than John's BMI (${johnBMI1})`);
}


////////////////////////////////////
// Coding Challenge #3

/* There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀 */

console.log('');
console.log('Coding Challenge #3');

/* const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;

if (scoreDolphins > scoreKoalas) {
  console.log(`Team Dolphins Wins 🏆 Scores: Dol ${scoreDolphins} - ${scoreKoalas} Koa `);
} else if (scoreDolphins < scoreKoalas) {
  console.log(`Team Koalas Wins 🏆 Scores: Dol ${scoreDolphins} - ${scoreKoalas} Koa`);
} else {
  console.log(`Draw for both teams. Dol ${scoreDolphins} - ${scoreKoalas} Koa`);
} */

// BONUS 

const scoreDolphins = Math.floor((43 + 112 + 101) / 3);
const scoreKoalas = Math.floor((109 + 95 + 106) / 3);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log(`Team Dolphins Wins 🏆 Scores: Dol ${scoreDolphins} - ${scoreKoalas} Koa `);
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
  console.log(`Team Koalas Wins 🏆 Scores: Dol ${scoreDolphins} - ${scoreKoalas} Koa`);
} else if((scoreDolphins === scoreKoalas) && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log(`Draw for both teams. Dol ${scoreDolphins} - ${scoreKoalas} Koa`);
} else {
  console.log(`No one wins`);
}

////////////////////////////////////
// Coding Challenge #4

/* Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀 */

console.log('');
console.log('Coding Challenge #4');

const bill = 40;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const total = bill + tip;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);


/*
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/

////////////////////////////////////
// JavaScript Fundamentals – Part 2

////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores �
GOOD LUCK 😀
*/









