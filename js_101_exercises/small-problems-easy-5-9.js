/*
input: array
output: each element alongside the number of occurences of that element.

Examples: examples seem to match description of the problem.

Data Structure: should use an object and create a new key for each new element.

Algorithm: should use a for loop to assign the value of each key as the number of occurences of that element in the array.
*/

function countOccurrences(arr) {
  let countObj = {};

  for (let i = 0; i < arr.length; i++) {
    countObj[arr[i]] = countObj[arr[i]] || 0;
    countObj[arr[i]]++;
  }

  let entries = Object.entries(countObj);

  entries.forEach(entry => {
    console.log(`${entry[0]} => ${entry[1]}`);
  });
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);