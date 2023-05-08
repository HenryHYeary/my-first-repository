/*
input: an array of integers between 0 and 19
output: an array of those integers sorted based on the English word for each
number

Examples: should not mutate the argument.

Data structure: should create an array of the english words for each value
and should then iterate through that array, progressively adding properties to a new
object. Each property of the object should have the numerical value of the word assigned to it.

Should then create a copy of the array and then sort the array according to it's matching
word key.
*/

const wordNumbers = 'zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen';
const wordNumberArr = wordNumbers.split(', ');

function alphabeticNumberSort(array) {
  let resultCopy = array.slice();

  return resultCopy.sort((a, b) => {
    let wordA = wordNumberArr.find(word => wordNumberArr.indexOf(word) === a);
    let wordB = wordNumberArr.find(word => wordNumberArr.indexOf(word) === b);
    if (wordA < wordB) {
      return -1
    } else if (wordA > wordB) {
      return 1;
    } else {
      return 0;
    }
  });
}

console.log(alphabeticNumberSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));

// Book solution
// function wordSort(num1, num2) {
//   const NUMBER_WORDS = [
//     'zero', 'one', 'two', 'three', 'four', 'five',
//     'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
//     'twelve', 'thirteen', 'fourteen', 'fifteen',
//     'sixteen', 'seventeen', 'eighteen', 'nineteen'
//   ];

//   if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
//     return 1;
//   } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
//     return -1;
//   } else {
//     return 0;
//   }
// }

// function alphabeticNumberSort(array) {
//   return [...array].sort(wordSort);
// }

// Further exploration (refactor of book solution)

// function alphabeticNumberSort(array) {
//   return [...array].sort((num1, num2) => {
//     const NUMBER_WORDS = [ 'zero', 'one', 'two', 'three', 'four', 'five',
//                             'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
//                             'twelve', 'thirteen', 'fourteen', 'fifteen',
//                             'sixteen', 'seventeen', 'eighteen', 'nineteen'];

//     if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
//       return 1;
//     } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });
// }