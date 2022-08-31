
let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

const VOWELS = 'aeiou';

let objectValues = Object.values(obj);

objectValues.forEach(subArr => {
  subArr.forEach(word => {
    let chars = word.split('');

    chars.forEach(char => {
      if (VOWELS.includes(char) || VOWELS.toUpperCase().includes(char)) {
        console.log(char);
      }
    });
  });
});

