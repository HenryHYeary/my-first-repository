/*
input: an integer in string format
output: a number

Examples: string should be the original octal form of the number passed in
while the output number should be the decimal conversion of the octal.
Any non number, mixed digit and letter string, or number that includes a digit above
7 should be considered an invalid octal and return a value of 0.

Data Structure: should verify that the string only contains digits first.
Use a guard clause to enforce this. After this has been verified, split the string
into an array and convert every digit to its number form.

Algorithm: verify that string only contains digits
iterate through each digit and multiply it by 8 to the power of the length of the
original string - 1 decrementing downward for each position.

add the result of this multiplication to a total sum.

Return the total sum
*/

class Octal {
  static DIGITS = '1234567890';

  constructor(octalString) {
    this.octalString = octalString;
  }

  toDecimal() {
    let octalArr = this.octalString.split('');
    let decimalSum = 0;

    if (!octalArr.every(char => Octal.DIGITS.includes(char)) ||
    octalArr.some(char => Number(char) > 7)) return 0;

    octalArr.forEach((digit, index) => {
      decimalSum += digit * Math.pow(8, (octalArr.length - 1) - index);
    });

    return decimalSum;
  }
}

module.exports = Octal;