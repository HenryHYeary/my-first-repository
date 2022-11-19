
const readline = require('readline-sync');

function createPlayer() {
  return {
    move: null,
    score: 0,
  };
}

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {

    choose() {
      let choices = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
    },
  };

  return Object.assign(playerObject, computerObject);
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose () {
      let choice;

      while (true) {
        console.log('Please choose rock, paper, scissors, spock, or lizard:');
        choice = readline.question();
        if (['rock', 'paper', 'scissors', 'spock', 'lizard'].includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
    },
  };

  return Object.assign(playerObject, humanObject);
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors, Spock, Lizard!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors, Spock, Lizard. Goodbye!');
  },

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    if ((humanMove === 'spock' && computerMove === 'rock') ||
    (humanMove === 'spock' && computerMove === 'scissors') ||
    (humanMove === 'lizard' && computerMove === 'paper') ||
    (humanMove === 'lizard' && computerMove === 'spock') ||
    (humanMove === 'rock' && computerMove === 'lizard') ||
    (humanMove === 'rock' && computerMove === 'scissors') ||
    (humanMove === 'paper' && computerMove === 'rock') ||
    (humanMove === 'paper' && computerMove === 'spock') ||
    (humanMove === 'scissors' && computerMove === 'lizard') ||
    (humanMove === 'scissors' && computerMove === 'paper')) {
      this.human.score += 1;
      console.log('You win!');
    } else if ((computerMove === 'spock' && humanMove === 'rock') ||
    (computerMove === 'spock' && humanMove === 'scissors') ||
    (computerMove === 'lizard' && humanMove === 'paper') ||
    (computerMove === 'lizard' && humanMove === 'spock') ||
    (computerMove === 'rock' && humanMove === 'lizard') ||
    (computerMove === 'rock' && humanMove === 'scissors') ||
    (computerMove === 'paper' && humanMove === 'rock') ||
    (computerMove === 'paper' && humanMove === 'spock') ||
    (computerMove === 'scissors' && humanMove === 'lizard') ||
    (computerMove === 'scissors' && humanMove === 'paper')) {
      this.computer.score += 1;
      console.log('Computer wins!');
    } else {
      console.log(`It's a tie`);
    }

    console.log(`You have ${this.human.score} points. The computer has ${this.computer.score} points.`);

    if (this.human.score === 5) {
      console.log('You win the match! Resetting scores.');
      this.human.score = 0;
      this.computer.score = 0;
    } else if (this.computer.score === 5) {
      console.log('The computer wins the match! Resetting scores.');
      this.human.score = 0;
      this.computer.score = 0;
    }
  },

  playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer[0].toLowerCase() === 'y';
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  },
};

RPSGame.play();
