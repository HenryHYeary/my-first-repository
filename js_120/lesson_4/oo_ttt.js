class Board {
  constructor() {

  }

  display() {
    console.log('');
    console.log('     |     |');
    console.log('  O  |     |  O')
    console.log('     |     |')
    console.log('-----+-----+-----');
    console.log('     |     |');
    console.log('     |  X  |');
    console.log('     |     |');
    console.log('-----+-----+-----');
    console.log('     |     |');
    console.log('  X  |     |');
    console.log('     |     |');
    console.log('');
  }
}
  
class Square {
  constructor() {
  
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
  
  }
}
  
class Computer extends Player {
  constructor() {
  
  }
}
  
class TTTGame {
  constructor() {
    this.board = new Board();
  }
  
  play() {
    this.displayWelcomeMessage();
  
    while (true) {
      this.board.display();
  
      this.firstPlayerMoves();
      if (this.gameOver()) break;
  
      this.secondPlayerMoves();
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
  
  firstPlayerMoves() {
  
  }
  
  secondPlayerMoves() {
  
  }
  
  gameOver() {
    return false;
  }
}
  
let game = new TTTGame();
game.play();