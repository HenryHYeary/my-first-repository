function delayLog() {
  for (let count = 1; count <= 10; count++) {
    logAfterOneSecond(count);
  }
}

function logAfterOneSecond(number) {
  setTimeout(() => {
    console.log(number);
  }, 1000 * number);
}

delayLog();