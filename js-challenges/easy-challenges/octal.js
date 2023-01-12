/*
input: a string representing an octal number
output: the decimal form of that octal string

Examples: Invalid octals should be converted to a zero value

Data Structure: should create a class named octal that takes a string
to represent its octal value
Constructor should have only one method named toDecimal and it should
recognize if the string contains any digits above 7, if it does then the
value is zero

Algorithm: split string into digits
check to see if any digits are above 7
  if they are then return 0
end

declare varialbe representing sum

reverse array and multiply it to the power of 8 based
on index position adding to sum variable at each step

return sum variable
*/

class Octal {
  constructor(octString) {
    this.octString = octString;
  }

  toDecimal() {
    let maybeInvalid = this.octString.match(/[^0-7]/g) || [];

    if (maybeInvalid.length > 0) return 0;

    let digitsArr = this.octString.split('').reverse();
    let totalSum = 0;

    for (let index = 0; index < digitsArr.length; index++) {
      totalSum += digitsArr[index] * Math.pow(8, index);
    }

    return totalSum;
  }
}

module.exports = Octal;