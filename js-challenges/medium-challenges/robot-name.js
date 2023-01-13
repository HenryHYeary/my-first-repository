/*
input: only need to create a new robot object
output: a random name that starts with two uppercase letters and
ends with three digits.

Examples: Must prevent the same random name from being generated twice
for different robots.

Data Structure: should keep an array of all of the currently in use robot
names on the constructor. If the randomly generated name matches the randomly
generated name of another robot, another name must be used.

Algorithm: create constructor with static names in use variable
create static alphabet property
create static digits property
create name method on constructor prototype object
  declare empty name variable
  iterate through the letters with a random index and select two random letters
  using this process add them to empty name variable
  Use the same process above with three digits from digits property on constructor.
  
  ensure that static names in use array does not contain name variable.
  if it does repeat the process with a new random name.
end

create reset method on constructor prototype object
  deletes name property value from the object in question
end
*/

class Robot {
  static ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  static DIGITS = '0123456789';
  static usedNames = [];

  name() {
    if (this.robotName) {
      return this.robotName;
    }

    function generateName() {
      let name = '';

      for (let count = 1; count <= 2; count++) {
        let randomAlphaIndex = Math.floor(Math.random() * Robot.ALPHABET.length);
        name += Robot.ALPHABET[randomAlphaIndex];
      }

      for (let count = 1; count <= 3; count++) {
        let randomDigitIndex = Math.floor(Math.random() * Robot.DIGITS.length);
        name += Robot.DIGITS[randomDigitIndex];
      }

      return name;
    }

    let name = generateName();

    while(Robot.usedNames.includes(name)) {
      name = generateName();
    }

    Robot.usedNames.push(name);
    this.robotName = name;
    return name;
  }

  reset() {
    if (this.robotName) {
      Robot.usedNames.splice(Robot.usedNames.indexOf(this.robotName), 1);
      this.robotName = '';
    }
  }
}

module.exports = Robot;

// ALTERNATE SOLUTION

/*
input: no specific input required
output: a random name that starts with two all caps letters
and ends with three digits (should be a string)

Examples: The name must "stick" to the robot object after it is generated
Different robots need to have different names and cannot take the same
name as one already used by another robot. A reset method also needs
to be included to reset the robot to factory settings (should remove taken name)

Data Structure: create a static array on the constructor for taken names.
The constructor itself should give the robot a random name, and the name method
should simply return that property
Reset should transform the robot's name to an empty string, and then the name call
should give the robot another name.
*/

// class Robot {
//   static TAKEN_NAMES = [];

//   static generateRandomName() {
//     let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let numbers = '0123456789';
//     let resultString = '';

//     for (let count = 1; count <= 2; count++) {
//       let randomIndex = Math.floor(Math.random() * letters.length);
//       resultString += letters[randomIndex];
//     }

//     for (let count = 1; count <= 3; count++) {
//       let randomIndex = Math.floor(Math.random() * numbers.length);
//       resultString += numbers[randomIndex];
//     }

//     return resultString;
//   }

//   constructor() {
//     let randomName = Robot.generateRandomName();
//     while (Robot.TAKEN_NAMES.includes(randomName)) {
//       randomName = Robot.generateRandomName();
//     }

//     this.string = randomName;
//     Robot.TAKEN_NAMES.push(this.string);
//   }

//   name() {
//     if (this.string) {
//       return this.string;
//     } else {
//       this.string = Robot.generateRandomName();
//       Robot.TAKEN_NAMES.push(this.string);
//       return this.string;
//     }
//   }

//   reset() {
//     if (this.string) {
//       Robot.TAKEN_NAMES.splice(Robot.TAKEN_NAMES.indexOf(this.string), 1);
//       this.string = '';
//     }
//   }
// }

// module.exports = Robot;