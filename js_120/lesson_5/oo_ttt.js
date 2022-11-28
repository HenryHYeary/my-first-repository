const readline = require('readline-sync');

class Square {
  static UNUSED_SQUARE = ' ';
  static HUMAN_MARKER = 'X';
  static COMPUTER_MARKER = 'O';

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }

  toString() {
    return this.marker;
  }
}

class Board {
  constructor() {
    this.squares = {};
    for (let counter = 1; counter <= 9; counter++) {
      this.squares[String(counter)] = new Square();
    }
  }

  display() {
    console.log('');
    console.log('     |     |');
    console.log(`  ${this.squares['1']}  |  ${this.squares['2']}  |  ${this.squares['3']}`);
    console.log('     |     |')
    console.log('-----+-----+-----');
    console.log('     |     |');
    console.log(`  ${this.squares['4']}  |  ${this.squares['5']}  |  ${this.squares['6']}`);
    console.log('     |     |');
    console.log('-----+-----+-----');
    console.log('     |     |');
    console.log(`  ${this.squares['7']}  |  ${this.squares['8']}  |  ${this.squares['9']}`);
    console.log('     |     |');
    console.log('');
  }
}
  
class Row {
  constructor() {
  
  }
}
  
class Marker {
  constructor() {
  
  }
}
  
class Player {
  constructor() {
  
  }
  
  mark() {
  
  }
  
  play() {
  
  }
}
  
class Human extends Player {
  constructor() {
    super();
  }
}
  
class Computer extends Player {
  constructor() {
    super();
  }
}
  
class TTTGame {
  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
  }
  
  play() {
    this.displayWelcomeMessage();
  
    while (true) {
      this.board.display();
  
      this.humanMoves();
      if (this.gameOver()) break;
  
      this.computerMoves();
      if (this.gameOver()) break;
      break;
    }
  
    this.displayResults();
    this.displayGoodbyeMessage();
  }
  
  displayWelcomeMessage() {
    console.log('Welcome to Tic Tac Toe!');
  }
  
  displayGoodbyeMessage() {
    console.log('Thanks for playing Tic Tac Toe! Goodbye!');
  }
  
  displayResults() {
  
  }
  
  humanMoves() {
    console.log('human moves');
  }
  
  computerMoves() {
    console.log('computer moves');
  }
  
  gameOver() {
    return false;
  }
}
  
let game = new TTTGame();
game.play();