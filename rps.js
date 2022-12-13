
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (['rock', 'paper', 'scissors', 'bomb'].includes(userInput)) {
        return userInput;
    } else {
        console.log('Error. Invalid selection. Choose from Rock, Paper, or Scissors.');
    }
}

// testing 1st function
// getUserChoice('squid');
// console.log( getUserChoice('rock') );
// console.log( getUserChoice('rOCK') );


const computerChoices = ['rock', 'paper', 'scissors'];
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    return computerChoices[randomNumber];
}

// testing 2nd function
// console.log(getComputerChoice());

function determineWinner(userChoice, computerChoice) {
    if (userChoice === 'bomb') return "You Win 💣"
    if (userChoice === computerChoice) return "Tie Game.";
    
    if (
        userChoice === 'rock' && computerChoice === 'scissors' ||
        userChoice === 'paper' && computerChoice === 'rock' ||
        userChoice === 'scissors' && computerChoice === 'paper'
    ) {
        return "You win!";
    } else {
        return "Computer wins :(";
    }
}

function playGame() {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log(`User: ${userChoice}, Computer: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();