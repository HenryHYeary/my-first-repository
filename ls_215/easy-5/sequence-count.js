/*
input: two integers, the first arg is a count
second is the starting number  of a sequence
output: an array containing the same number of elements as the count arg
with the value of each element being a multiple of the starting
num.

Examples: What if the first number is negative? What if there are more
than 2 arguments? What if one of the arguments is a different type?
NaN, Infinity, and -Infinity?

Data Structure: create a blank array that will be modified throughout
iteration

Algorithm: check to see if the count number is greater than 0.
          - if it is not greater than 0 then return an empty array.
          - if it is greater than 0, then iterate from 1 to the target
          number, multiply the current count by the multiple number
          and append each value to the new array that will be returned.
*/

const log = console.log;

// log(sequence(4, 3)); // [3, 6, 9, 12]
// log(sequence(2, -8)); // [-8, -16]
// log(sequence(5, 0)); // [0, 0, 0, 0, 0]
// log(sequence(0, 3)); // []

function sequence(count, multiple) {
  let resultArr = [];

  if (count <= 0) {
    return [];
  }

  for (let increment = 1; increment <= count; increment++) {
    resultArr.push(increment * multiple);
  }

  return resultArr;
}

log(sequence(5, 1));
log(sequence(4, -7));
log(sequence(3, 0));
log(sequence(0, 1000000));