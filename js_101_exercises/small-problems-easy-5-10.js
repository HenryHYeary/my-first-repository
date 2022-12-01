/*
input: an array of integers.
output: the integer component of the average (rounded down).

examples: array will never be empty and the numbers will always be positive integers.

Data structure: should use a new variable as the average in order to return it at the end of the execution.

Algorithm: use array.reduce() on the original array passed as the input to calculate the sum of all of the integers.
Divide that sum by array.length and then use Math.floor() on the value to round down the value to its integer component.
*/

function average(arr) {
  let sum = arr.reduce((sum, next) => sum + next);
  let average = sum / arr.length;

  return Math.floor(average);
}

console.log(average([1, 5, 87, 45, 8, 8]));
console.log(average([9, 47, 23, 95, 16, 52]));

function average2(arr)  {
  let sum = 0;

  arr.forEach(num => sum = num + sum);

  let average = sum / arr.length;

  return Math.floor(average);
}

console.log(average2([1, 5, 87, 45, 8, 8]));
console.log(average2([9, 47, 23, 95, 16, 52]));