/*
input: an integer
output: a string containing the correct lyrics to the beer song at the integer

Examples: should have separate lyrics for when the beer runs out (number is zero)
Also need to have a method that produces the entire song from 99 to 0.

Data Structure: should use a separate variable to state the number decremented by 1
towards the end of the verse. Should have a separate case for 1 and zero verses as their lyrics
differ enough to warrant separate clauses.

Algorithm: take verse or number of verses as argument
create variable for newBeerCount, equal to verse number - 1

if verse number is 1
  do no more bottles of beer on second half of verse
else if verse number is 0
  do no more bottles of beer on first half and go to the store on second half
else 
  use current verse number for first half, and then newBeerCount for the second
  half of verse.
*/

class BeerSong {
  static verse(verseNum) {
    let newBeerCount = verseNum - 1;

    if (verseNum === 2) {
      return "2 bottles of beer on the wall, 2 bottles of beer.\n" +
      "Take one down and pass it around, 1 bottle of beer " +
      "on the wall.\n";
    } else if (verseNum === 1) {
      return "1 bottle of beer on the wall, 1 bottle of beer.\n" +
      "Take it down and pass it around, no more bottles " +
      "of beer on the wall.\n";
    } else if (verseNum === 0) {
      return "No more bottles of beer on the wall, no more " +
      "bottles of beer.\nGo to the store and buy some " +
      "more, 99 bottles of beer on the wall.\n";
    } else {
      return `${verseNum} bottles of beer on the wall, ${verseNum} bottles of beer.\n` +
      `Take one down and pass it around, ${newBeerCount} bottles of beer ` +
      "on the wall.\n"
    }
  }

  static verses(start, end) {
    let resultString = '';

    for (let count = start; count >= end; count--) {
      if (count === start) {
        resultString += `${BeerSong.verse(count)}`;
      } else {
        resultString += `\n${BeerSong.verse(count)}`;
      }
    }

    return resultString;
  }

  static lyrics() {
    let resultString = '';

    for (let count = 99; count >= 0; count--) {
      if (count === 99) {
        resultString += `${BeerSong.verse(count)}`
      } else {
        resultString += `\n${BeerSong.verse(count)}`;
      }
    }

    return resultString;
  }
}

console.log(BeerSong.verses(2, 0));

module.exports = BeerSong;