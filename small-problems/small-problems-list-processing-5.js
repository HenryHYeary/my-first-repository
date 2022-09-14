/*
input: a string
output: an array of all of the substrings within the string

Examples: should be ordered by where the substring begins.

Data Structure: should create a new empty variable to add all of the values to.
create a substring variable to keep track of the current substring you are on (iterate through
the every substring of each possible length).

Algorithm: concatenate the arrays created by the leadingSubstrings function when applied to
each newly created substring of each possible substring length. 
*/

function substrings(string) {
  let resultArr = [];

  for (let i = 0; i < string.length; i++) {
    let substring = string.substring(i);
    resultArr = resultArr.concat(leadingSubstrings(substring));
  }

  return resultArr;
}

function leadingSubstrings(string) {
  let resultArr = [];

  for (let i = 1; i <= string.length; i++) {
    resultArr.push(string.slice(0, i));
  }

  return resultArr;
}

console.log(substrings('abcde'));