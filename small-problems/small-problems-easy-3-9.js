
function cleanUp(str) {
  let cleanText = '';

  for (let i = 0; i < str.length; i++) {
    if (isLowerCaseLetter(str[i]) || isUpperCaseLetter(str[i])) {
      cleanText += str[i];
    } else if (cleanText[cleanText.length - 1] !== ' ') {
      cleanText += ' ';
    }
  }

  return cleanText;
}

function isLowerCaseLetter (char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCaseLetter(char) {
  return char >= 'A' && char <= 'Z';
}

console.log(cleanUp("---what's my +*& line?"));