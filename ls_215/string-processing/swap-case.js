/*
input: a string
output: The reversed case version of that string (alphabetical characters
  with opposite case)

Data Structure: Split the string into individual characters. If the character
is equal to itself as lowercase then coerce it to lowercase, otherwise coerce it to uppercase.
*/

function swapCase(string) {
  let splitString = string.split('');
  return splitString.map(char => {
    if (char !== char.toLowerCase()) {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  }).join('');
}

console.log(swapCase('CamelCase'));
console.log(swapCase('Tonight on XYZ-TV'));