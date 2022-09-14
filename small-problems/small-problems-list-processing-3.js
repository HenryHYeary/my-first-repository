
function multiplyAllPairs(arr1, arr2) {
  let prodArr = [];

  for (let i = 0; i < arr1.length; i++) {
    arr2.forEach(num => {
      prodArr.push(num * arr1[i]);
    });
  }

  return prodArr.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));