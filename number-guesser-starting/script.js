let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

const compareGuesses = (userGuess, computerGuess, target) => {
    if (userGuess > 9 || userGuess < 0) {
        alert("Invalid guess. Try again!");
        return;
    }
    return Math.abs(target - computerGuess) >= Math.abs(target - userGuess);
}

const updateScore = winner => {
    if (winner === 'human') humanScore++;
    if (winner === 'computer') computerScore++;
    
}

const advanceRound = () => currentRoundNumber++;

