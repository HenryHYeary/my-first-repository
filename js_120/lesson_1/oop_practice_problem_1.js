/*
input: title, author
output: a description for each book

Data Structure: should create an object factory function that
has a method which generates a string based on the information stored in
the original object.

Algorithm: assign the attributes in accordance with their parameter names and write a 
get description function within the object as well.
*/

function createBook(title, author, read = false) {
  return {
    title,
    author,
    read,

    readBook() {
      this.read = true;
    },

    getDescription() {
      let description = (`${this.title} was written by ${this.author}.`);

      if (this.read) {
        console.log(description + ' I have read it.');
      } else {
        console.log(description + ` I haven't read it.`);
      }
    },
  };
}


let book1 = createBook('Mythos', 'Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris', false);
let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse', true);

book1.getDescription();
book1.readBook();
book1.getDescription();