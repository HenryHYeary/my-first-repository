/*
input: an array of values to be sorted
output: the same array with all elements sorted from least to greatest (using bubble sort).

Examples: Do need to worry about sorting string arrays alphabetically however the examples only seem to care about the 
first character of each element in the array being in alphabetical order.

Data Structure: Since we are mutating this array or sorting it in place, we should not need to worry about
creating a separate data structure from the original array that is passed in as input.

Algorithm: should use a forEach loop to iterate over every element of the array. Should make a comparison to the previous element
in index for every iteration if that previously indexed value is greater than the current value then the values should be swapped.
*/

function bubbleSort(arr) {
    let remainingDigitsToBeSortedCount = arr.length;

    do {
        let newRemainingDigitsToBeSortedCount = 0
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
                newRemainingDigitsToBeSortedCount = i;
            }
        }
        remainingDigitsToBeSortedCount = newRemainingDigitsToBeSortedCount;

    } while (remainingDigitsToBeSortedCount > 1);


    return arr;
}

console.log(bubbleSort([6, 2, 7, 1, 4]));
