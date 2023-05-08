let count = [1, 2, 3, 4, 5];
let doubled = count.map((number, index, array) => number * 2);
console.log(doubled);

// Practice problem
function myMap(array, func) {
  let newArray = [];

  array.forEach(value => newArray.push(func(value)));

  return newArray;
}

// let plusOne = n => n + 1;
// console.log(myMap([1, 2, 3, 4], plusOne));

function getBooksTitle(books) {
  return myMap(books, getTitle);
}

let books = [
  {
    title: 'JavaScript and JQuery: Interactive Front-End Web Development',
    author: 'Jon Ducket',
    edition: '1st',
  },
  {
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Haverbeke',
    edition: '2nd',
  },
  {
    title: "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics",
    author: 'Jennifer Niederst Robbins',
    edition: '4th',
  },
]

function getTitle(book) {
  return book['title'];
}

console.log(getBooksTitle(books));
