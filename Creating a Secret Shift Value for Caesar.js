// solution.js

// Step 1: Initial setup
console.log("Initial setup complete");

// Step 2: Create an array of friends
const friends = ["Caesar", "Brutus", "Cassius", "Antony", "Cleopatra"];
console.log(friends);

// Step 3: Add a new friend
friends.push("Octavius");
console.log(friends);

// Step 4: Remove the first friend
friends.shift();
console.log(friends);

// Step 5: Sort the friends alphabetically
friends.sort();
console.log(friends);

// Step 6: Create a secret shift value for Caesar
const secretShiftValue = 3; // Example shift value for Caesar Cipher
console.log(secretShiftValue);

// Step 7: Caesar Cipher encryption function
function caesarCipher(str, shift) {
  return str.split('').map(char => {
    const charCode = char.charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
      return String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      return String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
    }
    return char;
  }).join('');
}

const encryptedMessage = caesarCipher("Caesar", secretShiftValue);
console.log(encryptedMessage); // Encrypted message

// Answer to question in a comment
// The function caesarCipher encrypts a given string by shifting each character by a specified value within the alphabet.
