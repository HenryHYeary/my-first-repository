/*
input: a string
output: an array of all of the leading substrings of the given string.

Examples: if the string only contains one character then the array should only have one element.

Data Structure: should create a blank array to push all of the values to.

Algorithm: Should use a for loop to iterate over the string and use the string.substring() or string.slice()
method in the for loop to add each possible leading substring to the array, then return the array.
*/

function leadingSubstrings(string) {
  let returnArr = [];

  for (let i = 1; i <= string.length; i++) {
    returnArr.push(string.slice(0, i));
  }

  return returnArr;
}

console.log(leadingSubstrings('abc'));

