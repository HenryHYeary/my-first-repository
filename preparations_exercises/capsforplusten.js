function capsForPlusTen (string) {
    if (string.length > 10) {
        return string.toUpperCase();
    } else {
    return string;
    }
}

console.log(capsForPlusTen("Sue Smith"));
console.log(capsForPlusTen("Sue Robertson"));
console.log(capsForPlusTen("Joe Thomas"));
console.log(capsForPlusTen("Joe Stevens"));