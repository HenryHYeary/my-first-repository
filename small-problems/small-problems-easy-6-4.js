/*
input: a string
output: one or two characters representing the middle of the string (one if the string has an odd length, two if even).

Examples: If a space is located at the middle of a the string, the function should return that space.
If a single character is passed into the function then the function should return only that character.

Data Structure: should declare a new variable and assign it to a blank string value.

Algorithm: Use a for loop to iterate over every character, and use an if statement to determine whether the length is even or odd.
Depending on the length add the middle two characters or the the middle character to the blank string variable and then return that variable.
*/

function centerOf(string) {
  let middleChar = '';

  if (string.length % 2 === 0) {
    middleChar = string.slice((string.length / 2) - 1, (string.length / 2) + 1)
  } else {
    middleChar = string[Math.floor(string.length / 2)];
  }

  return middleChar;
}



function log(arr) {
  arr.forEach(element => console.log(element))
}

let testCases = [
centerOf('I Love JavaScript'), // "a"
centerOf('Launch School'),     // " "
centerOf('Launch'),            // "un"
centerOf('Launchschool'),      // "hs"
centerOf('x'),                 // "x"
]

log(testCases);