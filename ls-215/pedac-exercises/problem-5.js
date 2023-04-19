/*
input: a string of characters and an integer (number of rails to encode with)
output: the encoded version of that text

Examples: To properly decode the character look at the zig zag pattern that is formed
based on the number of rails present in the fence.

3 rails
F . . . U       N
  A   O   T   A
    R       M

(three spaces between top row)
W . T   H   U
  A   C   O   T

(one space between top row)

5 rails
H . . . . . . . I
  A           A   L
    P       R       S
      P   T
        Y
(seven spaces between top row)

6 rails
H . . . . . . . . . S
  A               L
    P           I
      P       A
        Y   R
          T
(nine spaces between top row)

4 rails
H . . . . . R
  A       T   A
    P   Y       I   S
      P           L

7 rails
H . . . . . . . . . . . 0
  A                   Y
    P               S
      P           L
        Y       I
          T   A
            R
(11 spaces)
(five spaces between top row)
                

Clean string of spaces, make function take case insensitive input,
output can be one case (case does not have to be preserved)

Data Structure: Array first descending then ascending
HI (skip on way back down)
AAL
PRS
PT
Y (skip on way back up)

WTHU
ACOT (can simply switch back and fortH with only 2 rails)

FUN
AOTA
RM
To make this happen: create the same number of strings as rails within the array
Iterate through string passing one letter on each index to each array.

Once iteration is complete, skip an index and then iterate back through until index
is 0, if there is more at this point skip to the first index and then iterate through
the next characters (and so on). No need to skip index if there are only two rails

Would it be more beneficial to use an object as the data structure?
Arrays still seem the most simple even if index computation is complicated.

Algorithm: - Remove whitespaces from string and make all characters all caps
          initialitze an array of empty strings equal to the number of rails.
          - Concatenate a letter from each index position into the appropriate
          empty string during the first loop.
          - if there are still more indexes to go after this iteration begin iterating
          upwards but skip the last index
          - if there are more after that then skip the first index and iterate to the end
          and so on.
          - create two helper functions to iterate from that point upwards and downwards
          skipping an index when need be. 
          - Whenever the final index or index 0 is reached keep the
          current index on hand and pass it to that function, and keep iterating until
          the full length of the string has been concatenated into the blank strings
          - Once all iteration is complete over the string, join each of the substrings
          into one complete string and return the resulting string.
*/

const log = console.log;
log(encode("FAROUTMAN", 3)); // FUNAOTARM
log(encode("WATCHOUT", 2)); // WTHUACOT
log(encode("HAPPYTRAILS", 5)); // HIAALPRSPTY
log(encode("HAPPYTRAILS", 4)); // HRATAPYISPL
log(encode("far out man", 3)); // FUNAOTARM

function encode(string, rails) {
  let formattedString = string.replace(/\s+/g, '').toUpperCase();
  let substringArr = [];

  for (let count = 1; count <= rails; count++) {
    substringArr.push('');
  }

  for (let index = 0; index < rails; index++) {
    substringArr[index] = substringArr[index].concat(formattedString[index]);
  }

  return substringArr
}

// endIdx represents final array index, remaining length is remaining
// length in main string
// needs to create a window of iteration for the remaining string characters
// How to create nested iteration conditions during window? (nested loop? subfunction?)
function switchUpwards(nestedArr, endIdx, string) {
  let iterationStart = endIdx - 1;

  let remainingIterationLength = string.length - endIdx;
  if (remainingIterationLength > iterationStart) {
    for (let index = endIdx; index < remainingIterationLength; index++) {

    }
  }
}

// this makes finding the right character to concat difficult
function concatToSubArr(subArrIdx, stringIdx, string,  nestedArr) {
  nestedArr[subArrIdx] = nestedArr[subArrIdx].concat(string[stringIdx]);
}