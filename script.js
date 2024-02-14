let userName = ''

function inputName() {
    userName = prompt('Enter your name:')
    document.getElementById('input-name').style.display = "none" // Hide the input name button
    document.getElementById('game').style.display = "inline" // Show the game
    document.querySelectorAll('.name').forEach(element => element.innerText = userName) // Display the name in all appropriate places
}

let playerScore = 0
let computerScore = 0

function oneRound(playerChoice) {
    let computerArray = ['rock', 'paper', 'scissors']
    let randomNumber = Math.floor(Math.random() * computerArray.length)
    let computerChoice = computerArray[randomNumber]

    // Display choices
    document.getElementById('player-choice').innerText = playerChoice
    document.getElementById('player-choice').innerText = computerChoice

    // Variables for declaring results
    let winMessage = `${userName} wins the round! You don't suck!`
    let loseMessage = `Computer wins the round! You suck!`
    let roundEndMessageDiv = document.getElementById('round-end-message')

    if (computerChoice === playerChoice) {
        roundEndMessageDiv.innerText = "It's a draw!" //Display "It's a draw!"
    } else {
        (playerChoice === 'rock') {
            if (computerChoice === 'paper') {
                roundEndMessageDiv.innerText = loseMessage // Display "Computer wins the round! You suck!"
                computerScore = computerScore + 1 // Add to computer score
            }
            if (computerChoice === 'scissors') {
                roundEndMessageDiv.innerText = winMessage // Display "Player wins the round! You don't suck!"
                playerScore = playerScore + 1 //Add to player score
            }
        }
        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                roundEndMessageDiv.innerText = loseMessage // Display "Computer wins the round! You suck!"
                computerScore = computerScore + 1 // Add to computer score
            }
            if (computerChoice === 'rock') {
                roundEndMessageDiv.innerText = winMessage // Display "Player wins the round! You don't suck!"
                playerScore = playerScore + 1 //Add to player score
            }
        }
        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                roundEndMessageDiv.innerText = loseMessage // Display "Computer wins the round! You suck!"
                computerScore = computerScore + 1 // Add to computer score
            }
            if (computerChoice === 'paper') {
                roundEndMessageDiv.innerText = winMessage // Display "Player wins the round! You don't suck!"
                playerScore = playerScore + 1 //Add to player score
            }
        }
    }

    // Display Scores
    document.getElementById('player-score').innerText = playerScore
    document.getElementById('computer-score').innerText = computerScore

    if (playerScore + computerScore === 5) {
        endGame()
    }
}

function endGame() {
    document.getElementById('choices').style.display = 'none' // Hide buttons so can't continue
    document.getElementById('end-screen').style.display = 'inline' // Hide buttons so can't continue
    let randomNumber = Math.floor(Math.random() * computerArray.length)
    if (playerScore > computerScore) {
        // Display "You won the game!"
        // Add a 'random' compliment from an array as well
    } else {
        // Display "You lost the game!"
        // Add a 'random' insult from an array as well
    }
}

function resetGame() {
    // Remove the stuff added by endGame()
    document.getElementById('choices').style.display = 'inline' // Add the buttons back in
}