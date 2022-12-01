/*
input: an array of integers between 0 and 19
output: an array of those integers sorted based on the English word for each number.

Examples: The text for each word has been given so it would likely be a good idea to create a const variable.
that is a split version of that string (array).

Data Structure: Aside from the const variable mentioned above we could probably use array.sort() to
organize the numbers alphabetically. should probably use array.map to create a comparison array that matches the originally passed array. 
*/

const NUMBER_WORDS = 'zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen'
const NUMBER_WORDS_ARRAY = NUMBER_WORDS.split(', ');


function alphabeticNumberSort(arr) {
  return [...arr].sort((a, b) => {
    if (NUMBER_WORDS_ARRAY[a] > NUMBER_WORDS_ARRAY[b]) {
      return 1;
    } else if (NUMBER_WORDS_ARRAY[a] < NUMBER_WORDS_ARRAY[b]) {
      return -1;
    } else {
      return 0;
    }
  });
}

let testCaseArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

console.log(alphabeticNumberSort(testCaseArr));
console.log(testCaseArr);