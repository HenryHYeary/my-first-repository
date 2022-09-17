

function maxRotation(number) {
  let stringNum = String(number);
  let currentIterationNumber = number;

  for (let i = 1; i <= stringNum.length; i++) {
    currentIterationNumber = rotateRightmostDigits(currentIterationNumber, i);
  }

  return currentIterationNumber;
}

function rotateRightmostDigits(number, count) {
  let stringNum = String(number);
  let indexToSeparate = stringNum.length - count;
  let digitToMove = stringNum[indexToSeparate];
  let newString = stringNum.replace(digitToMove, '');

  newString += digitToMove;

  return Number(newString);
}

console.log(maxRotation(735291));

// should try to go through the full PEDAC process on this one, figuring out how to
// keeping all of the digits in place during the rotation will be a key part of the solution.