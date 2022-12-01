/*
input: a string
output: string with the first and last letters of every word swapped with each other

examples: can assume that every word contains at least one letter and string will contain at least one word, nothing but
words or spaces and there are not leading trailing or repeated spaces.

Data Structure: will need to split every word into an array.

Algorithm: Use a for loop or other iterative loop to go through every word, then another iterative loop to check the index of every character
Use an if statement that reassigns the zeroth element to the element.length-1th element
*/

function swap(string) {
  let wordsArr = string.split(' ');

   let swappedWordsArr = wordsArr.map(word => {
    switch (word.length) {
      case 1: return word;
      case 2: return word[1] + word[0];
      default: return word[word.length - 1] + word.slice(1, -1) + word[0];
    }
  });

  return swappedWordsArr.join(' ');
}

function log(arr) {
  arr.forEach(element => console.log(element));
} 

let testCases = [
swap('Oh what a wonderful day it is'),  // "hO thaw a londerfuw yad ti si"
swap('Abcde'),                          // "ebcdA"
swap('a'),                              // "a"
];

log(testCases);




