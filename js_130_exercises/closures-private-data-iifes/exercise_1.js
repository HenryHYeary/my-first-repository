function myBind(func, context) {
  return function() {
    return func.apply(context, arguments);
  }
}

let obj = {
  name: 'Henry',
  age: 26,
}

function introduce() {
  console.log(`Hi, my name is ${this.name}, and I am ${this.age} years old.`);
}

const henryIntro = myBind(introduce, obj);

henryIntro();