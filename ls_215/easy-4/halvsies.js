/*
input: an array
output: an array with two elements, first one is first half of the
original array, second one is second half of the original array.

Examples: if there are an odd number of elements in the array the
extra element should be stored in the first array

Data Structure: should determine the middle index.
                - Divide length - 1 by 2 and then ceil it for odd num of elems
                - Create a slice from 0 to middle as first half
                - Create a slice from middle to end as second half
                - Push first half to array and second half to array
                then return array
*/

const log = console.log;

log(halvsies([1, 2, 3, 4])); // [[1, 2], [3, 4]]
log(halvsies([1, 5, 2, 4, 3])); // [[1, 5, 2], [4, 3]]
log(halvsies([5])); // [[5], []]
log(halvsies([])); // [[], []]

function halvsies(array) {
  let middleIdx = Math.ceil(array.length / 2);

  // Actually not necessary
  // if (array.length === 1) {
  //   return [[array[0]], []];
  // } else if (array.length === 0) {
  //   return [[], []];
  // }

  let firstHalf = array.slice(0, middleIdx);
  let secondHalf = array.slice(middleIdx);
  return [firstHalf, secondHalf]
}