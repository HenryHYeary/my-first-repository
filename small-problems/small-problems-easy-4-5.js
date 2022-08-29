
function cleanUp(text) {
  return text.replace(/[^a-z0-9]/gi, '');
}


function isRealPalindrome(string) {
  let analysisString = cleanUp(string).toLowerCase();

  return analysisString === analysisString.split('').reverse().join('');
}

console.log(isRealPalindrome('madam'));
console.log(isRealPalindrome('Madam'));
console.log(isRealPalindrome("Madam, I'm Adam"));
console.log(isRealPalindrome('356653'));
console.log(isRealPalindrome('356a653'));
console.log(isRealPalindrome('123ab321'));