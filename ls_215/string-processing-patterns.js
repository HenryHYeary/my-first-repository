let text = "The quick brown fox jumps over the lazy dog.";

function capitalize(text) {
  let textArr = text.split(' ');

  let newTextArr = textArr.map(word => {
    return word[0].toUpperCase() + word.slice(1);
  });

  return newTextArr.join(' ');
}

function countWordInText(word, text) {
  let textArr = text.replace(/[^a-z ]/ig, '').split(' ');

  return textArr.filter(wordInText => {
    return word.toLowerCase() === wordInText.toLowerCase();
  }).length;
}

console.log(capitalize(text));
console.log(countWordInText('the', text));
console.log(countWordInText('dog', text));

