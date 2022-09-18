/*
input: commands for a mini programming language that uses a stack and register system.
output: the result of the operations performed on the integers within the stack.

Examples: Need to initialize the stack and register to the values [] and 0 respectively.
If only print is logged then the return value should be 0.
Print will always print the current register value.
Push should push the register value to the stack and leave the value in the register
Any operation should pop a value from the stack and and then perform the operation with the register
value

Data Structure: should set an initial stack value to [] and an initial register value to 0 (n = 0).
Should maybe split each number and command into an array of its own to analyze each element.

Algorithm: If a number is initially passed into the argument then the current register value should be set to n.
If a push command is input afterwards then that number should be pushed to the stack. However it should stay in the register afterwards.
The register will only change when another number is introduced.
Should implement every command using a .pop() function on the stack to modify the stack and transform the register value.
Remember that the pop command we are  creating will replace the register value and modify the stack array.
*/

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function minilang(stringArgument) {
  let register = 0;
  let stack = [];
  let commandAndValuesArr = stringArgument.split(' ');

  commandAndValuesArr.forEach(commOrVal => {
    switch (commOrVal) {
      case 'PUSH': stack.push(register);
      break;
      case 'ADD': register += stack.pop();
      break;
      case 'SUB': register -= stack.pop();
      break;
      case 'MULT': register *= stack.pop();
      break;
      case 'DIV': register = Math.floor(register / stack.pop());
      break;
      case 'REMAINDER': register = Math.floor(register % stack.pop());
      break;
      case 'POP': register = stack.pop();
      break;
      case 'PRINT': console.log(register);
      break;
      default: register = Number(commOrVal);
      break;
    }
  });

  return register;
}


minilang('PRINT');
minilang('5 PUSH 3 MULT PRINT');
minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
minilang('5 PUSH POP PRINT');
minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
minilang('3 PUSH PUSH 7 DIV MULT PRINT');
minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
minilang('-3 PUSH 5 SUB PRINT');
minilang('6 PUSH');