# Minimalist, Text-Only Rock Paper Scissors

This is yet another exercise from [The Odin Project](https://www.theodinproject.com). I'll be training and developing the very early stages of my skills in JavaScript.

- [Project instructions](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors)
- [Live project](https://mtmoss.github.io/Rock-Paper-Scissors/)

## The algorithm for this application

This is how I thought this project should function, given the exercise instructions (see link above).

1. Function `computerPlay()` returns random move between Rock, Paper or Scissors
2. User inputs their choice via `prompt`
2. Funtion `playRound()` takes parameters `playerSelection` and `computerSelection` and returns a string that declares the winner
3. Function `game()` calls function `playRound()` to create a Rock Paper Scissors game with 5 rounds
4. Console prints the winner of each round
5. Console prints final winner

## Adding an UI

After the game was running successfully on the console, it was time to add a user interface.

If in the first iteration of the game, the player's move was obtained from a `prompt()` text input. Now, the idea was to give the player three visual choices to click on: *rock*, *paper* or *scissors*.

Because the scope of this exercise is the game functionality and manipulating the DOM so that the player can interact with it, I decided to make a very minimalist, text-only UI. I like the brutalist style, so I think it turned out pretty.

### The challenge: manipulating the HTML DOM

It took me way too long to figure out that `.getElementsByClassName` does *not* automatically return an array :poop: This misunderstanding was a major hiccup and the main bottleneck for this project. After that, the logic worked smoothly with squeaky clean code.

It was a really humbling experience to realize that an entire logic can be dependent on the smallest of details.

## Improving the UX

So far, so good, the game works. But visually, it only made sense to the person who could read the code from the inside, i.e. me.

Because proper UX research and implementation is not in the scope of this project, I relied only on my ability to put myself in the user's shoes, a crucial skill from my years reviewing product localization and translation.

The game is very confusing from a user perspective, as it appears the AI moves come out of nowhere. Well, they do, but I needed the user to feel like they were actually playing against an intelligence that ponders every move. To achieve this, I added `div`s that represented the computer's choice, with a small delay to make the selection. The result of the round is then shown below the game area.