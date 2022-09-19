/*
input: a sentence string argument.
output: the same string with every occurence of a number word converted to its corresponding digit character.

Examples: each number should be separated by a space just like the normal word would be.

Data Structure: could create an object containing each number and its respective number word so the numbers can be easily matched.

Algorithm: should convert the string into an array and then use the map method to transform the keys to their values from the constant array.
*/

const WORDS_TO_DIGITS = {
  zero: '0',
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
}

function wordToDigit(sentence) {
  let wordsArr = sentence.split(' ');

  return wordsArr.map(word => {
    let analysisWord = word.split('').filter(char => {
      char.toLowerCase();
      return char >= 'a' && char <= 'z';
    });
    if (Object.keys(WORDS_TO_DIGITS).includes(analysisWord)) {
      return WORDS_TO_DIGITS[word];
    } else {
      return word;
    }
  }).join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));