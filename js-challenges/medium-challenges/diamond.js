/*
input: a letter
output: a diamond shape made of all of the letters leading up to and including
the input letter

Examples: There will always be a newline character at the bottom of every diamond
formed.

Data Structure: should store the alphabet as a static property on the diamond constructor.
create a local result string variable within the make diamond method.

Algorithm: define make diamond method, takes letter argument
define result string variable, set it to empty string
Find index of the letter argument within the alphabet

iterate from 0th index of alphabet to index of letter argument
  if current letter is A
    input number of spaces equal to index of letter arg on either side of the A
    add to result string
  else 
    input number of spaces equal to the difference between the index of the letter argument and the
    current index on either side of the two letters
    also input number of spaces equal to current index in between the two letters.
    add to result string
  end
end

return result string
*/

"use strict";

class Diamond {
  static ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  static makeDiamond(letter) {
    let resultString = '';
    let targetIndex = this.ALPHABET.indexOf(letter);
    let middleSpace = 1;

    for (let index = 0; index <= targetIndex; index++) {
      if (index === 0) {
        resultString += `${' '.repeat(targetIndex)}A${' '.repeat(targetIndex)}\n`;
      } else if (index === 1){
        resultString += `${' '.repeat(targetIndex - index)}B` +
        ` B${' '.repeat(targetIndex - index)}\n`;
      } else {
        middleSpace += 2;
        resultString += `${' '.repeat(targetIndex - index)}${this.ALPHABET[index]}` + 
        `${' '.repeat(middleSpace)}${this.ALPHABET[index]}${' '.repeat(targetIndex - index)}\n`;
      }
    }

    for (let index = targetIndex - 1; index >= 0; index--) {
      if (index === 0) {
        resultString += `${' '.repeat(targetIndex)}A${' '.repeat(targetIndex)}\n`;
      } else if (index === 1){
        resultString += `${' '.repeat(targetIndex - index)}B` +
        ` B${' '.repeat(targetIndex - index)}\n`;
      } else {
        middleSpace -= 2;
        resultString += `${' '.repeat(targetIndex - index)}${this.ALPHABET[index]}` + 
        `${' '.repeat(middleSpace)}${this.ALPHABET[index]}${' '.repeat(targetIndex - index)}\n`;
      }
    }

    return resultString;
  }
}

module.exports = Diamond;