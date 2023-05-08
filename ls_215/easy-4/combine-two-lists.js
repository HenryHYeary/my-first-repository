/*
input: two arrays
output: an interleaved version of the original array
(alternating elements)

Examples: Alternate different elements no matter the type,
both input arrays will always be arrays, are non-empty and have the same number of elements

Data Structure: create a result array to push all of the correct values on to

Algorithm: for the length of the first array (since both arrays are the same length)
          - add the first element from the first array to the result array, followed
          by the element at the corresponding index in the second array.
*/

const log = console.log;
log(interleave([1, 2, 3], ['a', 'b', 'c'])); // [1, "a", 2, "b", 3, "c"]
log(interleave([5, 6, 7], [{a: 24}, 'abc', 91])); // [5, {a: 24}, 6, 'abc', 7, 91]

function interleave(arr1, arr2) {
  let resultArr = [];

  for (let index = 0; index < arr1.length; index++) {
    resultArr.push(arr1[index], arr2[index]);
  }

  return resultArr;
}


