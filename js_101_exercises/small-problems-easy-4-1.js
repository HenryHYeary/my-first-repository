
// input: no input necessary
// output: string stating how many years old Teddy is

// Examples: number has to be random between 20 and 120 inclusive
// Data: need to create a variable that generates a random number to pass into the string
// Algorithm: 101 total numbers can be generated in the range given, multiplying the Math.random() result by 101 (difference between min and max plus one) could give us the numbers we need
// we could make sure the numbers generate won't go below the minimum value by adding the minimum value (20) to whatever number is generated by the random() function


function randomAge (max, min) {
  if (max > min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
  } else {
    return Math.floor(Math.random() * (min - max + 1) + max);
  }
}

console.log(`Teddy is ${randomAge(120, 20)} years old!`);
console.log(`Teddy is ${randomAge(20, 120)} years old!`);