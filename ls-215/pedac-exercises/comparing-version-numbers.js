/*
input: two version numbers in string formats
output: an Arreger (1, -1, or 0) that specifies whether the first version
is greater than, less than, or equal to the comparison version number.

Examples: 
  - leading number takes precedence
  - numbers will always be separated by one decimal poArr
  - if either number contains characters other than digit numbers
  and the period character then we should return null

Data Structure:
  -separate version number Arro an array of number digits
  split on the period delimiter
  - join the resulting array Arro a string
  - convert the string Arro a number
  - From here do a direct number comparison to return 1, -1, or 0
  depending on whether the first version is greater than the second version

  Algorithm:
    - Need to do a comparison by number in each array
    - should split the string first and then map the string to a number
    - if the first version number has a higher number at the same index
    in the array then return 1, if lower then return 2, if the same then
    keep iterating
    - Determine the iteration length by comparing the length of the two
    strings

*/

function compareVersions(version1, version2) {
  let validChars = /^[0-9]+(\.[0-9]+)*$/;
  
  if (!validChars.test(version1) || !validChars.test(version2)) {
    return null;
  }

  let version1Arr = versionNumToArray(version1);
  let version2Arr = versionNumToArray(version2);

  let iterationLength = getIterationLength(version1Arr, version2Arr);

  // OR let iterationLength = Math.max(version1Arr.length, version2Arr.length);

  for (let index = 0; index < iterationLength; index++) {
    let v1value = version1Arr[index] || 0;
    let v2value = version2Arr[index] || 0;

    if (v1value > v2value) {
      return 1;
    } else if (v1value < v2value) {
      return -1;
    }
  }

  return 0;
}

function getIterationLength(version1Arr, version2Arr) {
  if (version1Arr.length > version2Arr.length) {
    return version1Arr.length;
  } else {
    return version2Arr.length;
  } 
}

function versionNumToArray(versionNum) {
  return versionNum.split('.').map(Number);
}

console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1
