/*
input: two strings
output: the shorter string concatenated to the longer string concated
again with the short string again

Examples: If there is an empty string on either side then simply return
the other string

Will there always be exactly two arguments? Will they always be strings?
What if the two strings are the same length? What do I return then?

Data Structure: return a new string with the strings concatenated on either
side

Algorithm: compare the strings to see which is longer
            - if the second string is longer then first + second + first
            - if the first string is longer then second + first + second
*/

function shortLongShort(str1, str2) {
  if (str1.length > str2.length) {
    return str2 + str1 + str2;
  } else {
    return str1 + str2 + str1;
  }
}


const log = console.log;

log(shortLongShort('abc', 'defgh')); // "abcdefgabc"
log(shortLongShort('abcde', 'fgh')); // "fghabcdefgh"
log(shortLongShort('', 'xyz')); // "xyz"