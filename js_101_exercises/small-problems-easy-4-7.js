
// input: an array of integers
// output: an array of integers with each subsequent integer representing the running total

// Examples: if only one number is contained in the array, return an array containing only that number
// Also if no number is passed into the array then return a blank array as well

// Data Structures: will need to create an empty to push each value into after the addition of previous integers has occurred
// Algorithm: should use a looping (iterative) method to make sure all previous numbers are added together along with the current number

function runningTotal (arr) {
  let result = [];
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
   total += arr[i];
   result.push(total);
  }

  return result;
}

console.log(runningTotal([2, 5, 13]));
console.log(runningTotal([14, 11, 7, 15, 20]));
console.log(runningTotal([3]));
console.log(runningTotal([]));