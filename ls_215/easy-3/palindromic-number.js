/*
input: an integer
output: a boolean value indicating whether or not the integer
is palindromic, false if it is not.

Examples: single digit numbers should always return true.

Data Structure: should coerce the integer to a string, split the string
                and reverse the array then join.
                - Convert the resulting string into a number and then
                return whether or not that number is equal to the original input
*/

const log = console.log;
log(isPalindromicNumber(34543)); // true
log(isPalindromicNumber(123210)); // false
log(isPalindromicNumber(22)); // true
log(isPalindromicNumber(5)); // true

log(isPalindromicNumber(4444)); // true
log(isPalindromicNumber(1234)); // false

function isPalindromicNumber(int) {
  let reversedIntString = String(int).split('').reverse().join('');

  return String(int) === reversedIntString;
}
