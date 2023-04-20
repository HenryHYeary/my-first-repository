/*
input: an odd integer
output: an 8 pointed start that fits in an nxn grid

Examples: Number of star rows before and after middle row are equal to
(n - 1) / 2.
Prepended spaces increment going up and decrement going down.
Always a 3 star combination on any row besides middle row
Middle spaces between stars are equal to (n - 1) / 3 on first row
middle spaces decrement by one after each iteration

Data Structure: should create two sub functions one for meeting
and one for leaving. In the middle log out a string that has n number
of asterisks in it.

Algorithm: calculate the iteration distance as (n - 1) / 2 to be
eventually used for both sub functions
 calculate initial / eventual number of middle spaces as (n - 1) / 3

pass iteration distance and number of spaces to each sub function

meeting subfunction takes (iterationDistance, spaces)
 - iterate from 0 to iteration distance - 1
 - on each iteration add a space to prepend, and decrease a middle space

leaving function takes(iterationDistance, spaces)
  - iterate from 0 to iteration distance - 1
  - on each iteration decrease a space to prepend, and add a middle space 
*/

star(7);
/*
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *
*/

star(9);
/*
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *
*/

star(5);
/*
* * *
 ***
*****
 ***
* * *
*/

function star(n) {
  let iterationDistance = (n - 1) / 2;

  meeting(iterationDistance);

  console.log('*'.repeat(n));

  leaving(iterationDistance);
}

function meeting(iterationDistance) {
  let currentSpaces = iterationDistance - 1;
  for (let count = 0; count < iterationDistance; count++) {
    console.log(`${' '.repeat(count)}*${' '.repeat(currentSpaces)}*${' '.repeat(currentSpaces)}*`);
    currentSpaces--;
  }
}

function leaving(iterationDistance) {
  let currentSpaces = 0;
  for (let count = iterationDistance - 1; count >= 0; count--) {
    console.log(`${' '.repeat(count)}*${' '.repeat(currentSpaces)}*${' '.repeat(currentSpaces)}*`);
    currentSpaces++;
  }
}

