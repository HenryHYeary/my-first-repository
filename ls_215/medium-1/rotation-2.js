/*
input: two integers, the first is the number to rotate, second
is the digit to rotate to the left to the end.
output: the new number after rotation

Examples: What if there are more than 2 args? What if they are different
data types or special number values? What  if there are no args?

Data Structure: Split the number into an array of digits
                - create a first slice of the array and a second slice
                - before returning the two strings together rotate the first
                element of the second slice to the end of the array.
                - combine arrays
                - join into a string
                - parseInt from string
                - return resulting int
*/

const log = console.log;

log(rotateRightmostDigit(123456, 1)); // 123456
log(rotateRightmostDigit(123456, 2)); // 123465
log(rotateRightmostDigit(123456, 3)); // 123564
log(rotateRightmostDigit(123456, 4)); // 124563
log(rotateRightmostDigit(123456, 5)); // 134562
log(rotateRightmostDigit(123456, 6)); // 234561 

function rotateRightmostDigit(number, rotation) {
  let indexToSeparate = String(number).length - rotation;
  let firstSlice = String(number).slice(0, indexToSeparate);
  let secondSlice = String(number).slice(indexToSeparate);

  let secondSliceRotated = secondSlice.slice(1).concat(secondSlice[0]);

  return parseInt(firstSlice.concat(secondSliceRotated), 10);
}