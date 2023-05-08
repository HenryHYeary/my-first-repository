/*
input: an integer
output: the sum of the digits of the integer

Examples: The number will always be a positive integer.

Data Structure: should create a variable external from method iteration calls
progressively add the value of each digit to that variable.

Algorithm: Coerce the integer into a string, split the string into individual
digits in an array, iterate through that array using forEach and total up the sum of
all of the digits
*/

function sum(number) {
  let total = 0;
  let stringNum = String(number);

  stringNum.split('').forEach(digit => {
    total += Number(digit);
  });

  return total;
}

const log = console.log;
log(sum(23));
log(sum(496));
log(sum(123456789));

// Book solution

// function sum(number) {
//   return String(number)
//             .split('')
//             .reduce((sum, next) => sum + Number(next), 0);
// }

