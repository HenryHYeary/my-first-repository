let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(num => num * num);

console.log(squares);


let person = { name: 'Jane', age: 37, hobbies: ['photography', 'genealogy'] }

person.name;
person['age'];

let key = 'name';
person[key]

let foo = {
    a: 'hello',
    b: 'world',
  };
  
  let qux = 'hello';
  
  function bar(argument1, argument2) {
    argument1.a = 'hi';
    argument2 = 'hi';
  }
  
  bar(foo, qux);
  
  console.log(foo.a);
  console.log(qux);

  let obj = {
    foo: { a: "hello", b: "world" },
    bar: ["example", "mem", null, { xyz: 6 }, 88],
    qux: [4, 8, 12]
  };

  obj.bar[3].xyz = 6;

  console.log(obj);

  console.log(Math.sqrt(37));

  console.log(Math.max(1, 6, 3, 2));

  let words = [
    'laboratory',
    'experiment',
    'flab',
    'Pans Labyrinth',
    'elaborate',
    'polar bear',
  ];

  function allMatches(array, pattern) {
    let matches = []
    for (let index = 0; index < words.length; index += 1) {
        if (pattern.test(words[index])) {
            matches.push(words[index]);
        }
    }

    return matches;
  }

  function allMatchesSecond(array, pattern) {
    return words.filter((word) => pattern.test(word));
  }
  
console.log(allMatches(words, /lab/));
console.log(allMatchesSecond(words, /lab/));