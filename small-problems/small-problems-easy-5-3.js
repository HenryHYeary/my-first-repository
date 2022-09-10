/*
input: one array of values.
output: an array with two array elements each containing half of the values of the original input array.

Examples: If there is an odd number of elements in the original array then the extra element should go to the first array.
If only one element is contained in the original array, then the function should return the element in the first array element and return a second empty element.
If an empty array is passed then both array elements should be empty in turn.

Data Structures: Should create three different arrays to push values to. First being the outer array to push the array elements to.
Next should be the first innerArray and the last should be the second innerArray.

Algoritm: Should create an if/else if statement to append the values to each inner array based on their index.
Should then return the outer array with innerArray1 and innerArray2 pushed as values into the outer array. 
*/

function halvsies(arr) {
  let outerArr = [];
  let innerArr1 = [];
  let innerArr2 = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr.length % 2 === 0) {
      innerArr1 = arr.slice(0, arr.length / 2);
      innerArr2 = arr.slice(arr.length / 2);
    } else if (arr.length % 2 === 1) {
      innerArr1 = arr.slice(0, (Math.floor(arr.length / 2) + 1));
      innerArr2 = arr.slice(Math.floor(arr.length / 2) + 1);
    }
  }

  outerArr = [innerArr1, innerArr2];

  return outerArr;
}

console.log(halvsies([1, 2, 3, 4]));
console.log(halvsies([1, 5, 2, 4, 3]));
console.log(halvsies([5]));
console.log(halvsies([]));