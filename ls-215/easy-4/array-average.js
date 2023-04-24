/*
input: an array of integers
output: the integer component of the average of all of the numbers in
the array

Examples: What if the input is not an array, what if the array has other
values besides only numbers or floats? What if there are multiple arguments.

Data Structures: reduce the numbers in the array to a single total
divide that total by the length of the array, and then floor that value
to the integer component.
*/

const log = console.log;

log(average([1, 5, 87, 45, 8, 8])); // 25
log(average([9, 47, 23, 95, 16, 52])); // 40
log(average([2, 2, 2, 2])); // 2

function average(array) {
  return Math.floor(array.reduce((sum, next) => sum + next, 0) / array.length);
}