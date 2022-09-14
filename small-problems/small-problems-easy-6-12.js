/*
input: a string
output: a boolean value stating whether the parentheses within the strings are properly balanced or not.

Examples: Should be able to take any number of parentheses arguments and should work between words,
looks like it does not have to work within words though.

Data Structure: should create a counter variable for open parentheses and a counter for closed parentheses.

Algorithm: Use a for loop to iterate of the string and use if statement(s) to detect both open and closed parentheses characters.
Return whether or not the count of those characters is equal to the other one. 
*/

function isBalanced(string) {
  let parCount = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      parCount++;
    } else if (string[i] === ')') {
      parCount--;
    }
    if (parCount < 0) return false;
  }

  return parCount === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);