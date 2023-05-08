/*
input: a string
output: an array that contains each word from the string
with each word followed by a space and the word's length.

Example: for an empty string argument or no argument the function should
return an empty array.

Data Structure: should split the string into separate words, should then map
that array to say the word with the length of the word right next to it.

Algorithm: if the argument is undefined then return an empty array.
*/

function wordLengths(string) {
  if (!string) return [];

  let words = string.split(/\s+/);

  return words.map(word => `${word} ${word.length}`);
}

const log = console.log;

log(wordLengths('cow sheep chicken'));
log(wordLengths('baseball hot dogs and apple pie'));
log(wordLengths("It ain't easy, is it?"));
log(wordLengths('Supercalifragilisticexpialidocious'));
log(wordLengths(''));
log(wordLengths());