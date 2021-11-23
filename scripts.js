function computerSelection() {
    let compChoice;
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return compChoice = "rock";
    } else if (randomNum === 1) {
        return compChoice = "paper";
    } else {
        return compChoice = "scissors";
    }
}

function playerSelection() {
    let playerSelection;
    let exit = 0;
    while (exit === 0) {
        playerSelection = prompt("Choose one: rock, paper, scissors").toLowerCase();
        if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
            exit = 1;
        }
    }
    return playerSelection;
}

function compareSelections(playerChoice, compChoice) {
    let result;
    switch (true) {
        case (playerChoice === compChoice):
            return result = 0;
            break;
        case (playerChoice === "rock" && compChoice === "scissors"):
        case (playerChoice === "paper" && compChoice === "rock"):
        case (playerChoice === "scissors" && compChoice === "paper"):            
            return result = 1;
            break;
        case (compChoice === "rock" && playerChoice ==="scissors"):
        case (compChoice === "paper" && playerChoice ==="rock"):
        case (compChoice === "scissors" && playerChoice ==="paper"):
            return result = -1;
            break;
        default:
            return result = 2;
    }
}

function playRound() {
    let playerChoice;
    let compChoice;
    let result;
    let message;
    playerChoice = playerSelection();
    compChoice = computerSelection();
    result = compareSelections(playerChoice, compChoice);
    message = `You chose ${playerChoice}. The computer chose ${compChoice}. `;
    if (result === 0) {
        message += "It was a tie!";
    } else if (result === 1) {
        message += "You won!";
    } else if (result === -1) {
        message += "You lost.";
    } else {
        message = "Something is wrong";
    }

    return message;
}

function game() {
    let totalWins = 0;
    console.log("Let\'s play Rock Paper Scissors.");
    for (let i = 1; i < 6; i++) {
        let gameResult;
        gameResult = playRound();
        console.log(gameResult);
        if (gameResult.includes("won")) {
            totalWins++
        }
        console.log(`You have won ${totalWins} of ${i} games`);
    }
}