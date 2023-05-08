/*
input: a string
output: an object that counts how many uppercase and lowercase letters
there are in the string along with a count of characters that are not
alphabetic (neither).

Examples: It is possible for any and all of the counts to be zero.

Data Structure: Iterate through the string and update a blank object
that will eventually be returned at the end of iteration with the
number of character types.
*/

function letterCaseCount(string) {
  let resultObj = { lowercase: 0, uppercase: 0, neither: 0 };
  let upperRegex = /[A-Z]/;
  let lowerRegex = /[a-z]/;

  string.split('').forEach(char => {
    if (upperRegex.test(char)) {
      resultObj['uppercase'] += 1;
    } else if (lowerRegex.test(char)) {
      resultObj['lowercase'] += 1;
    } else {
      resultObj['neither'] += 1;
    }
  });

  return resultObj;
}

let logVals = [
  letterCaseCount('abCdef 123'),  // { lowercase: 5, uppercase: 1, neither: 4 }
  letterCaseCount('AbCd +Ef'),    // { lowercase: 3, uppercase: 3, neither: 2 }
  letterCaseCount('123'),         // { lowercase: 0, uppercase: 0, neither: 3 }
  letterCaseCount('')            // { lowercase: 0, uppercase: 0, neither: 0 }
];

logVals.forEach(val => console.log(val));

// Book solution
// function letterCaseCount(string) {
//   const lowerArray = string.match(/[a-z]/g) || [];
//   const upperArray = string.match(/[A-Z]/g) || [];
//   const neitherArray = string.match(/[^a-z]/gi) || [];

//   return {
//     lowercase: lowerArray.length,
//     uppercase: upperArray.length,
//     neitherArray: neitherArray.length
//   };
// }

