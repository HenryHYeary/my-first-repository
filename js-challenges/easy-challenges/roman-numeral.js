/*
input: a natural number
output: the roman numeral representation of that number through a method

Examples: Need separate characters for separate denominations
I one
V five
X ten
L fifty
C hundred
D 500
M 1000
Need to be able to go up to 3000

Data Structure: create a class named RomanNumeral and define a toRoman
method for the class.
Should store all important string values either on the constructor or in the method

Algorithm: define array containing all numeral characters (highest to lowest).
define an array that matches the value of those characters in the same order
define an empty result string
iterate through the array of values
  if the value is less than the number property, 
    divide the number by the value
    Then add the character that was used for the division to the result string
    then reassign the number to the remainder of the divison
  end
end

Need to account for values like IV as well, they should be included in the arrays
as well.
*/

class RomanNumeral {
  constructor(number) {
    this.number = number;
  }

  toRoman() {
    let numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let number = this.number;
    let resultString = '';

    for (let index = 0; index < values.length; index++) {
      if (number >= values[index]) {
        let count = Math.floor(number / values[index]);
        resultString += numerals[index].repeat(count);
        number = Math.floor(number % values[index]);
      }
    }

    return resultString;
  }
}

module.exports = RomanNumeral;