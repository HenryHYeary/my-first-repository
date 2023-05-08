/*
input: a string argument
output: a new string that contains the value of the original
string but with all duplicate characters collapsed into a single char

Examples: looks like there's no need to account for spaces or word separations

What if there are spaces, non letter characters, numbers, multiple inputs
or inputs of different types besides strings.

Data Structure: should split the string into an array of characters

Algorithm: Filter out the array
          - check to see that the index of the first appearance of the
          character matches the current index of the character if it does
          not then the character is a duplicate
          - this is a problem because it is consecutive duplicate characters
          instead of trying to filter an array. Do regular for loop iteration and
          append each character to a new string.
*/

function crunch(string) {
  let crunchedString = '';

  for (let index = 0; index < string.length; index++) {
    if (string[index] !== string[index + 1]) {
      crunchedString += string[index];
    }
  }

  return crunchedString;
}

const log = console.log;
log(crunch('ddaaiillyy ddoouubbllee'));
log(crunch('444abcabccba'));
log(crunch('ggggggggggggggg'));
log(crunch('a'));
log(crunch(''));