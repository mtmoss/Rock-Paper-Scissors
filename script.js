const moves = ["rock","paper","scissors"];

function computerPlay() {
    return moves[Math.floor(Math.random()*moves.length)];
}

console.log(computerPlay());