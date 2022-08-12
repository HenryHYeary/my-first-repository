const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function choiceShortcut (string) {
  switch (string) {
    case 'r': return 'rock';
    case 'p': return 'paper';
    case 'sc': return 'scissors';
    case 'sp': return 'spock';
    case 'l': return 'lizard';
    default: return string;
  }
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, the computer chose ${computerChoice}.`);

if ((choice === 'rock' && computerChoice === 'scissors') ||
(choice === 'rock' && computerChoice === 'lizard') ||
(choice === 'scissors' && computerChoice === 'lizard') ||
(choice === 'lizard' && computerChoice === 'paper') ||
(choice === 'lizard' && computerChoice === 'spock') ||
(choice === 'paper' && computerChoice === 'spock') ||
(choice === 'spock' && computerChoice === 'rock') ||
(choice === 'spock' && computerChoice === 'scissors') ||
(choice === 'paper' && computerChoice === 'rock') ||
(choice === 'scissors' && computerChoice === 'paper')) {
  prompt('You win!');
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
  (choice === 'lizard' && computerChoice === 'scissors') ||
  (choice === 'lizard' && computerChoice === 'rock') ||
  (choice === 'spock' && computerChoice === 'paper') ||
  (choice === 'spock' && computerChoice === 'lizard') ||
  (choice === 'paper' && computerChoice === 'lizard') ||
  (choice === 'scissors' && computerChoice === 'spock') ||
  (choice === 'rock' && computerChoice === 'spock') ||
  (choice === 'paper' && computerChoice === 'scissors') ||
  (choice === 'scissors' && computerChoice === 'rock')) {
  prompt('Computer wins!');
    } else {
    prompt("It's a tie!");
  }
}

while (true) {

prompt(`Choose one: ${VALID_CHOICES.join(', ')} (can enter only first letter for shortcut, only first two letters for spock and scissors)`);
let choice = readline.question();
choice = choiceShortcut(choice);

while (!VALID_CHOICES.includes(choice)) {
  prompt("That's not a valid choice.");
  choice = readline.question();
  choice = choiceShortcut(choice);
}

let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
let computerChoice = VALID_CHOICES[randomIndex];

displayWinner(choice, computerChoice);

prompt('Would you like to play again? "y" for yes, "n" for no.');
answer = readline.question().toLowerCase();
while (answer[0] !== 'n' && answer[0] !== 'y') {
  prompt('Please enter "y" or "n".')
  answer = readline.question().toLowerCase();
}

if (answer[0] !== 'y') break;

}

