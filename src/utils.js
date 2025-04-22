// src/utils.js
export function pointsForWord(word) {
  let points = 0;

  // Loop through each character in the word
  for (const char of word) {
    // Only process alphabetic characters (both lowercase and uppercase)
    if (/[a-zA-Z]/.test(char)) {
      // Check if the character is a vowel (case-insensitive)
      if (/[aeiouAEIOU]/.test(char)) {
        points += 1; // Vowel earns 1 point
      } else {
        points += 2; // Consonant earns 2 points
      }
    }
    // Non-alphabetic characters (numbers, symbols, etc.) are ignored.
  }

  return points;
}
