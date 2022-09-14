
function sum(num) {
  let digitsArray = String(num).split('');
  let total = 0;

  digitsArray.forEach(digit => {
    total += parseInt(digit, 10);
  });

  return total;
}

console.log(sum(23));
console.log(sum(496));
console.log(sum(123456789));