/*
input: a string
output: all of the substrings of that string which are palindromic

Examples: Consider all characters and be case-sensitive

Data Structure: The output should be a filtered version of the whole
substring array.
Algorithm: return the filtered array
*/

function palindromes(string) {
  let substrs = substrings(string);
  return substrs.filter(isPalindromic);
}

function substrings(string) {
  let resultArr = [];

  for (let index = 0; index < string.length; index++) {
    let currentSubstring = string.slice(index);
    resultArr = resultArr.concat(leadingSubstrings(currentSubstring));
  } 

  return resultArr;
}

function leadingSubstrings(string) {
  let chars = string.split('');

  return chars.map((char, index) => {
    return string.slice(0, index + 1);
  });
}

function isPalindromic(string) {
  return string === string.split('').reverse().join('') && string.length > 1;
}

const log = console.log;

log(palindromes('abcd'));
log(palindromes('madam'));
log(palindromes('hello-madam-did-madam-goodbye'));
log(palindromes('knitting cassettes'));