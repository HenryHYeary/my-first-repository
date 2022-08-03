function oddLengths(strings) {
    let lengths = strings.map((letters) => letters.length);
    let oddLengths = lengths.filter((number) => number % 2 === 1);
    return oddLengths;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));

function oddLengthsTwo(strings) {
    return strings.reduce((filteredNumbersArray, letters) => {
        let length = letters.length;
        if (length % 2 === 1) {
            filteredNumbersArray.push(length);
        }
        return filteredNumbersArray;
    }, []);
}

console.log(oddLengthsTwo(arr));