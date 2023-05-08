/*
input: a string
output: a boolean value stating whether or not the string is valid according
to the word block rules

Examples: Once a block is used it cannot be used again.
The problem limits you from using a letter that shares a block with
another letter in the word, case insensitive, chars other than alphabetical
should be ignored

Data Structure: 
- clean string and coerce it to lowercase
- keep the collection of spelling blocks in an array of strings
that will be mutated
  - splice out any string that is used
  - if no arrays contain the next iterated upon letter
  then return false.
    - if iteration completes without false being returned early then
    return true
*/

function isBlockWord(string) {
  const wordBlocks = ['bo', 'xk', 'dq', 'cp', 'na',
                    'gt', 're', 'fs', 'jw', 'hu',
                    'vi', 'ly', 'zm'];
  let cleanString = string.replace(/[^a-z]/gi, '').toLowerCase();
  if (cleanString.length === 0) return false;

  for (let index = 0; index < cleanString.length; index++) {
    let wordBlock = wordBlocks.find(block => block.includes(cleanString[index]));
    if (wordBlock) {
      wordBlocks.splice(wordBlocks.indexOf(wordBlock), 1);
    } else {
      return false;
     }
  }

  return true;
}

const log = console.log;
log(isBlockWord('BATCH')); // true
log(isBlockWord('Butch')); // false
log(isBlockWord('jest')); // true

log(isBlockWord('DaB')); // true
log(isBlockWord('WaSP')); // true

log(isBlockWord('  DAM')); // true
log(isBlockWord('123aBC')); // true
log(isBlockWord('  123ooh')); // false
log(isBlockWord('oboe')); // false
log(isBlockWord('1234')); // false