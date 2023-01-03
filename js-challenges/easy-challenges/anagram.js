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