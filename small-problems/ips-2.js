/*
input: an odd integer
output: a four pointed diamond in an n x n (n is the input integer)

Examples: If 1 is passed as an argument the function should only output a single asterisk
The number of output lines will always match the input integer passed to the function.
The first and subsequent lines leading to the middle and after the middle need varying degrees of padding.
Only padStart should be necessary here

Data structure: will be using console.log for this exercise and should create a variable representing how much padding
is necessary for the current line. Does not seem like the problem requires an independent data structure from the asterisks being logged

Algorithm: As stated above create a loop that starts with Math.floor(num / 2) padding for the start
and decrement downwards until the padding equals zero, calling console.log at every point until then
Then should do the reverse with an incrementing loop that calls console.log on each iteration as well.
*/

function diamond(number) {
  for (let numOfAsterisks = 1; numOfAsterisks <= number; numOfAsterisks += 2) {
    let padding = (number - numOfAsterisks) / 2;
    console.log(' '.repeat(padding) + '*'.repeat(numOfAsterisks));
  }

  for (let numOfAsterisks = number - 2; numOfAsterisks >= 1; numOfAsterisks -= 2)  {
    let padding = (number - numOfAsterisks) / 2;
    console.log(' '.repeat(padding) + '*'.repeat(numOfAsterisks));
  }
}

diamond(1);
diamond(3);
diamond(9);
