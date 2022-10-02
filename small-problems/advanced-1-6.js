/*
input: an array of values
output: a sorted array using the merge sort algorithm.

Examples: The examples seem to break down the elements into nested sub arrays,
one splitting the arrays into halves and then into arrays encapsulating each individual value
within those inner arrays. Solution is recursive.
Should return a new array and not mutate the original array.

Data Structure: should transform the initial array into the maximum number of subArrays possible.
Doesn't necessarily matter if the two inital arrays are split evenly, they should simply be split in two.

Algorithm: Should then map the values of everything within the two initial subArrays to contain them in their own individual
arrays.
Should then call the merge function on the individual arrays and then call the merge function again on the two
larger arrays.
should finally have a new array to return, make sure the original array is not mutated.
*/

function merge(arr1, arr2) {
  let copy1 = arr1.slice();
  let copy2 = arr2.slice();
  let result = [];
  
  while (copy1.length > 0 && copy2.length > 0) {
    if (copy1[0] <= copy2[0]) {
      result.push(copy1.shift());
    } else {
      result.push(copy2.shift());
    }
  }
  
  return result.concat(copy1.length === 0 ? copy2 : copy1);
}

function mergeSort(arr) {
  let firstArr = arr.slice(0, Math.floor(arr.length / 2));
  let secondArr = arr.slice(Math.floor(arr.length / 2));
  let resultArr = [firstArr, secondArr];

  resultArr = resultArr.map(subArr => {
    return subArr.map(number => {
			return [number];
    });
  });

	resultArr = resultArr.map(subArr => {
    return subArr.reduce((merged, next) => merge(merged, next));
  });

	return merge(resultArr[0], resultArr[1]);
}

console.log(mergeSort([9, 5, 7, 1]));
console.log(mergeSort([5, 3]));
console.log(mergeSort([6, 2, 7, 1, 4]));
console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));