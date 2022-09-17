/*
input: a number and the last count digit to be rotated
output: the number with the appropriate digit rotated to the end of the number.

Examples: count digit will be rotated based on index + 1

Data Structure: should convert the number into a string

Algorithm: should subtract the count from the length of the string version of the number to get the index of the num to move
should then use that index to find the digit to move and replace that index with a blank string.
should then add that same digit back to the end of the string and then convert the string into a number.
*/

function rotateRightmostDigits(number, count) {
  let stringNum = String(number);
  let indexToSeparate = stringNum.length - count;
  let digitToMove = stringNum[indexToSeparate];
  let newString = stringNum.replace(digitToMove, '');

  newString += digitToMove;

  return Number(newString);
}


console.log(rotateRightmostDigits(735291, 1));
console.log(rotateRightmostDigits(735291, 2));
console.log(rotateRightmostDigits(735291, 3));
console.log(rotateRightmostDigits(735291, 4));
console.log(rotateRightmostDigits(735291, 5));
console.log(rotateRightmostDigits(735291, 6));


function rotateRightmostDigits2(number, count) {
  let stringNum = String(number);
  let firstSlice = stringNum.slice(0, stringNum.length - count);
  let targetDigit = stringNum[stringNum.length - count];
  let finalSlice = stringNum.slice(stringNum.length - count + 1);

  return Number(`${firstSlice}${finalSlice}${targetDigit}`);
}

console.log(rotateRightmostDigits2(735291, 1));
console.log(rotateRightmostDigits2(735291, 2));
console.log(rotateRightmostDigits2(735291, 3));
console.log(rotateRightmostDigits2(735291, 4));
console.log(rotateRightmostDigits2(735291, 5));
console.log(rotateRightmostDigits2(735291, 6));
