
// input: a string consisting of zero or more space separated words.
// output: an object that shows the number of words of different sizes.

// Examples: The object should list size in ascending order and if a blank string is passed, the output should be an empty object.

// Data Structure:  should use a blank object to assign the different sizes and counts of words appearing with that size to.

// Algorithm: should use a loop to create a new object key for the size detected that also assigns the number of appearances of that size
// Should also split the string into an array to make sure the iteration passes over every word.
// How to count the total number of appearances of the length?


function wordSizes(sentence) {
  let wordsArray = sentence.split(' ');
  let count = {};

  for (let i = 0; i < wordsArray.length; i++) {
    let wordSize = wordsArray[i].length;

    if (wordSize === 0) {
      continue;
    }

    if (!count[wordSize]) {
      count[wordSize] = 0;
    }
    count[wordSize] +=1;
  }

  return count;
}

console.log(wordSizes('Four score and seven.'));