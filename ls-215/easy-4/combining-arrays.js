/*
input: exactly two arrays
output: the union of the values from the two

Examples: two arguments are always arrays,
      - For my rules the return value should always be
      in order from lowest number value to highest number value.

Data Structure: create a new array that is the concatenation of the
first array with the second array.
      - After this filter out any repeat values
      - After repeat values are filtered, sort the array numerically
      in ascending order, return the new array
*/

const log = console.log;
log(union([1, 3, 5], [3, 6, 9])); // [1, 3, 5, 6, 9]
log(union([2, 7, 5], [8, 1, 11, 4])); // [1, 2, 4, 5, 7, 8, 11]
log(union([4, 4, 4], [4, 4, 4])); // [4]

function union(arr1, arr2) {
  let initialUnion = arr1.concat(arr2);
  let allUnique = initialUnion.filter((num, index) => initialUnion.indexOf(num) === index);
  return allUnique.sort((a, b) => a - b);
}