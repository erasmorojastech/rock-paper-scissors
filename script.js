'use strict'

function computerPlay() {
  let computer = Math.floor(Math.random() * (3 - 1 + 1) + 1);

  if (computer === 1){
    return 'Rock';
  }else if (computer === 2) {
    return 'Paper';
  }else {
    return 'Scissors';
  }
};

function game(playerSelection, computerSelection) {
  if (typeof(playerSelection) !== 'string') return console.error('This is not a valid entry');

  let player = playerSelection.toLowerCase(),
      computer = computerSelection.toLowerCase();

  if (!(player === 'rock' || player === 'paper' || player === 'scissors')) return (console.error('Player must choose a valid option'))

  console.log(`Player Selection: ${player}`);
  console.log(`Computer Selection ${computer}`);

  if (player === 'rock') {

    if (computer === 'rock') {
      return console.log('Tie')
    } else if (computer === 'paper') {
      return console.log('You lose! Paper beats Rock')
    } else {
      return console.log('You win! Rock beats Scissors')
    }

  }else if (player === 'paper') {

    if (computer === 'rock') {
      return console.log('You win! Paper beats Rock')
    } else if (computer === 'paper') {
      return console.log('Tie')
    } else {
      return console.log('You lose! Scissors beats paper')
    }

  } else {

    if (computer === 'rock') {
      return console.log('You lose! Rock beats Scissors')
    } else if (computer === 'paper') {
      return console.log('You win! Scissors beats Paper')
    } else {
      return console.log('Tie')
    }

  }

}


