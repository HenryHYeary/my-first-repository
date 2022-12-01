/*
input: a positive integer
output: a positive integer that has the reverse digits of the input number

Examples: leading zeroes are dropped according to the examples. If a single digit integer is passed
then the function should return that same integer.

Data Structure: should convert the initial number to a string, then should use string.split() to separate them into digits.

Algorithm: create an array of string characters representing each digit in the input integer, then reverse that array, join it, and convert it to a number.
*/

function reverseNumber(number) {
  let reversedString = String(number).split('').reverse().join('');

  return Number(reversedString);
}

console.log(reverseNumber(12345));
console.log(reverseNumber(12213));
console.log(reverseNumber(456));
console.log(reverseNumber(12000));
console.log(reverseNumber(1));

