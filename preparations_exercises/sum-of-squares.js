let array = [3, 5, 7];

function sumOfSquares(numbers) {
    return array.reduce((accumulator, number) => {
        return accumulator + number * number;
    }, 0);

}

console.log(sumOfSquares(array));