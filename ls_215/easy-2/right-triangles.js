/*
input: a positive integer
output: a right triangle whose sides each have n number
of stars

Examples: looks like there are n - 1 number of spaces on the
first row followed by an asterisk afterwards.
Sequence from there increments the asterisk count by one and
decrements the space count by one.

Data Structure: create two variables one to keep track of the
number of spaces that will be in the string and one to keep
track of the number of asterisks.

Algorithm: iterate from 1 to n
          - for each iteration increment the asterisk count by 1
          also decrement the space count by 1 on each iteration
          - log out each line in sequence
*/

function triangle(n) {
  let spaces = n - 1;
  let asterisks = 1;

  for (let count = 1; count <= n; count++) {
    console.log(`${' '.repeat(spaces)}${'*'.repeat(asterisks)}`);
    spaces--;
    asterisks++;
  } 
}

triangle(5);
triangle(9);
triangle(7);