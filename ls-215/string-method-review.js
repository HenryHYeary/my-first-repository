// indexOf
let language = 'JavaScript';

const log = console.log;
log(language.indexOf('S'));
log(language.indexOf('s'));
log(language.indexOf('ipt'));

// lastIndexOf
let state = 'Mississippi';

log(state.lastIndexOf('i'));
log(state.lastIndexOf('s'));
log(state.lastIndexOf('sp'));

// replace
log(state.replace('s', 'q'));
// regex to replace all 's's with 'q's
log(state.replace(/s/g, 'q'));

// split
log(state.split(''));
log(state.split('s'));
log('1, 2, 3, 4, 5, 6'.split(', '));

// substring
log(state.substring(6, 3));

// toUpper/LowerCase
let exclamation = "Go team! We're number 1!";

log(exclamation.toUpperCase());
log(exclamation.toLowerCase());