/*
input: same as previous exercise
output: this time non alphabetical characters should not count in determining whether the next character is capitalized or not.

Examples: they seem to match the problem description given

Data Structure: should remove all non alphabetic characters for an analysis string.

Algorithm: use a regular expression or a filter function to filter out every character that is not in the alphabet.
Analyze the indexes from that string to determine whether or not to convert the string to a lowercase or uppercase letter.
*/



function staggeredCase(string, onlyLetterCountToggle = true) {
  let needUpper = true;

  if (onlyLetterCountToggle === true) {
    return string.split('').map(char => {
      if (isLetter(char)) {
        if (needUpper === true) {
          needUpper = false;
          return char.toUpperCase();
        } else {
          needUpper = true;
          return char.toLowerCase();
        }
      } else {
        return char;
      }
    }).join('');
  } else {
    return string.split('').map(char => {
      if (needUpper === true) {
        needUpper = false;
        return char.toUpperCase();
      } else {
        needUpper = true;
        return char.toLowerCase();
      }
    }).join('');
  }
} 

function isLetter(char) {
  return char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z';
}

console.log(staggeredCase("I Love Launch School!"));
console.log(staggeredCase('ALL CAPS'));
console.log(staggeredCase('ignore 777 the 444 numbers'));

console.log(staggeredCase("I Love Launch School!", false));
console.log(staggeredCase('ALL_CAPS', false));
console.log(staggeredCase('ignore 777 the 444 numbers', false));



// Alternate solution

function staggeredCase2(string, onlyCharCount = true) {
  let needsCap = true;

  if (onlyCharCount === true) {
    return string.split('').map(char => {
      if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') {
        if (needsCap === true) {
          needsCap = false;
          return char.toUpperCase();
        } else {
          needsCap = true;
          return char.toLowerCase();
        }
      } else {
        return char;
      }
    }).join('');
  } else {
    return string.split('').map((char, index) => {
      if (index % 2 === 0) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    }).join('');
  }
}