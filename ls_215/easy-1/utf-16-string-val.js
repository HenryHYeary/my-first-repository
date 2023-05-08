/*
input: a string
output: the sum of the utf-16 values of every character in the string

Examples: code should work with non ASCII characters from utf-16
if an empty string is passed in then it should return 0

What if the input is not a string? Will there always be exactly 1 input?
What if there is no input, what should I return then?

If it isn't a string coerce it to a string and do the same process.
If it's an array coerce every element into a string and then do the same
addition process for all strings in the new array.
If it's an object coerce every value to a string and add it all into one
string.

Data Structure: Should iterate through every individual character of the
string and add the character code of the character to a running total.

Algorithm: Guard clauses for if the input is not a string. 
*/

function utf16Value(input) {
  if (Array.isArray(input)) {
    input = input.map(String).reduce((total, next) => {
      return total.concat(next);
    }, '');
  } else if (typeof input === 'object') {
    let inputString = '';
    for (let key in input) {
      inputString = inputString.concat(input[key]);
    }
    input = inputString;
  } else if (typeof input !== 'string') {
    input = String(input);
  }

  let runningTotal = 0;
  input.split('').forEach(char => {
    runningTotal += char.charCodeAt(0);
  });

  return runningTotal;
}

const log = console.log

log(utf16Value({a: "howdy", b: "partner"}));
log(utf16Value(['hey', 'jude']));
log(utf16Value(96));
log(utf16Value(true));

log(utf16Value("Four score"));
log(utf16Value("Launch School"));
log(utf16Value('a'));
log(utf16Value(''));

