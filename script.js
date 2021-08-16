'use strict';
var random = Math.floor(Math.random() * 20);
console.log(random);
const again = document.querySelector('.again');
let score = 20;
let highScore = 0;

const check = document.querySelector('.check');
check.addEventListener('click', function () {
    const number = document.querySelector('.guess').value;
    if (number < random) {
        document.querySelector('.message').textContent = 'Too low';
        score--;
        document.querySelector('.score').textContent = score;
    } else if (number > random) {
        document.querySelector('.message').textContent = 'To high';
        score--;
         document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = 'Correct Number';
        document.querySelector('.highscore').textContent = score;
        document.body.style.backgroundColor = 'green';
        document.querySelector('.number').textContent = random;
        if (highScore < score) {
            highScore = score;
        }
    }
})
again.addEventListener('click', function () {
    score = 20;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.body.style.backgroundColor = 'black';
    random = Math.floor(Math.random() * 20);
    console.log(random);
    
})
