const plays = ['rock','paper','scissors'];
function computerPlay() {
    return plays[Math.floor(Math.random()*plays.length)];
}

function playRound(a,b) {
    if (a !== ('rock' || 'paper' || 'scissors')) {
        return 'Not a valid choice. Refresh the page to check for typos and try again.';
    } else if (a == b) {
        return `We both chose ${a}. It\'s a draw!`;
    } else if ((a == 'rock' && b == 'scissors') || (a == 'paper' && b == 'rock') || (a == 'scissors' && b == 'paper')) {
        return `You chose ${a} and I chose ${b}. Fine, you win...`;
    } else if ((a == 'rock' && b == 'paper') || (a == 'paper' && b == 'scissors') || (a == 'scissors' && b == 'rock')) {
        return `You chose ${a} and I chose ${b}. Ha! You lose!`;
    };
}

let playerSelection = prompt('Can you beat me? Enter "rock", "paper" or "scissors".').toLowerCase();
let computerSelection = computerPlay();
console.log(playRound(playerSelection,computerSelection));