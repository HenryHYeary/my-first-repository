function add(previousValue, element) {
  let sum = previousValue + element;
  console.log(previousValue, element, sum);
  return sum;
}

let count = [1, 2, 3, 4, 5];
console.log(count.reduce(add));

/*
Problem: create a function that reduces an array to a single value.
Callback function specifies how this should work.

Example: the smallest callback performs a simple comparison between the
next value and the current value, which is intended to find the minimum
value in the array.
The sum on the other hand is an accumulation of all of the numbers in the
array, but this should still involve a "comparison" between the current
value and the next value.

Data Structure: Obviously need to use the array passed in. Should have
a variable that is gradually reassigned or modified on each iteration
(or at least has a possibility of undergoing modification). The initial
value of this final value should either be the initial argument passed in
or it should be the first element of the array. This value should then
be returned after the final function invocation.

Algorithm: The previous value should be set to either the initial argument
or should be set to the first element of the array. 
*/

function myReduce(array, func, initial) {
  let value;
  let index;

  if (initial === undefined) {
    value = array[0];
    index = 1;
  } else {
    value = initial;
    index = 0;
  }

  array.slice(index).forEach(element => value = func(value, element));
  return value;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));

function longestWord(words) {
  return myReduce(words, longest);
} 

function longest(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
}

console.log(longestWord(['abc', 'launch', 'targets', '']));