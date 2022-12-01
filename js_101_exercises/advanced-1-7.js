/*
input: an array of values sorted in ascending order, as well as an element of that list to be searched for.
output: the index of the search item, if the search item is not in the list then return -1.

Examples: algorithm should work for both string arguments as well as integers.

Data Structure: Following the problems guide we will need to eventually discard the first or second half of the list of values
so we will eventually need to create a slice of the first half or second half of the array depending on whether or not the middle value
is greater or less than the search term.

Algorithm: Following the guide in the problem description we should first retreive the middle value of the data.
Should use Math.floor(arr.length / 2) for this most likely.
if the value is equal to the middle element then stop the search and return that index.
If the middle value is less than the search item then discard the first half of the array by using array.slice beginning at that location.
Should repeat that process with the remaining list continuously using array.slice.
If the middle value is greater than the search item then discard the second half of the array by using array.slice beginning at the array and ending at the middle section.
Should repeat the process as well in the same manner as if the middle value were less.
Finally return the index (will be the sum of the quotients of however many iterations the process took).
*/


/*
function binarySearch(array, searchItem) {
  function middleItem(arr) {
    let indexOfMiddleItem = Math.floor((arr.length - 1) / 2);
    return indexOfMiddleItem;
  }

  if (array[middleItem(array)] === searchItem) {
    return middleItem(array);
  } else if (array[middleItem(array)] < searchItem) {
    let nextHalf = array.slice(middleItem(array) + 1);
    while (nextHalf)
  }
}
*/

function binarySearch(array, searchItem) {
  let high = array.length - 1;
  let low = 0;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (array[mid] === searchItem) {
      return mid;
    } else if (array[mid] < searchItem) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6


