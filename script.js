'use strict'

// Variables
let w = 0,
  l = 0;

// Constants
const $rock = document.querySelector('#rock'),
  $paper = document.querySelector('#paper'),
  $scissors = document.querySelector('#scissors'),
  $restartBtn = document.createElement('button'),
  $restart = document.querySelector('.restart'),
  $message = document.querySelector('.message'),
  $win = document.querySelector('#win'),
  $lose = document.querySelector('#lose');

// This gets the random selection of the computer
function computerPlay() {
  let computer = Math.floor(Math.random() * (3 - 1 + 1) + 1);

  if (computer === 1) {
    return 'Rock';
  } else if (computer === 2) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
};

// Playing a single round of the game
function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase(),
    computer = computerSelection.toLowerCase();

  if (player === 'rock') {

    if (computer === 'rock') {
      return 'Tie'
    } else if (computer === 'paper') {
      return 'You lose! Paper covers Rock'
    } else {
      return 'You win! Rock smashes Scissors'
    }

  } else if (player === 'paper') {

    if (computer === 'rock') {
      return 'You win! Paper covers Rock'
    } else if (computer === 'paper') {
      return 'Tie'
    } else {
      return 'You lose! Scissors cuts paper'
    }

  } else {

    if (computer === 'rock') {
      return 'You lose! Rock smashes Scissors'
    } else if (computer === 'paper') {
      return 'You win! Scissors cuts Paper'
    } else {
      return 'Tie'
    }
  }
}

// Updating the score of winnings and looses
function game(playerSelection) {

  const computerSelection = computerPlay(),
    round = playRound(playerSelection, computerSelection);

  if (round.search('win') !== -1) {
    $message.innerHTML = `${round}`;
    w++;
    $win.innerHTML = `${w}`;
  } else if (round.search('lose') !== -1) {
    $message.innerHTML = `${round}`;
    l++;
    $lose.innerHTML = `${l}`;
  } else if (round.search('Tie') !== -1) {
    $message.innerHTML = `${round}`;
  }

  if (w === 5) {
    $message.innerHTML = `Congratulations! You have won!`;
    gameOver();
  }

  if (l === 5) {
    $message.innerHTML = `You have lost! Maybe next time!`;
    gameOver();
  }
}

// Finishing the game when the score hits 5
function gameOver() {
  $rock.setAttribute('disabled', 'true');
  $paper.setAttribute('disabled', 'true');
  $scissors.setAttribute('disabled', 'true');
  $restartBtn.innerHTML = 'Restart';
  $restart.appendChild($restartBtn);
}

// Restarting the score to 0 and enabling the options
function restartGame() {
  $rock.removeAttribute('disabled');
  $paper.removeAttribute('disabled');
  $scissors.removeAttribute('disabled');

  $restart.removeChild($restartBtn);
  $message.innerHTML = `Welcome to a new game!`;

  w = 0;
  l = 0;
  $win.innerHTML = `${w}`;
  $lose.innerHTML = `${l}`;
}

// Click Events on Buttons
$rock.addEventListener('click', () => {
  game('rock');
});

$paper.addEventListener('click', () => {
  game('paper');
});

$scissors.addEventListener('click', () => {
  game('scissors');
});

$restartBtn.addEventListener('click', () => {
  restartGame();
});