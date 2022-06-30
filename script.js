const plays = ['rock','paper','scissors'];
function computerPlay() {
    return plays[Math.floor(Math.random()*plays.length)];
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection == computerSelection) {
        return 'It\'s a draw!';
    } else if ((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')) {
        return 'You win!';
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'rock')) {
        return 'You lose!';
    };
}

let playerSelection = prompt('What will you choose? Write "rock", "paper" or "scissors".');
let computerSelection = computerPlay();
console.log(playRound(playerSelection,computerSelection));