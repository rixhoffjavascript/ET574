// solution.js

// Step 1: Timer setup function
function startTimer(duration) {
  let timeRemaining = duration;
  
  const intervalId = setInterval(() => {
    console.log(`Time remaining: ${timeRemaining} seconds`);
    timeRemaining--;

    if (timeRemaining < 0) {
      clearInterval(intervalId);
      console.log("Time's up!");
    }
  }, 1000);
}

// Step 2: Start the timer with a specified duration
const durationInSeconds = 10; // Example duration
startTimer(durationInSeconds);

// Answer to question in a comment
// The function startTimer sets up a countdown timer that logs the remaining time every second. When the time reaches zero, it stops the timer and logs "Time's up!".
