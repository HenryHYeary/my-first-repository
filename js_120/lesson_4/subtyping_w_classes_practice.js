let Person = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  sayName() {
    console.log(`My name is ${this.name}.`);
  }
};
  
let Student = class extends Person {
  constructor(name, age, semester) {
    super(name, age);
    this.semester = semester;
  }
  
  enrollInCourse(courseNumber) {
    console.log(`${this.name} has enrolled in course ${courseNumber}.`);
  }
};
  
let student = new Student('Kim', 22, 'Fall');
student.sayName();
student.enrollInCourse('JS120');
  
class Greeting {
  greeting(string) {
    console.log(string);
  }
}
  
class Hello extends Greeting {
  constructor(string) {
    super(string);
  
    this.hi = function() {
      this.greeting('Hello');
    };
  }
}
  
class Goodbye extends Greeting {
  constructor(string) {
    super(string);
  
    this.bye = function() {
      this.greeting('Goodbye');
    };
  }
}
  
let myHello = new Hello('hiya');
let myGoodbye = new Goodbye('seeya');
  
myHello.hi();
myGoodbye.bye();  