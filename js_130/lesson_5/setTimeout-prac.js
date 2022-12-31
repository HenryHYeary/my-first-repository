// Problem 1
// function delayLog() {
//   for (let delay = 1; delay <= 10; delay++) {
//     setTimeout(() => console.log(delay), delay * 1000);
//   }
// }

// delayLog();

// Problem 3
// setTimeout(function() {   // 1
//   console.log('Once');    // 5
// }, 1000);

// setTimeout(function() {   // 2
//   console.log('upon');    // 7
// }, 3000);

// setTimeout(function() {   // 3
//   console.log('a');       // 6
// }, 2000);

// setTimeout(function() {   // 4
//   console.log('time');    // 8
// }, 4000);

// Problem 4
// setTimeout(function() {
//   setTimeout(function() {
//     q(); // 7
//   }, 15);

//   d(); // 3

//   setTimeout(function() {
//     n(); // 5
//   }, 5);

//   z(); // 4
// }, 10);

// setTimeout(function() {
//   s(); // 6
// }, 20);

// setTimeout(function() {
//   f(); // 2
// });

// g(); // 1

// Problem 5

function afterNSeconds(callback, duration) {
  setTimeout(function() {
    return callback();
  }, duration * 1000);
}

afterNSeconds(() => console.log('Hello'), 2);

// OR 

function afterNSeconds2(callback, duration) {
  setTimeout(callback, duration * 1000);
}

afterNSeconds2(() => console.log('Hello'), 4);