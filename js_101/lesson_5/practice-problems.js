let arr = ['10', '11', '9', '7', '8'];

let numArr = arr.map(num => Number(num));

let arrInOrder = numArr.sort((a, b) => b - a);

console.log(arrInOrder);

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

books.sort((a, b) => {
  return (Number(a.published) - Number(b.published));
})

console.log(books);

let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};

console.log(arr1[2][1][3]);
console.log(arr2[1]['third'][0]);
console.log(arr3[2]['third'][0][0]);
console.log(obj1['b'][1]);
console.log(Object.keys(obj2.third)[0]);

let arr1Second = [1, [2, 3], 4];

let arr2Second = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];

let obj1Second = { first: [1, 2, [3]] };

let obj2Second = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };

arr1Second[1][1] = 4;
console.log(arr1Second);

arr2Second[2] = 4;
console.log(arr2Second);

obj1Second['first'][2][0] = 4;
console.log(obj1Second);

obj2Second['a']['a'][2] = 4;
console.log(obj2Second);

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let munstersValues = Object.values(munsters);
let totalMaleAge = 0

munstersValues.forEach(member => {
  if (member['gender'] === 'male') {
    totalMaleAge += member['age'];
  }
});

console.log(totalMaleAge);

let munstersEntries = Object.entries(munsters);

munstersEntries.forEach(entry => {
  let name = entry[0];
  let age = entry[1]['age'];
  let gender = entry[1]['gender'];

  console.log(`${name} is a ${age}-year-old ${gender}.`);
});

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let vowels = 'aeiou';

Object.values(obj).forEach(arr => {
  arr.forEach(word => {
    word.split('').forEach(char => {
      if (vowels.includes(char)) {
        console.log(char);
      }
    });
  });
});