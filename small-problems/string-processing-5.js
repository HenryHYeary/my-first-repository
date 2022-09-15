
function swapCase(string) {
  let wordArr = string.split(' ');

  let invertedArr = wordArr.map(word => {
    let charsArr = word.split('');
    let invertedCharArr = charsArr.map(char => {
      if (char.toLowerCase() === char) {
        return char.toUpperCase();
      } else if (char.toUpperCase() === char) {
        return char.toLowerCase();
      }
    });

    return invertedCharArr.join('');
  });

  return invertedArr.join(' ');
}

console.log(swapCase('CamelCase'));
console.log(swapCase('Tonight on XYZ-TV'));