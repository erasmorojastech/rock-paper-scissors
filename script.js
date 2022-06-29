'use strict'

// Variables
let w = 0,
  l = 0;

// Constants
const $rock = document.querySelector('#rock'),
  $paper = document.querySelector('#paper'),
  $scissors = document.querySelector('#scissors'),
  $restart = document.createElement('button'),
  $div = document.querySelector('.restart');

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

  console.log(`Player Selection: ${player}`);
  console.log(`Computer Selection ${computer}`);

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
    console.log(round);
    w++;
    console.log(`You: ${w} - Computer: ${l}`);
  } else if (round.search('lose') !== -1) {
    console.log(round)
    l++;
    console.log(`You: ${w} - Computer: ${l}`)
  } else if (round.search('Tie') !== -1) {
    console.log(round);
    console.log(`You: ${w} - Computer: ${l}`);
  }

  if (w === 5 || l === 5) {
    gameOver();
  }
}

// Finishing the game when the score hits 5
function gameOver() {
  console.log('Game Over')
  $rock.setAttribute('disabled', 'true');
  $paper.setAttribute('disabled', 'true');
  $scissors.setAttribute('disabled', 'true');

  $restart.innerHTML = 'Restart';

  $div.appendChild($restart);
}

// Restarting the score to 0 and enabling the options
function restartGame() {
  $rock.removeAttribute('disabled');
  $paper.removeAttribute('disabled');
  $scissors.removeAttribute('disabled');

  $div.removeChild($restart);

  w = 0;
  l = 0;

  console.clear();
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

$restart.addEventListener('click', () => {
  restartGame();
});