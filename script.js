const plays = ['rock','paper','scissors'];
function computerPlay() {
    return plays[Math.floor(Math.random()*plays.length)];
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection == computerSelection) {
        return `We both chose ${playerSelection}. It\'s a draw!`;
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')) {
        return `You chose ${playerSelection} and I chose ${computerSelection}. You win...`;
    } else if ((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'rock')) {
        return `You chose ${playerSelection} and I chose ${computerSelection}. Ha! You lose!`;
    };
}

let playerSelection = prompt('What will you choose? Write "rock", "paper" or "scissors".');
let computerSelection = computerPlay();
console.log(playRound(playerSelection,computerSelection));