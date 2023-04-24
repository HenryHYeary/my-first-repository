/*
input: a string of words separated by spaces
output: a new string with every word having the first and
last letter switched

Examples: in this problem it says that the string will always contain
at least one word, and that each string will contain nothing but
words and spaces
  - can assume that there is not leading trailing or repeated spaces,
  however we can write a solution that takes care of those conditions
  as well.

Data Structure: Transform sentence into an array of words
                - Map each word to be the first element of each 
                word string followed by all following elements of the string

Algorithm: Split the sentence on any apperance, consecutive or not of whitespace
          - map resulting array to be the first element of the string followed by
          the rest of the string
          - return a new joined array on spaces.
*/

const log = console.log;

log(swap("Hello    my baby")); // "elloH ym abyb"
log(swap("Abcde")); // "ebcdA"
log(swap('a')); // "a"

function swap(string) {
  let sentenceArr = string.split(/\s+/);

  return sentenceArr.map(word => {
    return word.slice(1) + word[0];
  }).join(' ');
}


