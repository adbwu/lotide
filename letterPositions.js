

const letterPositions = function(string) {
  let letterIndices = {};

  //get each letter in string
  for (let letter of string) {
    if (letter !== " ") {
      if (!(letter in letterIndices)) {
        letterIndices[letter] = [];
        for (let i = 0; i < string.length; i++) {
          string[i] === letter ? letterIndices[letter].push(i) : "";
        }
      }
    }
  }
  return letterIndices;
};

console.log(letterPositions("lighthouse in the house"));


const assertArraysEqual = function(array1, array2, expected) {
  let isEq = true;
  array1.length !== array2.length ? isEq = false : "";
  for (let i = 0; i < array1.length; i++) {
    array1[i] !== array2[i] ? isEq = false : "";
  }
  if (isEq === expected) {
    console.log(`✅✅✅ Assertion Passed: ${isEq} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${isEq} !== ${expected}`);
  }
};

assertArraysEqual(letterPositions("hello"), {h: [0], e: [1], l: [2, 3], o: [4],}, true);
console.log(letterPositions("hello"));