/*
input: an array of strings
output: an array of strings with all vowels removed

Examples: vowel removal is case insensitive

Data Structure: return a new mapped array that uses a regular expression
to filter the values that will be included in the new string value.
*/

function removeVowels(arrOfStrings) {
  return arrOfStrings.map(filterString);
}

function filterString(string) {
  return string.replace(/[aeiou]/gi, '');
}

let logVals = [
  removeVowels(['abcdefghijklmnopqrstuvwxyz']),         // ["bcdfghjklmnpqrstvwxyz"]
  removeVowels(['green', 'YELLOW', 'black', 'white']),  // ["grn", "YLLW", "blck", "wht"]
  removeVowels(['ABC', 'AEIOU', 'XYZ']),                // ["BC", "", "XYZ"]
];

logVals.forEach(val => console.log(val));