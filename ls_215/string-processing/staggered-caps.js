/*
input: a string
output: the string with a staggered capitalization scheme.
Every other character starting from the first should be capitalized
and should be followed by a lowercase or non alphabetical character.

Examples: Non alphabetic characters should not be changed but they should be
counted as characters for determining when to switch

Data Structure: should split the string into  an array, map individual characters
to the right value based on whether they are even or odd indices. Then join and return.
*/

function staggeredCase(string) {
  return string.split('').map((char, index) => {
    if (index % 2 === 0) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  }).join('');
}

const log = console.log;
log(staggeredCase('I Love Launch School!'));
log(staggeredCase('ALL_CAPS'));
log(staggeredCase('ignore 77 the 4444 numbers'));

// Same as book solution