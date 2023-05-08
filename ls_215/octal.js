/*
Problem: input: string notation for an octal
output: integer representation of that octal in base 10.

Examples: strings can start with leading zeroes. Any zero does not register
a value for that power/place in the number.

Data Structure: will need to iterate over the string and reduce the string to a
single integer value. Without using reduce this would be a number that you would
constantly keep adding to based on the result of the multiplication.

Algorithm: use the length of the string minus one to use as the power for the first
digit in the sequence, as you progress forward lower the power to raise the digit to by one
until you reach the zeroth power on the last digit. Add this up to a total integer count and
then return the result. Could try to refactor to reduce after you complete it normally.
*/

function octalToDecimal(numberString) {
  return numberString.split('').reduce((sum, next, index) => {
    return sum + Number(next) * Math.pow(8, numberString.length - index - 1);
  }, 0);
}

const log = console.log;
log(octalToDecimal('1'));           // 1
log(octalToDecimal('10'));          // 8
log(octalToDecimal('130'));         // 88
log(octalToDecimal('17'));          // 15
log(octalToDecimal('2047'));        // 1063
log(octalToDecimal('011'));         // 9