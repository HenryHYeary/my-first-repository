
//This exercise seems too simple to do a full PEDAC process for

function reverseSentence(string) {
  let reversedSentence = string.split(' ').reverse().join(' ');

  return reversedSentence;
}

console.log(reverseSentence(''));
console.log(reverseSentence('Hello World'));
console.log(reverseSentence('Reverse these words'));