/*
input: an array of strings
output: a new array containing each of the strings without any vowels

Examples: should work with all cases, if all elements are vowels then return that element as a blank string

Data Structure: should create a constant variable containing all of the vowels.
Should also create a blank array variable within the function that we can push all of the values to.

Algorithm: should use a forEach or for loop to iterate over every element of the passed array.
If using forEach then will need to split each string element to analyze every character, could use filter within the forEach loop.
Should join the remaining characters in the string and push the resulting string to the empty array variable created earlier.
*/

const VOWELS = 'aeiou';

function removeVowels(arr) {
  let resultArr = [];

  arr.forEach(string => {
    resultArr.push(noVowelString(string));
  });

  return resultArr;
}

function noVowelString (string) {
  let charsArr = string.split('');
  let noVowelArr = charsArr.filter(char => !VOWELS.includes(char.toLowerCase()));

  return noVowelArr.join('');
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));