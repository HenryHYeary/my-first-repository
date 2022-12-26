function newStack() {
  let stack = [];

  return {
    push(val) {
      stack.push(val);
    },

    pop() {
      return stack.pop();
    },

    printStack() {
      stack.forEach(elem => console.log(elem));
    },
  };
}

let myStack = newStack();

myStack.push(45);
myStack.push('hello');
console.log(myStack.pop());
myStack.printStack();