function reverse(string) {
  return string.split('').reverse().join('');
}

const log = console.log;

log(reverse('hello'));
log(reverse('The quick brown fox'));