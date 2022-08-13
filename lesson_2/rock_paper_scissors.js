const readline = require('readline-sync');

const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

const WINNING_COMBOS = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  spock: ['scissors', 'rock'],
  lizard: ['spock', 'paper'],
}

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

function playerWinsGame(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, the computer chose ${computerChoice}.`);
  if (playerWinsGame(choice, computerChoice)) {
  prompt('You win!');
  } else if (choice === computerChoice) {
    prompt("It's a tie!");
  } else {
  prompt('Computer wins!');
  }
}

let playerWins = 0;
let computerWins = 0;

function incrementResult(choice, computerChoice) {
  if (playerWinsGame(choice, computerChoice)) {
  return playerWins++;
  } else if (choice === computerChoice){
    choice = choice; 
  } else {
  return computerWins++;
  }
}

while (true) {

  prompt(`Choose one: ${VALID_CHOICES.join(', ')}\n(can enter only first letter for shortcut; only first two letters for spock and scissors)`);
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

  incrementResult(choice, computerChoice);

  if (playerWins === 3) {
    prompt('You are the grand winner!');
    return playerWins = 0;
    return computerWins = 0;
  }

  if (computerWins === 3) {
    prompt('The computer is the grand winner!');
    return playerWins = 0;
    return computerWins = 0;
  }

  prompt('Would you like to play again? "y" for yes, "n" for no.');
  answer = readline.question().toLowerCase();
  
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".')
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;

}