/*
input: n total callback functions
output: a log to the console that both times the passing
of every second, but also outputs the log value of each callback
in a random interval of time

Examples: each callback should be called between immediately and 2 * n
seconds from now

Data Structure: Need to set and clear an interval for the total
timer running in the background
  - need to log out the proper value to the console at a random interval
  using Math floor and math random in conjunction with set timeout
  - need to record total length of the arguments list

Algorithm: create a variable for argument length (arguments array.length)
          n is argument length
          - create an interval id and set an interval for every number to be
          logged for every second
          - set the timeout for each callback to be a random value and have
          the range be from 0 to 2 * n seconds (remember ms * 1000)
          - clear interval after all callbacks have been processed
*/

// function randomizer(...callbacks) {
//   let n = callbacks.length;
//   let secondCounter = 0;
//   let maxSeconds = 2 * n;

//   let intervalId = setInterval(() => {
//     secondCounter += 1;
//     console.log(secondCounter);

//     if (secondCounter >= maxSeconds) {
//       clearInterval(intervalId);
//     }
//   }, 1000);

//   let promises = callbacks.map(callback => {
//     let randomTime = Math.floor(maxSeconds * Math.random() * 1000);
//     return new Promise((resolve, reject) => {
//       resolve = callback;
//       setTimeout(resolve, randomTime);
//     });
//   });

//   Promise.all(promises).then();
// }

// function callback1() {
//   console.log('callback1');
// }

// function callback2() {
//   console.log('callback2');
// }

// function callback3() {
//   console.log('callback3');
// }

// randomizer(callback1, callback2, callback3);

// Second time through

function callback1() {
  console.log("callback1");
}

function callback2() {
  console.log("callback2");
}

function callback3() {
  console.log("callback3");
}

function randomizer(...callbacks) {
  let maxSeconds = callbacks.length * 2;
  let secondCounter = 0;

  callbacks.forEach(callback => {
    let randomTime = Math.floor(Math.random() * maxSeconds);
    setTimeout(callback, randomTime * 1000);
  })

  let interval = setInterval(() => {
    secondCounter++;
    console.log(secondCounter);

    if (secondCounter >= maxSeconds) {
      clearInterval(interval);
    }
  }, 1000)
}

randomizer(callback1, callback2, callback3);