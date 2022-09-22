/*
input: an integer representing a year greater than 1752.
output: the number of Friday the 13ths that occurred for that given year.

Examples: Can assume that the Gregorian calendar will continue to be in use for
the foreseeable future.

Data Structure: should declare a variable representing the count of Friday the 13ths for each month.

Algorithm: Need to use Date.prototype methods to iterate through years.
Should iterate through each month, then get the day that falls on the 13th
Count the 13ths that fall on a Friday (should be 5 as days of the week are zero indexed from Sunday).
Then return the count variable.
*/



function fridayThe13ths(year) {
    let thirteens = [];
    let fridayThirteensCount = 0;

    for (let i = 0; i < 12; i++) {
        thirteens.push(new Date(year, i, 13))
    }

    thirteens.forEach(date => {
        if (date.getDay() === 5) {
            fridayThirteensCount++;
        }
    });

    return fridayThirteensCount;
}

console.log(fridayThe13ths(1986));
console.log(fridayThe13ths(2015));
console.log(fridayThe13ths(2017));