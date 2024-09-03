'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'St. Stephen Restaurant',
  location: 'Benin-City, Edo State, Nigeria',
  categories: ['Nigerian', 'African', 'Vegetarian'],
  starterMenu: ['Akara', 'Moi Moi', 'Pepper Soup', 'Bole and Stew'],
  mainMenu: ['Pounded Yam & Egusi Soup', 'Fufu & Ogbono', 'Jollof Rice'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    )
  },

  orderFriedRice: function(ing1, ing2, ing3) {
    console.log(`Here is your deliciouse Fried Rice with ${ing1}, ${ing2}, and ${ing3}`);
  }

};

console.log('=======OBJECT DESTRUCTURING=========');
// OBJECT DESTRUCTURING
const {name, openingHours, mainMenu} = restaurant; 
console.log(name, openingHours, mainMenu);

const {name: restaurantName, openingHours: hours, mainMenu: foodMenu} = restaurant;
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
const newRestaurant = {yearFouded: 1995, ...restaurant, founder: 'Stephen Obayuwana'};
const restaurantCopy = {...newRestaurant};
restaurantCopy.founder = 'John Obayuwana'; 

console.log(newRestaurant);
console.log(restaurantCopy);

console.log('=======REST OPERATOR=========');
// REST OPERATOR













