//input: string
//ouput: abbreviated string with no repeat letters
// looking at the example exercises it looks like no repeat characters are allowed (numbers included)
// if an empty string is passed in we need to return an empty string

//could split the string into an array and analyze whether the next character is equal to the previous character
//if the next character is the same then we could tell the program to continue or simply make the condition !=
//regardless of whether we use an array we need to return a string, either blank string or blank array should suffice as result datatype at the beginning of the program

//Could use a for loop to iterate over every character in string and then add the character to an empty string if it matches the condition
//could use array methods like forEach if we decide to split the string into an array.



function crunch(str) {
  let result = '';

  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] !== str[i + 1]) {
      result += str[i];
    }
  }

  return result;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));
console.log(crunch('4444abcabccba'));
console.log(crunch('ggggggggggggggg'));
console.log(crunch('a'));
console.log(crunch(''));