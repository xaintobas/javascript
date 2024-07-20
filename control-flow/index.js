// If else 

let hour = 22;
let name = 'Stephen';

if (hour <= 12)
  console.log('Good morning, ' + name)
else if (hour > 12 && hour <= 18)
  console.log('Good afternoon ' + name);
else 
  console.log('Good evening ' + name);


// Switch and Case

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


// For Loop

for (let i = 1; i <= 5; i++){
  console.log(i);
}

// Display even / odd numbers
for (let i = 1; i <= 10; i++){
  if(i % 2 !== 0)
    console.log(i);
}



