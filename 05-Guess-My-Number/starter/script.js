'use strict';

/*
    72: Selecting and manipulating DOM elements
*/
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🍾 Correct Number!!';

// document.querySelector('.number').textContent = 20;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(
//     document.querySelector('.guess').value
// );

/* 
    73: Handling the Click Events
    74: Manipulating CSS styles
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = +document.querySelector('.score').textContent;

document.querySelector('.check').addEventListener('click', function () {
    const guess = +document.querySelector('.guess').value;

    if (!guess) {   // no input
        document.querySelector('.message').textContent = '🚫 No Number !!';
    } else if (guess === secretNumber) {    // guess is correct
        document.querySelector('.message').textContent = '🍾 Correct Number!!';
        document.querySelector('.highscore').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

    } else if (guess > secretNumber) {  // guess is high
        if (score > 1) {
            document.querySelector('.message').textContent = '🙆🏼‍♂️ Too High!!';
        } else {
            document.querySelector('.message').textContent = 'You lost the game!!!';
        }
        updateScore();
    } else if (guess < secretNumber) {  // guess is low
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too Low!!';
        } else {
            document.querySelector('.message').textContent = 'You lost the game!!!';
        }
        updateScore();
    }


});

function updateScore () {
    score--;
    document.querySelector('.score').textContent = score;
}