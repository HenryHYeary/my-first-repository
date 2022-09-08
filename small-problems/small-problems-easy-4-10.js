/*
input: a string
output: string with the first and last letters of every word swapped with each other

examples: can assume that every word contains at least one letter and string will contain at least one word, nothing but
words or spaces and there are not leading trailing or repeated spaces.

Data Structure: will need to split every word into an array and then split every letter from every word into an array as well to detect the first and the last letters.

Algorithm: Use a for loop or other iterative loop to go through every word, then another iterative loop to check the index of every character
Use an if statement that reassigns the zeroth element to the element.length-1th element
*/

function swap(string) {
  let wordsArr = string.split(' ');

   let swappedWordsArr = wordsArr.map(word => {
    let swappedWord = '';

    switch(word.length) {
      case 1: swappedWord = word;
      break;
      case 2: swappedWord = word[1] + word[0];
      break;
      case 3: swappedWord = word[2] + word[1] + word[0];
      break;
      case 4: swappedWord = word[3] + word[1] + word[2] + word[0];
      break;
      default: swappedWord = word[word.length - 1] + word.substring(1, word.length - 2) + word[0];
      break;
    }
    return swappedWord;
  });

  return swappedWordsArr.join(' ');
}



console.log(swap('Oh what a wonderful day it is'));
console.log(swap('Abcde'));
console.log(swap('a'));
