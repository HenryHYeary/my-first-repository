/*
input: a string of digits (present for constructor arg)
output: all of the possible consecutive number series of a specified length
should be output into an array (present for method arg)

Examples: the length of each array should be equal to the argument provided to the slices
method. If the length provided as an argument to the slice method exceeds the length of the string
passed in to the constructor then the function should throw an error.

Data Structure: should iterate over every digit in the string and then pass it as a number to each respective
possible array. Also determine an iterative difference between the length of the string passed in as
an arg to the constructor and the number passed into the slices argument. Use that as the number to iterate up to.

Algorithm: construct object with correct string
define slices method, takes number argument
  find difference between length and argument number
  define array to store each subarray

  iterate from zero to the difference determined above
    slice from current index to current argNum -1 + index
    push slice to larger array
  end

  return larger array
*/

class Series {
  constructor(numString) {
    this.string = numString;
  }

  slices(targetLength) {
    if (targetLength > this.string.length) {
      throw new Error('Target length cannot exceed string length.');
    }

    let outerArr = [];
    let iterativeDiff = (this.string.length - targetLength) + 1;
    let uniqueDigits = this.string.split('').map(digit => Number(digit));

    for (let index = 0; index < iterativeDiff; index++) {
      outerArr.push(uniqueDigits.slice(index, (targetLength + index)));
    }

    return outerArr;
  }
}

module.exports = Series;