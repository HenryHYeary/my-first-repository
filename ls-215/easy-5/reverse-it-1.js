/*
input: a string
output: the string of words in reversed order (string)

Examples: What if there is punctuation or other non alpha characters
present? What about consecutive spaces between words? No arg? More than
one arg? Different types?

Data Structure: Should create an array of words (split on consecutive whitespace)

Algorithm: Should clean each word of non alphabetical characters
          - reverse that resulting array
          - join that array into a string
          - return the resulting string
*/

const log = console.log;

// log(reverseSentence("How are you?")); // you are How
// log(reverseSentence('')); // ''
// log(reverseSentence("Pleased    to meet you")); // you meet to Pleased

function reverseSentence(string) {
  let wordsArr = string.split(/\s+/);
  let cleanedWordsArr = wordsArr.map(string => {
    return string.replace(/[^a-z]/gi, '');
  })

  return cleanedWordsArr.reverse().join(' ');
}

log(reverseSentence(''));
log(reverseSentence('Hello World'));
log(reverseSentence('Reverse these words'));