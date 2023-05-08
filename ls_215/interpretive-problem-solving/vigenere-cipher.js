/*
input: a string of text and a keyword
output: the encrypted version of the string of text based on the cumulative
shift value of the indexes in the keyword.

Examples: Based on the example given for the problem, it looks like we need to split
the original string into segments that are of equal length to the keyword
  - each character represents a shift value with its index in the alphabet
  - Should use the caesar cipher solution from the previous exercise to ensure that
  the correct string is output based off of the index of the current letter in the keyword

  - Should create a sub function that splits out the string into sections the length
  of the keyword. (should preserve non alphabetic characters in the string as well though)
  - From the final example we can see that if the plaintext is shorter than than the keyword
  the keyword is truncated to the length of the plaintext

Data Structure: should create a filtered version of the original string where all non-alphabetic
characters are removed (can use this as a reference later).
  - create an alphabet constant within the function. For both upper and lower alphabets
  - create an array of the indexes of the letters in the keyword that will serve as shift values
  - separate out the string into an array
  - create a variable to keep track of current idx in idx array as well.

Algorithm: Iterate through main string, 
          - if either the upper or lower alphabet contains the character
            - look to idxArray created for the correct index of the keyword character
              - find the index of that letter within the current alphabet, shift current character
                using the value of the index and return that character as the mapped character (use caesar cipher function)

              - join the array together again into a string and return the string
*/

// function caesarEncrypt(string, shift) {
//   const upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   const lowerAlpha = 'abcdefghijklmnopqrstuvwxyz';

//   let stringArr = string.split('');

//   let encodedStringArr = stringArr.map((char) => {
//     if (upperAlpha.includes(char)) {
//       return encryptLetter(char, shift, upperAlpha);
//     } else if (lowerAlpha.includes(char)) {
//       return encryptLetter(char, shift, lowerAlpha);
//     } else {
//       return char;
//     }
//   });

//   return encodedStringArr.join('');
// }

// function encryptLetter(letter, shift, alphabet) {
//   const letterPos = alphabet.indexOf(letter);

//   for (let step = 1; step <= shift; step++) {
//     if (!alphabet[letterPos + step]) {
//       alphabet += alphabet;
//     }

//     letter = alphabet[letterPos + step];
//   }

//   return letter
// }

// function createIdxArr(string, keyword) {
//   let resultArr = [0];
//   let keywordIdx = 0;
//   for (let index = 0; index < string.length; index++) {
//     keywordIdx++
//     resultArr.push(keywordIdx);
//     if (keywordIdx === keyword.length - 1) keywordIdx = -1;
//   }

//   return resultArr;
// }

// function vigenereEncrypt(string, keyword) {
//   keyword = keyword.toLowerCase();
//   const upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   const lowerAlpha = 'abcdefghijklmnopqrstuvwxyz';

//   let idxArr = createIdxArr(string, keyword);
//   let stringArr = string.split('');
//   let idxArrIndex = -1

//   return stringArr.map(char => {
//     if (upperAlpha.includes(char)) {
//       idxArrIndex += 1;
//       let shiftVal = lowerAlpha.indexOf(keyword[idxArr[idxArrIndex]]);
//       return caesarEncrypt(char, shiftVal);
//     } else if (lowerAlpha.includes(char)) {
//       idxArrIndex += 1;
//       let shiftVal = lowerAlpha.indexOf(keyword[idxArr[idxArrIndex]]);
//       return caesarEncrypt(char, shiftVal);
//     } else {
//       return char;
//     }
//   }).join('');
// }


// let string = "Pineapples don't go on pizzas!".replace(/[^a-z]/gi, '');
// console.log(createIdxArr(string, "rails"));

// const log = console.log;
// log(vigenereEncrypt("Pineapples don't go on pizzas!", "meat")); // Bmnxmtpeqw dhz'x gh ar pbldal!
// log(vigenereEncrypt("Pineapples don't go on pizzas!", "A")); // Pineapples don't go on pizzas!
// log(vigenereEncrypt("Pineapples don't go on pizzas!", "Aa")); // Pineapples don't go on pizzas!
// log(vigenereEncrypt("Pineapples don't go on pizzas!", "cab")); // Riogaqrlfu dpp't hq oo riabat!
// log(vigenereEncrypt("Dog", "Rabbit")) // Uoh
// log(vigenereEncrypt("Pineapples don't go on pizzas!", "rails")); // Givpsgptpk uov'e yf ov aaqzid!

/*
plaintext: Pineapples don't go on pizzas!
keyword: rails

Applying the Vigenere Cipher for each alphabetic character:
plaintext:  Pinea pples dontg oonpi zzas
shift:      rails rails rails rails rail
ciphertext: Givps gptpk uovey fov aa qzid
result: Givpsgptpk uov'e yf ov aaqzid!
*/

// log(vigenereEncrypt("Pineapples don't go on pizzas!", "rails")); // Givpsgptpk uov'e yf ov aaqzid!

// Book solution
function vigenereEncrypt(plaintext, keyword) {
  const upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerAlpha = 'abcdefghijklmnopqrstuvwxyz';
  let cipher = '';
  let keyPos = 0;
  keyword = keyword.toUpperCase();
  let key;

  plaintext.split('').forEach(char => {
    if (char >= 'A' && char <= 'Z') {
      key = upperAlpha.indexOf(keyword[keyPos]);
    }
  })
}