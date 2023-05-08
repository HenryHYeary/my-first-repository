/*
input: a positive integer
output: a string of alternating 1s and 0s
which always begins with a 1.
Length of the string should match the given
integer

Examples: Examples are straightforward, if the number is odd
then the last digit should be a 1, if the number is even
then the last digit should be a 0

Data Structure: create a variable assigned to an empty string.
Iterate from 1 to the number and if the number is odd then add a 1
if the number is even then add a 0.

Algorithm: - iterate through the numbers
            - check each number and add a 1 or a zero based on
            divisibility
*/

function stringy(n) {
  let resultString = '';

  for (let count = 1; count <= n; count++) {
    if (count % 2 === 1) {
      resultString += '1';
    } else {
      resultString += '0';
    }
  }

  return resultString;
}

const log = console.log;

log(stringy(6));
log(stringy(9));
log(stringy(4));
log(stringy(7));