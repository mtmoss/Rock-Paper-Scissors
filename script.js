const plays = ['rock','paper','scissors'];
function computerPlay() {
    return plays[Math.floor(Math.random()*plays.length)];
};

let playerScore = 0;
let computerScore = 0;

function playRound(a,b) {
    if (a !== ('rock' || 'paper' || 'scissors')) {
        return 'Not a valid choice. Refresh the page to check for typos and try again.';
    } else if (a == b) {
        return `We both chose ${a}. It's a draw!`;
    } else if ((a == 'rock' && b == 'scissors') || (a == 'paper' && b == 'rock') || (a == 'scissors' && b == 'paper')) {
        ++playerScore;
       return `You chose ${a} and I chose ${b}. Fine, you win...`;
    } else if ((a == 'rock' && b == 'paper') || (a == 'paper' && b == 'scissors') || (a == 'scissors' && b == 'rock')) {
        ++computerScore
        return `You chose ${a} and I chose ${b}. Ha! You lose!`;
    };
};

function game() {
    for (let i = 0; i <5; ++i) {
        let playerSelection = prompt('Can you beat me? Enter "rock", "paper" or "scissors".').toLowerCase();
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection,computerSelection));
    };

    if (computerScore == playerScore) {
        console.log(`FINAL SCORE: Me ${computerScore} x You ${playerScore}. Where's the fun in a draw?`);
    } else if (computerScore > playerScore){
        console.log(`FINAL SCORE: Me ${computerScore} x You ${playerScore}. I am the ultimate master of this game!`);
    } else {
        console.log(`FINAL SCORE: Me ${computerScore} x You ${playerScore}. Congrats, I guess...`);
    }
};

game();