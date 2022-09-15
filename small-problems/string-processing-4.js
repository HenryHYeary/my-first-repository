/*
input: a string.
OutputL a a string with the first character of every word capitalized and all subsequent characters in lowercase.

Examples: A word is any sequence of non-whitespace characters. If a non alphabetical character
is in front of the word then the word should not be capitalized, if a character is capitalized later on in the word
then it should be converted to lowercase.

Data Structure: should use the split function to separate out each individual word
then use map to capitalize the first character of each word and convert the rest of the string to lowercase.
*/

function wordCap(string) {
  let wordArr = string.split(' ');

  let resultArr = wordArr.map(word => {
    return `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`;
  });

  return resultArr.join(' ');
}

console.log(wordCap('four score and seven'));
console.log(wordCap('the javaScript language'));
console.log(wordCap('this is a "quoted" word'));