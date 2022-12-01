/*
input: an integer that represents the nth number of the fibonacci sequence
output: the value of the nth number of the fibonacci sequence.

Examples: this version of the fibonacci exercise requires the use of recursive logic
with the addition of memoization, the problem recommends creating a lookup table.

Data Structure: the easiest way to create a lookup table as the function runs is to declare a new
variable equal to a blank object and then to create a new property of that object for every iteration.

Algorithm:  should use an if statement to return the value of lookUp[nth] if the calculation has already
been completed.
If the calculation has not previously been completed then perform the recursive logic used in the previous solution.
Also make sure at the beginning of the if statement to return 1 if the nth input is less than or equal to 2.
*/

function fibonacci (number) {
    let lookUp = {};

    if (number <= 2) {
        return 1;
    } else if (lookUp[number]) {
        return lookUp[number];
    } else {
        lookUp[number] = fibonacci(number - 1) + fibonacci(number - 2);
        return lookUp[number];
    }
}
    
console.log(fibonacci(20));

