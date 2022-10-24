/*
input: a word
output: a boolean value indicating whether or not the word string passed as 
an argument can be spelled using the set of blocks or not.

Examples: Cannot use both letters from any given block, and can only use each block once
in the spelling of the input string. If the string does not match those criteria then the function should output false

Data Structure: Should create a constant an array with a subarray for each letter pair.


Algorithm: Will want to split given string into an array for simpler iteration
Would want to make a copy of the const array. Could enforce the rule by removing the given subarray as soon as one of the letters within it is removed.
Could achieve this with the splice and indexOf methods.
Then on the next iteration see if the block collection includes the letter of the next step in the word,
if it does not then return false. If the iteration completes through all of the letters in the given string
then return true at the end.  
*/

const BLOCKS = [
  'BO', 'XK', 'DQ', 'CP', 'NA',
  'GT', 'RE', 'FS', 'JW', 'HU',
  'VI', 'LY', 'ZM',
];


function isBlockWord(word) {
  let arrOfCharacters = word.toUpperCase().split('');
  let usedBlocks =[];
  let nestedBlocksArr = BLOCKS.map(block => {
    return block.split(':');
  });

  for (let index = 0; index < arrOfCharacters.length; index++) {
    removedBlock(nestedBlocksArr, arrOfCharacters[index]);

    if (!nestedBlocksArr.flat().includes(arrOfCharacters[index])) {
      return false;
    }
  }

  return true;
}


// function does not work because it mutates original nestedArr, should try to use filter method
function removedBlock(nestedArr, char) {
  nestedArr.forEach(subArr => {
    if (subArr.includes(char)) {
      nestedArr.splice(nestedArr.indexOf(subArr), 1);
    }
  });

  return nestedArr
}

console.log(isBlockWord('BATCH'));
console.log(isBlockWord('BUTCH'));