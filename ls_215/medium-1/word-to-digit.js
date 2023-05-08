/*
input: a string
output: a new string with every occurence of a number word replaced
with the number itself

Examples: What if the input is not a string, what if there is no input?
What if there are numbers or negative numbers in an example?

Data Structure: Should use regex to match string to any one of the number
digits. Also have an array of number values (corresponding number is index + 1)
should also keep an array of digit numbers ready within the function.

- We have the numbers (array with index + 1 equal to the actual number)
- Replace with a subfunction that determines the correct number.

Algorithm: Iterate through the words in the number words array.
            - for each of them replace any matches in the string
            with the subfunction value of the word.
            - Subfunction is index of the word in the array plus 1
*/

const log = console.log;

const numberWords = ['one', 'two', 'three', 'four', 'five',
                      'six', 'seven', 'eight', 'nine'];

log(wordToDigit('Call me at nine one one.')); // Call me at 9 1 1.
log(wordToDigit('Four burgers?')); // 4 burgers?
log(wordToDigit('Please call me at five five five one two three four. Thanks.'));

function numberWordToNum(string) {
  return String(numberWords.indexOf(string) + 1);
}

function wordToDigit(string) {
  numberWords.forEach(word => {
    let wordRegex = new RegExp(word, 'gi');
    string = string.replace(wordRegex, numberWordToNum(word));
  });

  return string;
}