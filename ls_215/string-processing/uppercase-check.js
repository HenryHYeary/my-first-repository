/*
input: a string
output: a boolean value indicating whether or not all of the characters
inside the string are uppercase.

Examples: an empty string should register as true, spaces, exclamation
points and numbers do not factor into whether the rest of the string is
upper case.

Data Structure: should compare the string to a coerced uppercase version
of itself, if the two values are equal then return true, if not then
return false.
*/

function isUppercase(string) {
  return string === string.toUpperCase();
}

let logVals = [
  isUppercase('t'),               // false
  isUppercase('T'),               // true
  isUppercase('Four Score'),      // false
  isUppercase('FOUR SCORE'),      // true
  isUppercase('4SCORE!'),         // true
  isUppercase(''),                // true
];

logVals.forEach(val => console.log(val));

// Book solution

// function isUppercase(string) {
//   return !/[a-z]/.test(string);
// }