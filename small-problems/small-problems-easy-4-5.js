
function isPalindrome(string) {
  return string.split('').reverse().join('') === string;
}


const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
let DIGITS = '1234567890';

function removeNonLetterNumberSpaces(string) {
  let cleanString = '';

  for (let i = 0; i < string.length; i++) {
    if (ALPHABET.includes(string[i]) || ALPHABET.toUpperCase().includes(string[i])) {
      cleanString += string[i];
    } else if (DIGITS.includes(string[i])) {
      cleanString += string[i];
    }
  }

  return cleanString;
}

function isRealPalindrome(string) {
  let cleanString = removeNonLetterNumberSpaces(string.toLowerCase());

  return isPalindrome(cleanString);
}