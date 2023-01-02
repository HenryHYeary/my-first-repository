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

const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000, 3000];

const NUMERALS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XX', 'XXX', 'XL', 'L',
'LX', 'LXX', 'LXXX', 'XC', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', 'M', 'MM', 'MMM'];

class RomanNumeral {
  constructor(number) {
    this.number = number;
  }

  toRoman() {

  }
}

module.exports = RomanNumeral;