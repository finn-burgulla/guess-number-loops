// Get the message element
const message = document.getElementById('message');

// Get the button element
const button = document.getElementById('start-button');

// Add a click event listener to the button
button.addEventListener('click', function() {
  // Generate a random number between 1 and 10
  const secretNumber = Math.floor(Math.random() * 10) + 1;

  // Flag to check if the player has won
  let hasWon = false;

  // Game loop with 5 attempts
  for (let attempts = 1; attempts <= 5; attempts = attempts + 1) {
    // Prompt the player for their guess
    const guessString = prompt('Guess a number between 1 and 10:');

    // If the user cancels the prompt, stop the game
    if (guessString === null) {
      break;
    }

    // Convert the guess to a number
    const guess = Number(guessString);

    // Check if the guess is correct
    if (guess === secretNumber) {
      // Display a success message
      message.textContent = `🎉 Congratulations! You guessed it in ${attempts} attempt(s).`;
      // Set the flag to true
      hasWon = true;
      // Exit the loop
      break;
    } else if (guess < secretNumber) {
      // Provide a hint if the guess is too low
      alert('Too low! Try again.');
    } else {
      // Provide a hint if the guess is too high
      alert('Too high! Try again.');
    }
  }

  // If the player hasn't won after 5 attempts, it's game over
  if (hasWon === false) {
    message.textContent = `❌ Game over! The number was ${secretNumber}.`;
  }
});