/*
input: a string of characters representing a short hand range
output: the full list of the numbers, with expanded numbers and the
full numbers present (array)

Examples: - If a later number is lower than an earlier number,
          then the later number represents the "significant digit"
          of the next number (or the ending digits of the number).
          - The same rules carry over for ranges, however ranges are
          inclusive of the numbers in between
          - Multiple valid separators but individual values are always
          separated by commas

Data Structures: should first convert the string into a comma separated array
                - Can then detect from there that some values are ranges
                - expand those ranges
                - if an earlier number is less than a later one, transform the
                later number to the next highest number

Algorithm: transform string into comma separated arrays
          - iterate over the array, if a value is a range
          expand the range and include it in a new array
          (still need to preserve string format to ensure significant part is still there)
          - iterate over the array from the previous step and push the values into a
          new result array. 
          - If the last value in the array is greater than the next value
          to be pushed, transform the next value into the next proper number in the sequence.
          - Finally return the array resulting from the previous step.
*/

// Focus up here again, to make sure no NaN errors are returned,
// Upon first examination helper functions seem to be working properly.
// function getNumbers(string) {
//   let numsAndRanges = string.replace(/\s+/gi, '').split(',');
  
//   let expandedList = numsAndRanges.map(value => {
//     if (isRange(value)) {
//       return expandRange(value);
//     } else {
//       return value;
//     }
//   }).flat();

//   let resultArray = [];

//   expandedList.forEach(value => {
//     let previousValue = resultArray[resultArray.length - 1] || 0;
//     if (previousValue > value) {
//       resultArray.push(parseInt(expandNumber(value), 10));
//     } else {
//       resultArray.push(parseInt(value, 10));
//     }
//   });

//   return expandedList;
// }

// function isRange(string) {
//   return (/[\:\-(..)]/).test(string);
// }

// function expandNumber(previousValue, sigPart) {
//   let numPreviousVal = parseInt(previousValue, 10);
//   let numSigValue = parseInt(sigPart, 10);

//   let count = numSigValue;
//   if (count < numPreviousVal) {
//     while (count <= numPreviousVal || !String(count).endsWith(sigPart)) {
//       count++;
//     }
//   }

//   return String(count);
// }

// // issues here when multiple numbers in the middle present
// // fix would be to iterate through each number in the range
// // and include the inclusive values
// function expandRange(string) {
//   let rangeArr = string.split(/[\:\-(..)]/);
//   let resultArr = [];

//   for (let index = 0; index < rangeArr.length - 1; index++) {
//     let previousValue = rangeArr[index];
//     let sigValue = rangeArr[index + 1];

//     let count = parseInt(previousValue, 10);
//     for (count; count <= expandNumber(previousValue, sigValue); count++) {
//       resultArr.push(count);
//     }
//   }

//   return resultArr;
// }


const log = console.log;
log(getNumbers("1, 3, 7, 2, 4, 1")); // 1, 3, 7, 12, 14, 21
log(getNumbers('1-3, 1-2')); // 1, 2, 3, 11, 12
log(getNumbers("1:5:2")); // 1, 2, 3, 4, 5, ... 12
log(getNumbers("104-2")); // 104, 105, ...112
log(getNumbers("104-02")); // 104, 105, ...202
log(getNumbers("545, 64:11")); // 545, 564, 565, ...611
// // log(expandNumber('7', '2'));
// // log(expandNumber('14', '1'));
// // log(expandRange('1:5-2'));
// // log(expandRange("104-02"));

// Come back to this solution but give your brain a break for now.

function getNumbers(range) {
  let sigParts = range.split(/[\.\-:, ]+/);
  let separators = range.match(/(,|-|:|\.\.)/g);
  let list = [Number(sigParts[0])];
  
  for (let index = 0; index < sigParts.length - 1; index++) {
    let currentSigPart = sigParts[index + 1];
    let currentSeparator = separators[index];
    let nextNumber = findNextNumber(list, currentSigPart);
    if (currentSeparator === ',') {
      addNextNumber(list, nextNumber);
    } else {
      addUpToNextNumber(list, nextNumber);
    }
  }

  return list;
}

function findNextNumber(list, numberPart) {
  let lastNumber = list[list.length - 1];
  if (Number(numberPart) > lastNumber) {
    return Number(numberPart);
  }

  let digitToPrepend = 1;
  let testNumber = Number(String(digitToPrepend) + numberPart);

  while (lastNumber > testNumber) {
    digitToPrepend += 1;
    testNumber = Number(String(digitToPrepend) + numberPart);
  }

  return testNumber;
}

function addNextNumber(list, nextNumber) {
  list.push(nextNumber);
}

function addUpToNextNumber(list, nextNumber) {
  let lastNumber = Number(list[list.length - 1]);
  for (let number = lastNumber; number <= nextNumber; number++) {
    list.push(number);
  }
}
