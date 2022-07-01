### Rock Paper Scissors

This is yet another exercise from [The Odin Project](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors). I'll be training and developing the very early stages of my skills in JavaScript.

[See it live](https://mtmoss.github.io/Rock-Paper-Scissors/)

## The algorithm for this application

This is how I thought this project should function, given the exercise instructions (see link above).

1. Function `computerPlay()` returns random move between Rock, Paper or Scissors
2. User inputs their choice via `prompt`
2. Funtion `playRound()` takes parameters `playerSelection` and `computerSelection` and returns a string that declares the winner
3. Function `game()` calls function `playRound()` to create a Rock Paper Scissors game with 5 rounds
4. Console prints the winner of each round
5. Console prints final winner

## Pseudocode

This is my first attempt ever at writing pseudocode. From my writing and translation background, I know how important it is to begin with a skeleton of what you're planning to put out in the world.

- FOR 5 rounds
    - GET computer choice of rock, paper or scissors at random
    - GET user choice of rock, paper or scissors via prompt (case insensitive)
    - IF user choice EQUALS computer choice THEN
        - PRINT draw message
    - ELSE
        - IF
        - user choice is rock AND computer choice is scissors
        - OR
        - user choice is paper AND computer choice is rock
        - OR
        - user choice is scissors AND computer choice is paper
        - THEN
            - PRINT win message
        - ELSE
            - IF
            - user choice is rock AND computer choice is paper
            - OR
            - user choice is paper AND computer choice is scissors
            - OR
            - user choice is scissors AND computer choice is rock
            - THEN
                - PRINT lose message
            - END IF
        - END IF
    - END IF
- END FOR
- CALCULATE number of user wins
- CALCULATE number of computer wins
- IF user wins EQUALS computer wins THEN
    - PRINT final draw message
- ELSE
    - IF user wins GREATER THAN computer wins THEN
        - PRINT final win message
    - ELSE
        - IF user wins LESS THAN computer wins THEN
        - PRINT final lose message
        - END IF
    - END IF
- END IF