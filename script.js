'use strict'

// Variables
let w = 0,
    l = 0;

// Constants
const $rock = document.querySelector('#rock'),
      $paper = document.querySelector('#paper'),
      $scissors = document.querySelector('#scissors');

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

// This is a single round of the game
function playRound(playerSelection, computerSelection) {
  if (typeof (playerSelection) !== 'string') return console.error('This is not a valid entry');

  let player = playerSelection.toLowerCase(),
    computer = computerSelection.toLowerCase();

  if (!(player === 'rock' || player === 'paper' || player === 'scissors')) return (console.error('Player must choose a valid option'))

  console.log(`Player Selection: ${player}`);
  console.log(`Computer Selection ${computer}`);

  if (player === 'rock') {

    if (computer === 'rock') {
      return 'Tie'
    } else if (computer === 'paper') {
      return 'You lose! Paper beats Rock'
    } else {
      return 'You win! Rock beats Scissors'
    }

  } else if (player === 'paper') {

    if (computer === 'rock') {
      return 'You win! Paper beats Rock'
    } else if (computer === 'paper') {
      return 'Tie'
    } else {
      return 'You lose! Scissors beats paper'
    }

  } else {

    if (computer === 'rock') {
      return 'You lose! Rock beats Scissors'
    } else if (computer === 'paper') {
      return 'You win! Scissors beats Paper'
    } else {
      return 'Tie'
    }

  }
}

// This updates the score of winnings and looses
function game(playerSelection) {

  console.log("Estoy entrando al ciclo")
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

/*
  Only left to write the code for
  winning or losing when reaches 5.
*/