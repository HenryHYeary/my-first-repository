/*
input: a sentence (string)
output: a count object that excludes non-letters when determining word size

Examples: Should remove punctuation and spaces from consideration, prime use for
regex filtering of strings.

Data Structures: Split the string into an array of words (split on consecutive or
  single whitespace)
  - map the array to only include alphabetic characters per each word
  - create a blank object to modify through iteration

Algorithm: For each word in the array, take account of the length of the
current word if the object does not have that length property then instantiate
it to one
  - if it does have that property then increment the value of that property by 1
  - return the new object
*/

const log = console.log;

log(wordSizes("Why didn't    you do that?")); // {"2": 1, "3": 2, "5": 2}
log(wordSizes("Hey diddle diddle, the cat and the fiddle!")); // {"3": 5, "6": 3}

function wordSizes(sentence) {
  let wordsArr = sentence.split(/\s+/);
  let resultObj = {};

  let testString = sentence.replace(/[^a-z]/gi, '');

  if (testString.length === 0) return {}

  wordsArr.forEach(word => {
    let onlyAlpha = String(word).replace(/[^a-z]/gi, '');
    if (!resultObj.hasOwnProperty(String(onlyAlpha.length))) {
      resultObj[String(onlyAlpha.length)] = 1;
    } else {
      resultObj[String(onlyAlpha.length)] += 1;
    }
  });

  return resultObj;
}

log(wordSizes("Four score and seven."));
log(wordSizes("What's up doc?"));
log(wordSizes(''));
log(wordSizes('1234 567'));