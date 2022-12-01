/*
input: a template for the the function to use.
output: randomly generated madlibs from the words provided to the input template.

Examples: The final result should not include the quotes shown in the examples.

Data structure: should use either several arrays of values for a template or an object to 
store an array for each required part of speech, can make more than one object to make more than one
template.

Algorithm: should create a madlibs function that logs the full line specified and uses string interpolation
to log a random index of the specified templates part of speech array.
*/

let wordSet = {
  adjectives: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
  nouns: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
  verbs: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
  adverbs: ['easily', 'lazily', 'noisily', 'excitedly'],
}

function madlibs(template) {

  switch (template) { case 'template1':
    console.log(`The ${getRandom('adjectives')} brown ${getRandom('nouns')} ${getRandom('adverbs')}`);
    console.log(`${getRandom('verbs')} the ${getRandom('adjectives')} yellow`);
    console.log(`${getRandom('nouns')}, who ${getRandom('adverbs')} ${getRandom('verbs')} his`);
    console.log(`${getRandom('nouns')} and looks around.`);
    break;
    case 'template2': console.log(`The ${getRandom('nouns')} ${getRandom('verbs')} the ${getRandom('nouns')}'s ${getRandom('nouns')}`);
    break; 
  }
}

function getRandom (key) {
  return wordSet[key][Math.floor(Math.random() * wordSet[key].length)];
}

madlibs('template1');
madlibs('template2');

//Alternate solution

let template1 = 'The %{adjective} brown %{noun} %{adverb} ' +
'%{verb} the %{adjective} yellow ' +
'%{noun}, who %{adverb} %{verb} his ' +
'%{noun} and looks around. '

let template2 = `The %{noun} %{verb} the %{noun}'s %{noun}. `


function madlibs2(template) {
  const REPLACEMENT_TEXT = {
    adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
    noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
    verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
    adverb: ['easily', 'lazily', 'noisily', 'excitedly']
  };

  function replaceText(match) {
    let key = match.replace(/[^a-z]/g, '');
    let index = Math.floor(Math.random() * REPLACEMENT_TEXT[key].length);

    return REPLACEMENT_TEXT[key][index];
  }

  return template.replace(/%{[a-z]+}/g, replaceText);
}

console.log(madlibs2(template1));