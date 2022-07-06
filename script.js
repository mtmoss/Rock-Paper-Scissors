const plays = ['rock','paper','scissors'];
function computerPlay() {
    return plays[Math.floor(Math.random()*plays.length)];
};

let playerScore = 0;
let computerScore = 0;

function playRound(a,b) {
    if (a == b) {
        console.log(`We both chose ${a}. It's a draw!`);
    } else if ((a == 'rock' && b == 'scissors') || (a == 'paper' && b == 'rock') || (a == 'scissors' && b == 'paper')) {
        ++playerScore;
        console.log(`You chose ${a} and I chose ${b}. Fine, you win...`);
    } else if ((a == 'rock' && b == 'paper') || (a == 'paper' && b == 'scissors') || (a == 'scissors' && b == 'rock')) {
        ++computerScore;
        console.log(`You chose ${a} and I chose ${b}. Ha! You lose!`);
    };
    console.log(`FINAL SCORE: Me ${computerScore} x You ${playerScore}.`);
};

const buttons = Array.from(document.getElementsByClassName('button'));
buttons.forEach(button => {
    button.addEventListener('click',() => {
        let playerSelection = button.id;
        let computerSelection = computerPlay();
        playRound(playerSelection,computerSelection);
    });
});