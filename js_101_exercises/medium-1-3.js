/*
input: an integer
output: the maximum rotation of the digits of the original number.

Examples: If only one digit is passed to the function then it should return that digit.
If the function results in a leading zero then that zero should be dropped from the return value.

Data Structure: should coerce the number into a string so we can iterate over the string and rotate each element
while keeping the others in place.

Algorithm: Should use the solution from the previous exercise, the first digit to rotate's index will match the length of the 
stringNum version of the number. So subtract the index from string.length to form the count argument, and use a current iteration number
that constantly reassigns itself every iteration through the loop.
*/

function maxRotation(number) {
  let stringNum = String(number);
  let currentIterationNumber = number;

  for (let i = 0; i < stringNum.length; i++) {
    currentIterationNumber = rotateRightmostDigits(currentIterationNumber, stringNum.length - i);
  }

  return currentIterationNumber;
}

function rotateRightmostDigits(number, count) {
  let stringNum = String(number);
  let firstSlice = stringNum.slice(0, stringNum.length - count);
  let targetDigit = stringNum[stringNum.length - count];
  let finalSlice = stringNum.slice(stringNum.length - count + 1);

  return Number(`${firstSlice}${finalSlice}${targetDigit}`);
}

console.log(maxRotation(735291));
console.log(maxRotation(3));
console.log(maxRotation(35));
console.log(maxRotation(105));
console.log(maxRotation(8703529146));