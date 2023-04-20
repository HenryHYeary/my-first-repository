/*
input: a string
output: a boolean value indicating whether or not the string can be spelled
with the given set of word blocks.

Examples: word arguments should be case insensitive and clean the string of
          spaces as well as any non-letter characters

Data Structure: create an array of strings that represent the blocks
                - each string will be two characters long

Algorithm: create the array as a local constant inside the function
          - for each character in the input string
            - iterate through the array of blocks and see if any of the
            strings contain the target character. 
              - if they do contain the character, remove that string from the array
              and keep iterating
              - if they do not then return false as the value
          
          if iteration completes and false has not been returned
            return true
*/

const log = console.log;
// log(isBlockWord('BATCH')); // true
// log(isBlockWord('BUTCH')); // false
// log(isBlockWord('jest')); // true
// log(isBlockWord('jEsT')); // true
// log(isBlockWord('B a T c H')); // true
// log(isBlockWord('ZOOM')); // false
log(isBlockWord('BATCH'));      // true
log(isBlockWord('BUTCH'));      // false
log(isBlockWord('jest'));       // true
log(isBlockWord('floW'));       // true
log(isBlockWord('APPLE'));      // false
log(isBlockWord('apple'));      // false
log(isBlockWord('apPLE'));      // false
log(isBlockWord('Box'));        // false


function isBlockWord(string) {
  string = string.replace(/[^a-z]/gi, '').toLowerCase();

  const wordBlocks = ['bo', 'xk', 'dq', 'cp', 'na',
                      'gt', 're', 'fs', 'jw', 'hu',
                      'vi', 'ly', 'zm'];
  
  for (let index = 0; index < string.length; index++) {
    let targetWordBlock = findTargetWordBlock(wordBlocks, string[index]);
    if (!targetWordBlock) {
      return false;
    } else {
      wordBlocks.splice(wordBlocks.indexOf(targetWordBlock), 1);
    }
  }

  return true;
}


function findTargetWordBlock(wordBlocks, letter) {
  return wordBlocks.find(block => {
    return block.includes(letter);
  });
}