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

/*
input: a letter
output: a symmetric diamond with each number leading up to and including
the target letter.

Examples: Diamond should be horizontally and vertically symmetric.
First line should have only one A, last line should only have one A.

Data Structure: should store variables that point to the number of space
needed both on the left side of the diamond and in the middle of the diamond
for every line. Also create an array of the alphabet on the constructor or within
the method so that the program knows which letter should come next in the diamond
construction.
create a slice of the string that extends from A to the target letter
and use that number of spaces as a reference at the beginning.

Algorithm: The first line should start with the letter of A no matter what
and have a number of spaces preceding the A that is equal to the length of the
substring slice between A and the target letter.

All other strings (except for the last string) should have two appearances of the
current letter in the line and have spaces separating them equal to that characters
positional index in the substring.

Add each string with a newline character at the end of it to ensure that the 
total string vertically forms a diamond.

Also need to increment backwards as well for the latter half of the diamond,
*/

class Diamond {
  static makeDiamond(letter) {
    let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let substring = alpha.slice(0, alpha.indexOf(letter) + 1);

    let resultString = '';
    for (let index = 0; index < substring.length; index++) {
      if (index === 0) {
        let spaces = substring.length - 1;
        resultString += `${' '.repeat(spaces)}A${' '.repeat(spaces)}\n`;
      } else if (index === 1){
        let spaces = substring.length - 1 - index;
        resultString += `${' '.repeat(spaces)}${alpha[index]}${' '.repeat(index)}${alpha[index]}${' '.repeat(spaces)}\n`;
      } else {
        let outerSpaces = substring.length - 1 - index;
        let middleSpaces = index + (index - 1);
        resultString += `${' '.repeat(outerSpaces)}${alpha[index]}${' '.repeat(middleSpaces)}${alpha[index]}${' '.repeat(outerSpaces)}\n`;
      }
    }

    for (let index = substring.length - 2; index >= 0; index--) {
      if (index === 0) {
        let spaces = substring.length - 1;
        resultString += `${' '.repeat(spaces)}A${' '.repeat(spaces)}\n`;
      } else if (index === 1){
        let spaces = substring.length - 1 - index;
        resultString += `${' '.repeat(spaces)}${alpha[index]}${' '.repeat(index)}${alpha[index]}${' '.repeat(spaces)}\n`;
      } else {
        let outerSpaces = substring.length - 1 - index;
        let middleSpaces = index + (index - 1);
        resultString += `${' '.repeat(outerSpaces)}${alpha[index]}${' '.repeat(middleSpaces)}${alpha[index]}${' '.repeat(outerSpaces)}\n`;
      }
    }

    return resultString;
  }
}

module.exports = Diamond;