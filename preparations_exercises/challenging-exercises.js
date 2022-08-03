function isNotANumber(value) {
    return value !== value;
}

function isNegativeZero(value) {
    return (value === 0) && (1 / value === -Infinity);
}

let y = "5"
y++

console.log(y)