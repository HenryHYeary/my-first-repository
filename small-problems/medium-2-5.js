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
    let featuredArr = [];

    for (let i = 1; i <= MAX_FEATURED_NUM; i++) {
        if (i % 2 === 0 && i % 7 === 0 && noRepeatDigits(number)) {
            featuredArr.push(i);
        }
    }

    let onlyGreaterThanArr = featuredArr.filter(value => {
        return value > number;
    });

    return onlyGreaterThanArr[0];
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

    for (let i = 0; i < countsArr.length; i++) {
        if (countsArr[i] > 1) {
            return false;
        } else {
            return true;
        }
    }
}

console.log(featured(12));