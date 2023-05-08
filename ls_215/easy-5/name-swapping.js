/*
input: a string (represents a name)
output: the name with the last name coming first and separating
the first name with a comma (string)

Examples: What if there's more than two words in the name? What if no args?
What if multiple args? What if the arg is not a string? What if the arg is an empty
string?

Data Structure: Split the name into an array (two elements)

Algorithm: Return a string that is the second element of the array
          followed by a comma followed by the first element of the array
*/

const log = console.log;

log(swapName("Joan Rivers")); // "Rivers, Joan"
log(swapName("Frank Anderson")); // "Anderson, Frank"
log(swapName("Marc Andre Fleury")); // "Fleury, Marc Andre"

function swapName(name) {
  return name.split(' ').reverse().join(', ');
}

// More than one first name
function swapName(name) {
  let nameArr = name.split(' ');
  let lastIdx = nameArr.length - 1;

  return `${nameArr[lastIdx]}, ${nameArr.slice(0, lastIdx).join(' ')}`;
}