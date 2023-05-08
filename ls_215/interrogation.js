function odd(number) {
  return number % 2 === 1;
}

let count = [1, 2, 3, 4, 5];
const log = console.log;
log(count.some(odd));
log(count.every(odd));

function myOwnEvery(array, func) {
  for (let index = 0; index < array.length; index++) {
    if (!func(array[index])) return false;
  }

  return true;
}

let isAString = value => typeof value === 'string';
console.log(myOwnEvery(['1', 'a234', '1abc'], isAString));

function areAllNumbers(array) {
  return myOwnEvery(array, isANumber);
}

function isANumber(value) {
  return typeof value === 'number' && !Number.isNaN(value);
}

log(areAllNumbers([1, 5, 6, 7, '1']));
log(areAllNumbers([1, 5, 6, 7, 1]));
log(areAllNumbers([1, 5, 6, 7, NaN]));
