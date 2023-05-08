/*
input: an array of integers
output: the multiplicative average of all of the numbers in an array
(float fixed to third digit)

Examples: What if more than one array is present? What if the array is empty,
what if the array is sparse? What if the argument(s) are a different type?

Data Structure: should reduce all of the values into a multiplicative sum
                - divide the total of the sum by the length of the array
                - return the value
*/

const log = console.log;
log(showMultiplicativeAverage([3, 5]));
log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));

function showMultiplicativeAverage(array) {
  let multiplicativeSum = array.reduce((sum, next) => sum * next, 1);

  return String((multiplicativeSum / array.length).toFixed(3));
}

