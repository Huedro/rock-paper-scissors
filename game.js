// Player write which of the 3 options he has 
// Computer calls a function that randomly returns one of the 3 options 
// The game tests who beats who
// Show Victory or Defeat to the player

console.log(getHumanChoice());

function getComputerChoice() {
    let randomNumber = Math.random() * 100;
    
    if (randomNumber >= 0 && randomNumber <= 33.33) {
        return "rock";
    } else if (randomNumber >= 33.33 && randomNumber <= 66.66) {
        return "paper";
    }
    
    return "scissors";
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
    return humanChoice
}