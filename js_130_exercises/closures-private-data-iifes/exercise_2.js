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

function myBind2(func, context, ...args) {
  return function(...secondArgs) {
    let fullArgs = args.concat(secondArgs);
    return func.apply(context, fullArgs);
  }
}

let addFive2 = myBind(addNumbers, null, 5);

console.log(addFive(10));