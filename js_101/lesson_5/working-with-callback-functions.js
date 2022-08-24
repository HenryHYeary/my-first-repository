let numbers = [1, 2, 3, 4, 5];
let transformedNumbers = [];

for (let index = 0; index < numbers.length; index++) {
  let currentNum = numbers[index];
  let squaredNum = currentNum * currentNum;

  transformedNumbers.push(squaredNum);
}

console.log(transformedNumbers);

let transformedNumbers2 = numbers.map(currentNum => currentNum * currentNum);

console.log(transformedNumbers2);

[[1,2], [3, 4]].forEach(arr => console.log(arr[0]));

[[1, 2], [3, 4]].map(arr => console.log(arr[0]));

[[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  return arr[0];
});