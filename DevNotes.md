# Personal Dev Notes

I've been keeping my personal notes on my macOS Notes app and my paper notebook. I thought it might be more productive to have them at hand right within the project's folder

### Started project on June 30th.

I didn't start sharing the notes until July 7th.

## 07/07/2022

It's 6pm, can't think anymore and my neck is killing me. But I have a pretty general idea of how to move forward.

### To do tomorrow:
- Make `endGame()` function
- Stop the counter after reaching 5 points
- Show only the final result on screen so they can't play anymore
- Make a button to restart the game
    - Button must reset all scores to 0
- Check [michalosman's code](https://github.com/michalosman/rock-paper-scissors/blob/4973cc5ca39f10d6d3d38b64fa4038c702c8a95a/script.js#L68) for inspo

## 07/26/2022

Resuming this project after 3 weeks away due to extra workload and doing interviews for translator and copywriter positions. Lost focus for a bit. It's hard to get the ball rolling again, I have to review the whole code just to remember my track of thought where I left off.

- Reviewed entire code
- Refactored: differentiate variables `runningScore` and `finalScore`
- Element `arena` can't be modified because the functions depend on elements inside of it
- Instead of replacing `arena` with the final score, create `overlay` div to go on top of everything

### Next:

- Reset scores to 0 upon clicking on `retryButton` (not working)

## 07/28/2022

- Try to put the button clicks in a loop
- Loop not working
- I'm starting to think my whole logic is off...
- The game is dependent on the player clicking a choice. Maybe it's the click event listener that's off...
- I think I need more functions?
    - `playRound()`
    - `declareWinner()`
    - `restartGame()`
- The score is shown as a number, should convert to string