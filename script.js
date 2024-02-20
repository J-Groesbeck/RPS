let userName = ''

function inputName() {
    userName = prompt('Enter your name:')
    if (userName === null || !userName.trim()) {
        alert('Please enter a valid name!')
    } else {
        document.getElementById('input-name').style.display = "none" // Hide the input name button
        document.getElementById('game').style.display = "inline" // Show the game
        document.querySelectorAll('.name').forEach(element => element.innerText = userName) // Display the name in all appropriate places
    }
}

let playerScore = 0
let computerScore = 0

function oneRound(playerChoice) {
    let computerArray = ['Rock', 'Paper', 'Scissors']
    let randomNumber = Math.floor(Math.random() * computerArray.length)
    let computerChoice = computerArray[randomNumber]

    // Display choices
    document.getElementById('player-choice').innerText = playerChoice
    document.getElementById('computer-choice').innerText = computerChoice

    // Variables for declaring results
    let winMessage = `${userName} wins the round! You don't suck!`
    let loseMessage = `Computer wins the round! You suck!`
    let roundEndMessageDiv = document.getElementById('round-end-message')

    if (computerChoice === playerChoice) {
        roundEndMessageDiv.innerText = "It's a draw!" //Display "It's a draw!"
    } else {
        if (playerChoice === 'Rock') {
            if (computerChoice === 'Paper') {
                roundEndMessageDiv.innerText = loseMessage // Display "Computer wins the round! You suck!"
                computerScore = computerScore + 1 // Add to computer score
            }
            if (computerChoice === 'Scissors') {
                roundEndMessageDiv.innerText = winMessage // Display "Player wins the round! You don't suck!"
                playerScore = playerScore + 1 //Add to player score
            }
        }
        if (playerChoice === 'Paper') {
            if (computerChoice === 'Scissors') {
                roundEndMessageDiv.innerText = loseMessage // Display "Computer wins the round! You suck!"
                computerScore = computerScore + 1 // Add to computer score
            }
            if (computerChoice === 'Rock') {
                roundEndMessageDiv.innerText = winMessage // Display "Player wins the round! You don't suck!"
                playerScore = playerScore + 1 //Add to player score
            }
        }
        if (playerChoice === 'Scissors') {
            if (computerChoice === 'Rock') {
                roundEndMessageDiv.innerText = loseMessage // Display "Computer wins the round! You suck!"
                computerScore = computerScore + 1 // Add to computer score
            }
            if (computerChoice === 'Paper') {
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
    let complimentArray = ['Hey, that was pretty good!', 'You❜re not bad, kid!', 'Recherché job!']
    let insultArray = ['That was impressively bad!', 'I didn❜t know it was possible to do that poorly!', 'For the sake of your self esteem, never come back.']
    let randomNumber = Math.floor(Math.random() * complimentArray.length)
    if (playerScore > computerScore) {
        document.getElementById('victory-or-loss').innerText = 'You Won the Game!' // Display "You won the game!"
        document.getElementById('insults-or-compliments').innerText = complimentArray[randomNumber] // Add a 'random' compliment from an array as well
        document.getElementById('result-picture').src = 'img/celebration.jpg'
    } else {
        document.getElementById('victory-or-loss').innerText = 'You Lost the Game!' // Display "You lost the game!"
        document.getElementById('insults-or-compliments').innerText = insultArray[randomNumber] // Add a 'random' insult from an array as well
        document.getElementById('result-picture').src = 'img/'
    }
}

function resetGame() {
    document.getElementById('end-screen').style.display = 'none' // Remove the stuff added by endGame()
    document.getElementById('choices').style.display = 'inline' // Add the buttons back in
    playerScore = 0
    computerScore = 0
    document.getElementById('player-score').innerText = playerScore
    document.getElementById('computer-score').innerText = computerScore
}