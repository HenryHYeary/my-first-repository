const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const MATCH_WIN = 5;

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`)

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----')
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----')
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function joinOr(arr, delimiter = ', ', conjunction = 'or') {
  switch(arr.length) {
    case 0:
      return '';
    case 1:
      return arr.join();
    case 2:
      return `${String(arr[0])} ${conjunction} ${String(arr[1])}`;
    default: 
      let joinedString = arr.join(delimiter);
      let finalElement = String(arr[arr.length - 1]);
      return `${joinedString.substring(0, joinedString.length - 2)} ${conjunction} ${finalElement}`
  }
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return false;
}

function playerChoosesSquare(board) {
  let square;
  
  while (true) {
    prompt(`Choose a square: ${joinOr(emptySquares(board))}:`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("That's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  let square = emptySquares(board)[randomIndex];

  board[square] = COMPUTER_MARKER;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 7], [3, 5, 7]
  ];

  for (let i = 0; i < winningLines.length; i++) {
    let [ sq1, sq2, sq3 ] = winningLines[i];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

while (true) {
  let board = initializeBoard();

  while (true) {
    displayBoard(board);
  
    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  
    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
    
  }
  
  displayBoard(board);
  
  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
    } else {
    prompt("It's a tie!");
  }

  
  prompt('Play again? (y or n)');
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');

// Possibly helpful code for keeping track of wins in a FT5 format?

/*
let totalPlayerWins = 0;
let totalComputerWins = 0;

    if (detectWinner(board) === 'Player') {
      totalPlayerWins += 1;
      prompt(`Player has won ${totalPlayerWins} games, Computer has won ${totalComputerWins} games.`);
    
      if (totalPlayerWins === MATCH_WIN) {
        prompt(`Player has won the match!`)
        totalPlayerWins = 0;
        totalComputerWins = 0;
      }
    } else if (detectWinner(board) === 'Computer') {
      totalComputerWins += 1;
      prompt(`Player has won ${totalPlayerWins} games, Computer has won ${totalComputerWins} games.`)
    
      if (totalComputerWins === MATCH_WIN) {
        prompt('Computer has won the match!')
        totalPlayerWins = 0;
        totalComputerWins = 0;
      }
    }
*/