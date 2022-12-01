/*
input: a string
output: the string with every consonant but not vowel doubled.

Examples: if a blank string is passed in as an argument, then it should return a blank string.
Hyphens and spaces should not be doubled.

Data Structure: should create a new variable with a blank string to use as the result. 
Should use a constant variable which would be a string containing every vowel.

Algorithm: Should use a for loop combined with an if statement to make sure every consonant is logged.
*/

const VOWELS = 'aeiou';

function doubleConsonants(string) {
  let returnString = '';

  for (let i = 0; i < string.length; i++) {
    if (!VOWELS.includes(string[i]) && string[i].toLowerCase() >= 'a' && string[i].toLowerCase() <= 'z') {
      returnString += string[i] + string[i];
    } else {
      returnString += string[i];
    }
  }

  return returnString;
}

console.log(doubleConsonants('String'));
console.log(doubleConsonants('Hello-World'));
console.log(doubleConsonants('July 4th'));
console.log(doubleConsonants(''));