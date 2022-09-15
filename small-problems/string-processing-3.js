/*
input: a string
output: an object containing properties that represent the number of characters in the string that are lowercase
one representing uppercase characters and one represent the number of characters that are either.

Examples: if a blank string is passed, all numbers should be zero.
Spaces and nonalphabetic characters should be considered neither uppercase or lowercase.

Data Structure: should create an object with a lowercase, uppercase, and neither property.
Use a forEach loop on the string after splitting it into an array, and use an if else if statement
to determine which are uppercase lowercase or neither and increment the object values accordingly.
*/

function letterCaseCount(string) {
  let count = {lowercase: 0, uppercase: 0, neither: 0};
  let charsArr = string.split('')

  charsArr.forEach(char => {
    if (char >= 'a' && char <= 'z') {
      count['lowercase'] += 1;
    } else if (char >= 'A' && char <= 'Z') {
      count['uppercase'] += 1;
    } else {
      count['neither'] += 1;
    }
  });

  return count;
}

console.log(letterCaseCount('abCdef 123'));
console.log(letterCaseCount('AbCd +Ef'));
console.log(letterCaseCount('123'));
console.log(letterCaseCount(''));