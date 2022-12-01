
function isUppercase(string) {
  return string.toUpperCase() === string;
}

function log(arr) {
  arr.forEach(element => console.log(element));
}

let testCases = [
isUppercase('t'),               // false
isUppercase('T'),               // true
isUppercase('Four Score'),      // false
isUppercase('FOUR SCORE'),      // true
isUppercase('4SCORE!'),         // true
isUppercase(''),                // true
]

log(testCases);