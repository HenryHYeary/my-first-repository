/*
input: a string of characters
output: an array of all of the leading substrings present within the string.

Examples: first element will always be one character and increment
by one for every additional character added on to the leading substring.

Data Structure: Potential to split up the string into an array of indidual
characters and then map that array to the first characters joined together

Algorithm: need to use slice method with join to join together characters and map them
into the array.
*/

function leadingSubstrings(string) {
  let chars = string.split('');

  return chars.map((char, index) => {
    return string.slice(0, index + 1);
  });
}

const log = console.log;

log(leadingSubstrings('abc'));
log(leadingSubstrings('a'));
log(leadingSubstrings('xyzzy'));

// Book solution
// function leadingSubstrings(string) {
//   let substrings = [];
//   for (let length = 1; length <= string.length; length++) {
//     substrings.push(string.slice(0, length));
//   }

//   return substrings;
// }