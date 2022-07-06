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
};

const buttons = Array.from(document.getElementsByClassName('button'));
buttons.forEach(button => {
    button.addEventListener('click',() => {
        let playerSelection = button.id;
        console.log(playerSelection);
    });
});

/* const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

rockBtn.addEventListener('click',() => {
    let playerSelection = 'rock';
    let computerSelection = computerPlay();
    playRound(playerSelection,computerSelection);
    console.log(`You: ${playerScore} vs. Me: ${computerScore}`);
    }
);
paperBtn.addEventListener('click',() => {
    let playerSelection = 'paper';
    let computerSelection = computerPlay();
    playRound(playerSelection,computerSelection);
    console.log(`You: ${playerScore} vs. Me: ${computerScore}`);
    }
);
scissorsBtn.addEventListener('click',() => {
    let playerSelection = 'scissors';
    let computerSelection = computerPlay();
    playRound(playerSelection,computerSelection);
    console.log(`You: ${playerScore} vs. Me: ${computerScore}`);
    }
); */