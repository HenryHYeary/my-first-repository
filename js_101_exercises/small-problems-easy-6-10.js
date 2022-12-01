/*
input: a string
output: a string with each word of five or more letters reversed (letters reversed).

Examples: It looks like walk and the do not get reversed in the second example and spaces should still separate words as normal.

Data Structure: should create a new blank string variable to add each word to.

Algorithm: Should break the string into an array of words, should then use forEach or map to reverse words longer or equal to five letters
and then add those words to the string.
*/

function reverseWords(string) {
  let newString = ''
  let wordsArr = string.split(' ');

  wordsArr.forEach(word => {
    let charsArr = word.split('');
    if (word.length >= 5) {
      newString += `${charsArr.reverse().join('')} `;
    } else {
      newString += `${charsArr.join('')} `;
    }
  });

  return newString;
}

console.log(reverseWords('Professional'));
console.log(reverseWords('Walk around the block'));
console.log(reverseWords('Launch School'));
