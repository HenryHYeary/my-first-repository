/* 
input: a string
output: a boolean value indicating whether or not the parentheses within
the string are properly balanced/closed

Examples: Be aware of cases that can balance out with an incorrect closing
parentheses starting and an opening one being present at the end.

Data structure: keep an external variable present where the value is subtracted
from or increased by one depending on whether the parentheses are closing or opening.

Algorithm: if a negative number is reached at any point in the string send an early
return value of false. Also if the number is anything other than zero at the end of iteration
return false.
*/

function isBalanced(string) {
  let totalBalance = 0;

  for (let index = 0; index < string.length; index++) {
    if (string[index] === '(') {
      totalBalance += 1;
    } else if (string[index] === ')') {
      totalBalance -= 1;
    }

    if (totalBalance < 0) return false;
  }

  return totalBalance === 0;
}

let logArr = [
  isBalanced('What (is) this?'),        // true
  isBalanced('What is) this?'),         // false
  isBalanced('What (is this?'),         // false
  isBalanced('((What) (is this))?'),    // true
  isBalanced('((What)) (is this))?'),   // false
  isBalanced('Hey!'),                   // true
  isBalanced(')Hey!('),                 // false
  isBalanced('What ((is))) up('),       // false
];

logArr.forEach(val => console.log(val));