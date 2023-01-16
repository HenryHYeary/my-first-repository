const Account = (function() {
  const LETTERS_AND_NUMS = 'abcdefghijklmopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    
  function setDisplayName() {
    let displayName = '';
    for (let count = 1; count <= 16; count++) {
      let randomIndex = Math.floor(Math.random() * LETTERS_AND_NUMS.length);
      displayName += LETTERS_AND_NUMS[randomIndex];
    }
    
    return displayName;
  }

  return {
    init(email, password, firstName, lastName) {
      let userEmail = email;
      let userPassword = password;
      let userFirstName = firstName;
      let userLastName = lastName;

      function validatePassword(password) {
        return password === userPassword;
      }

      return {
        displayName: setDisplayName(),

        reanonymize(password) {
          if (validatePassword(password)) {
            this.displayName = setDisplayName();
            return true;
          } else {
            return 'Invalid Password';
          }
        },

        resetPassword(password, newPassword) {
          if (validatePassword(password)) {
            userPassword = newPassword;
            return true;
          } else {
            return 'Invalid Password';
          }
        },

        firstName(password) {
          if (validatePassword(password)) {
            return userFirstName;
          } else {
            return 'Invalid Password';
          }
        },

        lastName(password) {
          if (validatePassword(password)) {
            return userLastName;
          } else {
            return 'Invalid Password';
          }
        },

        email(password) {
          if (validatePassword(password)) {
            return userEmail;
          } else {
            return 'Invalid Password';
          }
        },
      };
    },
  };
})();

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password'
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
// Note that the foillowing two lines of code are correct as written.
// There are no mistakes. We are attempting to demonstrate that the
// code does not work as might be intended.
console.log(fooBar.firstName('123456'));           // logs 'baz' but should log foo.
console.log(fooBar.email('123456'));               // 'baz@qux.com' but should 'foo@bar.com'
console.log(bazQux.firstName('123456'));
console.log(bazQux.email('123456'));