
function sumOfSums(arr) {
  let subArrArr = sumSlice(arr);
  let sumsOfSlices = subArrArr.map(subArr => {
    return subArr.reduce((a, b) => a + b);
  });

  return sumsOfSlices.reduce((a, b) => a + b);
}

function sumSlice(arr) {
  let returnArr = [];

  for (let i = 1; i <= arr.length; i++) {
    returnArr.push(arr.slice(0, i));
  }

  return returnArr;
}

console.log(sumSlice([3, 5, 2]));
console.log(sumOfSums([3, 5, 2]));
console.log(sumOfSums([1, 5, 7, 3]));
console.log(sumOfSums([4]));
console.log(sumOfSums([1, 2, 3, 4, 5]));