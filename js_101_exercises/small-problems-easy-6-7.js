/*
input: a first and last name separated by a space
output: A reversed form of the name with the last name and a comma preceding the first name.

Examples: The example seems to match the problem description exactly.

Data Structure: Should convert the string to an array using string.split(' ');

Algorithm: should reverse the array of words and then join the array with array.join(', ');
*/

function swapName(name) {
  let nameArr = name.split(' ');

  return nameArr.reverse().join(', ');
}

console.log(swapName('Joe Roberts'));

function swapLongerName(name) {
  let namesArr = name.split(' ');
  let firstNames = namesArr.slice(0, namesArr.length - 1).join(' ');
  let lastName = namesArr[namesArr.length - 1];
  
  return `${lastName}, ${firstNames}`;
}

console.log(swapLongerName('Karl Oskar Henriksson Ragvals'));
console.log(swapLongerName('Joe Roberts'));