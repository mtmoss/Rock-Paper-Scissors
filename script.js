// Defines computer move at random

const plays = ['rock','paper','scissors'];
function computerPlay() {
    return plays[Math.floor(Math.random()*plays.length)];
};


// Defines player move according to which button is clicked

function playRound(playerSelection,computerSelection) {
    if (playerSelection == computerSelection) {
        console.log(`We both chose ${playerSelection}. It's a draw!`);
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')) {
        // ++playerScore;
        console.log(`You chose ${playerSelection} and I chose ${computerSelection}. Fine, you win...`);
    } else if ((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'rock')) {
        // ++computerScore;
        console.log(`You chose ${playerSelection} and I chose ${computerSelection}. Ha! You lose!`);
    };
};

let rockButton = document.getElementById('rockButton');
let paperButton = document.getElementById('paperButton');
let scissorsButton = document.getElementById('scissorsButton');

rockButton.addEventListener('click', () => {
    let playerSelection = 'rock';
    let computerSelection = computerPlay();
    playRound(playerSelection,computerSelection)});
paperButton.addEventListener('click', () => {
    let playerSelection = 'paper';
    let computerSelection = computerPlay();
    playRound(playerSelection,computerSelection)});
scissorsButton.addEventListener('click', () => {
    let playerSelection = 'scissors';
    let computerSelection = computerPlay();
    playRound(playerSelection,computerSelection)});





/*
let resultAreaElement = document.getElementById('resultArea');
let resultNode = document.createTextNode('testing clicks');
resultAreaElement.appendChild(resultNode);

let playerScore = 0;
let computerScore = 0;


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
*/