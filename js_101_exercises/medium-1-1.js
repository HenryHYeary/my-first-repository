/*
input: an array of values of any type
output: a new array with the first element at the end of the array.

Examples: if a single element is passed into the array the return array should only have that element.
If a blank array is passed in as an argument then the return array should be blank as well.
If the input is not an array then the return value should be undefined.

Data Structure: create a blank array to concatenate and push the necessary values.

Algorithm: concatenate the values of the slice(1) of the array and then push the first value to the result array.
*/

function rotateArray(arr) {
  if(!arr || !Array.isArray(arr)) {
    return undefined;
  } else if (arr.length === 0) {
    return [];
  } else {
    let resultArr = [];
    resultArr = resultArr.concat(arr.slice(1));
    resultArr.push(arr[0]);

    return resultArr;
  }
}


console.log(rotateArray([7, 3, 5, 2, 9, 1]));
console.log(rotateArray(['a', 'b', 'c']));
console.log(rotateArray(['a']));
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));
console.log(rotateArray([]));

console.log(rotateArray());
console.log(rotateArray(1));

let array = [1, 2, 3, 4];
console.log(rotateArray(array));
console.log(array);