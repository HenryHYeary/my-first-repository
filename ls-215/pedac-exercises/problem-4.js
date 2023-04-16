/*
input: a list of numbers in a shorthand range (string)
output: a list of the numbers within that range (array of nums)

Examples: 
- Numbers are always increasing, so even if a lower digit is
present it should be transformed to the highest next number that has that
digit present as the last digit
- Valid separators for ranges are -, :, ..

Data Structure: - Returning an array, so ideal to push new values to an
array that will be returned.
- Need to determine if the values are comma separated or if the values
are present within a range
  -Likely need a regular expression to determine which value is which and
  I am not sure what to do with invalid range or list notation (have to watch
  more of the video).
  - should store out two separate values for individual numbers (filtered
    by appropriate regex) and ranges (use a different regex). Will likely need
    to split on a character within the specific regexes.

Algorithm: - Values stored in correct array
            - iterate over individual comma separated values
              - should iterate upwards until you find the next number
              that ends with the specified digit.
              - once that number is found then push that number to the output array
            - Iterate over range separated values
              - iterate upwards from the lower end of the range until you get
              to the high end.
              - Use the same helper function to determine the end point of the range.
              - push every number into new return array as well.

          - Note increase always moves from left to right and crosses between comma separated
          and range notation.
*/

function getNumbers(string) {
  const separatorRegex = /([\-\:]|[\.\.])/g;

  let resultArray = [];
  let commaSeparated = string.split(", ");
  let findRanges = commaSeparated.map(string => {
    if (separatorRegex.test(string)) {
      return string.split(separatorRegex).filter(str => (/\d+/).test(str));
    } else {
      return string
    }
  });

  for (let index = 0; index < string.length; index++) {
    let currentNum = Number()
  }
}

const log = console.log;
log(getNumbers("1, 3, 7, 2, 1")); // 1, 3, 7, 12, 14, 21
log(getNumbers('1-3', '1-2')); // 1, 2, 3, 11, 12
log(getNumbers("1:5:2")); // 1, 2, 3, 4, 5, ... 12
log(getNumbers("104-2")); // 104, 105, ...112
log(getNumbers("104-02")); // 104, 105, ...202
log(getNumbers("545, 64:11")); // 545, 564, 565, ...611
