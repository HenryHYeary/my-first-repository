/*
input: a string
output: the same string but with a staggered capitalization string

Examples: should only alternate between capitalization on every new
alphabetic character that appears.

Data Structure: create a separate count variable of the total number
of characters that have been detected in the string so far. Any time that
number is even capitalize the next char, any time it is odd coerce it to lowercase
*/

function staggeredCase(string) {
  let totalAlphaCars = 0;
  return string.split('').map(char => {
    if ((/[a-z]/i).test(char)) {
      totalAlphaCars += 1;
    }

    if (totalAlphaCars % 2 === 1) {
      return char.toUpperCase()
    } else {
      return char.toLowerCase();
    }
  }).join('');
}

const log = console.log;
log(staggeredCase("I Love Launch School!"));
log(staggeredCase('ALL CAPS'));
log(staggeredCase('ignore 77 the 444 numbers'));