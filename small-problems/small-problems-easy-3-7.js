// input: integer
// output: integer (either the same integer or doubled)

// Examples: numbers must strictly read the same forwards and backwards for the same number to be returned
// Data types: Could convert the original integer into two substrings at the halfway point index and then compare them to make sure they are strictly equal.
// Algorithm: should use an if statement that depends on whether or not the comparison substrings are equal to determine the return value.

function twice (number) {
  let stringLength = String(number).length
  let comparisonStr1 = String(number).substring(0, stringLength / 2);
  let comparisonStr2 = String(number).substring(stringLength / 2);

  if (comparisonStr1 === comparisonStr2) {
    return number;
  } else {
    return number * 2;
  }
}

console.log(twice(37));
console.log(twice(44));
console.log(twice(334433));
console.log(twice(444));
console.log(twice(107));
console.log(twice(103103));
console.log(twice(3333));
console.log(twice(7676));