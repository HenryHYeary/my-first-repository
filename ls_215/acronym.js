/*
input: a string of words separated by spaces
output: an acronym for the given string

Examples: Words connected with dashes are compound words and should
be treated as separate words by this function.

Data Structure: Iterate over every word in the string and push the first
character capitalized to a return string.

Algorithm: actually best to map each word to their first character capitalized
Use regex for multiple separators and make sure to test.
*/

function acronym(string) {
  let wordsArr = string.split(' ');
  wordsArr = wordsArr.map(word => word.split('-')).flat();

  return wordsArr.map(word => word[0].toUpperCase()).join('');
}

const log = console.log;

log(acronym('Portable Network Graphics'));
log(acronym('First In, First Out'));
log(acronym('PHP: HyperText Preprocessor'));
log(acronym('Complementary metal-oxide semiconductor'));
log(acronym('Hyper-text Markup Language'));

// Book solution
// function acronym(string) {
//   let newString = string.replace(/-/g, ' ');
//   let wordsArr = newString.split(' ');

//   return wordsArr.map(word => word[0].toUpperCase()).join('');
// }