
function greetings(array, obj) {
 return `Hello ${array.join(' ')}! Nice to have a ${obj['title']} ${obj['occupation']}.`; 
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);

