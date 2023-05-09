/*
input: no input needed
output: an incremented number logged to the console every
second.

Data Structure: will need to store a number variable that 
can be incremented upwards.

Algorithm: set the number to 1
          - create an id variable for the setInterval call
            - log out the number
            - increment the number
          - do this once every second

          -return the id

          - use clear interval in conjunction with return value
          for stop counting function
*/

function startCounting() {
  let number = 1;
  let id = setInterval(() => {
    console.log(number);
    number++;
  }, 1000);

  return id;
}

let countId = startCounting();

function stopCounting(countId) {
  clearInterval(countId);
}

stopCounting(countId);