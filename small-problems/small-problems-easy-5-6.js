/*
input: array of integers.
output: string representing the multiplicative average of all values in the array rounded to three decimal points.

Examples: seem to match the description of the problem closely.

Data Structures: not sure if it's necessary datastructures other than the array provided as input.

Algorithm: should use the reduce method on the array to calculate the product of all of the elements in the array.
Should then divide the product of all of the elements by array.length and then use .toFixed(3) to round to the third decimal place.
Should then convert the number into a string and return it.
*/

function multiplicativeAverage(arr) {
  let prod = arr.reduce((prev, next) => prev * next);

  let average = prod / arr.length;
  average = average.toFixed(3);

  return String(average);
}

console.log(multiplicativeAverage([3, 5]));
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));