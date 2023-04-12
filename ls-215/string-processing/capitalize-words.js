function wordCap(string) {
  return string.split(' ').map(word => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}

const log = console.log;
log(wordCap('four score and seven'));
log(wordCap('the javaScript language'));
log(wordCap('this is a "quoted" word'));

// Book solution is virtually the same