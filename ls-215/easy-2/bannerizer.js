/*
input: a line of text
output: a log of the line of text inside of a box

Examples: If there is an empty string passed in as an argument then
then the box should be 2x3 and empty

What if there is an argument other than a string?

Data Structure: create a sub function to log a string that represents the
top/bottom of the box. Takes string as argument
Also create a function for a separating line as well, between top and middle.

Algorithm: for the subfunction with top and bottom lines, have a plus sign
at the beginning and end of the line, repeat the dashes a number  of times equal
to the string length plus 2.
  - For the separating space function repeat the same process as above but have the
  beginning and ending should be pipes. And middle characters should be spaces
  - call the top line function
  - call the middle line function
  - log out a string that has pipes on either side, one space before the start of the
  string and one space after, and begins and ends with pipes.
  - call the middle line function
  - call the top line function
*/

function logInBox(string) {
  topBottom(string);
  separatingLine(string);

  console.log(`| ${string} |`);

  separatingLine(string);
  topBottom(string);
}

function topBottom(string) {
  console.log(`+${'-'.repeat(string.length + 2)}+`);
}

function separatingLine(string) {
  console.log(`|${' '.repeat(string.length + 2)}|`);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');