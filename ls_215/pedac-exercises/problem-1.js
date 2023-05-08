/*
input: a phone number as a string
output: a string of all of the numbers sequentially with no extra symbols
or spaces.

Examples: - less than 10 digits, automatically bad num
        - exactly 10 digits assume that it is good
        - is 11 digits 
          - if first number is 1 then trim 1 and use remaining digits
          - otherwise if the first num is not 1 then it is a bad num
        - more than 11 digits bad num

        - correct numbers should be a string containing only the 10 digits
        of the valid number, if it is a bad number then return 10 0s in a row
        - unsure about other error cases such as different data types.

        '111' --> less than 10 digits, return '00...0'
        '1111111111' --> return the num
        '12222222222' --> slice off the leading 1 and return num
        '22222222222' --> bad number return ten 0s
        '122222222222' --> more than 11 bad number return ten 0s.

        What about non numbers? (bad num I guess is returned?)

        What if invalid characters are letters or something else not included
        in the spaces, dash dot, and parentheses category?

        What about positioning of numbers? (3, 3, 4) right?

Data Structure: String filtered primarily by regex
 - Filter out everything except for digits.
 Test digit string length to see if it is 10 or 11, if not,
 then return 0s
  
Algorithm: if the length is 11 digits check the first digit, if it is one
then slice off the 1 and return the remaining 10, if not then return 0s.
If it is more or less than 10 or 11 return 0s (null condition).
*/

// Test cases used in video
const log = console.log;
// less than 10
log(cleanNumber(''));
log(cleanNumber('-----'));
log(cleanNumber('111'));
log(cleanNumber('111111111a'));
// 10 digits
log(cleanNumber('1111111111'));
log(cleanNumber('    11--- 111    ::abcd11111'));
// 11 digits
log(cleanNumber('12222222222'));
log(cleanNumber('22222222222'));
// more than 10
log(cleanNumber('111111111111'));

function cleanNumber(string) {
  let validChars = /[0-9]/g;

  let cleanedArrOfDigits = string.match(validChars) || [];

  if (cleanedArrOfDigits.length < 10 || cleanedArrOfDigits.length > 11) {
    return '0000000000';
  }

  if (cleanedArrOfDigits.length === 11) {
    if (cleanedArrOfDigits[0] === '1') {
      return cleanedArrOfDigits.join('').slice(1);
    } else {
      return '0000000000';
    }
  }

  return cleanedArrOfDigits.join('');
}