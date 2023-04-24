/*
input: a string
output: a boolean value indicating whether or not the string is a real
palindrome or not.

Examples: Should ignore all non alphabetic characters and case does not matter
      - What if the input is not a string, more than one argument?

Data Structure: should create a variable assigned to a cleaned version of the string
with only alphabetic characters present and all lower case

Algorithm: - Use a regex to filter out all non alphabetic characters
            - coerce that string to lower case
            - create another variable that is a reversed version of the string
            described above
            - return whether or not the strings are equal to each other.
*/

const log = console.log;
log(isRealPalindrome("Race/car")); // true
log(isRealPalindrome("mad11aM")); // true
log(isRealPalindrome("123abc321")); // false
log(isRealPalindrome('madam'));
log(isRealPalindrome('Madam'));
log(isRealPalindrome("Madam, I'm Adam"));
log(isRealPalindrome('356653'));
log(isRealPalindrome('356a653'));
log(isRealPalindrome('123ab321'));

function isRealPalindrome(string) {
  let cleanedString = string.replace(/[^a-z]/gi, '').toLowerCase();
  let reversedCleanString = cleanedString.split('').reverse().join('');

  return cleanedString === reversedCleanString;
}

