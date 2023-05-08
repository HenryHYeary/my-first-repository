function isAllUnique(string) {
  let seen = {};
  let lowerCasedString = string.toLowerCase();

  for (let index = 0; index < lowerCasedString.length; index++) {
    if (lowerCasedString[index] === ' ') {
      continue;
    }

    if (seen[lowerCasedString[index]]) {
      return false;
    } else {
      seen[lowerCasedString[index]] = true;
    }
  }

  return true;
}

const log = console.log;
log(isAllUnique('The quick brown fox jumped over a lazy dog'));
log(isAllUnique('123,456,789'));
log(isAllUnique('The big apple'));
log(isAllUnique('The big apPlE'));
log(isAllUnique('!@#$%^&*()'));
log(isAllUnique('abcdefghijklmnopqrstuvwxyz'));