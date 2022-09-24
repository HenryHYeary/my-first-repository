/*
input: a long string that adds each line by using the + operator
output: the longest sentence in the string. As well as a count of the total
number of words contained in the string after a line separator.

Examples: Any sequence of characters that are not spaces or sentence ending characters should be treated as words.

Data Structure: should split the input string into an array of words. Should consider using a different data structure
such as an object to table each sentence array.

Algorithm: Should iterate over every word in the array to see if the word ends with a sentence ending character.
Once that sentence ending character is detected then a new array should be created to add to the overall table object.
Should then iterate over each arr value and add its length to a separate array.
Then return the max arr length as the count as well as the sentence joined.
*/

function longestSentence(string) {
  let allSentences = separateSentences(string);
  let lengthCountForEachSentence = [];

  for (let i = 0; i < allSentences.length; i++) {
    lengthCountForEachSentence.push(allSentences[i].length);
  }

  let longestSentenceWordCount = lengthCountForEachSentence.reduce((a, b) => Math.max(a, b), -Infinity);
  let indexOfLongestSentence = lengthCountForEachSentence.indexOf(longestSentenceWordCount);

  return `${allSentences[indexOfLongestSentence].join(' ')}\n\nThe longest sentence has ${longestSentenceWordCount} words.`;
}

function separateSentences(string) {
  let wordsArr = string.split(' ');
  let lastWordIndexes = [0];
  let outerSentencesArr = [];

  for (let i = 0; i < wordsArr.length; i++) {
    if (isLastWordOfSentence(wordsArr[i])) {
      lastWordIndexes.push(i + 1);
      }
    }

  for (let i = 1; i < lastWordIndexes.length; i++) {
    outerSentencesArr.push(wordsArr.slice(lastWordIndexes[i - 1], lastWordIndexes[i]));
  }

  return outerSentencesArr;
}

function isLastWordOfSentence(word) {
  return (word.endsWith('.') || word.endsWith('!') || word.endsWith('?'));
}

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

console.log(longestSentence(longText));
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

console.log(longestSentence(longerText));
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

console.log(longestSentence("Where do you think you're going? What's up, Doc?"));
// Where do you think you're going?
//
// The longest sentence has 6 words.

console.log(longestSentence("To be or not to be! Is that the question?"));
// To be or not to be!
//
// The longest sentence has 6 words.