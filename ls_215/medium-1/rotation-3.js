/*
input: an integer
output: the maximum rotation of that integer

Allowed to use function from previous exercise

Examples: What if it's not the right data type? What if it's a special number
value? Float? What if no argument?

Data Structure: since the rotation functionality is already present in 
previous problems function

Algorithm: iterate from the length of the string form of the number
          - decrement downwards until 2 is reached (rotating the rightmost
            digit on every iteration)
          - reassign current num to current rotation
          - Once iteration is complete return the resulting number
*/

function rotateRightmostDigit(number, rotation) {
  let indexToSeparate = String(number).length - rotation;
  let firstSlice = String(number).slice(0, indexToSeparate);
  let secondSlice = String(number).slice(indexToSeparate);

  let secondSliceRotated = secondSlice.slice(1).concat(secondSlice[0]);

  return parseInt(firstSlice.concat(secondSliceRotated), 10);
}

const log = console.log;

log(maxRotation(123456)); // 246315
log(maxRotation(735291)); // 321579
log(maxRotation(3));
log(maxRotation(35));
log(maxRotation(105));
log(maxRotation(8703529146));

function maxRotation(int) {
  let currentNum = int;

  for (let count = String(int).length; count >= 2; count--) {
    currentNum = rotateRightmostDigit(currentNum, count);
  }

  return currentNum;
}