const LETTERS_AND_NUMS = 'abcdefghijklmopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'

function setDisplayName() {
  return function() {
    let displayName = '';
    for (let count = 1; count <= 16; count++) {
      let randomIndex = Math.floor(Math.random() * LETTERS_AND_NUMS.length);
      displayName += LETTERS_AND_NUMS[randomIndex];
    }

    return displayName;
  }
}

const Account = {
  init(email, password, firstName, lastName) {
    let setter = setDisplayName();
    this.myEmail = email;
    this.password = password;
    this.myFirstName = firstName;
    this.myLastName = lastName;
    this.displayName = setter();
    return this;
  },

  reanonymize(password) {
    let setter = setDisplayName();
    if (this.password === password) {
      this.displayName = setter();
      return true;
    } else {
      return 'Invalid Password';
    }
  },

  resetPassword(password, newPassword) {
    if (this.password === password) {
      this.password = newPassword;
      return true;
    } else {
      return 'Invalid Password';
    }
  },

  firstName(password) {
    if (this.password === password) {
      return this.myFirstName;
    } else {
      return 'Invalid Password';
    }
  },

  lastName(password) {
    if (this.password === password) {
      return this.myLastName;
    } else {
      return 'Invalid Password';
    }
  },

  email(password) {
    if (this.password === password) {
      return this.myEmail;
    } else {
      return 'Invalid Password';
    }
  },
};

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

// Using an IIFE

// const Account = (function() {
//   function randomLetterNumber() {
//     let lettersAndNums = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
//     let randomIndex = Math.floor(Math.random() * lettersAndNums.length);
//     return lettersAndNums[randomIndex];
//   }

//   function anonymize() {
//     let result = '';

//     for (let count = 1; count <= 16; count++) {
//       result += randomLetterNumber();
//     }

//     return result;
//   }

//   return {
//     init(email, password, firstName, lastName) {
//       this.userEmail = email;
//       this.userPassword = password;
//       this.userFirstName = firstName;
//       this.userLastName = lastName;
//       this.displayName = anonymize();
//       return this;
//     },

//     reanonymize(password) {
//       if (this._validatePassword(password)) {
//         this.displayName = anonymize();
//         return true;
//       } else {
//         return 'Invalid Password';
//       }
//     },

//     resetPassword(currentPassword, newPassword) {
//       if (this._validatePassword(currentPassword)) {
//         this.userPassword = newPassword;
//         return true;
//       } else {
//         return 'Invalid Password';
//       }
//     },

//     firstName(password) {
//       if (this._validatePassword(password)) {
//         return this.userFirstName;
//       } else {
//         return 'Invalid Password';
//       }
//     },

//     lastName(password) {
//       if (this._validatePassword(password)) {
//         return this.userLastName;
//       } else {
//         return 'Invalid Password';
//       }
//     },

//     email(password) {
//       if (this._validatePasswordvalidatePassword(password)) {
//         return this.userEmail;
//       } else {
//         return 'Invalid Password';
//       }
//     },

//     _validatePassword(password) {
//       return this.userPassword === password;
//     }
//   }
// })();

// let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
// const log = console.log;
// log(fooBar.firstName);
// log(fooBar.email);
// log(fooBar.firstName('123456'));
// log(fooBar.firstName('abc'));
// log(fooBar.displayName);
// log(fooBar.resetPassword('123', 'abc'));
// log(fooBar.resetPassword('123456', 'abc'));

// let displayName = fooBar.displayName;
// fooBar.reanonymize('abc');
// log(displayName === fooBar.displayName);