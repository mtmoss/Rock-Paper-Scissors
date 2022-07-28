let playerScore = 0;
let computerScore = 0;
const resultArea = document.getElementById('resultArea')
const runningScore = document.getElementById('runningScore');
const arena = document.getElementById('arena');
const overlay = document.getElementById('overlay');
const finalResult = document.getElementById('finalResult');
const retryButton = document.getElementById('retryButton');
const playerBtns = Array.from(document.getElementsByClassName('playerBtn'));
const computerBtns = Array.from(document.getElementsByClassName('computerBtn'));

while (playerScore < 5 || computerScore < 5) {
    playerBtns.forEach(button => {
        button.addEventListener('click',() => {
            let playerSelection = button.id;
            let computerSelection = computerPlay();
            let computerResult = document.querySelector(`.computerBtn#${computerSelection}`);
            computerResult.classList.add('active');
            playRound(playerSelection,computerSelection);
            if (playerScore === 5 || computerScore === 5) {
                declareWinner();
            };
        });
    });
    break;
};

// Generates computer move at random
const plays = ['rock','paper','scissors'];
function computerPlay() {
    return plays[Math.floor(Math.random()*plays.length)];
};

// Plays one round of rock, paper, scissors, displays the winner of the round and keeps score
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
    runningScore.innerHTML = 'You <span>' + playerScore + '</span> &#10006; <span>' + computerScore + '</span> Me';
};

// Shows a message over the entire page declaring the final winner
function declareWinner() {
    overlay.classList.add('active');
    if (playerScore > computerScore) {
        finalResult.innerHTML = 'Final score:<br><span>' + playerScore + '</span> &#10006; <span>' + computerScore + '</span><br>You win!';
    } else {
        finalResult.innerHTML = 'Final score:<br><span>' + playerScore + '</span> &#10006; <span>' + computerScore + '</span><br>You lose!';
    };
    // Hides the message
    retryButton.addEventListener('click', () => {
        overlay.classList.remove('active');
        playerScore = 0;
        computerScore = 0;
    });
};

