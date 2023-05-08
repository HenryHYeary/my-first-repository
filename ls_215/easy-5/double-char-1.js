/*
input: a string
output: the same string but with every character doubled.

Data Structure: split the string into an array, map each character
to be a double of itself, join the array on empty strings and then return
the new string.
*/

const log = console.log;
log(repeater("Hello")); // "HHeelllloo"
log(repeater('Good job!')); // "GGoooodd  jjoobb!!"
log(repeater('')); // ''
log(repeater("Where is it?")); // "WWhheerree  iiss  iitt??"

function repeater(string) {
  return string.split('').map(char => char.repeat(2)).join('');
}
