const plays = ['rock','paper','scissors'];
function computerPlay() {
    return plays[Math.floor(Math.random()*plays.length)];
};

let playerScore = 0;
let computerScore = 0;

const resultArea = document.getElementById('resultArea')
const finalScore = document.getElementById('finalScore');

function playRound(a,b) {
    if (a == b) {
        resultArea.innerHTML = '<span>' + a + '</span> and <span>' + b + '</span>: it\'s a draw!';
    } else if ((a == 'rock' && b == 'scissors') || (a == 'paper' && b == 'rock') || (a == 'scissors' && b == 'paper')) {
        resultArea.innerHTML = 'Your <span>' + a + '</span> beats my <span>' + b + '</span>: you win!';
        ++playerScore;
    } else if ((a == 'rock' && b == 'paper') || (a == 'paper' && b == 'scissors') || (a == 'scissors' && b == 'rock')) {
        resultArea.innerHTML = 'My <span>' + b + '</span> beats your <span>' + a + '</span>: you lose!';
        ++computerScore;
    };
    finalScore.innerHTML = 'You <span>' + playerScore + '</span> &#10006; <span>' + computerScore + '</span> Me';
};

const buttons = Array.from(document.getElementsByClassName('button'));
buttons.forEach(button => {
    button.addEventListener('click',() => {
        let playerSelection = button.id;
        let computerSelection = computerPlay();
        playRound(playerSelection,computerSelection);
    });
});