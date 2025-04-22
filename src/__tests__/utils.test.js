import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
  it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
    const word = "test";
    const points = pointsForWord(word);
    expect(points).toBe(7); // t(2) + e(1) + s(2) + t(2) = 7
  });

  it("handles uppercase and lowercase input", () => {
    const word = "tEsT";
    const points = pointsForWord(word);
    expect(points).toBe(7); // Same as above with mixed case
  });

  it("handles an empty string", () => {
    const word = "";
    const points = pointsForWord(word);
    expect(points).toBe(0);
  });

  it("handles non-alphabetic characters", () => {
    const word = "te3st!"; // Now includes the 'e' vowel
    const points = pointsForWord(word);
    expect(points).toBe(7); // t(2) + e(1) + s(2) + t(2) = 7
  });

  it("ignores numbers and symbols", () => {
    const word = "he3llo!"; // Now includes the 'e' vowel
    const points = pointsForWord(word);
    expect(points).toBe(8); // h(2) + e(1) + l(2) + l(2) + o(1) = 8
  });
});
