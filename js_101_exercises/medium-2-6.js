/*
input: an integer
output: the difference between the sum of all numbers between one and the input
integer and the sum of all of the squares between 1 and the given input integer.

Examples: the prompt seems to suggest that we use the same count variable to calculate both sums
If one is passed in as the input integer then the function should return 0.

Data Structure: should create two separate variables to store the value of each sum in.
Should start them at 0 most likely.

Algorithm: should use a for loop to iterate over the numbers between 1 and the passed input integer.
should simply add the numbers for the first variable, should square and add the numbers for the second variable.

Should finally square the sum of the first integer and return the difference between the first variable and the second
variable.
*/

function sumSquareDifference(number) {
    let normalSumTotal = 0;
    let totalOfSquares = 0;

    for (let i = 1; i <= number; i++) {
        normalSumTotal += i;
        totalOfSquares += i**2;
    }

    let squaredNormalSumTotal = normalSumTotal**2;

    return squaredNormalSumTotal - totalOfSquares;
}

console.log(sumSquareDifference(3));
console.log(sumSquareDifference(10));
console.log(sumSquareDifference(1));
console.log(sumSquareDifference(100));