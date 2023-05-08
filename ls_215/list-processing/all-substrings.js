/*
input: a string of characters
output: an array of all of the possible substrings in the string of characters.

Examples: for every character in the string there should be an individual
character substring as well as a combination of that character with every char
that comes after.

Data Structure: should split out every character in the string into an array.

Algorithm: Map over the array of single characters to form the leading substrings on
a per character basis. Return this mapped array as the result.
*/

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

const log = console.log;
log(substrings('abcde'));