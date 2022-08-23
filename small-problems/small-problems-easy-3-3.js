function stringy(num) {
  let string = ''
  for (let i = 0; i < num; i++) {
   let number = ((i % 2) === 0) ? 1 : 0;
   string += number;
  }

  return string;
}

console.log(stringy(6));