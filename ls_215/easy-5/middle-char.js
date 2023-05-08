/*
input: a string
output: the middle character(s) of that string (string)

Examples: What if the input is not a string? What if there is
more than one argument?

Data Structure: First check to see if the length of the string is even
or odd. Keep total index as string length minus one.

Algorithm: If the length is even return the element at the total index / 2th
          elem
          - If the length is odd then return the two character slice at total index / 2th
          to total index / 2 + 1th elem
          - return the string
*/

const log = console.log;

log(centerOf('I Love JavaScript')); // "a" (Index of 8/9th element of 17/ 8 of 16)
log (centerOf('heavy')); // "a"
log(centerOf("Four")); // "ou" (Starts at index of 1, ends at index of 2 (length - 1)/2 to next char)

log(centerOf("Launch School"));
log(centerOf("Launch"));
log(centerOf("Launchschool"));
log(centerOf('x'));

function centerOf(string) {
  let totalIdx = string.length - 1;
  let middleIdx = totalIdx / 2;

  if (string.length % 2 === 1) {
    return string[middleIdx];
  } else {
    return string.slice(middleIdx, middleIdx + 2);
  }
}