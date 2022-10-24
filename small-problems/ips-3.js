/*
input: a word
output: a boolean value indicating whether or not the word string passed as 
an argument can be spelled using the set of blocks or not.

Examples: Cannot use both letters from any given block, and can only use each block once
in the spelling of the input string. If the string does not match those criteria then the function should output false

Data Structure: Should create a constant variable assigned to an array of each letter pair in string format.
*/

const BLOCKS = [
  'BO', 'XK', 'DQ', 'CP', 'NA',
  'GT', 'RE', 'FS', 'JW', 'HU',
  'VI', 'LY', 'ZM',
];


function isBlockWord(word) {
  let arrOfCharacters = word.toUpperCase().split('');
  let usedBlocks =[];

  for (let index = 0; index < arrOfCharacters.length; index++) {
    if (usedBlocks.some(string => string.includes(arrOfCharacters[index]))) {
      return false;
    }

    BLOCKS.forEach(block => {
      if (block.includes(arrOfCharacters[index])) {
        usedBlocks.push(block);
      }
    });
  }

  return true;
}

console.log(isBlockWord('BATCH'));
console.log(isBlockWord('BUTCH'));
console.log(isBlockWord('jest'));