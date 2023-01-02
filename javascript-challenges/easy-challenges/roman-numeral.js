/*
input: a positive integer
output: the roman numeral equivalent of the number as a string

Examples: conversion should work for numbers up to 3000

Data Structure: need to divide by the correct numbers in order to output
the correct strings, then need to combine the strings together to form the final
output numeral string.

Algorithm: first relevant number to divide by 1, then 5, then 10, 100, 500, 1000

should create a constant
*/

class RomanNumeral {
  constructor(number) {
    this.number = number;
  }

  toRoman() {

  }
}

module.exports = RomanNumeral;