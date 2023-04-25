/*
input: A string
output: A new string with every five or more letter word from the
string with its letters in reverse order.

Examples: What if there are non alphabetical characters in the string?
What if there is more than one input. What if the data type of the input
is different? What if it is an empty string?

Data Structure: should separate the string into an array of words
                - split on whitespace
                - Map the resulting array
                - Reverse any word that has a length of five or more
                - Join the words together into a string and return the string
*/

const log = console.log;

// log(reverseWords('Bartleby')); // ybeltraB
// log(reverseWords('How do you do')); // How do you do
// log(reverseWords('I love   JavaScript')); // I love tpircSavaJ

function reverseWords(string) {
  let wordsArr = string.split(/\s+/);

  let reversedLongWords = wordsArr.map(word => {
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    } else {
      return word;
    }
  });

  return reversedLongWords.join(' ');
}

log(reverseWords('Professional'));
log(reverseWords('Walk around the block'));
log(reverseWords('Launch School'));
