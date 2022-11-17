const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let letterCount = {};

  //get each letter in string
  for (let letter of string) {
    if (letter !== " ") {
      if (!(letter in letterCount)) {
        letterCount[letter] = 0;
        for (let check of string) {
          check === letter ? letterCount[letter] += 1 : "";
        }
      }
    }
  }
  return letterCount;
};

console.table(countLetters("lighthouse in the house"));