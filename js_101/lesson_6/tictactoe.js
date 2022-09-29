const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const MATCH_WIN = 5;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];

let playerWinCount = 0;
let computerWinCount = 0;

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

function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
}


function computerChoosesSquare(board) {
  let square;
  for (let i = 0; i < WINNING_LINES.length; i++) {
    let line = WINNING_LINES[i];
    square = findAtRiskSquare(line, board, HUMAN_MARKER);
    if (square) break;
  }

  if (!square) {
    for (let i = 0; i < WINNING_LINES.length; i++) {
      let line = WINNING_LINES[i];
      square = findAtRiskSquare(line, board, COMPUTER_MARKER);
      if (square) break;
    }
  }
  
  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  for (let i = 0; i < WINNING_LINES.length; i++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[i];

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

function winCount(board) {
  let winner = detectWinner(board);

  if (winner === 'Player') {
    playerWinCount += 1;
  } else if (winner === 'Computer') {
    computerWinCount += 1;
  }

  if (playerWinCount < MATCH_WIN && computerWinCount < MATCH_WIN) {
    console.log(`Player has won ${playerWinCount} matches. Computer has won ${computerWinCount} matches.`);
  } else {
    console.log(`${winner} has won the match! Resetting scores.`);
    playerWinCount = 0;
    computerWinCount = 0;
  }
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

  winCount(board);

  prompt('Play again? (y or n)');
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');