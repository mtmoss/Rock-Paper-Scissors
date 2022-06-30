const plays = ['rock','paper','scissors'];
function computerPlay() {
    return plays[Math.floor(Math.random()*plays.length)];
}

function playRound(a,b) {
    const aLowerCase = a.toLowerCase();
    if (aLowerCase == b) {
        return `We both chose ${aLowerCase}. It\'s a draw!`;
    } else if ((aLowerCase == 'rock' && b == 'scissors') || (aLowerCase == 'paper' && b == 'rock') || (aLowerCase == 'scissors' && b == 'paper')) {
        return `You chose ${aLowerCase} and I chose ${b}. Fine, you win...`;
    } else if ((aLowerCase == 'rock' && b == 'paper') || (aLowerCase == 'paper' && b == 'scissors') || (aLowerCase == 'scissors' && b == 'rock')) {
        return `You chose ${aLowerCase} and I chose ${b}. Ha! You lose!`;
    };
}

let playerSelection = prompt('Can you beat me? Enter "rock", "paper" or "scissors".');
let computerSelection = computerPlay();
console.log(playRound(playerSelection,computerSelection));