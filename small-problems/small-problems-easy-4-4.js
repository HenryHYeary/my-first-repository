
// input: string
// output: boolean value indicating whether string is a palindrome or not
// Examples: case matters and all characters matter, palindrome is also valid for numbers
// Data Structures: should split each half of the string into a comparison substring using split with string.length / 2 as the divider/delimiter
// Algorithm: compare whether the first substring is equal to the second substring (boolean value)

function isPalindrome(string) {
  let comparisonSubstring1 = string.substring(0, ((string.length / 2) + 1));
  let comparisonSubstring2 = string.substring(string.length / 2).split('').reverse().join('');

  if (string.length % 2 === 0) {
    comparisonSubstring1 = comparisonSubstring1.substring(0, comparisonSubstring1.length - 1);
  }

  return comparisonSubstring1 === comparisonSubstring2;
}

console.log(isPalindrome('madam'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome("madam i'm adam"));
console.log(isPalindrome('356653'));