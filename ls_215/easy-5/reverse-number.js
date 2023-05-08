/*
input: a positive integer
output: a positive integer that is the number with its digits reversed

Examples: What if there is more than one input? What if the data type
of the input is not a number? What if its NaN, Infinity, or -Infinity?
What if input is not supplied?

Data Structure: Coerce the number into a string. Split the string into an
array on empty spaces, reverse the array
  - Join the array into a string and then parseInt from that string and
  return the resulting number
*/

const log = console.log;

log(reverseNumber(12345)); // 54321
log(reverseNumber(2468)); // 8642
log(reverseNumber(120000)); // 21

function reverseNumber(int) {
  return parseInt(String(int).split('').reverse('').join(''), 10);
}