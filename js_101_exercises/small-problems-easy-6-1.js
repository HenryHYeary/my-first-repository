/*
input: A string
output: a string with every character doubled.

Examples: If a space is passed in, then also double the space character.
If a blank string is passed in, then return a blank string.

Data Structure: create a new variable for the result string to which you will pass each letter along with its double.

Algorithm: Use a for loop or forEach loop to iterate over the string and then add each character along with another instance of the character to the result string.
*/

function repeater(string) {
  resultString = '';

  for (let i = 0; i < string.length; i++) {
    resultString += string[i] + string[i];
  }

  return resultString;
}

console.log(repeater('Hello'));
console.log(repeater('Good job!'));
console.log(repeater(''));