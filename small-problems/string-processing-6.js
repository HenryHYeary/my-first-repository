/*
input: a string
output: a string with a staggered capitalization scheme, every other character starting from the first
should be upper case with the next one being a lowercase or non-alphabetic character.

Examples: Non-alphabetic characters should not be changed, but  should be counted as characters for determining when to switch between
upper and lower case.

Data Structure: should convert the string to an array and then use the map function to capitalize every other letter.
This should be an array of characters.

Algorithm: should use a for loop within the map method to make sure if the index is even then the character should be made upper case
if it is odd then it should be lowercase.
*/

function staggeredCase(string) {
  let charsArr = string.split('');
  let resultString = '';

  for (let i = 0; i < charsArr.length; i++) {
    if (i % 2 === 0) {
      resultString += charsArr[i].toUpperCase();
    } else {
      resultString += charsArr[i].toLowerCase();
    }
  }

  return resultString;
}

console.log(staggeredCase('I Love Launch School!'));
console.log(staggeredCase('ALL_CAPS'));
console.log(staggeredCase('ignore 77 the 4444 numbers'));