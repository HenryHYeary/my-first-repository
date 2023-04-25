/*
input: a string
output: the string where all consonant characters are doubled

Data Structure: should split the string into an array of characters

Algorithm: Map the array of characters
          - use a regex and a secondary regex to determine if letter
          is a consonant
          - if it is map the letter to a double of itself
          - Join the string into an output string
          - return the string
*/

const log = console.log;

log(doubleConsonants('String')); // SSttrrinngg
log(doubleConsonants('Hello!')); // HHellllo!
log(doubleConsonants('Hello-World!')); // "HHellllo-WWorrlldd!"
log(doubleConsonants('Marry me')); // MMarrrryy mme
log(doubleConsonants('July 4th')); // JJullyy 4tthh
log(doubleConsonants(''));

function doubleConsonants(string) {
  let charsArr = string.split('');
  let consonantRegex = /[bcdfghjklmnpqrstvwxyz]/gi;

  return charsArr.map(char => {
    if (consonantRegex.test(char)) {
      return char.repeat(2);
    } else {
      return char;
    }
  }).join('');
}

