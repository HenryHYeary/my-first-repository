function myBind(func, context) {
  let partialArgs = [].slice.apply(arguments, [2]);

  return function() {
    let remainingArgs = [].slice.apply(arguments);
    let fullArgs = partialArgs.concat(remainingArgs);
    return func.apply(context, fullArgs);
  }
}

function addNumbers(a, b) {
  return a + b;
}

let addFive = myBind(addNumbers, null, 5);

console.log(addFive(10));