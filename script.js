let name = ''

function inputName() {
    let name = prompt('Enter your name:')
    // Hide the input name button and show the game
    // Display the name in all appropriate places
}

let playerScore = 0
let computerScore = 0

function oneRound(playerChoice) {
    let computerArray = ['rock', 'paper', 'scissors']
    let randomNumber = Math.floor(Math.random() * computerArray.length)
    let computerChoice = computerArray[randomNumber]
    
    // Display playerChoice
    // Display computerChoice

    if(computerChoice === playerChoice) {
        console.log('draw') // Display "Its a draw!"
        // Do not add score
    }

    if(playerChoice === 'rock') {
        if(computerChoice === 'paper') {
            // Display "Computer wins the round! You suck!"
            computerScore = computerScore + 1 // Add to computer score
        }
        if(computerChoice === 'scissors') {
            // Display "Player wins the round! You don't suck!"
            playerScore = playerScore + 1 //Add to player score
        }
    }
    if(playerChoice === 'paper') {
        if(computerChoice === 'scissors') {
            // Display "Computer wins the round! You suck!"
            computerScore = computerScore + 1 // Add to computer score
        }
        if(computerChoice === 'rock') {
            // Display "Player wins the round! You don't suck!"
            playerScore = playerScore + 1 //Add to player score
        }
    }
    if(playerChoice === 'scissors') {
        if(computerChoice === 'rock') {
            // Display "Computer wins the round! You suck!"
            computerScore = computerScore + 1 // Add to computer score
        }
        if(computerChoice === 'paper') {
            // Display "Player wins the round! You don't suck!"
            playerScore = playerScore + 1 //Add to player score
        }
    }

    // Display Scores

    if(playerScore + computerScore === 5) {
        endGame()
    }
}

function endGame() {
    if(playerScore > computerScore) {
        // Display "You won the game!"
        // Add a 'random' compliment from an array as well
    } else {
        // Display "You lost the game!"
        // Add a 'random' insult from an array as well
    }
    // Hide buttons so can't continue
    // Pop up the reset game button
}

function resetGame() {
    // Remove the stuff added by endGame()
    // Add the buttons back in
}