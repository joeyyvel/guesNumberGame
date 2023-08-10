'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

console.log(secretNumber);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    displayMessage('😅 No Number!');

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('🤙 correct Number');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '🤾‍♀️ Too High' : '🤸‍♀️ Too low! ');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🤦‍♀️ you lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
// play again with highscore added
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log('another ' + secretNumber);
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = highscore;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});
