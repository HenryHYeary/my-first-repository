/*
input: a string representing an email address.
output: a boolean value indicating whether the string is a valid email
address or not.

Examples: There must be one @ sign
Local part must contain one or more letters or digits, no other characters
Domain part must contain two or more components with a single dot between each
Each component must contain one or more letters
Domain part can only contain letters

Data Structure: Should definitely use regular expressions for this exercise.
Break down each requirement into a regular expression and then try to combine the
requirements into one regex.
*/

function isValidEmail(email) {
  return !!email.match(/^[a-z0-9]+@[a-z]+(\.[a-z]+)+$/gi);
}

const log = console.log;

let returnValArr = [
  isValidEmail('Foo@baz.com.ph'),   
  isValidEmail('Foo@mx.baz.com.ph'),
  isValidEmail('foo@baz.com'),      
  isValidEmail('foo@baz.ph'),       
  isValidEmail('HELLO123@baz'),            
  isValidEmail('foo.bar@baz.to'),          
  isValidEmail('foo@baz.'),                
  isValidEmail('foo_bat@baz'),             
  isValidEmail('foo@bar.a12'),             
  isValidEmail('foo_bar@baz.com'),         
  isValidEmail('foo@bar.....com')   
];

returnValArr.forEach(val => console.log(val));
    