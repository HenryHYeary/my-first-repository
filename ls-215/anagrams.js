/*
Problem: input: a target word and a list of candidate words
output: a new array that contains all of the words that are anagrams of
the original word.

Examples: for a word to be an anagram it mush have all of the same letters
as the target word with the same number of appearances.

Data structure: Mainly a filtering problem. One way to determine the correct
filter condition could be to iterate through every individual letter. If
the letter is not contained in the original word then return false. Otherwise splice
off that same letter from the word and keep iterating. Can also check to see if the length
differs initially to speed up the process. For this you always need to keep a local array
at hand during iteration of all of the letters in the original word. If the iteration is complete
and an early false value has not been returned then return true.
*/

// My initial solution
// function anagram(word, list) {
//   let arrOfLetters = word.split('');

//   return list.filter(candidate => {
//     let comparisonArr = arrOfLetters.slice();

//     if (word.length !== candidate.length) return false;

//     for (let index = 0; index < candidate.length; index++) {
//       if (!comparisonArr.includes(candidate[index])) {
//         return false;
//       } else {
//         comparisonArr.splice(comparisonArr.indexOf(candidate[index]), 1)
//       }
//     }

//     return true;
//   });
// }

// const log = console.log;

// log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));
// log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));


// Book solution
function anagram(word, list) {
  return list.filter(candidate => areAnagrams(candidate, word));
}

function areAnagrams(source, target) {
  let sourceLetters = source.split('').sort();
  let targetLetters = target.split('').sort();
  return compareArrays(sourceLetters, targetLetters);
}

function compareArrays(array1, array2) {
  if (array1.length !== array2.length) return false;

  return array1.every((letter, index) => letter === array2[index]);
}

const log = console.log;

log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));
log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));
