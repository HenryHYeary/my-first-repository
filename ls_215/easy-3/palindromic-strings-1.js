/*
input: a string
output: a boolean value indicating whether or not the string is
palindromic or not

Examples: all characters matter and case matters in this problem
          - if there are any discrepancies then false should be returned

Data Structure: should assign a variable to a comparison string
                - if the original input string is completely the same
                as the comparison string then return true, if not then
                return false
*/

const log = console.log;
log(isPalindrome('madam')); // true
log(isPalindrome('Madam')); // false
log(isPalindrome("madam i'm adam")); // false
log(isPalindrome('356653')); // true
log(isPalindrome('Racecar')); // false
log(isPalindrome('RacecaR')); // true

function isPalindrome(string) {
  let comparisonString = string.split('').reverse().join('');

  return comparisonString === string;
}


