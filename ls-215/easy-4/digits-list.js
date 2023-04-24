/*
input: an integer
output: an array of each digit individually

Examples: What if there is more than one input?
What if the input is not an integers?
What if the input is NaN?
What if the input is Infinity or -Infinity?

Data Structure: Coerce the number into a string
                - Split the string on empty strings
                - Map the resulting array to transform to numbers
                - return the new array
*/

const log = console.log;
log(digitList(1456)); // [1, 4, 5, 6]
log(digitList(12345)); // [1, 2, 3, 4, 5]
log(digitList(7)); // [7]
log(digitList(444)); // [4, 4, 4]

function digitList(number) {
  return String(number).split('').map(Number);
}