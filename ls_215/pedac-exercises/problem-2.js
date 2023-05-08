/*
input: a string
output: a boolean value as to whether or not the submitted number
string is valid.

Examples: We start from the rightmost digit
          - Moving left double the value of every second
          digit
          - Any digit that becomes 10 or more subtract 9 from result
          - 1111 becomes 2121 checksum 6
          - 1234 becomes 2264 checksum 14
          - 8763 becomes 7733 checksum 20
Ignore all non-numeric input characters
  Extra full number example:
  2323 2005 7766 3554: For 3554 5 * 2 = 10 - 9 = 1 and 3 * 2 = 6: transformed: 6514 = checksum 16
                        For 7766 6 * 2 = 12 - 9 = 3 and 7 * 2 = 14 - 9 = 5: transformed: 5736 =  checksum 21
                        For 2005 0 * 2 = 0 and 2 * 2 = 4:transformed: 4005 = checksum 9
                        For 2323 2 * 2 = 4 and 2 * 2 = 4: transformed: 4343 = checksum 14

                        16 + 21 = 38 + 9 = 47 + 14 = 60
                      
Data Structure: filter out everything in the string but the digits
- Check to see if the length of the resulting string is evenly divisible by 4
  - if it is evenly divisible, split the number string into an array of number strings that are four digits each

Algorithm: Once you have verified and split the string
- transform the array of substrings to strings that have every other digit multiplied by 2 from right to left
  - reduce each string into the sum of the digits as numbers
  
reduce that resulting array into a final number/checksum
return true or false based on whether or not the number is evenly divisible by 10
*/


// Made this solution under the assumption that every number had to be
// 4 digits or had a length that was evenly divisible by 4 digits.

// function isValidLuhn(string) {
//   let onlyDigits = string.replace(/\D+/g, '');
  
//   if (onlyDigits.length % 4 !== 0 || onlyDigits.length === 0) {
//     return false;
//   }

//   let arrayOfSeparatedDigits = arrayOfFours(onlyDigits);
//   let mappedArr = arrayOfSeparatedDigits.map(doubleMap);
//   let mappedSumArr = mappedArr.map(sumOfDigits);

//   let totalChecksum = mappedSumArr.reduce((sum, next) => sum + next, 0);

//   return totalChecksum % 10 === 0;
// }

// function arrayOfFours(string) { // This one gave you a lot of trouble, come back to it
//   let arrayOfFours = [];
//   for (let index = 0; index <= string.length; index += 4) {
//     if (index > 0) {
//       arrayOfFours.push(string.slice(index - 4, index));
//     }
//   }

//   return arrayOfFours;
// }

// function doubleMap(string) {
//   let newString = '';

//   for (let index = 0; index < string.length; index++) {
//     if (index % 2 === 0) {
//       let newNum = Number(string[index]) * 2
//       if (newNum >= 10) newNum = newNum - 9;
//       newString += newNum;
//     } else {
//       newString += string[index];
//     }
//   }

//   return newString;
// }

// function sumOfDigits(string) {
//   let chars = string.split('');
//   let charsAsDigits = chars.map(Number);
//   return charsAsDigits.reduce((sum, next) => sum + next, 0);
// }

// const log = console.log;
// log(isValidLuhn('2323 2005 7766 3554')); // true
// log(isValidLuhn('1111')); // false
// log(isValidLuhn('8763')); // true

// More succinct solution if no 4 digit requirement
function isValidLuhn(string) {
  let onlyDigits = string.replace(/\D+/g, '').split('').reverse('').join('');
  
  let mappedString = doubleMap(onlyDigits);
  let totalChecksum = mappedString.split('').reduce((sum, next) => {
    return sum + Number(next);
  }, 0)

  return totalChecksum % 10 === 0;
}

function doubleMap(string) {
  let newString = '';

  for (let index = 0; index < string.length; index++) {
    if (index % 2 === 1) {
      let newNum = Number(string[index]) * 2
      if (newNum >= 10) newNum = newNum - 9;
      newString += newNum;
    } else {
      newString += string[index];
    }
  }

  return newString;
}

const log = console.log;

log(isValidLuhn('2323 2005 7766 3554')); // true
log(isValidLuhn('1111')); // false
log(isValidLuhn('8763')); // true
log(isValidLuhn('4417 1234 5678 9113')) // true

/*
Write a function that can add a check digit to make the number valid per
the Luhn formula and return the original number plus that digit.
Given test case: "2323 2005 7766 3554" in response to "2323 2005 7766 355".

*/

function makeValidLuhn(string) {
  if (isValidLuhn(string)) return string;

  for (let addedNum = 0; addedNum <= 9; addedNum++) {
    let newString = string + String(addedNum);
    if (isValidLuhn(newString)) {
      return newString;
    }
  }
}


log(makeValidLuhn('2323 2005 7766 355')); // '2323 2005 7766 3554'
log(makeValidLuhn('2323 2005 7766 3557')); // 2323 2005 7766 35576
log(makeValidLuhn('123')); // 1230
log(makeValidLuhn('1111')); // 11114
log(makeValidLuhn('2324')); // 23242
log(makeValidLuhn('2323 2005 7766 3554'));
log(makeValidLuhn('8763')); // 8763

// CREATE YOUR OWN TEST CASES BEFORE MOVING TO DATA STRUCTURE AND ALGORITHM