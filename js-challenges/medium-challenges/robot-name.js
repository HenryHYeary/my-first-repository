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