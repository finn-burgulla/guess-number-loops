// This code lets the player guess a number between 1 and 10 with 5 attempts.
// It gives hints if the guess is too high or too low, and shows how many attempts it took.

// Generate a random number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;
let guessedCorrectly = false; // To track if the player has guessed the number

// Give the player 5 attempts using a for loop
for (let attempts = 1; attempts <= 5; attempts++) {
  // Ask the player to guess a number
  const guess = prompt(`Guess a number between 1 and 10 (Attempt ${attempts}/5):`);
  
  // Convert the guess to a number
  const guessNumber = Number(guess);

  // Check if the guess is correct
  if (guessNumber === secretNumber) {
    // Create confetti elements
    const confettiHTML = Array.from({length: 9}, (_, i) => 
      `<div class="confetti"></div>`
    ).join('');
    
    // Update the page with a congratulatory message and confetti
    document.body.innerHTML = `
      <div class="container">
        <div class="congratulations">
          ${confettiHTML}
          🎉 Congratulations! 🎉<br>
          You guessed it in ${attempts} attempt${attempts === 1 ? '' : 's'}!<br>
          <br>
          The number was ${secretNumber}
        </div>
      </div>
    `;
    guessedCorrectly = true; // Mark as guessed correctly
    break; // Exit the loop early since they won
  } else if (guessNumber > secretNumber) {
    // Give a hint if the guess is too high
    alert('Too high! Try again.');
  } else if (guessNumber < secretNumber) {
    // Give a hint if the guess is too low
    alert('Too low! Try again.');
  } else {
    // Handle invalid input
    alert('Please enter a valid number between 1 and 10.');
  }
}

// If they didn't guess correctly after 5 attempts, show game over message
if (!guessedCorrectly) {
  document.body.innerHTML = `
    <div class="container">
      <div class="game-over">
        ❌ Game over! The number was ${secretNumber}.
      </div>
    </div>
  `;
}