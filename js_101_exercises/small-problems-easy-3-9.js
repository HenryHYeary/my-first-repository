
// input: string containing alphabetic and non-alphabetic characters
// output: a string without the non-alphabetic characters (if consecutive non-alph characters then there should be only one space between letters)

// Examples: only one space between characters and where multiple non-alphabetic chars are
// Data: should return a new string, so a variable representing a blank string called result should suffice
// Can also use two variables for uppercase and lowercase alphabetic characters
// Algorithm: can use the .includes() method from the alphabetic arrays to verify that a character is alphabetical,
// next need to verify that if the next character does not match those arrays then a space should be logged instead,
// next need to check to verify that the character after a space is not a space, only the next alphabetic char should be logged in that case

const ALPHA = 'abcdefghijklmonpqrstuvwxyz';
const UPPERALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let alphaArray = ALPHA.split('');
let upperAlphaArray = UPPERALPHA.split('');

function cleanUp (string) {
  result = ''

  for (let i = 0; i < string.length; i++) {
    if (alphaArray.includes(string[i]) || upperAlphaArray.includes(string[i])) {
     result += string[i];
    } else if (result[result.length - 1] !== ' ') {
      result += ' ';
    }
  }

  return result;
}


console.log(cleanUp("---what's my +*& line?"));