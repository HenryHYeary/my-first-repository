const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

function wordSizes(sentence) {
  let wordsArr = sentence.split(' ');
  let lengthCounter = {};

  for (let i = 0; i < wordsArr.length; i++) {
    let cleanSize = removeNonLetters(wordsArr[i]).length;
    if (cleanSize === 0) continue;

    if (!lengthCounter[cleanSize]) {
      lengthCounter[cleanSize] = 0;
    }

    lengthCounter[cleanSize] ++;
  }

  return lengthCounter;
}

function removeNonLetters(string) {
  let charsArr = string.split('');
  let filteredArr = charsArr.filter(char => {
    return (ALPHABET.includes(char)) || (ALPHABET.toUpperCase().includes(char)); 
  });

  return filteredArr.join('');
}

console.log(wordSizes('Four score and seven.'));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(''));