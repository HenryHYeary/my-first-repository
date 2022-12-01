/*
input: a positive integer
output: a list of the digits in the number

Examples: if one digit is passed in as an argument then the result will be an array with one digit in it as an element.

Data Structure: should use string.split() and array.map() to create the arrays necessary to execute the function.

Algorithm: should convert the initial integer into a string and then use the string.split() method to separate each element into an an individual digit.
Should then use the .map method to convert each array back into a number.
*/

function digitList(num) {
  let stringDigitList = String(num).split('');

  let numberDigitList = stringDigitList.map(digit => Number(digit));

  return numberDigitList;
}

console.log(digitList(12345));
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]