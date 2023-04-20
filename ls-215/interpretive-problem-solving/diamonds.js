/*
input: an integer
output: a four pointed diamond on an nxn grid (n is always an odd
  integer).

Examples: for any odd number (valid input)
          - number of initial spaces between line start and asterisk is
          equal to (n - 1) / 2
          - spaces will decrease by one on each iteration
          until they reach 0.
          - astersisks will increase by 2 each iteration until they
          reach n.
          - Both conditions met simultaneously
          - Decrement downwards after this point, until spaces are equal
          to (n - 1) / 2 again and asterisks are equal to 0 (only need one
            condition in actual code).

Data Structure: a series of console.log calls outputting a string will suffice (many different strings)

Algorithm: spaces only need to be appended on the left side of each asterisk row.
use formula to determine number of spaces.

  - spaces variable = (n - 1) / 2
  - asterisks variable = 1
  - first iteration loop
  until asterisks are equal to n, increment upwards by 2 for asterisks
  and decrement spaces by 1

  - second iteration loop
  until asterisks are equal to 1, decrement downwards by 2 for asterisks
  and incrememnt spaces by 1
  
  These logs should represent the diamond in the console
*/

diamond(1); 
/*
*
*/
diamond(3);
/*
 *
***
 *
*/
diamond(5);
/*
  *
 ***
*****
 ***
  *
*/
diamond(7);
/*
   *
  ***
 *****
*******
 *****
  ***
   *
*/
diamond(9);
/*
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *   
*/

function diamond(stars) {
  let spaces = (stars - 1) / 2;
  let asterisks = 1;

  for (asterisks; asterisks <= stars; asterisks += 2) {
    console.log(`${' '.repeat(spaces)}${'*'.repeat(asterisks)}`);
    spaces--;
  }

  spaces = 1;
  asterisks = stars - 2;
  
  for (asterisks; asterisks >= 1; asterisks -= 2) {
    console.log(`${' '.repeat(spaces)}${'*'.repeat(asterisks)}`);
    spaces++;
  }
}
