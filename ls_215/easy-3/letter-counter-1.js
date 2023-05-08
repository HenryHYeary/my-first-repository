/*
input: a sentence (string)
output: an object that shows the number of words of 
different sizes within the string

Examples: Words are any sequence of non-space characters
If an empty string is passed in then an empty object should be returned

Data Structure: should create a blank object assigned to a variable
                - Split the words into an array of words
          
Algorithm: Iterate through each word in the array (forEach)
          - Take account of the length of the current word
            - if there are no words recorded in the object at that
            length then create a property with a name pointing to the length
            of the word
            - if there are words recorded in the object at that length
            then increment the count of that property by one.
          - once iteration is finished return the resulting object
*/

function wordSizes(sentence) {
  let wordsArr = sentence.split(/\s+/);
  let resultObj = {};

  let testString = sentence.replace(/\s+/, '');

  if (testString.length === 0) return {}

  wordsArr.forEach(word => {
    if (!resultObj.hasOwnProperty(String(word.length))) {
      resultObj[String(word.length)] = 1;
    } else {
      resultObj[String(word.length)] += 1;
    }
  });

  return resultObj;
}

const log = console.log;

log(wordSizes("How    many years?")); // {"3": 1, "4": 1, "6": 1}
log(wordSizes("Hey hey hey!")); // {"3": 2, "4": 1}
log(wordSizes('')); // {} 
log(wordSizes('      ')); // {}