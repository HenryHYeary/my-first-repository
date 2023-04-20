/*
input: an integer
output: the number of switches in that set that will be on after
taking n turns turning them on and off. (first pass is toggle every
  switch)
  Second pass is toggle all multiples of 2
  Third pass is toggle all multiples of 3

Examples: parse out requirements from examples.
  from the lightsOn(5) example it looks like the multiple
  of lights to be toggled on or off increases by the number of repetitons
  a good sanity check is to see whether or not n is included in on lights if
  it is odd (it should'nt be in the array). If it is even then it should be in
  the array

Data Structure: create an object that has properties from 1 to n in it
              - assign each property to an initial value of false (lights are off)
              - toggle "light" by using !! operator
              - create a separate result array that will contain the numbers
              of all of the lights that will be on at the end of iteration.

Algorithm: - iterate through the lights
            - for every step, check to see if the light is evenly divisible
            by the current repetition step. 
            - If it is evenly divisible then
            it should be toggled.
            - iterate through the final object and push the number form
            of the integers that are currently property names which are true
            at the end of iteration.
*/

/*
lightsOn(6)
R1: all lights are on
R2: lights 2 and 4 and 6 are off
R3: lights 2, 3, and 4 are off
R4: lights 2 and 3 are off
R5: lights 2, 3, and 5 are off
R6: lights 2, 3, 5, and 6 are off 
result is: [2, 3, 5, 6]
*/

function lightsOn(switches) {
  let lights = {};
  let resultArr = [];

  // initializes the object
  for (let count = 1; count <= switches; count++) {
    lights[count] = false;
  }

  for (let count = 1; count <= switches; count++) {
    switchByDivisor(lights, count);
  }

  for (let light in lights) {
    if ((lights[light]) === true) resultArr.push(Number(light));
  }

  return resultArr;
}

function switchByDivisor(lights, divisor) {
  for (let light in lights) {
    if (light % divisor === 0) {
      lights[light] = !lights[light];
    }
  }
}

const log = console.log;
log(lightsOn(5));
log(lightsOn(6));
log(lightsOn(100));


