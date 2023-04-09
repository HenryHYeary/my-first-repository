let count = [1, 2, 3, 4, 5];

function iterate(array, callback) {
  for (let index = 0; index < array.length; index++) {
    callback(array[index]);
  }
}

function logger(number) {
  console.log(number);
}

// function oddOrEven(array) {
//   // for (let index = 0; index < array.length; index++) {
//   //   let number = array[index];
//   //   if (number % 2 === 0) {
//   //     console.log("even");
//   //   } else {
//   //     console.log("odd");
//   //   }
//   // }
//   iterate(array, function (number) {
//     if (number % 2 === 0) {
//       console.log("even");
//     } else {
//       console.log("odd");
//     }
//   })
// }

function oddOrEven(array) {
  array.forEach(number => {
    if (number % 2 === 0) {
      console.log("even");
    } else {
      console.log("odd");
    }
  });
}

oddOrEven(count);
iterate(count, logger);