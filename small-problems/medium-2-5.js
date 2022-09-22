/*
input: an integer
output: the next featured number.

Examples: a featured number is odd, a multiple of seven, with all digits occuring exactly once each
The largest possible featured number is 9876543201.

Data Structure: should create an array to append all featured numbers to up to 9876543201.

Algorithm: use a complex if statement to determine if the number is odd, if it is a multiple of seven,
and whether or not all digits are unique (can create a subfunction for this)
If the number passes all of these checks then it will be appended to the total list of featured numbers.
Then filter the array to where only values greater than the given integer will be present in the array.
Then return the first element of that filtered array.
*/

const MAX_FEATURED_NUM = 9876543201;

function featured(number) {

    if (number >= MAX_FEATURED_NUM) {
        return 'There is no possible number that fulfills those requirements.'
    }

    do {
        number++
    } while (!isOddAndMultOf7(number) || !noRepeatDigits(number));

    return number;
}

function noRepeatDigits(number) {
    let countObj = {};
    let stringNum = String(number);

    for (let i = 0; i < stringNum.length; i++) {

        if (countObj[stringNum[i]]) {
            countObj[stringNum[i]] += 1;
        } else {
            countObj[stringNum[i]] = 1;
        }
    }

    let countsArr = Object.values(countObj);

    return countsArr.every(value => {
        return value === 1;
    });
}

function isOddAndMultOf7(number) {
    return number % 2 === 1 && number % 7 === 0;
}

console.log(featured(9876543201));