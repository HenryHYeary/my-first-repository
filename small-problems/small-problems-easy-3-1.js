function crunch(string) {
  let i = 0;
  let result = '';

  while (i <= string.length) {
    if (string[i] !== string[i + 1]) {
      result += string[i];
    }

    i++;
  }

  return result;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""