///////////////////////////////////////
// Working With Strings - Part 2

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

const checkMiddleSeat =  function(seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');


