/*
input: a string of text and an integer (shifting number)
output: the string of text shifted over n characters in the alphabet

Examples: must remember the specific case given for each character (two strings of full alphabet?)
        - A shift of zero means to return the same character
        - A shift that exceeds 25th index (last index of alphabet string)
        goes back to the beginning of the respective alphabet string (modulo come in handy here?)
        (also difference is important after evenly divisible)
        - Any character that is not a letter should be ignored

Data Structure: should create two constant strings which the function can reference
                - an all caps alphabet and a lowercase alphabet (or regex test)
                - keep track of total index with additional shift, will be
                important for algorithm/code

Algorithm: split the string into an array of characters
            - iterate over each character, if the character
            is included in one of the alphabets keep a local track of the total
            index it accumulates (current index + shift)
            - see what the remainder of the index is modulo 25 and use that index
            as the index of the alphabet string to map the character to
            - return the correct character from that in the mapped array.
            - join all of the individual characters together and return the string
*/

const log = console.log;
log(caesarEncrypt('A', 0)); // "A"
log(caesarEncrypt('A', 3)); // "D"
log(caesarEncrypt('y', 5)); // "d"
log(caesarEncrypt("a", 47)) // "v"
log(caesarEncrypt("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
log(caesarEncrypt("The quick brown fox jumps over the lazy dog!", 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"
log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// // "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

function caesarEncrypt(string, shift) {
  const upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerAlpha = 'abcdefghijklmnopqrstuvwxyz';

  let stringArr = string.split('');

  let encodedStringArr = stringArr.map((char) => {
    if (upperAlpha.includes(char)) {
      return encryptLetter(char, shift, upperAlpha);
    } else if (lowerAlpha.includes(char)) {
      return encryptLetter(char, shift, lowerAlpha);
    } else {
      return char;
    }
  });

  return encodedStringArr.join('');
}

function encryptLetter(letter, shift, alphabet) {
  const letterPos = alphabet.indexOf(letter);

  for (let step = 1; step <= shift; step++) {
    if (!alphabet[letterPos + step]) {
      alphabet += alphabet;
    }

    letter = alphabet[letterPos + step];
  }

  return letter
}

// log(findCorrectIdx(0, 47));
// log(findCorrectIdx(0, 3));
// let lowerAlpha =  'abcdefghijklmnopqrstuvwxyz';
// log(lowerAlpha[21]);
// log(29 % 25);