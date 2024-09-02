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

// Step 8: Create a secret emblem for Caesar's invitation
const secretEmblem = "Lion"; // Example emblem
console.log(secretEmblem);

// Step 9: Function to generate an emblem code
function generateEmblemCode(emblem, shift) {
  return caesarCipher(emblem, shift);
}

const emblemCode = generateEmblemCode(secretEmblem, secretShiftValue);
console.log(emblemCode); // Encrypted emblem code

// Answer to question in a comment
// The function generateEmblemCode takes an emblem and a shift value, and returns the Caesar Cipher encrypted code of the emblem.

// Step 10: Create Caesar's party guest list
const partyGuests = ["Augustus", "Livia", "Agrippa", "Maecenas"];
console.log(partyGuests);

// Step 11: Add a new guest to the list
partyGuests.push("Octavia");
console.log(partyGuests);

// Step 12: Remove the last guest from the list
partyGuests.pop();
console.log(partyGuests);

// Step 13: Create a function to generate invitation codes for guests
function generateInvitationCodes(guests, shift) {
  return guests.map(guest => caesarCipher(guest, shift));
}

const invitationCodes = generateInvitationCodes(partyGuests, secretShiftValue);
console.log(invitationCodes); // Encrypted invitation codes for guests

// Answer to question in a comment
// The function generateInvitationCodes takes an array of guest names and a shift value, and returns an array of Caesar Cipher encrypted invitation codes for each guest.

// Step 14: Create a VIP guest directory
const vipGuests = {
  "Caesar": "Emperor",
  "Cleopatra": "Queen",
  "Marc Antony": "General",
  "Octavius": "Prince"
};
console.log(vipGuests);

// Step 15: Add a new VIP guest to the directory
vipGuests["Brutus"] = "Senator";
console.log(vipGuests);

// Step 16: Remove a VIP guest from the directory
delete vipGuests["Brutus"];
console.log(vipGuests);

// Step 17: Function to generate VIP invitation codes
function generateVIPInvitationCodes(vipGuests, shift) {
  const vipCodes = {};
  for (const guest in vipGuests) {
    vipCodes[caesarCipher(guest, shift)] = caesarCipher(vipGuests[guest], shift);
  }
  return vipCodes;
}

const vipInvitationCodes = generateVIPInvitationCodes(vipGuests, secretShiftValue);
console.log(vipInvitationCodes); // Encrypted VIP invitation codes

// Answer to question in a comment
// The function generateVIPInvitationCodes takes a VIP guest directory and a shift value, and returns an object with Caesar Cipher encrypted invitation codes for each VIP guest.

// Step 18: Meeting again with Caesar's best friend
const bestFriend = "Brutus";
console.log(bestFriend);

// Step 19: Function to update best friend's title
function updateBestFriendTitle(friend, newTitle, vipGuests) {
  if (vipGuests[friend]) {
    vipGuests[friend] = newTitle;
  } else {
    vipGuests[friend] = newTitle;
  }
  return vipGuests;
}

updateBestFriendTitle(bestFriend, "Chief Advisor", vipGuests);
console.log(vipGuests); // Updated VIP guests directory

// Answer to question in a comment
// The function updateBestFriendTitle updates the title of the specified friend in the VIP guest directory. If the friend is not present in the directory, it adds the friend with the new title.

// Step 20: Caesar's Cipher Reloaded - Create a function to decrypt the Caesar Cipher
function caesarDecipher(str, shift) {
  return str.split('').map(char => {
    const charCode = char.charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
      return String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      return String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
    }
    return char;
  }).join('');
}

// Example decrypted message
const decryptedMessage = caesarDecipher(encryptedMessage, secretShiftValue);
console.log(decryptedMessage); // Decrypted message

// Answer to question in a comment
// The function caesarDecipher decrypts a given string by reversing the Caesar Cipher encryption, shifting each character back by the specified value.
