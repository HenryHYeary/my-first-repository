/*
input: a string to be stored on the scrabble object
output: the total score of the word stored on the scrabble object

Examples: an empty string should score zero as well as any non-letter character
null should also score zero (need guard clause for this situation).
Scores should be case insensitive

Data Structure: create a scrabble constructor that stores the string
passed in as an argument on the object. also keep an object that has
a string of the characters that align with a certain value as keys
and the number of points as the values to those keys.

Algorithm: create a local variable equal to the lowercase version of the
string stored on the object
declare a score variable initially set to zero
if the passed in string is falsy then return 0

iterate through each letter in the string
  iterate through the keys in the object, if a key contains the letter
  then add the corresponding value to the score
end

return the score

Also make sure to include a static method capable of this process
with a passed in arg string.
*/

class Scrabble {
  static LETTER_VALUES = {
    'aeioulnrst': 1,
    'dg': 2,
    'bcmp': 3,
    'fhvwy': 4,
    'k': 5,
    'jx': 8,
    'qz': 10,
  };

  static score(word) {
    return new Scrabble(word).score();
  }

  static findLetterScore(letter) {
    for (let key in Scrabble.LETTER_VALUES) {
      if (key.includes(letter.toLowerCase())) {
        return Scrabble.LETTER_VALUES[key];
      }
    }
  }

  constructor(word) {
    this.word = word;
  }

  score() {
    if (this.word === null) {
      return 0;
    }

    this.word = this.word.trim();

    let totalScore = 0;

    for (let index = 0; index < this.word.length; index++) {
      totalScore += Scrabble.findLetterScore(this.word[index]);
    }

    return totalScore;
  }
}

module.exports = Scrabble;