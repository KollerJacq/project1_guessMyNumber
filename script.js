'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayBackgroungColor = function (backgroundColor) {
  document.querySelector('body').style.backgroundColor = backgroundColor;
};
const displayNumberStyle = function (numberStyle) {
  document.querySelector('.number').style.width = numberStyle;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('Please enter a number!');
  } else if (guess === secretNumber) {
    displayMessage('Correct number!');
    displayNumber(secretNumber);
    displayBackgroungColor('#60b347');
    displayNumberStyle('30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('Game over!');
      displayScore(0);
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayBackgroungColor('#222');
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  displayNumber('?');
  displayNumberStyle('15rem');
  displayScore(score);
});
