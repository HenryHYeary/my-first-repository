// input: string
// output: string containing the value of the original string with all consecutive duplicate chars collapsed into a single char

// Examples: if a blank string is passed as an argument, the function should return a blank string. Also if a one char argument is passed
// that one char should be returned as well.
// Multiple chars also applies to numbers as well.

// Data Structure: should create a blank string within the function to add each character into
// should also use string.split('') to separate out each character for analysis.

// Algorithm: should use forEach or a for loop to iterate through the split array to verify that the next char ISN'T the same as the current char.


function crunch(str) {
  let result = '';
  let charArr = str.split('');

  for (let i = 0; i < charArr.length; i++) {
    if (charArr[i] !== charArr[i + 1]) {
      result += charArr[i];
    }
  }

  return result;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""