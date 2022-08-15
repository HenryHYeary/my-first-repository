
let rlSync = require('readline-sync');

function prompt (message) {
  console.log(`=> ${message}`);
}

function computeSum(targetNum) {
  let total = 0;

  for (let i = 1; i <= targetNum; i++) {
    total += i
  }

  return total;
}

function computeProduct(targetNum) {
  let total = 1;

  for (let i = 1; i <= targetNum; i++) {
    total *= i;
  }

  return total
}

while(true) {

prompt('Welcome to the cumulative sum/product calculator!')

prompt('Please enter an integer greater than 0: ');
integer = rlSync.question();

integer = parseInt(integer, 10);

prompt('Enter "s" to compute the sum, or "p" to compute the product. ')
operation = rlSync.question();

if (operation === "s") {
  let sum = computeSum(integer);
  prompt(`The sum of the integers between 1 and ${integer} is ${sum}.`)
} else if (operation === 'p') {
  let product = computeProduct(integer);
  prompt(`The product of the integers between 1 and ${integer} is ${product}.`);
} else {
  prompt('Invalid operation. Please try again.');
}

prompt('Would you like to perform another calculation? "y" for yes, "n" for no.')
let answer = rlSync.question();

answer = answer.trim().toLowerCase();

if (answer[0] !== 'y') break;
}