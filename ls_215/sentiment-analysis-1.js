/*
input: a long string of multiline text
output: information to the console that counts the number of positive
words included in the text as well as the specific examples of those positive
words
The same process occurs for negative text as well. The last line judges whether the
sentiment of the text is positive or negative based on the count of words.

Examples: Results appear to be designed to be case insensitive

Data Structure: should iterate through every word in each array and test to see
whether the text includes the word. If the word is included then the word should pass
a filter check for all of the positive or negative words included in the text.
*/

let textExcerpt = 'To be or not to be-that is the question:\n' +
  'Whether \'tis nobler in the mind to suffer\n' +
  'The slings and arrows of outrageous fortune,\n' +
  'Or to take arms against a sea of troubles,\n' +
  'And, by opposing, end them. To die, to sleep-\n' +
  'No more-and by a sleep to say we end\n' +
  'The heartache and the thousand natural shocks\n' +
  'That flesh is heir to-\'tis a consummation\n' +
  'Devoutly to be wished. To die, to sleep-\n' +
  'To sleep, perchance to dream. Aye, there\'s the rub,\n' +
  'For in that sleep of death what dreams may come,\n' +
  'When we have shuffled off this mortal coil,\n' +
  'Must give us pause. There\'s the respect\n' +
  'That makes calamity of so long life.\n' +
  'For who would bear the whips and scorns of time,\n' +
  'Th\' oppressor\'s wrong, the proud man\'s contumely, [F: poor]\n' +
  'The pangs of despised love, the law’s delay, [F: disprized]\n' +
  'The insolence of office, and the spurns\n' +
  'That patient merit of the unworthy takes,\n' +
  'When he himself might his quietus make\n' +
  'With a bare bodkin? Who would fardels bear, [F: these Fardels]\n' +
  'To grunt and sweat under a weary life,\n' +
  'But that the dread of something after death,\n' +
  'The undiscovered country from whose bourn\n' +
  'No traveler returns, puzzles the will\n' +
  'And makes us rather bear those ills we have\n' +
  'Than fly to others that we know not of?\n' +
  'Thus conscience does make cowards of us all,\n' +
  'And thus the native hue of resolution\n' +
  'Is sicklied o\'er with the pale cast of thought,\n' +
  'And enterprises of great pitch and moment, [F: pith]\n' +
  'With this regard their currents turn awry, [F: away]\n' +
  'And lose the name of action.-Soft you now,\n' +
  'The fair Ophelia.-Nymph, in thy orisons\n' +
  'Be all my sins remembered';

let positiveWords = ['fortune', 'dream', 'love', 'respect', 'patience', 'devout', 'noble', 'resolution'];
let negativeWords = ['die', 'heartache', 'death', 'despise', 'scorn', 'weary', 'trouble', 'oppress'];

function sentiment(text) {
  let wordsArr = separateWords(text);
  let includedPositiveWords = wordsArr.filter(word => positiveWords.includes(word));
  let includedNegativeWords = wordsArr.filter(word => negativeWords.includes(word));
  
  return `${descPositiveWords(includedPositiveWords)}\n\n${descNegativeWords(includedNegativeWords)}` +
  `\n\nThe sentiment of the text is ${includedPositiveWords.length > includedNegativeWords.length ? "Positive" : "Negative"}.`;
}


function separateWords(text) {
  return text.toLowerCase().match(/\b[a-z']+\b/gi);
}

function descPositiveWords(wordsArr) {
  return `There are ${wordsArr.length} positive words in the text.\nPositive sentiments: ${wordsArr.join(', ')}`
}

function descNegativeWords(wordsArr) {
  return `There are ${wordsArr.length} negative words in the text.\nNegative sentiments: ${wordsArr.join(', ')}`
}

console.log(sentiment(textExcerpt));