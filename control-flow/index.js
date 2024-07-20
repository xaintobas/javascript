// If else 

let hour = 22;
let name = 'Stephen';

if (hour <= 12)
  console.log('Good morning, ' + name)
else if (hour > 12 && hour <= 18)
  console.log('Good afternoon ' + name);
else 
  console.log('Good evening ' + name);


console.log('Switch and Case Block');

let role = 'guest';

switch (role) {
  case 'guest': 
    console.log('Guest user');
    break;

  case 'moderator':
    console.log('Moderator user');
    break;

  default:
    console.log('Unknown user');
}

 
console.log('For Loop Block');

for (let i = 1; i <= 5; i++){
  console.log(i);
}

console.log('Display even / odd numbers');

for (let i = 1; i <= 10; i++){
  if(i % 2 !== 0)
    console.log(i);
}

console.log('While Loop Block');

let ii = 0;
while (ii <= 10) {
  console.log(ii);
  ii++;
}
