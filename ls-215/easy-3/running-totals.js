/*
input: an array of integers
output: an array with the same number of elements but with each element's
value being the running total from the original array

Examples: What about if the input is not an array or if there is more than
one arg? Or inputs of different types of args?

Data Structures: Use the map method to return a new array with the same
                - number of elements but not transformed
                - need to increment a running total and return the current
                value of that running total during the correct spot in
                the array

Algorithm: Return a map call of the originally passed in array
          - the return result of the map should be a reduce call of
          the first element up to the current call
          - can use array.slice to ensure the correct sub array is added
          up (keep track of the current index)
*/

const log = console.log;
log(runningTotal([2, 5, 13])); // [2, 7, 20]
log(runningTotal([14, 11, 7, 15, 20])); // [14, 25, 32, 47, 67]
log(runningTotal([3])); // [3]
log(runningTotal([])); // []

log(runningTotal([1, 5, 4, 7])); // [1, 6, 10, 17]
log(runningTotal([2, 2, 2, 2])); // [2, 4, 6, 8]


function runningTotal(inputArray) {
  return inputArray.map((_, index) => {
    return inputArray.slice(0, index + 1)
                      .reduce((sum, next) => sum + next, 0);
  });
}
