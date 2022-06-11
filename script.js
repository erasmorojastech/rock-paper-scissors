'use strict'

function computerPlay() {
  let computer = Math.floor(Math.random() * (3 - 1 + 1) + 1);

  if (computer === 1){
    console.log('Rock');
  }else if (computer === 2) {
    console.log('Paper');
  }else {
    console.log('Scissors');
  }
};

computerPlay();