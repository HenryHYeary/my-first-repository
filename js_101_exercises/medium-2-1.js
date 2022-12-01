/*
input: a string
output: a percentage value for the number of lowercase uppercase or neither characters present in the string.

Examples: return value is an object, looks like spaces and numbers count as neither characters.

Data Structure: since the return value is an object we should initialize an object with lowercase, uppercase, and neither keys
set to 0 or a blank string value.

Algorithm: should breakdown the string character by character by using a for loop or forEach loop on a split version of the string.
use if statements to increment three separate counters, one for uppercase, one for lowercase, and one for neither.
for the value of each object property divide the number of appropriate characters by string.length and convert that value to a string and assign
it to the object property value.
Finally return the object.
*/

function letterPercentages(string) {
    let charsArr = string.split('');
    let lowerChars = 0;
    let upperChars = 0;
    let neitherChars = 0;

    charsArr.forEach(char => {
        if (isLetter(char) && char === char.toLowerCase()) {
            lowerChars++;
        } else if (isLetter(char) && char === char.toUpperCase()) {
            upperChars++;
        } else {
            neitherChars++;
        }
    });

    return { lowercase: `${calculatePercentage(lowerChars, string.length)}`, 
             uppercase: `${calculatePercentage(upperChars, string.length)}`,
             neither: `${calculatePercentage(neitherChars, string.length)}`}
}


function calculatePercentage(num1, num2) {
    return (num1/num2 * 100).toFixed(2);
}

function isLetter (char) {
    return char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z';
}

console.log(letterPercentages('abCdef 123'));
console.log(letterPercentages('AbCd +Ef'));
console.log(letterPercentages('123'));