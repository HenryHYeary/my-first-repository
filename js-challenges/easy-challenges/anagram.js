/*
input: a word and a list of candidate anagram words
output: an array of the words that are anagrams of the first word

Examples: an anagram has to have the exact same number of letters
as the comparison letters and the same number of appearances of letters
all of those letters must be the same letters but they can be in a different
order

Data Structure: create a constructor named anagram and pass in a string to be
stored for later comparions.
Add a match method to the constructor to return a new array that contains all of the
valid anagram words that were passed in as an array

Algorithm: split the original word into an array of letters
next create a filter for the string values that are anagrams
  create or reassign both strings to lowercase versions
  first check to see if the string lengths are the same, if they are not then return
  false
  next check to see if both strings are the same, if they are then return false

  next split the candidate string into an array of letters and iterate through the original
  set of letters in the object's own string, 
    if the letter is found in the candidate string
    remove that letter from the candidate string array and keep progressing
    if it is found that there is a letter in the original string that is not contained by
    the candidate string return false
    end
  return true
end
return the filtered array as the result of the method
*/

class Anagram {
  constructor(word) {
    this.word = word;
  }

  _sameLetters(word, candidate) {
    word = word.toLowerCase();
    candidate = candidate.toLowerCase();

    let candidateLetters = candidate.split('');
    
    if (word.length !== candidate.length || word === candidate) return false;

    for (let index = 0; index < word.length; index++) {
      if (candidateLetters.includes(word[index])) {
        candidateLetters.splice(candidateLetters.indexOf(word[index]), 1);
      } else {
        return false;
      }
    }

    return true;
  }

  match(arr) {
    return arr.filter(candidate => this._sameLetters(this.word, candidate));
  }
}

module.exports = Anagram;