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