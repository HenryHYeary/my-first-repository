/*
input: a nested array of a grocery item along with the number of 
items needed.
output: a one dimensional array that contains the grocery items with the
frequency required by the second element in the array.

Data Structure: for each sub array you should map the string into a repeated
version of itself.

Algorithm: split up the repeated strings into an array of the same string
times however many times it should be repeated and then concatenate that
array to the result array to return later.
*/

function buyFruit(nestedArr) {
  return nestedArr.map(transformArrToRepeatArr)
                  .reduce((singleArr, listOfFruit) => singleArr.concat(listOfFruit));
}

function transformArrToRepeatArr(arr) {
  let resultArr = [];

  for (let count = 1; count <= arr[1]; count++) {
    resultArr.push(arr[0]);
  }

  return resultArr;
}

const log = console.log;

log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));

// Book solution
// function buyFruit(fruitsList) {
//   return fruitsList.map(fruit => repeat(fruit))
//                     .reduce((groceryList, fruit) => groceryList.concat(fruit));
// }

// function repeat(fruit) {
//   const result = [];

//   for (let index = 0; index < fruit[1]; index++) {
//     result.push(fruit[0]);
//   }

//   return result;
// }