/*
input: an array of positive integers
output: the sum of sums of each leading subsequence

Examples: self-evident from problem. If an array contains only one
value then only return that value.

Data Structure: need to separate out the arrays by leading subsequences.

Algorithm: should likely involve nested reduce calls.
Determine sum of all leading subsequences, add those sums together
to achieve overall sum.
*/

function sumOfSums(array) {
  let subsequences = mapToLeadingSubsequences(array);

  return subsequences.map(array => {
    return array.reduce((sum, next) => sum + next, 0);
  }).reduce((sum, next) => sum + next, 0);
}

function mapToLeadingSubsequences(array) {
  return array.map((number, index) => {
    return array.slice(0, index + 1);
  });
}

const log = console.log;

log(sumOfSums([3, 5, 2]));
log(sumOfSums([1, 5, 7, 3]));
log(sumOfSums([4]));
log(sumOfSums([1, 2, 3, 4, 5]));

// Book solution
// function sumOfSums(numbers) {
//   return numbers.map((number, index) => numbers.slice(0, index + 1)
//                                                 .reduce((sum, next) => sum + next))
//                                                 .reduce((sum, next) => sum + next);
// }