
// input: integer
// output: boolean value indicating if the number is palindromic or not

// Examples: function should return true if the number is only a single digit.

// Data Structures: should convert the integer into a string and then use palindromic algorithm used in previous exercises
// Algorithm: Split the string number into an array and then test to see if it is equal to itself reversed.


function isPalindromicNumber(num) {
  let strNum = String(num);

  return strNum === strNum.split('').reverse().join('');
}

console.log(isPalindromicNumber(34543));
console.log(isPalindromicNumber(123210));
console.log(isPalindromicNumber(22));
console.log(isPalindromicNumber(5));