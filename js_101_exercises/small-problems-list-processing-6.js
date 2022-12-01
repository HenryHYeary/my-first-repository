/*
input: a string
output: a list of all of the palindromic substrings that are possible in the string that was passed as an input.

Examples: it looks like hyphens should count as a valid character, single characters are not palindromes, and we should pay attention to the case.

Data Structure: Should create a blank array variable to pass in each value.

Algorithm: should use the substrings function from the previous exercise and should use a for loop to iterate over every possible substring.
Should return whether the reversed version of that substring is the same as the normal string.
*/

function substrings(string) {
  let resultArr = [];

  for (let i = 0; i < string.length; i++) {
    let substring = string.substring(i);
    resultArr = resultArr.concat(leadingSubstrings(substring));
  }

  return resultArr;
}

function leadingSubstrings(string) {
  let resultArr = [];

  for (let i = 1; i <= string.length; i++) {
    resultArr.push(string.slice(0, i));
  }

  return resultArr;
}

function isPalindrome(string) {
  return string.length > 1 && string.toLowerCase().split('').reverse().join('') === string.toLowerCase();
}

function palindromes(string) {
  let resultArr = [];
  let substringArr = substrings(string);

  substringArr.forEach(substr => {
    if (isPalindrome(substr)) {
      resultArr.push(substr);
    }
  });

  return resultArr;
}

console.log(palindromes('abcd'));
console.log(palindromes('madam'));
console.log(palindromes('hello-madam-did-madam-goodbye'));
console.log(palindromes('knitting cassettes'));

