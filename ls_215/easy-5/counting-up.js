/*
input: an integer (always positive in this case)
output: all of the integers between 1 and the argument inclusive

Examples: More than one arg? No arg? Different input type? Negative?
Special number val? 0?

Data Structure: create a result array at the beginning of the function
that is initially blank.

Algorithm: iterate from 1 to the input integer.
          - on each iteration push the number to the result array.
          - return the result array.
*/

const log = console.log;

log(sequence(7)); // [1, 2, 3, 4, 5, 6, 7]
log(sequence(4)); // [1, 2, 3, 4]
log(sequence(8)); // [1, 2, 3, 4, 5, 6, 7, 8]

log(sequence(5));
log(sequence(3));
log(sequence(1));

function sequence(number) {
  let resultArr = [];

  for (let count = 1; count <= number; count++) {
    resultArr.push(count);
  }

  return resultArr;
}
