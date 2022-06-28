'use strict'

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

// This is a unique round of the game
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


// This is the complete game. It plays 5 rounds. The best score wins
function game() {
  let w = 0,
    l = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt('Rock, Paper or Scissors?');

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
      i--;
      console.log(`You: ${w} - Computer: ${l}`);
    }
  }

  if (w > l) {
    return console.log('Congratulations! You win the game!')
  } else {
    return console.log('Sorry, you lost! Maybe the next time.')
  }

}
