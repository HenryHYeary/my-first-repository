let firstName = 'Henry';
let lastName = 'Yeary';

let fullName = firstName + ' ' + lastName;
const log = console.log;
log(fullName);
log(firstName.concat(lastName));

let fullNameArr = fullName.split(' ');
log(fullNameArr);

let language = 'JavaScript';
let idx = language.indexOf('S');
log(idx);

let charCode = language.charCodeAt(idx);
log(charCode);
log(String.fromCharCode(charCode));
log(language.lastIndexOf('a'));

let a = 'a';
let b = 'b';
log(a > b);
b = 'B';
log(a > b);

log(language.slice(1, 4));
log(language.slice(2, 4));
log(language.substring(1, 4));
log(language.substring(2, 4));

log(language.slice(1, -1));
log(language.slice(2, -1));
log(language.substring(1, -1));
log(language.substring(2, -1));

let fact1 = 'JavaScript is fun';
let fact2 = 'Kids like it too';
let compoundSentence = fact1 + ' and ' + fact2[0].toLowerCase() + fact2.slice(1);
log(compoundSentence);

log(fact1[0]);
log(fact2[0]);

let pi = 22/7;
pi = pi.toString();

log(pi.lastIndexOf('14'));

// let boxNumber = 356.toString(); syntax error (period is read as decimal point)
let boxNumber = (356).toString();
log(boxNumber);

boxNumber = parseInt(boxNumber);
log(typeof boxNumber);

boxNumber = String(boxNumber);
log(typeof boxNumber);