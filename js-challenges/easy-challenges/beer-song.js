/*
input: a verse, or set of verses to be output of the bottles of beer song
output: the verse(s) of the song in string format

Examples: Verses can be supplied in a sequential range with the verses
method instead of the verse method. The first element in the range must
be higher than the second or end element as the beer count will decrement
for every verse

The last two verses of the song require different formatting from the rest of the song

Data Structure: for the whole song you can iterate downwards from 99 to 0. Use
verses method on object with 99, 0 as arguments.
Should create a variable for the standard case, as well as two other variables for the 1
and 0 cases.
Also create a variable for the current beer count and decrement it in the case of the verses
function

Algorithm: first build out verse method. Declare variable for standard
case, then create clauses for 1 and 0 with the appropriate strings.
Insert the beer count in standard case and do -1 for the decrmented beer count.

Then build out the verses method that will take the standard case and execute it each time
for the range between the start and finish.

Last create a static lyrics method that calls the verses method from 99 to 0.
*/

class BeerSong {
  static verse(verseNum) {
    if (verseNum > 2) {
      return `${verseNum} bottles of beer on the wall, ${verseNum} bottles of beer.\n` +
      `Take one down and pass it around, ${verseNum - 1} bottles of beer ` +
      "on the wall.\n";
    } else if (verseNum === 2) {
      return "2 bottles of beer on the wall, 2 bottles of beer.\n" +
      "Take one down and pass it around, 1 bottle of beer " +
      "on the wall.\n";
    } else if (verseNum === 1) {
      return "1 bottle of beer on the wall, 1 bottle of beer.\n" +
      "Take it down and pass it around, no more bottles " +
      "of beer on the wall.\n"
    } else {
      return "No more bottles of beer on the wall, no more " +
      "bottles of beer.\nGo to the store and buy some " +
      "more, 99 bottles of beer on the wall.\n";
    }
  }

  static verses(start, end) {
    let resultString = '';

    for (let currentVerse = start; currentVerse >= end; currentVerse--) {
      if (currentVerse === start) {
        resultString += this.verse(currentVerse);
      } else {
        resultString += `\n${this.verse(currentVerse)}`;
      }
    }

    return resultString;
  }

  static lyrics() {
    return this.verses(99, 0);
  }
}

module.exports = BeerSong;