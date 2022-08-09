// WIP Until Lesson 2 is Finished

let rlSync = require('readline-sync');

integer = rlSync.question('Please enter an integer greater than 0: ');
operation = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

integer = parseInt(integer, 10);

for (let i = 1; i <= integer; i++) {
  if (operation === 's') {
    console.log(i + (i-1));
  } else if (operation === 'p') {
    console.log(i * (i-1));
  } else {
    console.log('Invalid operation command.');
  }
}
