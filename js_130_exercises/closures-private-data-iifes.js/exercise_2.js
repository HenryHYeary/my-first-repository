// WIP

function myBind(func) {
  return function(context) {
    return func.call(context, arguments);
  }
}

let introBinder = myBind(introduce);

let obj = {
  name: 'Henry',
  age: 26,
}

function introduce() {
  console.log(`Hi, my name is ${this.name}, and I am ${this.age} years old.`);
}

introBinder(obj);
