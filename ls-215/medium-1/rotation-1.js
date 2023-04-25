/*
input: an array of values
output: a new array that has the first element of the input
array appended to the end.

Examples: Return undefined if argument not present, return undefined
if the type of input is not an array? What if the array is sparse?

Data Structure: use guard clause for non array inputs

Algorithm: if the input is not an array then return undefined as the
output of the function
  - else return the result of concatenating the subArr from the first index
  onward to the zeroth element at the end
*/

const log = console.log;

// log(rotateArray([1, 3, 5, 7])); // [3, 5, 7, 1]
// log(rotateArray([{a: 24}, 3, 'b', 4])); // [3, 'b', 4, {a: 24}]
// log(rotateArray([])); // []
// log(rotateArray([1, 4, , ,7])); // [4, , ,7, 1]

function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  } else if (arr.length === 0) {
    return [];
  }

  return arr.slice(1).concat(arr[0]);
}

log(rotateArray([7, 3, 5, 2, 9, 1]))
log(rotateArray(['a', 'b', 'c']))
log(rotateArray(['a']))
log(rotateArray([1, 'a', 3, 'c']))
log(rotateArray([{ a: 2 }, [1, 2], 3]))
log(rotateArray([]))
log(rotateArray())
log(rotateArray(1))

const array = [1, 2, 3, 4];
log(rotateArray(array));
log(array);


// Little experiment here
// function removeSparse(arr) {
//   return arr.filter(elem => elem !== undefined);
// }

// log(removeSparse([1, 4, , ,7]));