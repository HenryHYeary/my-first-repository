/*
input: a positive integer
output: the roman numeral equivalent of the number as a string

Examples: conversion should work for numbers up to 3000

Data Structure: need to divide by the correct numbers in order to output
the correct strings, then need to combine the strings together to form the final
output numeral string.

Algorithm: first relevant number to divide by 1, then 5, then 10, 100, 500, 1000

should create a constant that matches each numeral character to its corresponding arabic numeral

Need to find a good subtraction/addition algorithm to deal with remainder situations
*/

class RomanNumeral {
  constructor(number) {
    this.number = number;
  }

  static NUMBERS = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  static NUMERALS = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  toRoman() {
  let result = '';

  for (let index = 0; index < RomanNumeral.NUMBERS.length; index++) {
    let quotient = Math.floor(this.number / RomanNumeral.NUMBERS[index]);

    for (let count = 0; count < quotient; count++) {
      result += RomanNumeral.NUMERALS[index];
    }

    this.number = this.number % RomanNumeral.NUMBERS[index];
  }

    return result;
  }
}

let number = new RomanNumeral(45);

console.log(number.toRoman());

module.exports = RomanNumeral;