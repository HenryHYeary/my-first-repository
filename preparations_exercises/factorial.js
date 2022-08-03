
function factiorial (number) {
let result = 1;
for (let counter = number; counter > 0; counter -= 1) {
    result *= counter;
}
    return result;
}

console.log(factiorial(1));
console.log(factiorial(2));
console.log(factiorial(3));
console.log(factiorial(4));
console.log(factiorial(5));